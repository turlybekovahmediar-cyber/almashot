from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime

db = SQLAlchemy()


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), unique=False)

    def password_set(self, password: str):
        self.password_hash = generate_password_hash(password)


    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password_hash, password)
    

    def to_dict(self): #1 тест
        return {
            "id" : self.id,
            "user" : self.username,
            'email' : self.email
        }
    
class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, index=True)
    place_id = db.Column(db.Integer, nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {'id': self.id,
                'user_id': self.user_id,
                'place_id': self.place_id,
                'created_at': self.created_at.isoformat()}
    

class History(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False, index=True)
    place_id = db.Column(db.Integer, nullable=False, index=True)
    viewed_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {'id': self.id,
                'user_id': self.user_id,
                'place_id': self.place_id,
                'viewed_at': self.viewed_at.isoformat()}
    

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    place_id = db.Column(db.String, nullable=False)
    text = db.Column(db.Text, nullable=True)
    score = db.Column(db.Integer, nullable=False, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'place_id': self.place_id,
            'text': self.text,
            'score': self.score,
            'created_at': self.created_at.isoformat()}