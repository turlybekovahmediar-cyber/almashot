(function(){
  const qs = (s, r=document)=>r.querySelector(s);
  const KEY = 'shoot:user';

  const getUser = () => { try{ return JSON.parse(localStorage.getItem(KEY)) || null; }catch{ return null; } };
  const setUser = (u) => localStorage.setItem(KEY, JSON.stringify(u));
  const initials = (n,l)=>{ const s=`${n||''} ${l||''}`.trim(); return s? s.split(/\s+/).slice(0,2).map(p=>p[0]?.toUpperCase()).join(''):'U'; };

  /* ---------- ШАПКА на всех страницах ---------- */
  function mountHeader(){
    const chip = qs('#userChip'); 
    const loginBtn = qs('#loginBtn');
    const pop = qs('#accountPopover');
    if(!chip || !loginBtn) return;

    
    if(!user){  // нет профиля
      loginBtn.hidden = false;
      chip.hidden = true; 
      pop?.setAttribute('hidden',''); 
      return;
    }

    // есть профиль
    loginBtn.hidden = true; 
    chip.hidden = false;

    // инициал/аватар в кружке
    const chipAv = qs('#chipAvatar');
    const u = user; 
    chipAv.textContent = user.username?.[0]?.toUpperCase() || "U";
    if(u.avatar){ chipAv.style.backgroundImage=`url(${u.avatar})`; 
    chipAv.style.color='transparent'; }
    else { chipAv.style.backgroundImage='none'; 
      chipAv.style.color=''; }

    // наполнение поповера
    qs('#popName').textContent = user.username || "User";
    qs('#popEmail').textContent = user.email || 'youremail@gmail.com';
    const pAv = qs('#popAvatar'); 
    pAv.textContent = initials(u.firstName);
    if(u.avatar){ pAv.style.backgroundImage=`url(${u.avatar})`; 
    pAv.style.color='transparent'; }
    else { pAv.style.backgroundImage='none'; 
      pAv.style.color=''; }

    // открыть/закрыть поповер
    chip.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = !pop.hasAttribute('hidden');
      if(open) pop.setAttribute('hidden',''); 
      else pop.removeAttribute('hidden');
      chip.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('click', ()=> pop.setAttribute('hidden',''));

    // выход
    qs('#logoutBtn').addEventListener('click', ()=>{
      window.location.href = '/logout';
    });
  }

  /* ---------- СТРАНИЦА ПРОФИЛЯ ---------- */
  function mountProfilePage(){
    const card = qs('#accountCard'); if(!card) return;
    const u = user || {firstName:'User', email:'yourname@gmail.com', phone:'', location:'USA', password:'', avatar:''};

    const f = {
      firstName:qs('#firstName'), email:qs('#email'),
      phone:qs('#phone'), location:qs('#location'), password:qs('#password'),
      toggle:qs('#togglePass'), save:qs('#saveBtn'), edit:qs('#editBtn'), cancel:qs('#cancelBtn'),
      title:qs('#fullNameTitle'), sub:qs('#emailSub'),
      avFile:qs('#avatarFile'), avImg:qs('#avatarImg'), avFallback:qs('#avatarFallback')
    };

    let original = {...u}; let draft = {...u};

    const fill=(o)=>{
      f.firstName.value=o.firstName||'';
      f.email.value=o.email||''; 
      f.phone.value=o.phone||''; 
      f.location.value=o.location||'';
      f.password.value=o.password||'';
      f.title.textContent = `${o.firstName||'Ваше'}`.trim() || 'Ваше имя';
      f.sub.textContent = o.email || 'yourname@gmail.com';
      if(o.avatar){ f.avImg.src=o.avatar; 
        f.avImg.style.display='block'; 
        f.avFallback.style.display='none'; }
      else { f.avImg.style.display='none'; 
        f.avFallback.style.display='grid'; 
        f.avFallback.textContent=initials(o.firstName); }
    };
    const setEditing=(is)=>{
      card.classList.toggle('is-editing', is);
      [f.firstName,f.email,f.phone,f.location,f.password].forEach(el=> el.disabled=!is);
      if(f.avFile) f.avFile.disabled=!is;
      f.save.hidden=!is; f.cancel.hidden=!is; f.edit.hidden=is;
    };

    fill(u); setEditing(false);

    f.toggle?.addEventListener('click', ()=>{
      const isText = f.password.type==='text';
      f.password.type = isText ? 'password' : 'text';
      f.toggle.textContent = isText ? 'Открыть пароль' : 'Скрыть пароль';
    });

    f.edit?.addEventListener('click', ()=>{ draft={...original}; fill(draft); setEditing(true); });
    f.cancel?.addEventListener('click', ()=>{ setEditing(false); fill(original);
      if(f.password.type==='text'){ f.password.type='password'; f.toggle.textContent='Открыть пароль'; }});

    f.avFile?.addEventListener('change', e=>{
      const file=e.target.files?.[0]; if(!file) return;
      const r=new FileReader(); r.onload=ev=>{ draft.avatar=ev.target.result; fill(draft); }; r.readAsDataURL(file);
    });

    f.save?.addEventListener('click', ()=>{
      const next={
        firstName:(f.firstName.value||'').trim()||'User',
        email    :(f.email.value||'').trim(),
        phone    :(f.phone.value||'').trim(),
        location :(f.location.value||'').trim()||'USA',
        password : f.password.value||'',
        avatar   : draft.avatar || original.avatar || ''
      };
      if(next.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)){ alert('Неверный email'); return; }
      setUser(next); original=user; fill(original); setEditing(false); mountHeader();
    });

    ['input','change'].forEach(ev=>[f.firstName,f.email].forEach(el=>el?.addEventListener(ev,()=>{
      f.title.textContent = `${f.firstName.value||'Ваше'}`.trim()||'Ваше имя';
      f.sub.textContent = f.email.value || 'yourname@gmail.com';
      f.avFallback.textContent = initials(f.firstName.value);
    })));
  }

  /* ---------- ЛОГИН/РЕГИСТРАЦИЯ: автосохранение ---------- */
  

  document.addEventListener('DOMContentLoaded', ()=>{
    mountHeader();
    mountProfilePage();
    
  });
})();
