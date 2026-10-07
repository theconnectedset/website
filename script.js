/* ============================================================
   THE CONNECTED SET — INTERACTION (V4)
   - Nav sections; the active one themes the page (--theme).
   - ABOUT US landing: hero line, About row, Clients, then
     Work Examples with A-Z / BY YEAR / BY TYPE sorting.
   - Subpages: SORT BY A-Z / SORT BY YEAR, optional client strip.
   - BRANDED & B2B carries a sell section; AI carries client and
     keynote lists. Terms & Privacy open as pop-ups.
   ============================================================ */

const SLIDE_MS = 340;

const panel   = document.getElementById("panel");
const catNav  = document.getElementById("catNav");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const root    = document.documentElement;

let index = 0;
let animating = false;
let landingSort = "az";   // az | year | type
let catSort = "az";       // az | year

const imgUrl = p => (p.image ? (/^(assets\/|https?:)/.test(p.image) ? p.image : IMAGE_BASE + p.image) : null);
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/* descriptive alt text (title + client + format) for SEO / accessibility */
const altFor = p => [p.title, p.client].filter(Boolean).join(" — ") + " video by The Connected Set";

/* friendly type labels for the landing tiles */
const TYPE_LABEL = {
  television: "Television",
  youtubeandsocial: "YouTube & Social",
  linkedinvideo: "Branded & B2B",
  education: "Education"
};
function typeFor(p) { for (const t of p.tags) { if (TYPE_LABEL[t]) return TYPE_LABEL[t]; } return ""; }

/* ---------- Sorting ---------- */
const sortKey = t => String(t).replace(/^[^A-Za-z0-9]+/, "").toLowerCase();   // ignore leading quotes etc
const byAZ   = (a, b) => sortKey(a.title).localeCompare(sortKey(b.title));
const byYear = (a, b) => b.date - a.date;                                      // newest first
const noWidow4 = n => Math.floor(n / 4) * 4;

function projectsFor(tag) { return PROJECTS.filter(p => p.tags.includes(tag)); }
const galleryBase = PROJECTS.filter(p => p.image || p.placeholder);

/* ---------- Build nav ---------- */
CATEGORIES.forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.className = "cat-btn";
  btn.textContent = cat.label;
  btn.dataset.i = i;
  btn.style.setProperty("--c", cat.colour);
  btn.style.setProperty("--ct", cat.dark ? "#1a1a1a" : "#ffffff");
  btn.addEventListener("click", () => go(i, i >= index ? "forward" : "back"));
  catNav.appendChild(btn);
});
const CAT = Object.fromEntries(CATEGORIES.map((c, i) => [c.tag, { ...c, i }]));
function gotoTag(tag) { const i = CATEGORIES.findIndex(c => c.tag === tag); if (i >= 0) go(i, i >= index ? "forward" : "back"); }
function updateNav(i) { document.querySelectorAll(".cat-btn").forEach(b => b.classList.toggle("active", +b.dataset.i === i)); }
function setTheme(cat) {
  root.style.setProperty("--theme", cat.colour);
  root.style.setProperty("--on-theme", cat.dark ? "#1a1a1a" : "#ffffff");
  root.style.setProperty("--tag", cat.tagColour || cat.colour);
}

/* ---------- Cards ---------- */
function cardHTML(p, secondLine) {
  const pi = PROJECTS.indexOf(p);
  let media;
  if (p.placeholder) {
    media = `<div class="card-media placeholder-box"><span class="ph-title2">${escapeHtml(p.title)}</span><span class="ph-word">Coming soon</span></div>`;
  } else if (imgUrl(p)) {
    media = `<div class="card-media"><img loading="lazy" data-title="${escapeHtml(p.title)}" src="${imgUrl(p)}" alt="${escapeHtml(altFor(p))}"></div>`;
  } else {
    media = `<div class="card-media placeholder"><span class="ph-title">${escapeHtml(p.title)}</span></div>`;
  }
  return `<button class="card" data-pi="${pi}">${media}` +
         `<span class="card-title">${escapeHtml(p.title)}</span>` +
         `<span class="card-client">${escapeHtml(secondLine || "")}</span></button>`;
}
const gridHTML = (list, secondFn, extra = "") => `<section class="grid${extra ? " " + extra : ""}">${list.map(p => cardHTML(p, secondFn(p))).join("")}</section>`;

/* ---------- Client logo strips ---------- */
function logoStripHTML(files, oneLine, folder = "client logos") {
  if (!files || !files.length) return "";
  const set = files.map(f => `<img src="${encodeURI("assets/" + folder + "/" + f)}" alt="${escapeHtml(f.replace(/\.png$/i, ""))}" loading="lazy">`).join("");
  return `<div class="logo-strip${oneLine ? " one-line" : ""}" style="--logo-count:${files.length}" aria-label="Selected clients">${set}</div>`;
}
function clientsHTML() {
  if (typeof CLIENT_LOGOS === "undefined" || !CLIENT_LOGOS.length) return "";
  return `<p class="section-eyebrow spaced">Clients</p>${logoStripHTML(CLIENT_LOGOS, false)}`;
}

/* ---------- Sort controls ---------- */
function sortControls(scope) {
  if (scope === "landing") {
    const o = [["az", "A-Z"], ["year", "By Year"], ["type", "By Type"]];
    return `<div class="sort-bar">${o.map(([k, l]) =>
      `<button class="sort-btn${landingSort === k ? " active" : ""}" data-sort="${k}">${l}</button>`).join('<span class="sort-sep">|</span>')}</div>`;
  }
  const o = [["az", "Sort by A-Z"], ["year", "Sort by Year"]];
  return `<div class="sort-bar"><span class="sort-label">Select projects:</span>${o.map(([k, l]) =>
    `<button class="sort-btn${catSort === k ? " active" : ""}" data-catsort="${k}">${l}</button>`).join('<span class="sort-sep">|</span>')}</div>`;
}

/* ---------- ABOUT US (landing) ---------- */
function renderAbout() {
  const f = ABOUT.founders;
  const li = `<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`;

  const items = ABOUT.platforms.map(pl => {
    const c = CAT[pl.tag];
    return `<button class="platform-chip" data-goto="${pl.tag}" style="--cc:${c.colour};--cct:${c.dark ? "#1a1a1a" : "#ffffff"}">${escapeHtml(pl.label)}</button>${escapeHtml(pl.note)}`;
  });
  const platformsHTML = ABOUT.platformsLead + items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];

  // Work examples, sorted
  let workBody = "", jumpNav = "";
  if (landingSort === "type") {
    const groups = CATEGORIES.filter(c => TYPE_LABEL[c.tag]);
    jumpNav = `<div class="type-jump">${groups.map(g =>
      `<a href="#wx-${g.tag}" data-jump="wx-${g.tag}">${escapeHtml(TYPE_LABEL[g.tag])}</a>`).join("")}</div>`;
    workBody = groups.map(g => {
      const list = projectsFor(g.tag).filter(p => p.image && !p.placeholder).sort(byYear);
      if (!list.length) return "";
      return `<h3 class="type-heading" id="wx-${g.tag}">${escapeHtml(TYPE_LABEL[g.tag])}</h3>` + gridHTML(list, typeFor, "landing");
    }).join("");
  } else {
    const list = [...galleryBase].sort(landingSort === "year" ? byYear : byAZ);
    workBody = gridHTML(list.slice(0, noWidow4(list.length)), typeFor, "landing");
  }

  return `
    <h2 class="hero-statement">Video &amp; TV that grows <br class="br-m"><span class="accent">audiences</span>,<br class="br-d"> unlocks <br class="br-m"><span class="accent">revenue</span> and builds<br>long-lasting <span class="accent">fans</span>.</h2>

    <p class="section-eyebrow">About Us</p>
    <div class="about-row">
      <div class="about-photo"><img src="${ABOUT.photo}" alt="${escapeHtml(f[0].name)} and ${escapeHtml(f[1].name)}, founders of The Connected Set"></div>
      <div class="about-text">
        <p>${escapeHtml(ABOUT.p1)}</p>
        <p class="about-platforms">${platformsHTML}</p>
        <p>${escapeHtml(ABOUT.p3)}</p>
        <div class="about-links">
          <a href="${f[0].linkedin}" target="_blank" rel="noopener">${li} ${escapeHtml(f[0].name)}</a>
          <a href="${f[1].linkedin}" target="_blank" rel="noopener">${li} ${escapeHtml(f[1].name)}</a>
        </div>
      </div>
    </div>

    <p class="section-eyebrow spaced">Work Examples</p>
    ${sortControls("landing")}
    ${jumpNav}
    ${workBody}

    ${clientsHTML()}`;
}

/* ---------- AI ---------- */
function renderAI() {
  const services = AI.services.map(s => `<a class="ai-service" href="${s.url}" target="_blank" rel="noopener"><h4>${escapeHtml(s.heading)}</h4><p>${escapeHtml(s.body)}</p><span class="ai-more">Learn more &#8594;</span></a>`).join("");
  const cards = (list) => `<div class="cred-grid">${list.map(c =>
    `<div class="cred${c.logo ? " has-logo" : ""}">` +
    (c.logo ? `<img class="cred-logo" src="${encodeURI("assets/conference logos/" + c.logo)}" alt="${escapeHtml(c.name)}" loading="lazy">` : "") +
    `<span class="cred-name">${escapeHtml(c.name)}</span><span class="cred-meta">${escapeHtml(c.meta)}</span></div>`).join("")}</div>`;
  return `
    <p class="ai-note">${AI.note} <a class="ai-note-btn" href="${AI.noteBtn.url}" target="_blank" rel="noopener">${escapeHtml(AI.noteBtn.label)} &#8594;</a></p>
    <div class="ai-hero${AI.heroImage ? " has-photo" : ""}"><div class="ai-hero-text"><h3>${escapeHtml(AI.expertise.heading)}</h3><p>${escapeHtml(AI.expertise.body)}</p></div>${AI.heroImage ? `<div class="ai-hero-photo"><img src="${AI.heroImage}" alt="Jason Mitchell, Co-Founder of The Connected Set"></div>` : ""}</div>
    <p class="section-eyebrow spaced">${escapeHtml(AI.servicesHeading)}</p>
    <div class="ai-services">${services}</div>
    <p class="section-eyebrow spaced">${escapeHtml(AI.clientsHeading)}</p>
    ${cards(AI.clients)}
    <p class="section-eyebrow spaced">${escapeHtml(AI.keynotesHeading)}</p>
    ${cards(AI.keynotes)}
    <div class="more-wrap"><a class="more-btn" href="${AI.cta.url}" target="_blank" rel="noopener">${escapeHtml(AI.cta.label)} &#8594;</a></div>`;
}

/* ---------- BRANDED & B2B sell ---------- */
function b2bSellHTML() {
  if (typeof B2B === "undefined") return "";
  const stats = B2B.stats.map(s => `<div class="stat"><span class="stat-fig">${escapeHtml(s.figure)}</span><span class="stat-label">${escapeHtml(s.label)}</span></div>`).join("");
  const svcs = B2B.services.map(s => `<div class="b2b-service"><h4>${escapeHtml(s.heading)}</h4><p>${escapeHtml(s.body)}</p></div>`).join("");
  return `
    <p class="section-eyebrow spaced">${escapeHtml(B2B.heading)}</p>
    <p class="b2b-lead">${escapeHtml(B2B.lead)}</p>
    <div class="stat-grid">${stats}</div>
    <p class="section-eyebrow spaced">${escapeHtml(B2B.servicesHeading)}</p>
    <div class="b2b-services">${svcs}</div>`;
}

/* ---------- Category page ---------- */
function renderCategory(cat) {
  const eyebrow = `<p class="section-eyebrow">${escapeHtml(cat.label)}</p>`;
  const intro = CATEGORY_INTROS[cat.tag] ? `<p class="cat-intro">${CATEGORY_INTROS[cat.tag]}</p>` : "";
  const logos = (typeof CATEGORY_LOGOS !== "undefined" && CATEGORY_LOGOS[cat.tag])
    ? logoStripHTML(CATEGORY_LOGOS[cat.tag], true) : "";
  const list = projectsFor(cat.tag).sort(catSort === "year" ? byYear : byAZ);
  const body = list.length ? gridHTML(list, p => p.client) : `<p class="empty-msg">Projects coming soon.</p>`;
  const extra = cat.type === "b2b" ? b2bSellHTML() : "";
  return eyebrow + intro + logos + sortControls("cat") + body + extra;
}

function renderPanel(i) {
  const cat = CATEGORIES[i];
  setTheme(cat);
  if (cat.type === "about")   panel.innerHTML = renderAbout();
  else if (cat.type === "ai") panel.innerHTML = renderAI();
  else                         panel.innerHTML = renderCategory(cat);
  updateNav(i);
  bindMedia();
}
function bindMedia() {
  panel.querySelectorAll(".card-media img").forEach(img => {
    img.addEventListener("error", () => {
      const m = img.parentElement; m.classList.add("placeholder"); m.innerHTML = "";
      const s = document.createElement("span"); s.className = "ph-title"; s.textContent = img.dataset.title || "";
      m.appendChild(s);
    });
  });
}

/* ---------- Slide navigation ---------- */
function go(to, dir) {
  to = (to + CATEGORIES.length) % CATEGORIES.length;
  if (to === index || animating) return;
  animating = true;
  landingSort = "az"; catSort = "az";
  const outC = dir === "forward" ? "slide-out-left" : "slide-out-right";
  const inC  = dir === "forward" ? "slide-in-right" : "slide-in-left";
  panel.classList.add(outC);
  setTimeout(() => {
    index = to;
    renderPanel(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
    panel.classList.remove(outC);
    panel.classList.add(inC);
    requestAnimationFrame(() => requestAnimationFrame(() => { panel.classList.remove(inC); animating = false; }));
  }, SLIDE_MS);
}
prevBtn.addEventListener("click", () => go(index - 1, "back"));
nextBtn.addEventListener("click", () => go(index + 1, "forward"));
const logo = document.querySelector("[data-home]");
if (logo) logo.addEventListener("click", e => { e.preventDefault(); go(0, "back"); });

/* ---------- Panel clicks ---------- */
panel.addEventListener("click", e => {
  const jump = e.target.closest("[data-jump]");
  if (jump) { e.preventDefault(); const el = document.getElementById(jump.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
  const sort = e.target.closest("[data-sort]");
  if (sort) { landingSort = sort.dataset.sort; renderPanel(index); return; }
  const csort = e.target.closest("[data-catsort]");
  if (csort) { catSort = csort.dataset.catsort; renderPanel(index); return; }
  const chip = e.target.closest("[data-goto]");
  if (chip) { gotoTag(chip.dataset.goto); return; }
  const card = e.target.closest(".card");
  if (card) openModal(PROJECTS[+card.dataset.pi]);
});

/* ---------- Project modal ---------- */
const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modalMedia");
const modalTitle = document.getElementById("modalTitle");
const modalClient = document.getElementById("modalClient");
const modalDesc = document.getElementById("modalDesc");
/* Friendly "Visit on X" label derived from a URL */
function visitLabel(url) {
  const u = url.toLowerCase();
  let where = "the web";
  if (u.includes("youtube.com") || u.includes("youtu.be")) where = "YouTube";
  else if (u.includes("channel4.com")) where = "Channel 4";
  else if (u.includes("linkedin.com")) where = "LinkedIn";
  else if (u.includes("open.ac.uk")) where = "OU Connect";
  else if (u.includes("bbc.co.uk/iplayer")) where = "iPlayer";
  else if (u.includes("bbc.co.uk/bitesize")) where = "BBC Bitesize";
  else if (u.includes("bbc.co.uk")) where = "bbc.co.uk";
  else { try { where = new URL(url).hostname.replace(/^www\./, ""); } catch (e) {} }
  return "Visit on " + where;
}
const EXT_ICON = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>`;

function openModal(p) {
  modalTitle.textContent = p.title;
  modalClient.textContent = p.client || "";
  const btns = [];
  const visit = (typeof PROJECT_LINKS !== "undefined") ? PROJECT_LINKS[p.title] : null;
  if (visit) btns.push(`<a class="modal-link" href="${visit}" target="_blank" rel="noopener">${EXT_ICON} ${escapeHtml(visitLabel(visit))}</a>`);
  if (p.link) btns.push(`<a class="modal-link" href="${p.link.url}" target="_blank" rel="noopener">${EXT_ICON} ${escapeHtml(p.link.label)}</a>`);
  modalDesc.innerHTML = `<span class="modal-desc-text">${escapeHtml(p.description)}</span>` +
    (btns.length ? `<span class="modal-links">${btns.join("")}</span>` : "");
  if (imgUrl(p)) { modalMedia.innerHTML = `<img src="${imgUrl(p)}" alt="${escapeHtml(altFor(p))}">`; modalMedia.style.display = "block"; }
  else { modalMedia.innerHTML = ""; modalMedia.style.display = "none"; }
  modal.hidden = false; document.body.style.overflow = "hidden";
}
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
modal.addEventListener("click", e => { if (e.target.dataset.close !== undefined) closeModal(); });

/* ---------- Legal pop-ups ---------- */
const legalModal = document.getElementById("legalModal");
const legalBody = document.getElementById("legalBody");
document.querySelectorAll("[data-legal]").forEach(btn => {
  btn.addEventListener("click", () => {
    const tpl = document.getElementById("tpl-" + btn.dataset.legal);
    if (!tpl) return;
    legalBody.innerHTML = tpl.innerHTML;
    legalModal.hidden = false;
    document.body.style.overflow = "hidden";
  });
});
legalModal.addEventListener("click", e => { if (e.target.dataset.close !== undefined) { legalModal.hidden = true; document.body.style.overflow = ""; } });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); legalModal.hidden = true; document.body.style.overflow = ""; }
});

/* ---------- Go ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
renderPanel(0);
