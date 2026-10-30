const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

const favicon = u => { try { return 'https://www.google.com/s2/favicons?sz=64&domain=' + new URL(u).hostname } catch(e){ return '' } };
function renderFeatured(cats){
  const box=document.querySelector('#featuredGrid'); if(!box) return;
  const picks=(window.TOP_PICKS||[]).map(t=>t.toLowerCase());
  const items=cats.flatMap(c=>(c.resources||[]).filter(r=>picks.includes(r.title.toLowerCase())).map(r=>({...r,cat:c.name})));
  const sec=document.querySelector('#featured'); if(sec) sec.hidden=!items.length;
  box.innerHTML=items.map(r=>`<a class="feat-card" href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer"><img class="fav" alt="" src="${favicon(r.url)}"><div><span class="tag">${escapeHTML(r.cat)}</span><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description)}</p></div></a>`).join('');
}
// ---------- Favorites (saved in this browser only) ----------
const getFavs=()=>{try{return JSON.parse(localStorage.getItem('uk-favs')||'[]')}catch(e){return []}};
const setFavs=a=>{try{localStorage.setItem('uk-favs',JSON.stringify(a))}catch(e){}};
function renderFavorites(){
  const favs=getFavs();
  // 1) update every star button + card highlight (works on every page)
  document.querySelectorAll('.fav-btn').forEach(b=>{const on=favs.includes(b.dataset.url);b.textContent=on?'★':'☆';b.classList.toggle('on',on);b.title=on?'Saved — click to remove':'Save to favorites';b.setAttribute('aria-pressed',on);const card=b.closest('.resource-card');if(card)card.classList.toggle('is-saved',on)});
  // 2) update the "My favorites" section (home page only)
  const sec=document.querySelector('#favSection'),grid=document.querySelector('#favGrid'); if(!sec||!grid) return;
  const all=(window.RESOURCE_CATEGORIES||[]).flatMap(c=>c.resources||[]);
  const items=favs.map(u=>all.find(r=>r.url===u)).filter(Boolean);
  sec.hidden=!items.length;
  grid.innerHTML=items.map(r=>`<a class="feat-card" href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer"><img class="fav" alt="" src="${favicon(r.url)}"><div><span class="tag">${escapeHTML(r.tag)}</span><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description)}</p></div></a>`).join('');
}
document.addEventListener('click',e=>{
  const f=e.target.closest('.fav-btn');
  if(f){const u=f.dataset.url,a=getFavs(),i=a.indexOf(u);i<0?a.push(u):a.splice(i,1);setFavs(a);renderFavorites();return}
  const c=e.target.closest('.chip');
  if(c){document.querySelectorAll('.chip').forEach(x=>x.classList.toggle('active',x===c));
    document.querySelectorAll('.resource-section').forEach(s=>s.classList.toggle('hidden-by-chip',!!c.dataset.cat&&s.id!==c.dataset.cat));
    if(c.dataset.cat)document.getElementById(c.dataset.cat).scrollIntoView({behavior:'smooth'});return}
  if(e.target.closest('#randomBtn')){const all=(window.RESOURCE_CATEGORIES||[]).flatMap(c=>c.resources||[]);if(all.length)window.open(all[Math.floor(Math.random()*all.length)].url,'_blank','noopener')}
});
function renderResources(){
  const categories = window.RESOURCE_CATEGORIES || [];
  const categoryGrid = document.querySelector('#categoryGrid');
  const sections = document.querySelector('#resourceSections');
  if(categoryGrid) categoryGrid.innerHTML = categories.map(c => `
    <a class="category-card" href="Resources.html#${escapeHTML(c.id)}">
      <span class="icon">${escapeHTML(c.icon)}</span><div><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.subtitle)} · ${(c.resources||[]).length}</p></div><b>→</b>
    </a>`).join('');

  if(sections) sections.innerHTML = categories.map(c => `
    <section class="resource-section" id="${escapeHTML(c.id)}" data-category="${escapeHTML(c.name)}">
      <div class="resource-title"><span>${escapeHTML(c.icon)}</span><div><h2>${escapeHTML(c.name)}</h2><p>${escapeHTML(c.description)}</p></div></div>
      <div class="resource-grid">
        ${(c.resources || []).map(r => `<article class="resource-card" data-search="${escapeHTML([c.name,r.title,r.tag,r.description,r.keywords].join(' '))}">
          <button class="fav-btn" type="button" data-url="${escapeHTML(r.url)}" aria-label="Save to favorites" title="Save to favorites">☆</button>${(window.TOP_PICKS||[]).some(t=>t.toLowerCase()===r.title.toLowerCase())?'<span class="star" title="Top pick">★ Top pick</span>':''}<div class="card-top"><img class="fav" loading="lazy" alt="" src="${favicon(r.url)}" onerror="this.style.display='none'"><span class="tag">${escapeHTML(r.tag || c.name)}</span></div><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description)}</p>
          <a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer">Visit resource <b>↗</b></a>
        </article>`).join('')}
      </div>
    </section>`).join('');

  renderFeatured(categories);
  const chips=document.querySelector('#chipBar');
  if(chips) chips.innerHTML='<button class="chip active" data-cat="">All</button>'+categories.map(c=>`<button class="chip" data-cat="${escapeHTML(c.id)}">${escapeHTML(c.name)}</button>`).join('');
  renderFavorites();
  const total = categories.reduce((n,c)=>n+(c.resources||[]).length,0);
  const cc=document.querySelector('#categoryCount'), rc=document.querySelector('#resourceCount');
  if(cc) cc.textContent=categories.length;
  if(rc) rc.textContent=total;
  document.querySelectorAll('.js-total').forEach(e=>e.textContent=total);
  if(sections&&location.hash){const t=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(t)setTimeout(()=>t.scrollIntoView(),50)}
}

function renderNotes(){
  const collections = window.NOTE_COLLECTIONS || [];
  const grid = document.querySelector('#noteGrid');
  if(!grid) return;
  grid.innerHTML = collections.map(c => `
    <section class="note-collection" data-search="${escapeHTML([c.name,c.tag,c.description].join(' '))}">
      <div class="note-collection-head"><span class="note-icon">${escapeHTML(c.icon)}</span><div><span class="tag">${escapeHTML(c.tag || 'Notes')}</span><h2>${escapeHTML(c.name)}</h2><p>${escapeHTML(c.description)}</p></div><span class="topic-count">${(c.topics||[]).length} topic${(c.topics||[]).length===1?'':'s'}</span></div>
      <div class="topic-grid">
        ${(c.topics||[]).map(t => t.url ? `
          <a class="topic-card" data-search="${escapeHTML([c.name,c.tag,t.title,t.description,t.keywords].join(' '))}" href="${escapeHTML(t.url)}" target="_blank" rel="noopener noreferrer">
            <div><h3>${escapeHTML(t.title)}</h3><p>${escapeHTML(t.description)}</p></div><b>Open ↗</b>
          </a>` : `
          <div class="topic-card disabled" data-search="${escapeHTML([c.name,c.tag,t.title,t.description,t.keywords].join(' '))}">
            <div><h3>${escapeHTML(t.title)}</h3><p>${escapeHTML(t.description)}</p></div><small>Coming soon</small>
          </div>`).join('')}
      </div>
    </section>`).join('');
}

renderResources();
renderNotes();

const menuBtn=document.querySelector('.menu-btn'),navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')))}

const search=document.querySelector('#resourceSearch,#noteSearch'),clear=document.querySelector('#clearSearch'),status=document.querySelector('#searchStatus'),noResults=document.querySelector('#noResults');
if(search){
  const isNotes=!!document.querySelector('#noteGrid');
  const filter=()=>{
    const q=search.value.trim().toLowerCase(); let visible=0;
    if(isNotes){
      const topics=[...document.querySelectorAll('.topic-card')];
      topics.forEach(item=>{const match=!q||(item.dataset.search||item.textContent).toLowerCase().includes(q);item.classList.toggle('hidden-by-search',!match);if(match)visible++});
      document.querySelectorAll('.note-collection').forEach(section=>{const cards=[...section.querySelectorAll('.topic-card')];const collectionMatch=!q||(section.dataset.search||'').toLowerCase().includes(q);if(collectionMatch&&q){cards.forEach(c=>{c.classList.remove('hidden-by-search')});}const allHidden=cards.every(c=>c.classList.contains('hidden-by-search'));section.classList.toggle('hidden-by-search',q&&allHidden&&!collectionMatch)});
      visible=[...document.querySelectorAll('.topic-card:not(.hidden-by-search)')].length;
    } else {
      const items=[...document.querySelectorAll('.resource-card')];
      items.forEach(item=>{const match=!q||(item.dataset.search||item.textContent).toLowerCase().includes(q);item.classList.toggle('hidden-by-search',!match);if(match)visible++});
      document.querySelectorAll('.resource-section').forEach(section=>{const cards=[...section.querySelectorAll('.resource-card')];section.classList.toggle('hidden-by-search',q&&cards.every(c=>c.classList.contains('hidden-by-search')))});
    }
    if(status)status.textContent=q?`${visible} ${isNotes?'note':'resource'}${visible===1?'':'s'} found for “${search.value.trim()}”`:'';
    if(noResults)noResults.hidden=visible!==0;
  };
  search.addEventListener('input',filter); {const qp=new URLSearchParams(location.search).get('q'); if(qp){search.value=qp;filter();}}
  if(clear)clear.addEventListener('click',()=>{search.value='';filter();search.focus()});
}
const topBtn=document.querySelector('.to-top');if(topBtn){addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}))}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

const themeBtn=document.querySelector('#themeBtn');
function paintTheme(){if(!themeBtn)return;const d=document.documentElement.dataset.theme==='dark';themeBtn.querySelector('.ti').textContent=d?'☀️':'🌙';themeBtn.querySelector('.tl').textContent=d?'Light mode':'Dark mode';themeBtn.classList.toggle('is-dark',d)}
try{if(localStorage.getItem('uk-theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}
paintTheme();
if(themeBtn)themeBtn.addEventListener('click',()=>{const d=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=d?'':'dark';try{localStorage.setItem('uk-theme',d?'light':'dark')}catch(e){}paintTheme()});
