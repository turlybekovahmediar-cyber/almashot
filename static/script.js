/* =====================================================
   SHOOT — логика сайта с авторизацией и новыми локациями
   ===================================================== */

// ----------------- ДАННЫЕ -----------------
const PLACES = [
  // --- Кафе/рестораны (были) ---
  {
    id: "penka",
    name: "PENKA",
    category: "Кафешки",
    cityGroup: "В городе",
    desc: "Кофейня: атмосферно, лёгкость и вкус.",
    img: "/static/img/Penka.png",
    images: [
      "/static/img/Penka.png","/static/img/Penka2.PNG","/static/img/Penka3.PNG","/static/img/Penka4.PNG",
      "/static/img/Penka5.PNG","/static/img/Penka6.PNG","/static/img/Penka7.PNG"
    ],
    address: "Абая проспект, 17, Медеуский район, Алматы",
    hours: "Сегодня: 08:00–24:00",
    phone: "+7-705-568-83-97",
    rating: 4.8
  },
  //------
  {
    id: "knu",
    name: "Казахско-Немецкий Университет",
    category: "В городе",
    cityGroup: "В городе",
    desc: "Атмосфера средневековья",
    img: "/static/KNU/Knu.PNG",
    images: ["/static/KNU/Knu.PNG"],
    address: "Пр. Назарбаева, 173, Алмалинский район, Алматы",
    hours: "Сегодня: 09:00-18:00",
    phone: "+7-727-355-0551",
    rating: 4.5
  },

  {
    id: "Fifty",
    name: "Fifty four",
    category: "Бизнес-центр",
    cityGroup: "В городе",
    desc: "Атмосфера спокойствия",
    img: "/static/fifty/fifty1.PNG",
    images: ["/static/fifty/fifty1.PNG", "/static/fifty/fifty2.PNG"],
    address: "Маметова, 54, Алмалинский район, Алматы",
    hours: "Сегодня: 06:00-00:00",
    phone: "+77013007262",
    rating: 4.5
  },

  {
    id: "Dialin",
    name: "Жилой комплекс «Диалин»",
    category: "В городе",
    cityGroup: "В городе",
    desc: "Атмосфера спокойствия",
    img: "/static/dialin/dialin1.PNG",
    images: ["/static/dialin/dialin1.PNG", "/static/dialin/dialin2.PNG", "/static/dialin/dialin3.PNG"],
    address: "Айтеке би, 56, Алмалинский район, Алматы",
    hours: "Круглосуточно",
    phone: "+77013007262",
    rating: 4.5
  },

  {
    id: "Prostrtanstvo",
    name: "Фотостудия «Prostranstvo»",
    category: "Фотостудии",
    cityGroup: "В городе",
    desc: "Отличное место для съемок",
    img: "/static/Prost/Prostranstvo5.PNG",
    images: ["/static/Prost/Prostranstvo1.PNG", "/static/Prost/Prostranstvo2.PNG", "/static/Prost/Prostranstvo3.PNG", "/static/Prost/Prostranstvo4.PNG", "/static/Prost/Prostranstvo5.PNG" ],
    address: "Макатаева, 61, Алматы",
    hours: "10:00-22:00",
    phone: "+77089368979",
    rating: 4.5
  },

  {
    id: "Lampa",
    name: "Фотостудия «Lampa»",
    category: "Фотостудии",
    cityGroup: "В городе",
    desc: "Отличное место для съемок",
    img: "/static/Lampa/Lampa3.PNG",
    images: ["/static/Lampa/Lampa1.PNG", "/static/Lampa/Lampa2.PNG", "/static/Lampa/Lampa3.PNG"],
    address: "Улица Ходжанова, 13, Алматы",
    hours: "10:00-21:00",
    phone: "+77080242430",
    rating: 4.5
  },

  {
    id: "Photovision",
    name: "Фотостудия «Photovision»",
    category: "Фотостудии",
    cityGroup: "В городе",
    desc: "Отличное место для съемок",
    img: "/static/Photovision/photovision2.PNG",
    images: ["/static/Photovision/photovision1.PNG", "/static/Photovision/photovision2.PNG", "/static/Photovision/photovision3.PNG", "/static/Photovision/photovision4.PNG"],
    address: "БЦ LOTOS, улица Макатаева, 117 лит А, Алматы",
    hours: "09:00-22:00",
    phone: "+77055751100",
    rating: 4.5
  },

  {
    id: "Lotus media",
    name: "Фотостудия «Lotus media»",
    category: "Фотостудии",
    cityGroup: "В городе",
    desc: "Отличное место для съемок",
    img: "/static/Room/room3.PNG",
    images: ["/static/Room/room1.PNG", "/static/Room/room2.PNG", "/static/Room/room3.PNG", "/static/Room/room4.PNG", "/static/Room/room5.PNG", "/static/Room/room6.PNG" ],
    address: "Улица Солодовникова, 23, Алматы",
    hours: "10:00-22:00",
    phone: "+77077559806",
    rating: 4.5
  },

  {
    id: "Room",
    name: "Фотостудия «Room»",
    category: "Фотостудии",
    cityGroup: "В городе",
    desc: "Отличное место для съемок",
    img: "/static/Roomreal/room2.PNG",
    images: ["/static/Roomreal/room1.PNG", "/static/Roomreal/room2.PNG", "/static/Roomreal/room3.PNG", "/static/Roomreal/room4.PNG"],
    address: "Улица Макатаева, 127/3, Алматы",
    hours: "09:00-21:00",
    phone: "+77066684367",
    rating: 4.5
  },
  //---
  {
    id: "aiza",
    name: "AizaTerrace",
    category: "Рестораны",
    cityGroup: "В городе",
    desc: "Европейская/Средиземноморская кухня · веранда · живая музыка",
    img: "/static/img/Aiza.png",
    images: ["/static/img/Aiza.png"],
    address: "пр. Достык 55, Алматы",
    hours: "Сегодня: 10:00–23:00",
    phone: "+7-700-000-00-01",
    rating: 4.5
  },
  {
    id: "bella",
    name: "Bella Ciao",
    category: "Рестораны",
    cityGroup: "В городе",
    desc: "Итальянская траттория",
    img: "/static/img/Bella.png",
    images: ["/static/img/Bella.png"],
    address: "ул. Байтурсынова 100, Алматы",
    hours: "Сегодня: 11:00–23:00",
    phone: "+7-700-000-00-02",
    rating: 4.6
  },

  // --- PlatformA ---
  {
    id: "platforma",
    name: "PlatformA",
    category: "Фудмаркеты",
    cityGroup: "В городе",
    desc: "Фудмаркет: много кухонь, яркая атмосфера.",
    img: "/static/img/PlatformA.jpg",
    images: ["/static/img/PlatformA.jpg","/static/img/PlatformA1.jpg"],
    address: "Ул. Желтоксан, 148 (1–2 этаж), Алматы",
    hours: "Ежедневно: 09:00–24:00",
    phone: "+7-701-***-**-**",
    rating: 4.5
  },

  // --- Акунин ---
  {
    id: "akunin",
    name: "Акунин",
    category: "Рестораны",
    cityGroup: "В городе",
    desc: "Ресторан азиатской кухни",
    img: "/static/Акунин/IMG_7152.JPG",
    images: [
      "/static/Акунин/IMG_7152.JPG","/static/Акунин/IMG_7153.JPG","/static/Акунин/IMG_7154.JPG",
      "/static/Акунин/IMG_7155.JPG","/static/Акунин/IMG_7156.JPG","/static/Акунин/IMG_7157.JPG"
    ],
    address: "Абая проспект, 21 · 1 этаж, Алматы",
    hours: "Сегодня: 12:00–01:00",
    phone: "+7-776-006-80-19",
    rating: 4.7
  },

  // --- Auyl ---
  {
    id: "auyl",
    name: "Auyl",
    category: "Рестораны",
    cityGroup: "В городе",
    desc: "Ресторан национальной кухни",
    img: "/static/Auyl/IMG_7169.JPG",
    images: ["/static/Auyl/IMG_7169.JPG","/static/Auyl/IMG_7170.JPG","/static/Auyl/IMG_7171.JPG"],
    address: "Алматы",
    hours: "Ежедневно: 12:00–24:00",
    phone: "+7-000-000-00-00",
    rating: 4.5
  },

  // --- Blanca ---
  {
    id: "blanca",
    name: "Blanca",
    category: "Рестораны",
    cityGroup: "В городе",
    desc: "Современная кухня",
    img: "/static/Blanca/IMG_7134.JPG",
    images: [
      "/static/Blanca/IMG_7134.JPG","/static/Blanca/IMG_7135.PNG","/static/Blanca/IMG_7136.PNG",
      "/static/Blanca/IMG_7137.PNG","/static/Blanca/IMG_7138.PNG","/static/Blanca/IMG_7139.PNG","/static/Blanca/IMG_7140.PNG"
    ],
    address: "пр. Абылай хана, 127, Алматы",
    hours: "Сегодня: 12:00–23:00",
    phone: "+7-000-000-00-01",
    rating: 4.4
  },

  // --- Almaty Museum of Arts ---
  {
    id: "amarts",
    name: "Almaty Museum of Arts",
    category: "Музеи",
    cityGroup: "В городе",
    desc: "Музей современного искусства",
    img: "/static/Almaty museum of arts/IMG_7175.JPG",
    images: [
      "/static/Almaty museum of arts/IMG_7175.JPG",
      "/static/Almaty museum of arts/IMG_7176.JPG",
      "/static/Almaty museum of arts/IMG_7177.AVIF",
      "/static/Almaty museum of arts/IMG_7178.JPG",
      "/static/Almaty museum of arts/IMG_7179.JPG"
    ],
    address: "пр. Аль-Фараби, 28, Алматы",
    hours: "Сегодня: 11:00–20:00",
    phone: "+7-000-000-00-02",
    rating: 4.6
  },

  // === Новые природные локации ===
  {
    id: "kaindy",
    name: "Каинды",
    category: "Природные локации",
    cityGroup: "Природные локации",
    desc: "Мобильная съёмка — ОК. Проф — по согласованию с администрацией.",
    img: "/static/Каинды/IMG_7185.JPG",
    images: ["/static/Каинды/IMG_7185.JPG","/static/Каинды/IMG_7186.JPG"],
    address: "Кегенский район, Алматинская область",
    hours: "Круглосуточно",
    phone: "",
    rating: 4.7
  },
  {
    id: "charyn",
    name: "Чарынский каньон",
    category: "Природные локации",
    cityGroup: "Природные локации",
    desc: "Мобильная съёмка — ОК. Проф — по согласованию с администрацией.",
    img: "/static/Чарынский каньон/IMG_7188.JPG",
    images: ["/static/Чарынский каньон/IMG_7188.JPG","/static/Чарынский каньон/IMG_7190.JPG"],
    address: "Енбекшиказахский район, Алматинская область",
    hours: "Круглосуточно",
    phone: "",
    rating: 4.7
  },
];

const COLLECTION_DESCS = {
  "В городе": "Городские локации для встреч и быстрых съёмок.",
  "Природные локации": "Места на природе для прогулок и съёмок.",
  "Кафешки": "Отборные кафе с атмосферой и вкусом.",
  "Рестораны": "Популярные рестораны города.",
  "Фудмаркеты": "Фудкорты и маркеты с разной кухней.",
  "Музеи": "Культура и вдохновение.",
  "Бизнес-Центры": "Спокойная атмосфера для работы"
};

// ----------------- ХРАНИЛИЩЕ -----------------
const returnKey= "shoot:returnTo";
// ----------------- УТИЛИТЫ -----------------
const $ = s => document.querySelector(s);
const byId = id => document.getElementById(id);

// ----------------- КАРТОЧКИ -----------------
let FAVORITES = [];

async function loadfavorites() {
  try{
    FAVORITES = await fetch('/api/favorites/list').then(r=> r.json());
    
  } catch (err){
    FAVORITES = [];
  }
}
// __________________________
document.addEventListener("DOMContentLoaded", async ()=> {
  await loadfavorites();
  refreshAuthUI();
  const page = document.body.dataset.page;
  if(page==="home"){ initSearch(); initFilters(); initHeroCarousel(); renderRecent(); }
  if(page==="favorites"){ renderFavorites(); }
  if(page==="history"){ renderHistory(); }
  if(page==="collections"){ renderCollections(); }
  if(page==="info"){ renderInfo(); }
  if(page==="login" || page==="signup"){ initAuthPages(); }
  mountHearts(document);
});
//---------------------------

function cardHTML(p,{showHeart=true}={}){
  const active = FAVORITES.includes((p.id)) ? " is-active" : "";
  const heartBtn = showHeart

    ? `<button class="heart${active}" data-heart="${p.id}" aria-label="В избранное"></button>`
    : ``;

  return `
  <article class="card">
    <a href="/info#${p.id}">
      <img class="card__img" src="${p.img}" alt="${p.name}">
    </a>
    <div class="card__body">
      <div class="row-between">
        <div>
          <div class="card__title">${p.name}</div>
          <div class="card__desc">${p.desc}</div>
        </div>
        ${heartBtn}
      </div>
    </div>
  </article>`;
}
function mountHearts(root=document){
  root.querySelectorAll("[data-heart]").forEach(btn=>{
    btn.onclick = async () => {
      if(!user){ alert("Войдите, чтобы добавлять в избранное."); 
      ensureAuth && ensureAuth();
      return; 
    }
      const id = btn.dataset.heart;
      const res = await fetch(`/api/favorites/toggle/${id}`, {
        method: "POST"
      });

      const data = await res.json();

      if( data.status === "added") {
        FAVORITES.push(id);
        btn.classList.add('is-active')
      } else {
        FAVORITES = FAVORITES.filter(x => x != id);
        btn.classList.remove('is-active')
      }
;
    };
  });
}
//----коменты
async function fetchAndPaintComments(placeId){

  const res = await fetch(`/api/comments/${placeId}`);
  const comments = await res.json();
  paintComments(comments, placeId);
  const scores = comments.map(c => c.score);
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : place.rating || 0;
  byId("ratingValue").textContent = avg.toFixed(1);
  byId("ratingCount").textContent = scores.length;
  paintStars(byId("ratingStars"), Math.round(avg));  
}
//----коменты конец
// ----------------- ПОИСК -----------------
function buildSuggestions(){
  return [...new Set([
    ...PLACES.map(p=>p.name),
    ...PLACES.map(p=>p.category),
    "Кафе","Рестораны","Фудмаркеты","Музеи","В городе","Природные локации", "Бизнес-Центры"
  ])];
}
function initSearch(){
  const input = byId("searchInput");
  const datalist = byId("suggestions");
  if(!input || !datalist) return;

  const all = buildSuggestions();

  const go = (raw)=>{
    const q = (raw||"").trim().toLowerCase();
    if(!q) return;

    const exact = PLACES.find(p=>p.name.toLowerCase()===q);
    if(exact){ window.location.href=`/info#${exact.id}`; return; }

    const catMap = {
      "кафе":"Кафешки","кафешки":"Кафешки",
      "ресторан":"Рестораны","рестораны":"Рестораны",
      "фудмаркет":"Фудмаркеты","фудмаркеты":"Фудмаркеты",
      "музей":"Музеи","музеи":"Музеи",
      "в городе":"В городе","природа":"Природные локации","природные локации":"Природные локации"
    };
    const k = Object.keys(catMap).find(k=>q.includes(k));
    if(k){ window.location.href=`/place#${catMap[k]}`; return; }

    const filtered = PLACES.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.cityGroup.toLowerCase().includes(q)
    );
    renderRecent(filtered);
  };

  input.addEventListener("input", ()=>{
    const v = input.value.trim().toLowerCase();
    datalist.innerHTML = all
      .filter(s=>!v || s.toLowerCase().startsWith(v))
      .slice(0,10).map(s=>`<option value="${s}">`).join("");
  });
  input.addEventListener("change", ()=>go(input.value));
  input.addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); go(input.value); }});
}

// ----------------- ФИЛЬТР (главная) -> открывает place.html -----------------
function initFilters(){
  const btn   = byId("filterBtn");
  const panel = byId("filterPanelWide");
  const apply = byId("applyFiltersWide");
  const opts  = byId("filterOptions");
  if(!btn || !panel || !opts) return;

  const cats = [...new Set(PLACES.map(p=>p.category).concat(PLACES.map(p=>p.cityGroup)))];
  opts.innerHTML = cats.map(c => `<label><input type="checkbox" value="${c}" checked> ${c}</label>`).join("");

  btn.onclick = ()=>{ panel.hidden = !panel.hidden; if(!panel.hidden) panel.scrollIntoView({behavior:"smooth", block:"center"}); };
  apply.onclick = ()=>{
    const active = [...panel.querySelectorAll("input[type=checkbox]:checked")].map(i=>i.value);
    const hash = active.length === 1
      ? encodeURIComponent(active[0])
      : `filter:${encodeURIComponent(active.join('|'))}`;
    location.href = `/place#${hash}`;
  };
}

// ----------------- КАРУСЕЛИ -----------------
function initHeroCarousel(){
  const wrap = byId("heroCarousel");
  if(!wrap) return;

  const slidesData = [
    { id:null,    img:"/static/img/New.png", caption:"New Aesthetic Place!" },
    { id:"aiza",  img:"/static/img/Aiza.png",       caption:"AizaTerrace" },
    { id:"bella", img:"/static/img/Bella.png",      caption:"Bella Ciao" },
    { id:"penka", img:"/static/img/Penka.png",      caption:"PENKA" },
    { id:"platforma", img:"/static/img/PlatformA.jpg", caption:"PlatformA" }
  ];

  const track = wrap.querySelector(".carousel__track");
  const dots  = byId("heroDots");
  track.innerHTML = slidesData.map(s => `
    <div class="carousel__slide">
      ${s.id ? `<a href="/info#${s.id}">` : `<div>`}
        <img src="${s.img}" alt="${s.caption}">
        <div class="carousel__caption">${s.caption}</div>
      ${s.id ? `</a>` : `</div>`}
    </div>
  `).join("");
  dots.innerHTML = slidesData.map((_,i)=>`<button data-dot="${i}"></button>`).join("");

  let idx = 0, timer;
  const go = (n)=>{ idx=(n+slidesData.length)%slidesData.length; track.style.transform=`translateX(${-idx*100}%)`; dots.querySelectorAll("button").forEach((b,i)=>b.classList.toggle("is-active",i===idx)); };
  const next = d=>{ go(idx+d); restart(); };
  const restart = ()=>{ clearInterval(timer); timer=setInterval(()=>go(idx+1),5000); };

  wrap.querySelector(".prev").onclick=()=>next(-1);
  wrap.querySelector(".next").onclick=()=>next(1);
  dots.querySelectorAll("button").forEach(b=>b.onclick=()=>{ go(+b.dataset.dot); restart(); });
  go(0); restart();
}

function buildPlaceCarousel(images){
  const wrap = byId("placeCarousel");
  const track = wrap.querySelector(".carousel__track");
  const dots  = wrap.querySelector(".carousel__dots");
  track.innerHTML = images.map(src=>`
    <div class="carousel__slide">
      <img src="${src}" alt="">
    </div>`).join("");
  dots.innerHTML = images.map((_,i)=>`<button data-dot="${i}"></button>`).join("");

  let idx = 0, timer;
  const go = (n)=>{ idx=(n+images.length)%images.length; track.style.transform=`translateX(${-idx*100}%)`; dots.querySelectorAll("button").forEach((b,i)=>b.classList.toggle("is-active",i===idx)); };
  const next = d=>{ go(idx+d); restart(); };
  const restart = ()=>{ clearInterval(timer); timer=setInterval(()=>go(idx+1),5000); };

  wrap.querySelector(".prev").onclick=()=>next(-1);
  wrap.querySelector(".next").onclick=()=>next(1);
  dots.querySelectorAll("button").forEach(b=>b.onclick=()=>{ go(+b.dataset.dot); restart(); });
  go(0); restart();
}

// ----------------- РЕНДЕРЫ -----------------
async function renderRecent(list){
  const grid = byId("recentGrid"); 
  if(!user){
    grid.innerHTML = `<p class="muted">Войдите, чтобы видеть историю просмотров.</p>`;
    return;
  }

  if(!list){
    try {
      const res = await fetch("/api/history/list");
      const ids = await res.json();

      const plainIds = Array.isArray(ids) && typeof ids[0] === "object" ? ids.map(x => x.placeid) : ids;
      list = plainIds.map(id => PLACES.find(p => p.id === id)).filter(Boolean);
    } catch(err) {
      list = []
      console.error('Ошибка недавних', err);
    }
  }
  grid.innerHTML = list.length ? list.map(p=>cardHTML(p)).join("") : "<p class='muted'>Пока пусто.</p>";
  mountHearts(grid);
}
async function renderFavorites(){ // Избранные - начало
  const grid = byId("favGrid"); 
  if(!grid) return;

  if(!user){
    grid.innerHTML = `<p class="muted">Войдите, чтобы видеть избранное.</p>`;
    return;
  }

  try {
    if (!FAVORITES.length) {
      grid.innerHTML = "<p class='muted'> Еще ничего не добавлено </p> ";
      return;
    }
    const list = PLACES.filter(p => FAVORITES.includes(p.id));
    grid.innerHTML = list.map(p => cardHTML(p)).join("");
    mountHearts(grid);
  } catch (err) {
    console.error('Ошибка загрузки избранных', err);
  }
  
} // Избранные - конец(вроде)
async function renderHistory(){
  const grid = byId("historyGrid"); 
  if(!grid) return;

  if(!user){
    grid.innerHTML = `<p class="muted">Войдите, чтобы видеть историю просмотров.</p>`;
    return;
  }

  try {
    const response = await fetch("/api/history/list");
    const historyItems = await response.json();

    const ids = Array.isArray(historyItems) && typeof historyItems[0] === "object" ? historyItems.map(x => x.placeid) : historyItems ;

    const list = ids.map(id => PLACES.find(p => p.id === id)).filter(Boolean);
  
    grid.innerHTML = list.length ? list.map(p=>cardHTML(p,{showHeart:false})).join("") : "<p class='muted'>Пока пусто.</p>";
    grid.querySelectorAll(".heart").forEach(el=>el.remove());

    const btn = byId('cleanHistory');
    if(btn) btn.onclick = async () => {
      await fetch('/api/history/clear', { method: "POST"});
      renderHistory();
    };
  } catch(err){
    grid.innerHTML = "<p class='muted'>Ошибка загрузки</p>";
    console.error("Ошибка истории", err);
  }
}
function renderCollections(){
  if(document.body.dataset.page!=="collections") return;
  const titleEl = byId("collectionTitle");
  const descEl  = byId("collectionDesc");
  const grid    = byId("collectionGrid");
  const optsBox = byId("collectionsFilter");
  const apply   = byId("collectionsApply");

  const raw = decodeURIComponent(location.hash.replace("#",""));
  const multi = raw.startsWith("filter:");
  const selected = multi ? raw.slice(7).split("|") : (raw ? [raw] : []);

  titleEl.textContent = selected.length ? selected.join(" • ") : "Подборки";
  descEl.textContent  = selected.length===1 ? (COLLECTION_DESCS[selected[0]] || "") : "";

  const cats = [...new Set(PLACES.map(p=>p.category).concat(PLACES.map(p=>p.cityGroup)))];
  optsBox.innerHTML = cats.map(c => {
    const checked = !selected.length || selected.includes(c) ? "checked" : "";
    return `<label><input type="checkbox" value="${c}" ${checked}> ${c}</label>`;
  }).join("");

  function applyRender(){
    const active = [...optsBox.querySelectorAll("input:checked")].map(i=>i.value);
    const list = active.length ? PLACES.filter(p => active.includes(p.category) || active.includes(p.cityGroup)) : PLACES;
    grid.innerHTML = list.map(p=>cardHTML(p)).join("");
    mountHearts(grid);
  }
  applyRender();

  apply.onclick = ()=>{
    const active = [...optsBox.querySelectorAll("input:checked")].map(i=>i.value);
    const hash = active.length===1 ? encodeURIComponent(active[0])
      : `filter:${encodeURIComponent(active.join("|"))}`;
    history.replaceState(null,"",`#${hash}`);
    titleEl.textContent = active.length ? active.join(" • ") : "Подборки";
    descEl.textContent  = active.length===1 ? (COLLECTION_DESCS[active[0]] || "") : "";
    applyRender();
  };
}
function renderInfo(){
  if(document.body.dataset.page!=="info") return;
  const id = decodeURIComponent(location.hash.replace("#",""));
  const place = PLACES.find(p=>p.id===id) || PLACES[0];

  // История — только для авторизованных
  if(user){
    fetch(`/api/history/add/${place.id}`, {method: "POST"});
  }

  buildPlaceCarousel(place.images && place.images.length ? place.images : [place.img]);

  byId("placeName").textContent    = place.name;
  byId("placeAddress").textContent = place.address || "";
  byId("placeHours").textContent   = place.hours   || "";
  byId("placePhone").textContent   = place.phone   || "";

  const favBtn = byId("favToggle"); // начало кнопки избранных вродеее...
  
  if(favBtn) {
    favBtn.classList.toggle('is-active', FAVORITES.includes(place.id));
    favBtn.addEventListener('click', async () =>{
      if(!user) {
        alert('Войдите, чтобы добавлять в избранное.')
        ensureAuth && ensureAuth();
        return;
      }
      try {
        const res = await fetch(`/api/favorites/toggle/${place.id}`, {method: "POST"});
        if (!res.ok) throw new Error('Ошибка сети');
        const data = await res.json();

        if (data.status === 'added') {
          if (!FAVORITES.includes(place.id)) {
            FAVORITES.push(place.id);
          }
          favBtn.classList.add('is-active');
        } else {
          FAVORITES = FAVORITES.filter(x => x !== place.id);
          favBtn.classList.remove('is-active')
        }
        document.dispatchEvent(new CustomEvent('favorites:changed', {
          detail: { favorites: FAVORITES.slice() }
        }));
      } catch (err) {
        console.error('Ошибка при обновлении избранных', err);
      }
  });
 } //ну и конец , наверное auth

  byId("backBtn").onclick = ()=> history.length ? history.back() : location.href="/index";

  // рейтинг

  const similar = byId("similarInfoGrid");
  similar.innerHTML = PLACES
    .filter(p=>p.id!==place.id && (p.category===place.category || p.cityGroup===place.cityGroup))
    .map(p=>cardHTML(p)).join("");
  mountHearts(similar);

  // Комментарии: только авторизованным update
  const form = byId("commentForm");
  const listBox = byId("commentsList");
  
  
  
  if(!user){
    form.style.display = "none";
    listBox.innerHTML = `<p class="muted">Войдите, чтобы оставлять комментарии.</p>`;
  }else{
    fetchAndPaintComments(place.id);
    makeInputStars("inputStars", ()=>{});
    form.onsubmit = async (e)=>{
      e.preventDefault();
      const text = byId("commentText").value.trim();
      const score = +byId("inputStars").dataset.value || 0;
      if(!text && !score) return;
      if(score < 1 || score > 5) return;
      await fetch(`/api/comments/add/${place.id}`, {method : "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text, score})
     });
      byId("commentText").value = ""; 
      byId("inputStars").dataset.value = 0; 
      makeInputStars("inputStars", ()=>{});
      fetchAndPaintComments(place.id)
    };
  }
}
//recentGrid
// ----------------- КОММЕНТЫ/ЗВЁЗДЫ -----------------
function paintComments(list, placeId){
  const root = byId("commentsList");
  root.innerHTML = list.map(c=>`
    <div class="comment">
      <div>
        <div class="meta">${c.created_at}</div>
        <div>${"★".repeat(c.score)}${"☆".repeat(5-c.score)}</div>
        <div>${c.text || ""}</div>
      </div>
      ${c.user_id === user.id ? `<button class="btn btn--light" data-del="${c.id}">Удалить</button>` : ""}
    </div>
  `).join("");
  root.querySelectorAll("[data-del]").forEach(b=>{
    b.onclick = async () =>{
      await fetch(`/api/comments/delete/${b.dataset.del}`, {method: "POST"});
      fetchAndPaintComments(placeId);
    };
  });
}
function paintStars(container, value){
  container.innerHTML = "";
  for(let i=1;i<=5;i++){
    const s = document.createElement("span");
    s.className = "star" + (i<=value?" filled":"");
    s.textContent = "★";
    container.appendChild(s);
  }
}
function makeInputStars(elId, onPick){
  const wrap = byId(elId);
  wrap.innerHTML = ""; wrap.dataset.value = wrap.dataset.value || 0;
  for(let i=1;i<=5;i++){
    const s = document.createElement("span");
    s.className = "star"; s.textContent = "★";
    s.onclick = ()=>{ wrap.dataset.value = i; [...wrap.children].forEach((c,idx)=>c.classList.toggle("filled", idx<i)); onPick(i); };
    wrap.appendChild(s);
  }
}

// script.js – замените refreshAuthUI на «мягкую» версию
function refreshAuthUI(){
  // если на странице уже есть userChip — шапкой управляет profile.js
  if (document.getElementById('userChip')) return;

  const box = document.querySelector(".auth");
  if(!box) return;
  const u = user;
  box.innerHTML = u
    ? `<span class="muted small">Привет, ${u.username}</span>
       <button class="btn btn--outline" id="logoutBtn">Выйти</button>`
    : `<a class="btn btn--outline" href="/login">Войти</a>`;
  document.getElementById("logoutBtn")?.addEventListener("click", ()=>logout());
}
function toggleHeart(placeId){
  if(!requireAuth(true)) return; // без входа — уводим на login

  // перерисуй UI как у тебя
}

