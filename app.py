import os
from flask import Flask, render_template, redirect, url_for, flash, request, jsonify
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from models import db, User, Favorite, History, Comment
from forms import RegisterForm, LoginForm

def create_app():
    app = Flask(__name__, template_folder="templates")

    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-me')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///alma.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = 'login'


    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))
    
    @app.route('/')
    def index():
        return render_template('index.html')
    
    @app.route('/register', methods=['GET', 'POST'])
    def register():
        print(request.form)
        form = RegisterForm()
        if form.validate_on_submit():
            
            if User.query.filter_by(username=form.username.data).first():
                flash("Пользователь с таким именем уже существует", "warning")
                return redirect(url_for('register'))
            user = User(username=form.username.data, email=form.email.data)
            user.password_set(form.password.data)
            db.session.add(user)
            db.session.commit()
            flash("Регистрация прошла успешна, добро пожаловать. Войдите в систему", "success")
            return redirect(url_for('login'))
        return render_template('register.html', form=form)
    
    @app.route('/login', methods=['GET', 'POST'])
    def login():
        print(121)
        form = LoginForm()
        if form.validate_on_submit():
            print(123)
            user = User.query.filter_by(email=form.email.data).first()
            if user and user.check_password(form.password.data):
                print(12345)
                login_user(user)
                flash('Успешный вход', 'success')
                next_page = request.args.get('next')
                return redirect(url_for('profile'))
            flash('Неверный пароль или логин', 'danger')
        return render_template('login.html', form=form)
    
    @app.route('/place')
    def place():
        return render_template('place.html')
    
    @app.route('/faq')
    def faq():
        return render_template('faq.html')

    @app.route('/dashboard')
    @login_required
    def profile():
        return render_template('profile.html', user = current_user)
    
    @app.route('/favorites')#f1
    @login_required
    def favorites():
        favorites = Favorite.query.filter_by(user_id=current_user.id).all()
        return render_template('favorites.html', favorites=favorites)
    
    @app.route('/api/favorites/toggle/<place_id>', methods=['POST'])
    @login_required
    def toggle_favorite(place_id):
        fav = Favorite.query.filter_by(user_id=current_user.id, place_id=place_id).first()
        if fav: #есть ли такая запись
            db.session.delete(fav) #если да, то пользователь снова нажал, удаляем нахер
            db.session.commit()
            return jsonify({'status': "removed"}), 200
        else:
            new_fav = Favorite(user_id=current_user.id, place_id=place_id)
            db.session.add(new_fav)
            db.session.commit()
            return jsonify({'status': 'added'}), 201
        
    @app.route('/api/favorites/list')
    @login_required
    def favorites_list():
        favs = Favorite.query.filter_by(user_id=current_user.id).all()
        return jsonify([f.place_id for f in favs])
    
    @app.route('/history')
    @login_required
    def history():
        history_items = History.query.filter_by(user_id=current_user.id).order_by(History.viewed_at.desc()).limit(10).all()

        return render_template('history.html', history=history_items)
    
    @app.route('/api/history/add/<place_id>', methods = ['POST'])
    @login_required
    def add_to_history(place_id):
        user_id = current_user.id
        exist = History.query.filter_by(user_id=user_id, place_id=place_id).first()
        if exist:
            return jsonify({'status': 'exists'}), 200
        
        entry = History(user_id=user_id, place_id=place_id)
        db.session.add(entry)
        db.session.commit()
        items = History.query.filter_by(user_id=user_id).order_by(History.viewed_at.desc()).all()
        if len(items) > 15:
            for old in items[15:]:
                db.session.delete(old)
            db.session.commit()
        return jsonify({'status': 'ok'}), 201
    

    @app.route('/api/history/list')
    @login_required
    def history_list():
        items = (History.query.filter_by(user_id=current_user.id).order_by(History.viewed_at.desc()).limit(15).all())
        return jsonify([item.place_id for item in items])
    

    @app.route('/api/history/clear', methods = ['POST'])
    @login_required
    def clear_history():
        History.query.filter_by(user_id=current_user.id).delete()
        db.session.commit()
        return jsonify({'status': 'cleared'})
    

    @app.route('/api/comments/<place_id>')
    def get_comments(place_id):
        items = Comment.query.filter_by(place_id=place_id).order_by(Comment.created_at.desc()).all()
        return jsonify([c.to_dict() for c in items])
    

    @app.route('/api/comments/add/<place_id>', methods = ["POST"])
    @login_required
    def add_comment(place_id):
        data = request.get_json(force=True)
        text = data.get('text', '')
        score = int(data.get('score', 0))
        if not (1 <= score <= 5):
            return jsonify({'error': 'Че-то не так'}), 400
        
        comment = Comment(
            user_id = current_user.id,
            place_id = place_id,
            text = text,
            score = score)
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.to_dict()), 201
    

    @app.route('/api/comments/delete/<int:comment_id>', methods = ["POST"])
    @login_required
    def delete_comment(comment_id):
        comment = Comment.query.get_or_404(comment_id)
        if comment.user_id != current_user.id:
            return jsonify({'error': "Только свои комментарии можно удалять."})
        db.session.delete(comment)
        db.session.commit()
        return jsonify({'status': 'deleted'})

    @app.route('/info')
    def info():
        return render_template('info.html')

    @app.route('/logout')
    @login_required
    def logout():
        logout_user()
        flash('Вы вышли с аккаунта', 'info')
        return redirect(url_for('login'))
    
    with app.app_context():
        db.create_all()
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)

    
