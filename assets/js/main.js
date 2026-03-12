/* ============================================================
   NISHAL NM — PORTFOLIO · main.js
   Reads data/data.json and renders the entire page dynamically.
   To update content, edit data/data.json only.
   ============================================================ */

async function loadData() {
  const res = await fetch('./data/data.json');
  if (!res.ok) throw new Error('Failed to load data.json');
  return res.json();
}

/* ── HELPERS ────────────────────────────────────────────── */
const el  = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
const $   = (sel) => document.querySelector(sel);
const $$  = (sel) => document.querySelectorAll(sel);

/* ── BUILDERS ───────────────────────────────────────────── */

function buildMeta(meta) {
  document.title = meta.title;
  $('meta[name="description"]')?.setAttribute('content', meta.description);
}

function buildNav(profile, contact) {
  const [first, ...rest] = profile.name.split(' ');
  $('#nav-logo').innerHTML = `${first.toLowerCase()}<span>.</span>${rest.join('').toLowerCase()}`;
  $('#nav-dot').title = profile.availableText;
}

function buildHero(profile, contact) {
  $('#hero-label').textContent = `Backend Developer · ${profile.location || 'Kerala, India'}`;
  // Split name into two lines: first name + last (italic)
  const parts = profile.name.split(' ');
  $('#hero-name').innerHTML = `${parts[0]} <span class="it">${parts.slice(1).join(' ')}</span>`;
  // Tagline: bold the highlight phrase
  const tl = profile.tagline.replace(
    profile.taglineHighlight,
    `<strong>${profile.taglineHighlight}</strong>`
  );
  $('#hero-tagline').innerHTML = tl;
  // CTA buttons
  $('#hero-cta').innerHTML = `
    <a href="#work"  class="btn btn-fill">View My Work</a>
    <a href="#contact" class="btn btn-ghost">Get in Touch</a>
    <a href="${contact.github}" target="_blank" class="btn btn-ghost">GitHub ↗</a>
  `;
}

function buildMarquee(items) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const track = $('#marquee-track');
  track.innerHTML = doubled.map(t => `<span class="mqi">${t}</span>`).join('');
}

function buildAbout(profile, contact, education) {
  // About text — bold the highlight phrases
  let text = profile.about;
  (profile.aboutHighlights || []).forEach(h => {
    text = text.replace(h, `<strong>${h}</strong>`);
  });
  $('#about-text').innerHTML = text;

  // Quick facts table
  const edu = education[0];
  const rows = [
    { k: 'Location',    v: contact.location },
    { k: 'Current Role', v: 'Backend Dev & Team Lead · Coremicron' },
    { k: 'Education',   v: `${edu.degree.split('—')[0].trim()} · ${edu.institution}` },
    { k: 'GitHub',      v: `<a href="${contact.github}" target="_blank">${contact.githubHandle}</a>` },
    { k: 'LinkedIn',    v: `<a href="${contact.linkedin}" target="_blank">${contact.linkedinHandle}</a>` },
  ];
  $('#meta-list').innerHTML = rows.map(r => `
    <div class="meta-row">
      <span class="meta-k">${r.k}</span>
      <span class="meta-v">${r.v}</span>
    </div>
  `).join('');
}

function buildWork(work) {
  const container = $('#work-list');
  container.innerHTML = work.map(w => {
    const loc = w.location ? ` · ${w.location}` : '';
    const duration = w.current
      ? `<span class="work-current">● ${w.duration}</span>`
      : '';
    const badgeClass = w.badgeType === 'live' ? 'work-badge badge-live' : 'work-badge';
    const points = w.points.map(p => `<li>${p}</li>`).join('');
    return `
      <div class="work-item fu">
        <div class="work-period">${w.period}${duration}</div>
        <div>
          <h3 class="work-role">${w.role}</h3>
          <p class="work-co">${w.company}${loc}</p>
          <ul class="work-pts">${points}</ul>
        </div>
        <span class="${badgeClass}">${w.badge}</span>
      </div>
    `;
  }).join('');
}

function buildProjects(projects) {
  const grid = $('#proj-grid');
  if (projects.length % 2 !== 0) grid.classList.add('odd');

  grid.innerHTML = projects.map(p => {
    const stack = p.stack.join(' · ');
    let linkHTML = '';
    if (p.private) {
      linkHTML = `<span class="proj-private">Private · In Production</span>`;
    } else {
      const links = [];
      if (p.link) links.push(`<a href="${p.link}" target="_blank" class="proj-link">${p.linkLabel}</a>`);
      if (p.github) links.push(`<a href="${p.github}" target="_blank" class="proj-link">GitHub ↗</a>`);
      linkHTML = `<div class="proj-links">${links.join('')}</div>`;
    }
    return `
      <div class="proj-card">
        <div class="proj-idx">${p.index} · ${p.tag}</div>
        <h3 class="proj-name">${p.name}</h3>
        <p class="proj-stack">${stack}</p>
        <p class="proj-desc">${p.description}</p>
        ${linkHTML}
      </div>
    `;
  }).join('');
}

function buildSkills(skills) {
  const cols = $('#skill-cols');
  cols.innerHTML = skills.map(group => {
    const rows = group.items.map(item => `
      <div class="skill-r">
        <span class="skill-n">${item.name}</span>
        <div class="skill-bar">
          <div class="skill-f" data-w="${item.level}"></div>
        </div>
      </div>
    `).join('');
    return `
      <div class="skill-col">
        <div class="skill-col-t">${group.category}</div>
        <div class="skill-rows">${rows}</div>
      </div>
    `;
  }).join('');
}

function buildLanguages(languages) {
  const MAX = 5;
  $('#lang-grid').innerHTML = languages.map(lang => {
    const dots = Array.from({ length: MAX }, (_, i) =>
      `<div class="ld ${i < lang.stars ? 'on' : ''}"></div>`
    ).join('');
    return `
      <div class="lang-card">
        <div class="lang-name">${lang.name}</div>
        <div class="lang-lvl">${lang.level}</div>
        <div class="lang-dots">${dots}</div>
      </div>
    `;
  }).join('');
}

function buildContact(profile, contact) {
  $('#contact-sub').textContent =
    'Open to backend roles, contracts, or just interesting problems worth solving. I respond to every message.';

  const links = [
    { k: 'Email',    v: contact.email,         href: `mailto:${contact.email}` },
    { k: 'Phone',    v: contact.phone,          href: `tel:${contact.phone.replace(/\s/g,'')}` },
    { k: 'LinkedIn', v: contact.linkedinHandle, href: contact.linkedin, target: '_blank' },
    { k: 'GitHub',   v: contact.githubHandle,   href: contact.github,   target: '_blank' },
  ];
  $('#contact-links').innerHTML = links.map(l => `
    <a href="${l.href}" ${l.target ? `target="${l.target}"` : ''} class="clink">
      <span class="ck">${l.k}</span>
      <span class="cv">${l.v}</span>
      <span class="ca">→</span>
    </a>
  `).join('');
}

function buildFooter(profile, contact) {
  $('#footer-left').textContent  = `© ${new Date().getFullYear()} ${profile.name} · ${contact.location}`;
  $('#footer-right').textContent = profile.footerNote;
}

/* ── THEME ──────────────────────────────────────────────── */

function initTheme() {
  const root   = document.documentElement;
  const btn    = $('#theme-toggle');
  const KEY    = 'portfolio-theme';

  // Apply saved preference, falling back to system preference
  const saved  = localStorage.getItem(KEY);
  const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (preferLight ? 'light' : 'dark');
  if (initial === 'light') root.setAttribute('data-theme', 'light');

  btn?.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') !== 'light';
    if (isDark) {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem(KEY, 'light');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem(KEY, 'dark');
    }
  });
}

/* ── INTERACTIONS ───────────────────────────────────────── */

function initCursor() {
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cur || !ring) return;
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
  (function tick() {
    cur.style.left  = mx+'px'; cur.style.top  = my+'px';
    rx += (mx-rx)*0.12;        ry += (my-ry)*0.12;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(tick);
  })();
  // Enlarge on interactive elements
  document.addEventListener('mouseover', e => {
    const isInteractive = e.target.closest('a, button');
    cur.style.transform    = isInteractive ? 'translate(-50%,-50%) scale(2.5)' : 'translate(-50%,-50%) scale(1)';
    ring.style.width       = isInteractive ? '48px' : '32px';
    ring.style.height      = isInteractive ? '48px' : '32px';
    ring.style.borderColor = isInteractive ? 'rgba(123,110,246,0.65)' : 'rgba(123,110,246,0.35)';
  });
}

function initScrollAnimations() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  $$('.fu').forEach(el => io.observe(el));
}

function initSkillBars() {
  const sio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-f').forEach(f => {
          f.style.transform = `scaleX(${f.dataset.w})`;
        });
      }
    });
  }, { threshold: 0.2 });
  const cols = $('#skill-cols');
  if (cols) sio.observe(cols);
}

/* ── MAIN ───────────────────────────────────────────────── */

async function init() {
  try {
    const data = await loadData();
    const { meta, profile, contact, education, work, projects, skills, marquee, languages } = data;

    buildMeta(meta);
    buildNav(profile, contact);
    buildHero(profile, contact);
    buildMarquee(marquee);
    buildAbout(profile, contact, education);
    buildWork(work);
    buildProjects(projects);
    buildSkills(skills);
    buildLanguages(languages);
    buildContact(profile, contact);
    buildFooter(profile, contact);

    // Init interactions after DOM is populated
    initTheme();
    initCursor();
    initScrollAnimations();
    initSkillBars();
  } catch (err) {
    console.error('Portfolio init error:', err);
  }
}

document.addEventListener('DOMContentLoaded', init);
