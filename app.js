(() => {
  // ---------- Índice del árbol ----------
  const NODES = {};
  const walk = (list, parent, depth, audience) => {
    list.forEach(n => {
      n.parent = parent;
      n.depth = depth;
      n.audience = audience || n;
      NODES[n.path] = n;
      if (n.children) walk(n.children, n, depth + 1, audience || n);
    });
  };
  walk(TREE, null, 1, null);

  const LEVEL_TYPE = {
    home: 'Home sombrilla · Para ti',
    audience: 'Audiencia',
    need: 'Necesidad',
    product: 'Producto',
    feature: 'Funcionalidad',
    service: 'Servicio',
    category: 'Categoría del blog',
    page: 'Página'
  };

  const productOf = n => {
    if (n.parentProduct) return NODES[n.parentProduct];
    let p = n;
    while (p) { if (p.type === 'product') return p; p = p.parent; }
    return null;
  };
  const ctaOf = n => {
    const prod = productOf(n);
    if (prod && prod.cta) return prod.cta;
    let p = n;
    while (p) { if (p.cta) return p.cta; p = p.parent; }
    return CTA.cuenta;
  };
  const entidadOf = n => {
    if (n.entidad) return n.entidad;
    const prod = productOf(n);
    return prod ? prod.entidad : null;
  };

  const vars = s => (s || '').replace(/\{\{(\w+)\}\}/g, '<span class="var" title="Dato administrable del CMS (Punto 4.7)">$1</span>');
  // Rutas como #nombre simple (rappicard-simulador) para que funcionen en cualquier hosting.
  const slug = p => p.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'inicio';
  const BY_SLUG = {};
  Object.values(NODES).forEach(n => { BY_SLUG[slug(n.path)] = n; });
  const href = p => '#' + slug(p);

  // ---------- Piezas comunes ----------
  const note = n => `
    <div class="note">
      <strong>Hero · Nivel ${n.depth} · ${LEVEL_TYPE[n.type]}</strong>
      <span>URL: <code>www.rappipay.co${n.path}</code>${n.nueva ? ' <em>(URL propuesta)</em>' : ''}</span>
    </div>`;

  const crumbs = n => {
    if (n.path === '/') return '';
    const segs = n.path.split('/').filter(Boolean);
    const items = ['<a href="#inicio">Inicio</a>'];
    segs.forEach((_, i) => {
      const p = '/' + segs.slice(0, i + 1).join('/') + '/';
      const node = NODES[p];
      if (!node) return;
      items.push(p === n.path ? `<span aria-current="page">${node.title}</span>` : `<a href="${href(p)}">${node.title}</a>`);
    });
    return `<nav class="crumbs" aria-label="Ruta">${items.join('<span class="crumbs__sep">›</span>')}</nav>`;
  };

  const entityLine = n => {
    const e = entidadOf(n);
    if (!e) return '';
    return `<p class="entity">Responde: <strong>${ENTIDAD[e]}</strong> · Vigilado SFC</p>`;
  };

  const ctaBtn = (n, cls = 'btn--light') => {
    const c = ctaOf(n);
    return `<button type="button" class="btn ${cls}" title="En el sitio real lleva a la app o al onboarding">${c}</button>`;
  };

  const img = (size = '') => `<div class="img ${size}" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="9" cy="9" r="2"/><path d="M3 17l5-4 3 2 5-5 5 4"/></svg></div>`;

  const cards = list => list.map(c => `
    <a class="card" href="${href(c.path)}">
      <span class="card__type">${LEVEL_TYPE[c.type]}</span>
      <span class="card__title">${c.title}</span>
      <span class="card__text">${c.prop}</span>
      ${c.type === 'product' ? `<span class="card__entity">${ENTIDAD[c.entidad]}</span>` : ''}
    </a>`).join('');

  const below = () => `<section class="below"><p>Debajo del hero va el contenido de la página (fuera del alcance de este wireframe).</p></section>`;

  // ---------- Heroes por tipo ----------
  const HERO = {
    home: n => `
      <section class="hero hero--home">
        ${note(n)}
        <div class="hero__grid">
          <div>
            <p class="kicker">RappiPay · Para ti</p>
            <h1 class="h1 h1--xl">${n.prop}</h1>
            <p class="lead">${n.desc}</p>
            <div class="actions">${ctaBtn(n)}<a class="link" href="#needs">Ver todos los productos</a></div>
          </div>
          ${img('img--tall')}
        </div>
        <div class="needs" id="needs">
          <h2 class="h2">¿Qué quieres hacer con tu plata?</h2>
          <div class="needs__grid">${n.children.map(c => `
            <a class="need" href="${href(c.path)}"><span class="need__title">${c.title}</span><span class="need__text">${c.prop}</span></a>`).join('')}
          </div>
        </div>
      </section>`,

    audience: n => `
      <section class="hero hero--audience">
        ${note(n)}
        ${crumbs(n)}
        <p class="kicker">RappiPay</p>
        <h1 class="h1 h1--xl">${n.title}</h1>
        <p class="lead lead--center">${n.prop}. ${n.desc}</p>
        <div class="chips">${n.children.map(c => `<a class="chip" href="${href(c.path)}">${c.title}</a>`).join('')}</div>
        ${n.cta === CTA.empresa ? `<div class="actions actions--center">${ctaBtn(n)}</div>` : ''}
      </section>`,

    need: n => `
      <section class="hero hero--need">
        ${note(n)}
        ${crumbs(n)}
        <div class="hero__grid hero__grid--need">
          <div>
            <p class="kicker">${n.audience.title}</p>
            <h1 class="h1">${n.title}</h1>
            <p class="lead">${n.prop}. ${n.desc}</p>
          </div>
          <div class="cards">${cards(n.children)}</div>
        </div>
      </section>`,

    product: n => `
      <section class="hero hero--product">
        ${note(n)}
        ${crumbs(n)}
        <div class="hero__grid">
          <div>
            <p class="kicker">${n.title} · ${n.kicker}</p>
            <h1 class="h1 h1--caps">${n.prop}</h1>
            <p class="lead">${n.desc}</p>
            <ul class="proofs">${n.proofs.map(p => `<li>${vars(p)}</li>`).join('')}</ul>
            <div class="actions">${ctaBtn(n)}${n.children ? '<a class="link" href="#features">Ver funcionalidades</a>' : '<a class="link" href="#tasas-y-tarifas">Ver tasas y tarifas</a>'}</div>
            ${entityLine(n)}
          </div>
          ${img('img--framed')}
        </div>
      </section>
      ${n.children ? `
      <section class="features" id="features">
        <p class="features__title">Funcionalidades de ${n.title}</p>
        <div class="chips chips--left">${n.children.map(c => `<a class="chip" href="${href(c.path)}">${c.title}</a>`).join('')}</div>
      </section>` : ''}`,

    feature: n => {
      const prod = productOf(n);
      return `
      <section class="hero hero--feature">
        ${note(n)}
        ${crumbs(n)}
        <div class="hero__grid hero__grid--compact">
          <div>
            ${prod ? `<a class="back" href="${href(prod.path)}">‹ ${prod.title}</a>` : ''}
            <p class="kicker">Funcionalidad${prod ? ' de ' + prod.title : ''}</p>
            <h1 class="h1">${n.title}</h1>
            <p class="lead">${n.prop}.</p>
            <div class="actions">${ctaBtn(n)}</div>
            ${entityLine(n)}
          </div>
          ${img('img--short')}
        </div>
      </section>`;
    },

    service: n => `
      <section class="hero hero--service">
        ${note(n)}
        ${crumbs(n)}
        <p class="kicker">Obtén ayuda</p>
        <h1 class="h1">${n.title}</h1>
        <p class="lead">${n.prop}. Elige tu producto: cada sección muestra solo la información de su entidad.</p>
        <div class="tabs" role="tablist">${n.selector.map((s, i) => `<button class="tab${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-tab="${s}">${s}</button>`).join('')}</div>
        <div class="tabpanel" id="tabpanel">Contenido de <strong>${n.selector[0]}</strong>, con los legales de su entidad.</div>
      </section>`,

    category: n => `
      <section class="hero hero--category">
        ${note(n)}
        ${crumbs(n)}
        <p class="kicker">Aprende · ${n.title}</p>
        <h1 class="h1">${n.prop}</h1>
        <p class="lead">${n.desc || ''}</p>
        ${n.rule ? `<p class="rule">${n.rule}</p>` : ''}
        ${entityLine(n)}
        <div class="posts">${[1, 2, 3].map(() => `<div class="post">${img('img--post')}<span class="line"></span><span class="line line--short"></span></div>`).join('')}</div>
      </section>`,

    page: n => `
      <section class="hero hero--page">
        ${note(n)}
        ${crumbs(n)}
        <h1 class="h1">${n.title}</h1>
        <p class="lead">${n.prop}.</p>
        ${entityLine(n)}
      </section>`
  };

  // ---------- Menú desktop (mega menú) ----------
  const navList = document.getElementById('nav-list');
  const mega = document.getElementById('mega');
  let openAud = null;

  navList.innerHTML = TREE.map(a => `<li><button class="nav__item" data-aud="${a.path}" aria-expanded="false">${a.title}</button></li>`).join('');

  // Panel derecho: cada producto con TODAS sus funcionalidades; lo demás, como tarjetas.
  const megaRight = need => {
    if (!need || !need.children) return '';
    const groups = need.children.filter(c => c.children);
    const singles = need.children.filter(c => !c.children);
    return `
      <div class="mega__head"><span>${need.title}</span><a href="${href(need.path)}">Ver todo ›</a></div>
      ${groups.map(g => `
        <div class="mega__group">
          <a class="mega__product" href="${href(g.path)}">
            <strong>${g.title}</strong><span>${g.prop}</span>
            ${g.entidad ? `<em>${ENTIDAD[g.entidad]}</em>` : ''}
          </a>
          <div class="mega__feats">${g.children.map(s => `
            <a class="mega__feat" href="${href(s.path)}"><strong>${s.title}</strong><span>${s.prop}</span></a>`).join('')}
          </div>
        </div>`).join('')}
      ${singles.length ? `<div class="mega__items">${singles.map(c => `
        <a class="mega__item mega__link" href="${href(c.path)}"><strong>${c.title}</strong><span>${c.prop}</span>${c.type === 'product' && c.entidad ? `<em>${ENTIDAD[c.entidad]}</em>` : ''}</a>`).join('')}
      </div>` : ''}`;
  };

  const openMega = audPath => {
    const aud = NODES[audPath];
    openAud = audPath;
    const first = aud.children.find(c => c.children) || null;
    mega.innerHTML = `
      <div class="mega__inner">
        <div class="mega__left">
          <a class="mega__all" href="${href(aud.path)}">Ir a ${aud.title} ›</a>
          ${aud.children.map(c => c.children
            ? `<button class="mega__need${c === first ? ' is-active' : ''}" data-need="${c.path}">${c.title}<span>›</span></button>`
            : `<a class="mega__need" href="${href(c.path)}">${c.title}</a>`).join('')}
        </div>
        <div class="mega__right" id="mega-right">${megaRight(first)}</div>
        <p class="mega__note">Nivel 1: ${aud.title} · Nivel 2: necesidad · Nivel 3: producto o servicio · Nivel 4: funcionalidad</p>
      </div>`;
    mega.hidden = false;
    navList.querySelectorAll('.nav__item').forEach(b => b.setAttribute('aria-expanded', String(b.dataset.aud === audPath)));
  };
  const closeMega = () => {
    mega.hidden = true;
    openAud = null;
    navList.querySelectorAll('.nav__item').forEach(b => b.setAttribute('aria-expanded', 'false'));
  };

  navList.addEventListener('click', e => {
    const b = e.target.closest('.nav__item');
    if (!b) return;
    openAud === b.dataset.aud ? closeMega() : openMega(b.dataset.aud);
  });
  const activateNeed = btn => {
    mega.querySelectorAll('.mega__need').forEach(x => x.classList.toggle('is-active', x === btn));
    document.getElementById('mega-right').innerHTML = megaRight(NODES[btn.dataset.need]);
  };
  mega.addEventListener('mouseover', e => { const b = e.target.closest('button.mega__need'); if (b) activateNeed(b); });
  mega.addEventListener('focusin', e => { const b = e.target.closest('button.mega__need'); if (b) activateNeed(b); });
  mega.addEventListener('click', e => { const b = e.target.closest('button.mega__need'); if (b) activateNeed(b); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMega(); closeDrawer(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMega(); });

  // ---------- Menú móvil (por niveles) ----------
  const drawer = document.getElementById('drawer');
  const dBody = document.getElementById('drawer-body');
  const dBack = document.getElementById('drawer-back');
  const burger = document.getElementById('burger');
  let stack = [];

  const drawLevel = () => {
    const cur = stack[stack.length - 1];
    dBack.hidden = stack.length === 0;
    if (!cur) {
      dBody.innerHTML = `<p class="drawer__level">Nivel 1 · Audiencia</p>` +
        TREE.map(a => `<button class="drawer__item" data-go="${a.path}">${a.title}<span>›</span></button>`).join('');
      return;
    }
    const n = NODES[cur];
    const label = ['', 'Nivel 2 · Necesidad', 'Nivel 3 · Producto o servicio', 'Nivel 4 · Funcionalidad'][n.depth];
    dBody.innerHTML = `<p class="drawer__level">${label}</p><a class="drawer__all" href="${href(n.path)}">${n.depth === 1 ? 'Ir a' : 'Ver'} ${n.title} ›</a>` +
      n.children.map(c => c.children
        ? `<button class="drawer__item" data-go="${c.path}">${c.title}<span>›</span></button>`
        : `<a class="drawer__item" href="${href(c.path)}">${c.title}</a>`).join('');
  };
  const openDrawer = () => { stack = []; drawLevel(); drawer.hidden = false; burger.setAttribute('aria-expanded', 'true'); };
  const closeDrawer = () => { drawer.hidden = true; burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', openDrawer);
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  dBack.addEventListener('click', () => { stack.pop(); drawLevel(); });
  dBody.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) { stack.push(b.dataset.go); drawLevel(); } });

  // ---------- Router ----------
  const app = document.getElementById('app');
  const headerCta = document.getElementById('header-cta');

  const render = () => {
    const raw = location.hash.replace(/^#/, '') || 'inicio';
    if (raw === 'needs' || raw === 'features') return; // anclas internas
    const n = BY_SLUG[raw];
    closeMega();
    closeDrawer();
    if (!n) {
      app.innerHTML = `<section class="hero hero--page"><h1 class="h1">Página no incluida en el wireframe</h1><p class="lead"><a href="#inicio">Volver al inicio</a></p></section>`;
      return;
    }
    app.innerHTML = HERO[n.type](n) + below();
    headerCta.textContent = ctaOf(n);
    navList.querySelectorAll('.nav__item').forEach(b => b.classList.toggle('is-current', b.dataset.aud === n.audience.path));
    document.title = `${n.title} · Wireframe sombrilla RappiPay`;
    window.scrollTo(0, 0);
  };

  app.addEventListener('click', e => {
    const t = e.target.closest('.tab');
    if (t) {
      app.querySelectorAll('.tab').forEach(x => { x.classList.toggle('is-active', x === t); x.setAttribute('aria-selected', String(x === t)); });
      document.getElementById('tabpanel').innerHTML = `Contenido de <strong>${t.dataset.tab}</strong>, con los legales de su entidad.`;
    }
    const a = e.target.closest('a[href="#needs"], a[href="#features"]');
    if (a) { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); }
  });

  document.getElementById('toggle-notes').addEventListener('change', e => document.body.classList.toggle('hide-notes', !e.target.checked));

  window.addEventListener('hashchange', render);
  render();
})();
