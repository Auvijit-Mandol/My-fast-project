const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function renderResources(){
  const categories = window.RESOURCE_CATEGORIES || [];
  const categoryGrid = document.querySelector('#categoryGrid');
  const sections = document.querySelector('#resourceSections');
  if(!categoryGrid || !sections) return;

  categoryGrid.innerHTML = categories.map(c => `
    <a class="category-card" href="#${escapeHTML(c.id)}">
      <span class="icon">${escapeHTML(c.icon)}</span><div><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.subtitle)}</p></div><b>→</b>
    </a>`).join('');

  sections.innerHTML = categories.map(c => `
    <section class="resource-section" id="${escapeHTML(c.id)}" data-category="${escapeHTML(c.name)}">
      <div class="resource-title"><span>${escapeHTML(c.icon)}</span><div><h2>${escapeHTML(c.name)}</h2><p>${escapeHTML(c.description)}</p></div></div>
      <div class="resource-grid">
        ${(c.resources || []).map(r => `<article class="resource-card" data-search="${escapeHTML([c.name,r.title,r.tag,r.keywords].join(' '))}">
          <span class="tag">${escapeHTML(r.tag || c.name)}</span><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description)}</p>
          <a href="${escapeHTML(r.url)}" target="_blank" rel="noopener noreferrer">Visit resource <b>↗</b></a>
        </article>`).join('')}
      </div>
    </section>`).join('');

  const total = categories.reduce((n,c)=>n+(c.resources||[]).length,0);
  const cc=document.querySelector('#categoryCount'), rc=document.querySelector('#resourceCount');
  if(cc) cc.textContent=categories.length;
  if(rc) rc.textContent=total;
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
  search.addEventListener('input',filter); if(clear)clear.addEventListener('click',()=>{search.value='';filter();search.focus()});
}
const topBtn=document.querySelector('.to-top');if(topBtn){addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}))}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
