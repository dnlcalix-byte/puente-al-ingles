/* El motor no contiene datos: recibe la lección activa desde app.js */
let LECCION = null, VOCAB = [], PRONKEY = [], VERBS = [], GRAMMAR = [], DIALOGUE = [];


/* ============================================================
   UTILIDADES
   ============================================================ */
const $ = s => document.querySelector(s);
const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

const NUMWORDS = { "22":"twenty two","24":"twenty four","9":"nine","2":"two","4":"four" };
const CONTRACTIONS = [
  [/\bi'm\b/g,"i am"],[/\byou're\b/g,"you are"],[/\bhe's\b/g,"he is"],[/\bshe's\b/g,"she is"],
  [/\bit's\b/g,"it is"],[/\bthat's\b/g,"that is"],[/\bwe're\b/g,"we are"],[/\bthey're\b/g,"they are"],
  [/\bwhat's\b/g,"what is"],[/\bwhere's\b/g,"where is"],[/\bdon't\b/g,"do not"],[/\bdoesn't\b/g,"does not"],
  [/\bisn't\b/g,"is not"],[/\baren't\b/g,"are not"],[/\bo'clock\b/g,"oclock"],[/\bi've\b/g,"i have"]
];
function norm(s){
  let t = String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  t = t.replace(/[’‘`]/g,"'");
  CONTRACTIONS.forEach(([r,v]) => { t = t.replace(r,v); });
  t = t.replace(/(\d+)/g, m => NUMWORDS[m] || m);
  t = t.replace(/-/g," ").replace(/[^a-z0-9\s']/g," ").replace(/'/g,"");
  return t.replace(/\s+/g," ").trim();
}
const toks = s => { const n = norm(s); return n ? n.split(" ") : []; };

function lev(a,b){
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({length:n+1},(_,i)=>i), cur = new Array(n+1);
  for (let i=1;i<=m;i++){
    cur[0]=i;
    for (let j=1;j<=n;j++){
      cur[j] = Math.min(prev[j]+1, cur[j-1]+1, prev[j-1] + (a[i-1]===b[j-1]?0:1));
    }
    [prev,cur] = [cur,prev];
  }
  return prev[n];
}
const simw = (a,b) => { const L = Math.max(a.length,b.length); return L ? 1 - lev(a,b)/L : 1; };
const fuzzy = (a,b) => a === b || (a.length > 2 && b.length > 2 && simw(a,b) >= 0.8);

/* Alineación LCS tolerante → diagnóstico palabra por palabra */
function align(target, said){
  const T = toks(target), S = toks(said);
  const m = T.length, n = S.length;
  const dp = Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for (let i=m-1;i>=0;i--) for (let j=n-1;j>=0;j--)
    dp[i][j] = fuzzy(T[i],S[j]) ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
  const marks = new Array(m).fill("miss"); const extra = [];
  let i=0, j=0, hits=0, exact=0;
  while (i<m && j<n){
    if (fuzzy(T[i],S[j])){
      const ex = T[i] === S[j];
      marks[i] = ex ? "hit" : "near";
      hits++; if (ex) exact++;
      i++; j++;
    } else if (dp[i+1][j] >= dp[i][j+1]) { i++; }
    else { extra.push(S[j]); j++; }
  }
  while (j<n){ extra.push(S[j]); j++; }
  const score = m ? (exact + (hits - exact) * 0.75) / m * (1 - Math.min(extra.length / Math.max(m,1), 0.35) * 0.5) : 0;
  return { marks, extra, T, S, score: Math.max(0, Math.min(1, score)),
           missing: T.filter((_,k) => marks[k] === "miss") };
}

/* ============================================================
   VOZ
   ============================================================ */
const TTS = {
  voice:null, ready:false,
  pick(){
    const vs = speechSynthesis.getVoices();
    if (!vs.length) return;
    const en = vs.filter(v => /^en(-|_)/i.test(v.lang));
    this.voice = en.find(v => /en-US/i.test(v.lang) && /natural|google|samantha|aria|jenny/i.test(v.name))
              || en.find(v => /en-US/i.test(v.lang)) || en[0] || null;
    this.ready = true;
  },
  stop(){ try { speechSynthesis.cancel(); } catch(e){} },
  say(text, opts = {}){
    return new Promise(res => {
      if (!("speechSynthesis" in window)) return res();
      try { speechSynthesis.cancel(); } catch(e){}
      const u = new SpeechSynthesisUtterance(text);
      if (this.voice) u.voice = this.voice;
      u.lang = (this.voice && this.voice.lang) || "en-US";
      u.rate = opts.rate != null ? opts.rate : 0.86;
      u.pitch = 1;
      let done = false;
      const finish = () => { if (!done){ done = true; if (opts.onEnd) opts.onEnd(); res(); } };
      if (opts.onBoundary) u.onboundary = e => { if (e.name === "word" || e.name === undefined) opts.onBoundary(e.charIndex); };
      u.onend = finish; u.onerror = finish;
      speechSynthesis.speak(u);
      setTimeout(() => { if (!done && !speechSynthesis.speaking) finish(); }, Math.max(2500, text.length * 130));
    });
  }
};
if ("speechSynthesis" in window){ TTS.pick(); speechSynthesis.onvoiceschanged = () => TTS.pick(); }

/* Reproduce una línea resaltando bloque a bloque, en amarillo */
function speakLine(line, blockEls, onEnd){
  const offs = []; let pos = 0;
  line.b.forEach(p => { offs.push([pos, pos + p[0].length]); pos += p[0].length + 1; });
  const clear = () => blockEls.forEach(b => b.classList.remove("mark"));
  const markAt = k => { clear(); if (blockEls[k]) blockEls[k].classList.add("mark"); };
  let gotBoundary = false, timers = [];
  const killTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const totalChars = pos || 1;
  const estMs = Math.max(1600, totalChars * 78);
  timers.push(setTimeout(() => {
    if (gotBoundary) return;
    let acc = 0;
    line.b.forEach((p,k) => {
      const d = (p[0].length + 1) / totalChars * estMs;
      timers.push(setTimeout(() => { if (!gotBoundary) markAt(k); }, acc));
      acc += d;
    });
  }, 120));
  return TTS.say(line.en, {
    onBoundary(ci){
      gotBoundary = true; killTimers();
      let k = offs.findIndex(([a,b]) => ci >= a && ci < b);
      if (k < 0) k = offs.findIndex(([a]) => a > ci) - 1;
      if (k < 0) k = offs.length - 1;
      markAt(k);
    },
    onEnd(){ killTimers(); setTimeout(clear, 420); if (onEnd) onEnd(); }
  });
}

/* Reconocimiento de voz.
   iOS es quisquilloso: hay que crear una sesión nueva en cada intento,
   no pedir resultados parciales y no dejar hablar a la síntesis de voz
   mientras se abre el micrófono. */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const ES_IOS = /iphone|ipad|ipod/i.test(navigator.userAgent)
            || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const EN_APP = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches)
            || navigator.standalone === true;
const ASR = { rec:null, on:false, supported: !!SR, last:"", micConcedido:false };

/* Dos maneras de hablar:
   "api"     → el botón usa el reconocimiento del navegador (Chrome, Edge, escritorio).
   "teclado" → el botón lleva al campo de texto para usar el dictado del teclado.
               En iOS es la vía que de verdad funciona: el reconocimiento web
               devuelve service-not-allowed, pero el micrófono del teclado no falla.
   El resultado es idéntico: en ambos casos el motor evalúa el texto transcrito. */
const CLAVE_MODO_VOZ = "puente-ingles-modo-voz";
let MODO_VOZ = (function(){
  try { const g = localStorage.getItem(CLAVE_MODO_VOZ); if (g) return g; } catch(e){}
  return (ES_IOS || !SR) ? "teclado" : "api";
})();
function fijarModoVoz(m){
  MODO_VOZ = m;
  try { localStorage.setItem(CLAVE_MODO_VOZ, m); } catch(e){}
  $("#micTxt").textContent = m === "teclado" ? "Dictar" : "Hablar";
  $("#micBtn").disabled = false;
  notaMic(notaMicInicial(), false);
}

function nuevaSesionASR(){
  const r = new SR();
  r.lang = "en-US";
  r.continuous = false;
  /* En WebKit los resultados parciales están rotos: piden el micrófono y no
     lo sueltan. En iOS se piden sólo resultados finales. */
  r.interimResults = !ES_IOS;
  r.maxAlternatives = 3;
  r.addEventListener("result", alResultado);
  r.addEventListener("end", alTerminar);
  r.addEventListener("error", alFallar);
  return r;
}

async function pedirPermisoMicrofono(){
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return false;
  try {
    const flujo = await navigator.mediaDevices.getUserMedia({ audio: true });
    flujo.getTracks().forEach(t => t.stop());
    ASR.micConcedido = true;
    return true;
  } catch(e){ return false; }
}

/* ============================================================
   ESTADO Y PERSISTENCIA
   ============================================================ */
let STORE_KEY = "puente-ingles";
let DB = null;
const state = {
  idx: 0, started: false, mode: "guion", finished: false,
  results: {},           // índice de línea → {attempts, best, hint, said}
  lectura: {},           // índice de pregunta → opción elegida
  unlocked: false, lastDiag: null
};
function studentLines(){ return DIALOGUE.map((l,i) => ({...l, i})).filter(l => l.s === "B"); }
let TOTAL_TURNS = 0;

function snapshot(){
  return { results: state.results, lectura: state.lectura, unlocked: state.unlocked, lastDiag: state.lastDiag, v: 2 };
}
function applySnapshot(d){
  if (!d || typeof d !== "object") return;
  if (d.results && typeof d.results === "object") state.results = d.results;
  if (d.lectura && typeof d.lectura === "object") state.lectura = d.lectura;
  state.unlocked = !!d.unlocked;
  state.lastDiag = d.lastDiag || null;
}
async function save(){
  const data = snapshot();
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch(e){}
  if (DB){ try { await DB.doc("progress/" + STORE_KEY).set(data); } catch(e){} }
}
async function load(){
  try { const raw = localStorage.getItem(STORE_KEY); if (raw) applySnapshot(JSON.parse(raw)); } catch(e){}
  if (DB){
    try {
      const snap = await DB.doc("progress/" + STORE_KEY).get();
      const d = snap && (snap.data ? (typeof snap.data === "function" ? snap.data() : snap.data) : snap);
      if (d && d.results) applySnapshot(d);
    } catch(e){}
  }
}

/* ============================================================
   RENDER · FASE 1
   ============================================================ */
function renderVocab(){
  const host = $("#vocabHost"); host.innerHTML = "";

  const keySec = el("div","sec");
  keySec.appendChild(el("div","sechead","Clave de pronunciación · léela una vez"));
  const kg = el("div","keygrid");
  PRONKEY.forEach(([sym,dsc,ex]) => {
    kg.appendChild(el("div","ki",
      `<div class="sym">${esc(sym)}</div><div><div class="dsc">${dsc}</div><div class="ex">${ex}</div></div>`));
  });
  keySec.appendChild(kg); host.appendChild(keySec);

  let count = 0;
  VOCAB.forEach(group => {
    const sec = el("div","sec");
    sec.appendChild(el("div","sechead", esc(group.g)));
    const grid = el("div","vocab");
    group.items.forEach(([en,ipa,es,pron]) => {
      count++;
      const it = el("div","vi");
      it.innerHTML = `<div class="w"><span class="en">${esc(en)}</span>
        <span class="pron"><span class="ap">&asymp;</span> ${esc(pron)}</span>
        <button class="say" type="button" title="Escuchar">&#9834;</button></div>
        <div class="ipa afi">/${esc(ipa)}/</div><div class="es">${esc(es)}</div>`;
      it.querySelector(".say").addEventListener("click", () => TTS.say(en, { rate: 0.8 }));
      grid.appendChild(it);
    });
    sec.appendChild(grid); host.appendChild(sec);
  });
  $("#vocabCount").textContent = count + " términos · pronunciación figurada";
}

function renderVerbs(){
  const b = $("#verbBody"); b.innerHTML = "";
  VERBS.forEach(([inf,type,pres,past,fut,es]) => {
    const tr = el("tr");
    tr.innerHTML = `<td class="vb">${esc(inf)}</td>
      <td><span class="pill ${type}">${type === "reg" ? "regular" : "irregular"}</span></td>
      <td class="mono">${esc(pres)}</td><td class="mono">${esc(past)}</td>
      <td class="mono">${esc(fut)}</td><td class="tr">${esc(es)}</td>`;
    b.appendChild(tr);
  });
}

function renderGrammar(){
  const host = $("#gramHost"); host.innerHTML = "";
  GRAMMAR.forEach(g => {
    const c = el("div","gcard");
    c.appendChild(el("h3", null, esc(g.t)));
    c.appendChild(el("div","gsub", esc(g.s)));
    c.appendChild(el("p", null, g.p));
    if (g.chips){
      const cw = el("div","chips");
      g.chips.forEach(([a,bb]) => cw.appendChild(el("span","chip",`<b>${esc(a)}</b> <i>${esc(bb)}</i>`)));
      c.appendChild(cw);
    }
    if (g.table){
      const tw = el("div","tw"); tw.style.marginTop = "4px";
      const t = el("table");
      t.innerHTML = "<thead><tr>" + g.table.head.map(h => `<th>${esc(h)}</th>`).join("") + "</tr></thead><tbody>"
        + g.table.rows.map(r => "<tr>" + r.map((x,k) => `<td class="${k ? "mono" : ""}">${esc(x)}</td>`).join("") + "</tr>").join("")
        + "</tbody>";
      tw.appendChild(t); c.appendChild(tw);
    }
    if (g.aviso){
      const a = el("div","aviso");
      a.innerHTML = `<div class="at">${esc(g.aviso[0])}</div><p>${g.aviso[1]}</p>`;
      c.appendChild(a);
    }
    host.appendChild(c);
  });
}

/* ============================================================
   RENDER · GUION
   ============================================================ */
let showEs = true;
function blocksNode(line, small){
  const w = el("div","blocks");
  line.b.forEach(([en,es]) => {
    const b = el("span","blk");
    b.innerHTML = `<span class="en">${esc(en)}</span>` + (small === "noes" ? "" : `<span class="es">${esc(es)}</span>`);
    w.appendChild(b);
  });
  return w;
}
function renderDialogue(){
  const host = $("#dlgHost"); host.innerHTML = "";
  DIALOGUE.forEach((line,i) => {
    const row = el("div","line");
    const spk = el("div", "spk " + line.s);
    spk.innerHTML = `<span class="dot"></span><span class="nm">${line.s === "A" ? "Sarah" : "David"}</span>`;
    const btn = el("button","lplay","&#9654;");
    btn.type = "button"; btn.title = "Escuchar la línea";
    spk.appendChild(btn);
    const bw = blocksNode(line);
    row.appendChild(spk); row.appendChild(bw);
    row.appendChild(el("div","lipa pron", "<span class='ap'>&asymp;</span> " + esc(line.p)));
    row.appendChild(el("div","lipa afi", "/" + esc(line.ipa) + "/"));
    if (line.n) row.appendChild(el("div","lnote", line.n));
    btn.addEventListener("click", () => {
      document.querySelectorAll(".line.active").forEach(x => x.classList.remove("active"));
      row.classList.add("active");
      speakLine(line, [...bw.querySelectorAll(".blk")], () => row.classList.remove("active"));
    });
    host.appendChild(row);
  });
}
async function playAll(){
  const rows = [...$("#dlgHost").children];
  for (let i = 0; i < DIALOGUE.length; i++){
    if (!playAll.on) break;
    rows.forEach(r => r.classList.remove("active"));
    rows[i].classList.add("active");
    rows[i].scrollIntoView({ block:"center", behavior:"smooth" });
    await speakLine(DIALOGUE[i], [...rows[i].querySelectorAll(".blk")]);
    await new Promise(r => setTimeout(r, 260));
  }
  rows.forEach(r => r.classList.remove("active"));
  playAll.on = false;
}

/* ============================================================
   RENDER · RUTA
   ============================================================ */
function renderRoad(){
  const host = $("#roadHost"); host.innerHTML = "";
  NIVELES.forEach(n => {
    const aqui = LECCION && LECCION.meta.nivel === n.nivel;
    const r = el("div","rw" + (aqui ? " here" : ""));
    r.innerHTML = `<div class="lv">${esc(n.nivel)}</div>
      <div class="rd"><div class="t">${esc(n.usuario)} &middot; ${esc(n.nombre)}</div><div class="d">${n.foco}</div></div>
      <div class="ri">IELTS ${esc(n.ielts)}</div>
      <div class="rn">${n.lecciones.length} lecciones</div>`;
    host.appendChild(r);
  });
}

/* ============================================================
   PRÁCTICA
   ============================================================ */
const turnsEl = $("#turns");
function addTurn(who, node){
  const t = el("div","turn" + (who === "me" ? " me" : ""));
  t.appendChild(el("div","tlabel", who === "me" ? "David · tú" : "Sarah · IA"));
  t.appendChild(node);
  turnsEl.appendChild(t);
  turnsEl.scrollTop = turnsEl.scrollHeight;
  return t;
}
function sarahBubble(line){
  const b = el("div","bubble");
  b.appendChild(blocksNode(line));
  b.appendChild(el("div","ipa pron","<span class='ap'>&asymp;</span> " + esc(line.p)));
  b.appendChild(el("div","ipa afi","/" + esc(line.ipa) + "/"));
  return b;
}
function meBubble(text){
  const b = el("div","bubble");
  b.appendChild(el("div","en", esc(text)));
  return b;
}

function updateStats(){
  const done = Object.values(state.results).filter(r => r.best >= 0.88).length;
  const vals = Object.values(state.results).map(r => r.best);
  const avg = vals.length ? vals.reduce((a,b) => a+b,0)/vals.length : 0;
  const first = Object.values(state.results).filter(r => r.best >= 0.88 && r.attempts === 1).length;
  const hints = Object.values(state.results).filter(r => r.hint).length;
  $("#stTurns").textContent = done + " / " + TOTAL_TURNS;
  $("#stAcc").textContent = vals.length ? Math.round(avg*100) + "%" : "—";
  $("#stFirst").textContent = first;
  $("#stHints").textContent = hints;
  if (!TOTAL_TURNS) return;
  $("#ringTxt").textContent = done + " / " + TOTAL_TURNS;
  const C = 2 * Math.PI * 23;
  $("#ringArc").setAttribute("stroke-dashoffset", String(C * (1 - done / TOTAL_TURNS)));
  $("#stageMeter").style.width = Math.round(state.idx / DIALOGUE.length * 100) + "%";
  $("#stageCount").textContent = "línea " + Math.min(state.idx + 1, DIALOGUE.length) + " / " + DIALOGUE.length;
}

function setInputs(on){
  $("#micBtn").disabled = !on || (MODO_VOZ === "api" && !ASR.supported);
  $("#textIn").disabled = !on;
  $("#sendBtn").disabled = !on;
  $("#hintBtn").disabled = !on;
}

async function sarahTurn(){
  const line = DIALOGUE[state.idx];
  const bub = sarahBubble(line);
  addTurn("sarah", bub);
  setInputs(false);
  $("#prompt").innerHTML = "Sarah está hablando…";
  await speakLine(line, [...bub.querySelectorAll(".blk")]);
  state.idx++;
  updateStats();
  if (state.idx >= DIALOGUE.length) return finish();
  askStudent();
}

function askStudent(){
  const line = DIALOGUE[state.idx];
  if (line.s === "A") return sarahTurn();
  const r = state.results[state.idx] || { attempts:0, best:0, hint:false, said:"" };
  state.results[state.idx] = r;
  setInputs(true);
  $("#heard").textContent = "";
  $("#textIn").value = "";
  $("#prompt").innerHTML = state.mode === "guion"
    ? "Tu turno, <b>David</b>. Di la línea que memorizaste. Si no la recuerdas, pulsa <b>Pista</b>."
    : "Tu turno, <b>David</b>. Responde con tus propias palabras: Claude evaluará gramática y pertinencia.";
  if (state.mode === "guion") $("#textIn").focus();
}

function diffNode(a){
  const d = el("div","diffline");
  a.marks.forEach((m,k) => d.appendChild(el("span","dw " + m, esc(a.T[k]))));
  return d;
}

async function judge(said){
  const i = state.idx, line = DIALOGUE[i];
  const r = state.results[i];
  r.attempts++; r.said = said;
  addTurn("me", meBubble(said));
  setInputs(false);
  $("#heard").textContent = "";

  let verdict;
  if (state.mode === "libre" && SAMPLE){
    verdict = await judgeWithClaude(said, i);
  } else {
    verdict = judgeLocal(said, line);
  }
  r.best = Math.max(r.best, verdict.score);

  const j = el("div","judge " + verdict.tone);
  j.innerHTML = `<div class="jt"><span>${esc(verdict.title)}</span><span class="sc">${Math.round(verdict.score*100)}%</span></div>
                 <div>${verdict.body}</div>`;
  if (verdict.align) {
    j.appendChild(diffNode(verdict.align));
    j.appendChild(el("div","dlegend","Verde: correcto · Ámbar: pronunciación o forma aproximada · <b>Amarillo: falta o está mal</b>"));
  }
  addTurn("sarah", j);
  updateStats(); save();

  if (verdict.pass){
    state.idx++;
    updateStats();
    if (state.idx >= DIALOGUE.length) return finish();
    setTimeout(() => { const nx = DIALOGUE[state.idx]; nx.s === "A" ? sarahTurn() : askStudent(); }, 700);
  } else {
    setInputs(true);
    $("#prompt").innerHTML = "Inténtalo de nuevo. Intento " + (r.attempts + 1) +
      (r.attempts >= 2 ? " — puedes pulsar <b>Pista</b> para ver la línea." : ".");
    if (state.mode === "guion") $("#textIn").focus();
  }
}

function judgeLocal(said, line){
  const a = align(line.en, said);
  const s = a.score;
  if (s >= 0.88){
    return { pass:true, score:s, tone:"ok", title:"Correcto",
      body: s >= 0.99 ? "Reproducción exacta. Sarah continúa."
                      : "Aceptado. Diferencias mínimas, probablemente de pronunciación. Sarah continúa.",
      align: s < 0.99 ? a : null };
  }
  if (s >= 0.6){
    const miss = a.missing.slice(0,6).map(w => "<b>" + esc(w) + "</b>").join(", ");
    return { pass:false, score:s, tone:"near", title:"Casi",
      body: "Vas bien, pero falta precisión. " + (miss ? "Presta atención a: " + miss + ". " : "") +
            (a.extra.length ? "Sobra: " + a.extra.slice(0,5).map(w => "<i>" + esc(w) + "</i>").join(", ") + ". " : "") +
            "Repite la frase completa.", align:a };
  }
  return { pass:false, score:s, tone:"bad", title:"Incorrecto",
    body:"Esa no es la línea de David en este punto del diálogo. Vuelve al guion, léela en voz alta dos veces y repite. " +
         "Si el micrófono no te entiende bien, prueba escribiendo la frase.", align:a };
}

let SAMPLE = null;
async function judgeWithClaude(said, i){
  const line = DIALOGUE[i];
  const prev = DIALOGUE[i-1] ? DIALOGUE[i-1].en : "(inicio del diálogo)";
  const a = align(line.en, said);
  const prompt =
`Eres el evaluador de un curso de inglés A1 (MCER) para hispanohablantes. Evalúa UNA respuesta del estudiante.

Contexto: conversación de presentación entre Sarah y David. El estudiante es David.
Turno anterior de Sarah: "${prev}"
Línea modelo que David debería producir: "${line.en}"
Respuesta real del estudiante: "${said}"

Criterios de nivel A1:
- Se acepta cualquier respuesta gramaticalmente correcta, apropiada al contexto y comprensible, aunque NO coincida con la línea modelo.
- Exige sujeto explícito, artículo ante profesión, forma correcta de "to be", y "I am X years old" para la edad.
- No penalices la ortografía si viene de dictado por voz, ni la falta de mayúsculas o puntuación.
- Rechaza si hay error gramatical real, si no responde a lo que Sarah preguntó, o si está en español.

Responde SOLO con un objeto JSON, sin texto alrededor:
{"pass": true|false, "score": 0.0-1.0, "titulo": "2-3 palabras en español", "comentario": "1-2 frases en español, concretas, diciendo qué estuvo bien y qué corregir", "correccion": "la versión corregida en inglés, o cadena vacía si no hace falta"}`;
  try {
    const d = await SAMPLE.json(prompt, { modelTier:"quick", cache:false });
    const score = Math.max(0, Math.min(1, Number(d.score) || 0));
    const pass = !!d.pass && score >= 0.7;
    const corr = d.correccion ? `<div style="margin-top:7px" class="mono">&rarr; ${esc(d.correccion)}</div>` : "";
    return { pass, score, tone: pass ? "ok" : (score >= 0.5 ? "near" : "bad"),
             title: String(d.titulo || (pass ? "Correcto" : "Corrige")).slice(0,40),
             body: esc(String(d.comentario || "")) + corr, align:null };
  } catch (e){
    const v = judgeLocal(said, line);
    v.body = "<i>(La evaluación con Claude no está disponible: " + esc(e.code || "error") +
             ". Se aplicó la corrección local.)</i><br>" + v.body;
    return v;
  }
}

/* ============================================================
   DIAGNÓSTICO
   ============================================================ */
function metrics(){
  const lines = studentLines();
  const rs = lines.map(l => state.results[l.i] || { attempts:0, best:0, hint:false });
  const done = rs.filter(r => r.best >= 0.88).length;
  const avg = rs.length ? rs.reduce((a,r) => a + r.best, 0) / rs.length : 0;
  const first = rs.filter(r => r.best >= 0.88 && r.attempts === 1).length;
  const hints = rs.filter(r => r.hint).length;
  const firstRate = lines.length ? first / lines.length : 0;
  const lect = puntajeLectura();
  /* La parte oral pesa un 82% y la lectura un 18%. Si la lección no tiene
     lectura, lo oral vale por el total. */
  const oral = 0.65*avg + 0.35*firstRate;
  const global = lect.n
    ? Math.max(0, 0.82*oral + 0.18*lect.ratio - hints*0.02)
    : Math.max(0, oral - hints*0.02);
  const lecturaOk = !lect.n || (lect.respondidas === lect.n && lect.aciertos >= Math.ceil(lect.n * 0.6));
  return { lines, rs, done, avg, first, firstRate, hints, global, lect, oral,
           pass: global >= 0.8 && done === lines.length && lecturaOk };
}

async function finish(){
  state.finished = true;
  setInputs(false);
  $("#prompt").innerHTML = "Diálogo completado. Generando el diagnóstico…";
  const m = metrics();
  state.unlocked = m.pass;
  await save();
  go("diag");
  renderDiag(true);
}

function renderDiag(fresh){
  const host = $("#diagHost"); host.innerHTML = "";
  const m = metrics();
  if (!m.rs.some(r => r.attempts > 0) && !state.lastDiag){
    host.innerHTML = `<div class="card"><p style="color:var(--ink-2);font-size:14.5px">
      Todavía no hay datos. Completa los 12 turnos de la <b>Práctica interactiva</b> y el diagnóstico aparecerá aquí
      con el veredicto de desbloqueo.</p></div>`;
    return;
  }

  const v = el("div","verdict " + (m.pass ? "pass" : "fail"));
  v.innerHTML = `<div class="vh"><span class="vb">${m.pass ? "Lección superada" : "Repetir lección"}</span>
    <h3>${m.pass ? "Competencia A1-01 acreditada" : "Aún no alcanzas el umbral"}</h3></div>
    <p>${m.pass
      ? "Has demostrado que puedes saludar, presentarte, dar tu procedencia, edad y ocupación, y despedirte con fórmulas apropiadas. Queda desbloqueada la <b>Lección 02 · Familia y posesiones</b>."
      : (m.lect.n && m.lect.respondidas < m.lect.n
          ? "Te faltan preguntas de <b>comprensión lectora</b> por responder. Vuelve al apartado <b>Lectura</b> y complétalas: cuentan un 18% del índice."
          : "Vuelve a la Fase 1 y repasa el guion y las estructuras señaladas abajo. Después repite el ejercicio: necesitas completar todos los turnos con un índice global de <b>80%</b> o superior.")}</p>`;
  host.appendChild(v);

  const sg = el("div","scoregrid");
  const cells = [
    ["Índice global", Math.round(m.global*100) + "%", "umbral de desbloqueo: 80%"],
    ["Precisión media", Math.round(m.avg*100) + "%", "sobre los " + m.lines.length + " turnos"],
    ["Al primer intento", m.first + "/" + m.lines.length, Math.round(m.firstRate*100) + "% de fluidez"],
    ["Comprensión lectora", m.lect.n ? m.lect.aciertos + "/" + m.lect.n : "—",
      m.lect.n ? (m.lect.respondidas === m.lect.n ? "18% del índice" : "faltan preguntas por responder") : "esta lección no tiene lectura"],
    ["Pistas usadas", String(m.hints), m.hints ? "−" + (m.hints*2) + " puntos" : "sin penalización"]
  ];
  cells.forEach(([k,val,d]) => sg.appendChild(el("div","sg",
    `<div class="k">${esc(k)}</div><div class="v">${esc(val)}</div><div class="d">${esc(d)}</div>`)));
  host.appendChild(sg);

  const fbHost = el("div"); host.appendChild(fbHost);
  renderQualitative(fbHost, m, fresh);

  const audit = el("div","lineaudit");
  audit.appendChild(el("div","sechead","Auditoría turno por turno"));
  const card = el("div","card"); card.style.padding = "6px 8px";
  m.lines.forEach((l,k) => {
    const r = m.rs[k];
    const pct = Math.round(r.best*100);
    const cls = r.best >= 0.88 ? "g" : (r.best >= 0.6 ? "y" : "r");
    const row = el("div","la");
    row.innerHTML = `<div class="n">${String(k+1).padStart(2,"0")}</div>
      <div class="t">${esc(l.en)}</div>
      <div class="s ${cls}">${r.attempts ? pct + "%" : "—"}</div>`;
    card.appendChild(row);
  });
  audit.appendChild(card); host.appendChild(audit);

  const acts = el("div"); acts.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;margin-top:20px";
  const again = el("button","btn solid",  m.pass ? "Practicar de nuevo" : "Repetir la lección");
  again.type = "button"; again.addEventListener("click", () => { restart(); go("prac"); });
  const back = el("button","btn","Volver al guion"); back.type = "button";
  back.addEventListener("click", () => go("guion"));
  acts.appendChild(again); acts.appendChild(back); host.appendChild(acts);
}

function localQualitative(m){
  const weak = m.lines.map((l,k) => ({ l, r: m.rs[k] })).filter(x => x.r.best < 0.88);
  const strong = m.lines.map((l,k) => ({ l, r: m.rs[k] })).filter(x => x.r.best >= 0.88 && x.r.attempts === 1);
  const fort = [];
  if (strong.length) fort.push("Produjiste " + strong.length + " de " + m.lines.length + " turnos correctos al primer intento.");
  if (m.avg >= 0.85) fort.push("Tu precisión léxica y sintáctica es sólida para el nivel A1.");
  if (!m.hints) fort.push("Completaste el diálogo sin necesitar pistas: el guion está memorizado.");
  if (!fort.length) fort.push("Llegaste hasta el final del diálogo sin abandonar, que es el primer requisito.");
  const areas = weak.slice(0,4).map(x => ({
    titulo: "Turno «" + x.l.en.split(" ").slice(0,4).join(" ") + "…»",
    detalle: "Precisión " + Math.round(x.r.best*100) + "% en " + x.r.attempts + " intento(s). Repasa esta línea en el guion y escúchala dos veces antes de repetirla."
  }));
  if (!areas.length) areas.push({ titulo:"Consolidación", detalle:"No hay turnos débiles. Repite el diálogo aumentando la velocidad para ganar fluidez." });
  return {
    resumen: m.pass
      ? "Desempeño consistente con el descriptor A1 de presentación e intercambio de información personal básica."
      : "El desempeño aún no es estable: hay turnos que requirieron varios intentos o quedaron por debajo del umbral.",
    fortalezas: fort, areas,
    recomendacion: m.pass
      ? "Antes de la Lección 02, repite este diálogo una vez más en Modo libre para empezar a producir lenguaje propio."
      : "Vuelve a la Fase 1, repasa la tabla de TO BE y el guion completo, y repite el ejercicio."
  };
}

function paintQualitative(host, q, tag){
  host.innerHTML = "";
  const s = el("div","sec");
  s.appendChild(el("div","sechead","Diagnóstico cualitativo" + (tag ? " · " + tag : "")));
  const card = el("div","card");
  card.appendChild(el("p", null, `<span style="font-family:var(--display);font-size:16.5px;line-height:1.5">${esc(q.resumen)}</span>`));
  const fb = el("div","fb"); fb.style.marginTop = "16px";
  const c1 = el("div","fbcol");
  c1.innerHTML = "<h4>Fortalezas</h4><ul>" + (q.fortalezas||[]).map(x => `<li>${esc(x)}</li>`).join("") + "</ul>";
  const c2 = el("div","fbcol");
  c2.innerHTML = "<h4>Áreas a reforzar</h4><ul>" + (q.areas||[]).map(a =>
    `<li><b>${esc(a.titulo)}</b> — ${esc(a.detalle)}</li>`).join("") + "</ul>";
  fb.appendChild(c1); fb.appendChild(c2);
  card.appendChild(fb);
  const rec = el("div","aviso");
  rec.innerHTML = `<div class="at">Siguiente paso</div><p>${esc(q.recomendacion || "")}</p>`;
  card.appendChild(rec);
  s.appendChild(card); host.appendChild(s);
}

async function renderQualitative(host, m, fresh){
  if (!fresh && state.lastDiag) return paintQualitative(host, state.lastDiag.q, state.lastDiag.tag);
  const fallback = localQualitative(m);
  paintQualitative(host, fallback, SAMPLE ? "analizando con Claude…" : "análisis local");
  if (!SAMPLE) { state.lastDiag = { q: fallback, tag:"análisis local" }; save(); return; }

  const rows = m.lines.map((l,k) => {
    const r = m.rs[k];
    return `${k+1}. modelo: "${l.en}" | mejor precisión: ${Math.round(r.best*100)}% | intentos: ${r.attempts}` +
           (r.hint ? " | usó pista" : "") + (r.said ? ` | última respuesta: "${r.said}"` : "");
  }).join("\n");

  const prompt =
`Eres el evaluador de un curso de inglés alineado al MCER. Un estudiante hispanohablante acaba de completar la Lección A1-01 (saludos y presentaciones). Redacta su diagnóstico de cierre EN ESPAÑOL.

Datos del desempeño (12 turnos del estudiante):
${rows}

Métricas: índice global ${Math.round(m.global*100)}%, precisión media ${Math.round(m.avg*100)}%, ${m.first} de ${m.lines.length} turnos al primer intento, ${m.hints} pistas usadas.
Veredicto ya calculado por el sistema: ${m.pass ? "APROBADO" : "DEBE REPETIR"} (no lo contradigas).

Escribe un diagnóstico concreto y útil: nombra las estructuras específicas que fallaron (to be, artículo a/an, "years old", auxiliar do, orden adjetivo-sustantivo, preposición final), no generalidades. Tono profesional y alentador, sin adular.

Responde SOLO con este JSON:
{"resumen":"2-3 frases","fortalezas":["…","…"],"areas":[{"titulo":"nombre de la estructura","detalle":"qué falló y cómo corregirlo"}],"recomendacion":"1-2 frases sobre qué hacer antes de la siguiente lección"}`;

  try {
    const q = await SAMPLE.json(prompt, { modelTier:"default", cache:false });
    if (q && q.resumen){
      state.lastDiag = { q, tag:"evaluado por Claude" };
      save();
      paintQualitative(host, q, "evaluado por Claude");
    } else throw new Error("shape");
  } catch (e){
    state.lastDiag = { q: fallback, tag:"análisis local" };
    save();
    paintQualitative(host, fallback, "análisis local");
  }
}

/* ============================================================
   CONTROLES
   ============================================================ */
function restart(){
  TTS.stop();
  state.idx = 0; state.started = false; state.finished = false; state.results = {}; state.lastDiag = null;
  turnsEl.innerHTML = "";
  setInputs(false);
  $("#prompt").innerHTML = 'Pulsa <b>Empezar</b> para que Sarah abra la conversación.';
  ensureStartBtn();
  updateStats(); save();
}
function ensureStartBtn(){
  if ($("#startBox")) return;
  const box = el("div","opening"); box.id = "startBox";
  const prev = el("div","turn preview");
  prev.appendChild(el("div","tlabel","Sarah · IA — así abrirá"));
  prev.appendChild(sarahBubble(DIALOGUE[0]));
  box.appendChild(prev);
  const b = el("button","btn solid","Empezar la conversación");
  b.type = "button";
  b.addEventListener("click", () => { box.remove(); state.started = true; sarahTurn(); });
  box.appendChild(b);
  box.appendChild(el("div","oh","Sarah hablará en voz alta y el resaltado amarillo seguirá cada bloque. Después responderás tú, por voz o por escrito."));
  turnsEl.appendChild(box);
}

function go(id){
  document.querySelectorAll(".panel").forEach(p => { p.hidden = p.id !== "p" + "-" + id; });
  document.querySelectorAll(".navbtn").forEach(n => n.setAttribute("aria-current", String(n.dataset.go === id)));
  if (id !== "guion" && id !== "prac" && id !== "lect") TTS.stop();
  if (id !== "lect"){ lecturaSonando = false; cerrarTarjeta(); }
  if (id === "diag") renderDiag(false);
  window.scrollTo({ top:0, behavior:"smooth" });
}
document.querySelectorAll(".navbtn").forEach(n => n.addEventListener("click", () => go(n.dataset.go)));

$("#playAll").addEventListener("click", () => { playAll.on = true; playAll(); });
$("#stopAll").addEventListener("click", () => { playAll.on = false; TTS.stop(); });
$("#toggleEs").addEventListener("click", e => {
  showEs = !showEs;
  document.querySelectorAll("#dlgHost .blk .es").forEach(x => { x.style.display = showEs ? "" : "none"; });
  e.currentTarget.textContent = showEs ? "Ocultar traducción" : "Mostrar traducción";
  e.currentTarget.setAttribute("aria-pressed", String(showEs));
});

$("#afiBtn").addEventListener("click", e => {
  const on = document.documentElement.getAttribute("data-afi") !== "on";
  document.documentElement.setAttribute("data-afi", on ? "on" : "off");
  e.currentTarget.textContent = on ? "Ocultar AFI" : "Mostrar AFI";
  e.currentTarget.setAttribute("aria-pressed", String(on));
  try { localStorage.setItem("puente-ingles-afi", on ? "on" : "off"); } catch(err){}
});
try { if (localStorage.getItem("puente-ingles-afi") === "on") $("#afiBtn").click(); } catch(err){}

$("#themeBtn").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  const sysDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const next = cur ? (cur === "dark" ? "light" : "dark") : (sysDark ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", next);
});
$("#resetBtn").addEventListener("click", () => { state.unlocked = false; restart(); go("vocab"); });
$("#restartBtn").addEventListener("click", restart);

function setMode(m){
  state.mode = m;
  $("#mGuion").setAttribute("aria-pressed", String(m === "guion"));
  $("#mLibre").setAttribute("aria-pressed", String(m === "libre"));
  if (state.started && !state.finished && DIALOGUE[state.idx] && DIALOGUE[state.idx].s === "B") askStudent();
}
$("#mGuion").addEventListener("click", () => setMode("guion"));
$("#mLibre").addEventListener("click", () => {
  if (!SAMPLE){ $("#sampleNote").innerHTML = "<b>Modo libre no disponible</b> en esta vista: la evaluación con Claude no está habilitada. El Modo guion funciona con normalidad."; return; }
  setMode("libre");
});

$("#hintBtn").addEventListener("click", () => {
  const line = DIALOGUE[state.idx];
  if (!line || line.s !== "B") return;
  const r = state.results[state.idx]; if (r) r.hint = true;
  const b = el("div","bubble"); b.style.borderStyle = "dashed";
  b.appendChild(el("div","tlabel","Pista · línea del guion"));
  b.appendChild(blocksNode(line));
  b.appendChild(el("div","ipa pron","<span class='ap'>&asymp;</span> " + esc(line.p)));
  b.appendChild(el("div","ipa afi","/" + esc(line.ipa) + "/"));
  addTurn("sarah", b);
  updateStats(); save();
});

function submitText(){
  const v = $("#textIn").value.trim();
  if (!v) return;
  $("#textIn").value = "";
  judge(v);
}
$("#sendBtn").addEventListener("click", submitText);
$("#textIn").addEventListener("keydown", e => { if (e.key === "Enter") submitText(); });

/* ---------- Micrófono ---------- */
const AYUDA_TECLADO = `
  <b>Dictar con el teclado.</b> Pulsa <b>Dictar</b>, toca el <b>&#127908;</b> del teclado,
  di la frase y luego <b>Enviar</b>. La corrección es exactamente la misma.
  <div style="margin-top:9px"><b>Importante:</b> el teclado tiene que estar en inglés,
  o iOS transcribirá sonidos españoles y todo saldrá mal.</div>
  <ol style="margin:7px 0 0; padding-left:18px; display:flex; flex-direction:column; gap:5px">
    <li>Ajustes &rarr; General &rarr; Teclado &rarr; Teclados &rarr; <b>Añadir teclado &rarr; English (US)</b>.</li>
    <li>Al escribir, toca el <b>&#127760;</b> hasta que el teclado quede en inglés.</li>
    <li>Entonces sí, toca el <b>&#127908;</b> y habla.</li>
  </ol>`;

const AYUDA_IOS = `
  <b>iOS ha bloqueado el servicio de reconocimiento.</b> Revisa por este orden:
  <ol style="margin:7px 0 0; padding-left:18px; display:flex; flex-direction:column; gap:5px">
    <li>Ajustes &rarr; General &rarr; Teclado &rarr; <b>Activar Dictado</b>.
        Con el dictado apagado, iOS rechaza el reconocimiento de voz en la web.</li>
    <li>Ajustes &rarr; Safari &rarr; Micrófono &rarr; <b>Preguntar</b> o <b>Permitir</b>.</li>
    <li>Abre la lección <b>desde Safari</b>, no desde el icono de la pantalla de inicio:
        a pantalla completa iOS suele denegar este servicio.</li>
  </ol>`;

function notaMic(html, conBotones){
  const n = $("#asrNote");
  n.innerHTML = html + (conBotones
    ? `<div style="display:flex; gap:7px; flex-wrap:wrap; margin-top:10px">
         <button class="btn sm" id="micPermBtn" type="button">Dar permiso</button>
         <button class="btn sm" id="micRetryBtn" type="button">Reintentar</button>
       </div>` : "");
  const perm = $("#micPermBtn"), retry = $("#micRetryBtn");
  if (perm) perm.addEventListener("click", async () => {
    perm.disabled = true; perm.textContent = "Pidiendo…";
    const ok = await pedirPermisoMicrofono();
    notaMic(ok ? "Permiso concedido. Pulsa <b>Hablar</b> para probar."
               : "iOS no concedió el micrófono. Revisa los ajustes de arriba." + AYUDA_IOS, !ok);
  });
  if (retry) retry.addEventListener("click", () => { notaMic(notaMicInicial(), false); arrancarASR(); });
  const aApi = $("#modoApiBtn"), aTeclado = $("#modoTecladoBtn");
  if (aApi) aApi.addEventListener("click", () => { fijarModoVoz("api"); arrancarASR(); });
  if (aTeclado) aTeclado.addEventListener("click", () => fijarModoVoz("teclado"));
}

function notaMicInicial(){
  if (MODO_VOZ === "teclado"){
    let t = AYUDA_TECLADO;
    if (ASR.supported) t += `<div style="margin-top:10px">
      <button class="btn sm" id="modoApiBtn" type="button">Probar el reconocimiento automático</button></div>`;
    return t;
  }
  let t = "Reconocimiento de voz en <b>en-US</b>. Pulsa <b>Hablar</b>, di la frase completa y espera a que el botón se apague.";
  t += `<div style="margin-top:10px">
    <button class="btn sm" id="modoTecladoBtn" type="button">Usar el dictado del teclado</button></div>`;
  return t;
}

function alResultado(e){
  let parcial = "", final = "";
  for (let i = e.resultIndex; i < e.results.length; i++){
    const t = e.results[i][0].transcript;
    if (e.results[i].isFinal) final += t; else parcial += t;
  }
  if (parcial) $("#heard").innerHTML = "Escuchando: <b>" + esc(parcial) + "</b>";
  if (final){ ASR.last = final.trim(); $("#heard").innerHTML = "Escuchado: <b>" + esc(ASR.last) + "</b>"; }
}

function alTerminar(){
  ASR.on = false;
  $("#micBtn").classList.remove("rec");
  $("#micTxt").textContent = "Hablar";
  if (ASR.last){ const dicho = ASR.last; ASR.last = ""; judge(dicho); }
  else if (!$("#micBtn").disabled) $("#heard").textContent = "No se captó audio. Vuelve a intentarlo o escribe la frase.";
}

function alFallar(ev){
  ASR.on = false;
  $("#micBtn").classList.remove("rec");
  $("#micTxt").textContent = "Hablar";
  const codigo = ev.error || "desconocido";

  if (codigo === "service-not-allowed"){
    /* El sistema niega el servicio de reconocimiento. No insistas: pásate al
       dictado del teclado, que en iOS funciona sin pedir nada. */
    fijarModoVoz("teclado");
    $("#heard").innerHTML = "Este dispositivo no permite el reconocimiento automático. Cambié al <b>dictado del teclado</b>: pulsa <b>Dictar</b>.";
    return;
  }
  if (codigo === "not-allowed"){
    $("#heard").innerHTML = "El micrófono no está autorizado. Mira el panel <b>Micrófono</b>.";
    notaMic(ES_IOS ? AYUDA_IOS : "<b>Permiso de micrófono denegado.</b> Actívalo en el candado de la barra de direcciones y reintenta.", true);
    return;
  }
  if (codigo === "no-speech"){
    $("#heard").textContent = "No se oyó nada. Acércate al micrófono y vuelve a intentarlo.";
    return;
  }
  if (codigo === "network"){
    $("#heard").innerHTML = "El reconocimiento necesita internet y no hay conexión. Escribe la frase: la corrección funciona igual.";
    return;
  }
  if (codigo === "aborted") return;
  $("#heard").innerHTML = "El micrófono no respondió (" + esc(codigo) + "). Puedes escribir la frase.";
}

function arrancarASR(){
  /* Síncrona a propósito: Safari exige que rec.start() ocurra dentro del
     mismo gesto del usuario. Cualquier await aquí rompería el reconocimiento. */
  if (!ASR.supported) return;
  ASR.last = "";
  /* Cortar la voz de Sarah antes de abrir el micrófono: en iOS ambas
     compiten por la misma sesión de audio. */
  if (window.speechSynthesis && speechSynthesis.speaking) speechSynthesis.cancel();
  try {
    ASR.rec = nuevaSesionASR();
    ASR.rec.start();
    ASR.on = true;
    $("#micBtn").classList.add("rec");
    $("#micTxt").textContent = "Detener";
    $("#heard").textContent = "Escuchando…";
  } catch(e){
    ASR.on = false;
    $("#heard").innerHTML = "No se pudo abrir el micrófono. Escribe tu respuesta o revisa el panel <b>Micrófono</b>.";
    notaMic(ES_IOS ? AYUDA_IOS : "No se pudo iniciar el micrófono en este navegador.", true);
  }
}

$("#micTxt").textContent = MODO_VOZ === "teclado" ? "Dictar" : "Hablar";
notaMic(notaMicInicial(), false);
$("#micBtn").addEventListener("click", () => {
  if (MODO_VOZ === "teclado"){
    const campo = $("#textIn");
    campo.focus();
    campo.scrollIntoView({ block: "center", behavior: "smooth" });
    $("#heard").innerHTML = "Toca el <b>&#127908;</b> del teclado y di la frase en inglés. Al terminar, pulsa <b>Enviar</b>.";
    return;
  }
  if (ASR.on){ try { ASR.rec.stop(); } catch(e){} return; }
  arrancarASR();
});

/* Diagnóstico: qué ve la app realmente en este dispositivo. */
$("#asrDiag").textContent = [
  "API " + (ASR.supported ? "presente" : "ausente"),
  ES_IOS ? "iOS" : "no iOS",
  EN_APP ? "modo app" : "navegador",
  location.protocol.replace(":", ""),
  "voz: " + MODO_VOZ
].join(" · ");


/* El arranque y el enrutado viven en app.js */

/* ============================================================
   LECTURA FLUIDA
   Texto de la lección con cada palabra con contenido tocable.
   El diccionario se arma con el vocabulario, los verbos y el
   glosario de apoyo, así que no hay que anotar el texto a mano.
   ============================================================ */
const CLAVE_REPASO = "puente-ingles-repaso";
let DICC = new Map();        // clave normalizada → {en, ipa, es, pron, origen}
let LECT_MAXPAL = 1;         // longitud máxima de una entrada, en palabras

const claveDicc = s => norm(s).replace(/\s+/g, " ");

/* Busca una entrada tolerando el genitivo sajón y los plurales regulares:
   "grandfather's" y "sisters" encuentran "grandfather" y "sister" aunque
   sólo esté la forma base en el glosario. */
function buscarEntrada(k){
  if (!k) return null;
  if (DICC.has(k)) return k;
  if (k.endsWith("es") && DICC.has(k.slice(0,-2))) return k.slice(0,-2);
  if (k.endsWith("s")  && k.length > 3 && DICC.has(k.slice(0,-1))) return k.slice(0,-1);
  return null;
}

function leerRepaso(){
  try { return JSON.parse(localStorage.getItem(CLAVE_REPASO)) || {}; } catch(e){ return {}; }
}
function guardarRepaso(r){
  try { localStorage.setItem(CLAVE_REPASO, JSON.stringify(r)); } catch(e){}
}
function marcarPalabra(clave, estado){
  const r = leerRepaso();
  if (estado === "aprendido") delete r[clave];
  else {
    const e = DICC.get(clave);
    if (!e) return;
    r[clave] = { en:e.en, ipa:e.ipa, es:e.es, pron:e.pron,
                 leccion: LECCION ? LECCION.meta.id : "", fecha: Date.now() };
  }
  guardarRepaso(r);
  document.querySelectorAll('.pal[data-k="' + CSS.escape(clave) + '"]')
    .forEach(n => n.classList.toggle("porAprender", estado !== "aprendido"));
  if (typeof renderRepaso === "function") renderRepaso();
}

/* Formas conjugadas a partir de la tabla de verbos */
function formasVerbo(fila){
  const [inf,, pres, pas, fut] = fila;
  const trozos = [inf.replace(/^to\s+/, ""), pres, pas, fut.replace(/^will\s+/, "")];
  const formas = new Set();
  trozos.forEach(t => String(t).split(/[/·,]/).forEach(x => {
    const w = x.trim();
    if (w && !/\s/.test(w)) formas.add(w);
  }));
  return [...formas];
}

function construirDiccionario(){
  DICC = new Map(); LECT_MAXPAL = 1;
  const meter = (en, ipa, es, pron, origen) => {
    const k = claveDicc(en);
    if (!k || DICC.has(k)) return;
    DICC.set(k, { en, ipa, es, pron, origen });
    LECT_MAXPAL = Math.max(LECT_MAXPAL, k.split(" ").length);
  };
  (VOCAB || []).forEach(g => g.items.forEach(([en,ipa,es,pron]) => meter(en,ipa,es,pron,"vocabulario")));
  const lect = LECCION && LECCION.LECTURA;
  if (lect && lect.glosario) lect.glosario.forEach(([en,ipa,es,pron]) => meter(en,ipa,es,pron,"glosario"));
  (VERBS || []).forEach(fila => {
    const es = fila[5], ipa = "", pron = "";
    formasVerbo(fila).forEach(f => meter(f, ipa, es + " (" + fila[0] + ")", pron, "verbo"));
  });
}

/* Convierte un párrafo en nodos, marcando lo que está en el diccionario */
function nodosParrafo(texto){
  const cont = el("p","rp");
  const LETRA = "A-Za-z\u00C0-\u024F'";
  const piezas = texto.match(new RegExp("[" + LETRA + "]+|[^" + LETRA + "]+", "g")) || [];
  const esPalabra = t => new RegExp("^[" + LETRA + "]+$").test(t);
  let i = 0;
  while (i < piezas.length){
    if (!esPalabra(piezas[i])){ cont.appendChild(document.createTextNode(piezas[i])); i++; continue; }
    let encontrado = null;
    for (let n = Math.min(LECT_MAXPAL, 6); n >= 1 && !encontrado; n--){
      const trozo = [];
      let j = i, restantes = n;
      while (j < piezas.length && restantes > 0){
        trozo.push(piezas[j]);
        if (esPalabra(piezas[j])) restantes--;
        j++;
      }
      while (trozo.length && !esPalabra(trozo[trozo.length-1])) { trozo.pop(); j--; }
      const bruto = trozo.join("");
      const k = buscarEntrada(claveDicc(bruto));
      if (k) encontrado = { k, bruto, hasta: j };
    }
    if (encontrado){
      const b = el("button","pal");
      b.type = "button";
      b.dataset.k = encontrado.k;
      b.textContent = encontrado.bruto;
      /* La palabra y la puntuación que la sigue viajan juntas: si no, la coma
         o el punto se van solos al principio de la línea siguiente. */
      const envoltura = el("span","nb");
      envoltura.appendChild(b);
      let j = encontrado.hasta;
      if (j < piezas.length && !esPalabra(piezas[j])){
        const cola = piezas[j].match(new RegExp("^[^\\s" + LETRA + "]+"));
        if (cola){
          envoltura.appendChild(document.createTextNode(cola[0]));
          const resto = piezas[j].slice(cola[0].length);
          if (resto) piezas[j] = resto; else j++;
        }
      }
      cont.appendChild(envoltura);
      i = j;
    } else {
      cont.appendChild(document.createTextNode(piezas[i]));
      i++;
    }
  }
  return cont;
}

/* Tarjeta emergente de una palabra */
function cerrarTarjeta(){
  const t = $("#rcard"); if (t) t.remove();
  document.removeEventListener("click", alPulsarFuera);
  document.removeEventListener("keydown", alPulsarEscape);
}
function abrirTarjeta(boton){
  cerrarTarjeta();
  const clave = boton.dataset.k;
  const e = DICC.get(clave);
  if (!e) return;
  const enRepaso = !!leerRepaso()[clave];

  const c = el("div","rcard"); c.id = "rcard";
  c.innerHTML = `
    <div class="rc-top">
      <button class="rc-say" type="button" title="Escuchar">&#9834;</button>
      <span class="rc-en">${esc(e.en)}</span>
    </div>
    ${e.ipa ? `<div class="rc-ipa afi">|${esc(e.ipa)}|</div>` : ""}
    ${e.pron ? `<div class="rc-pron"><span class="ap">&asymp;</span> ${esc(e.pron)}</div>` : ""}
    <div class="rc-es">${esc(e.es)}</div>
    <div class="rc-acc">
      <button class="rc-b ok" type="button">Aprendido</button>
      <button class="rc-b go${enRepaso ? " on" : ""}" type="button">Aprender</button>
    </div>`;
  document.body.appendChild(c);

  const r = boton.getBoundingClientRect();
  const ancho = c.offsetWidth, alto = c.offsetHeight;
  let x = r.left + r.width/2 - ancho/2;
  x = Math.max(10, Math.min(x, window.innerWidth - ancho - 10));
  let y = r.top + window.scrollY - alto - 10;
  if (r.top - alto - 10 < 8) y = r.bottom + window.scrollY + 10;
  c.style.left = x + "px";
  c.style.top = y + "px";

  c.querySelector(".rc-say").addEventListener("click", ev => { ev.stopPropagation(); TTS.say(e.en, { rate: 0.8 }); });
  c.querySelector(".rc-b.ok").addEventListener("click", ev => { ev.stopPropagation(); marcarPalabra(clave, "aprendido"); cerrarTarjeta(); });
  c.querySelector(".rc-b.go").addEventListener("click", ev => { ev.stopPropagation(); marcarPalabra(clave, "aprender"); cerrarTarjeta(); });
  c.addEventListener("click", ev => ev.stopPropagation());
  setTimeout(() => {
    document.addEventListener("click", alPulsarFuera);
    document.addEventListener("keydown", alPulsarEscape);
  }, 0);
  TTS.say(e.en, { rate: 0.8 });
}
/* Los oyentes globales sólo existen mientras hay una tarjeta abierta: así no
   pueden interferir con el resto de la aplicación. */
function alPulsarFuera(){ cerrarTarjeta(); }
function alPulsarEscape(ev){ if (ev.key === "Escape") cerrarTarjeta(); }

/* Lectura en voz alta con resaltado amarillo palabra a palabra */
let lecturaSonando = false;
function anularResaltadoLectura(){
  document.querySelectorAll("#lectHost .pal.mark, #lectHost .rt.mark").forEach(n => n.classList.remove("mark"));
}
async function leerEnVozAlta(){
  const lect = LECCION && LECCION.LECTURA; if (!lect) return;
  lecturaSonando = true;
  $("#lectPlay").textContent = "■ Detener";
  $("#lectHost").classList.add("leyendoAlgo");
  const parrafos = [...document.querySelectorAll("#lectHost .rp")];
  for (let i = 0; i < parrafos.length; i++){
    if (!lecturaSonando) break;
    const p = parrafos[i];
    p.classList.add("leyendo");
    p.scrollIntoView({ block:"center", behavior:"smooth" });
    await hablarParrafo(lect.parrafos[i], p);
    p.classList.remove("leyendo");
    if (lecturaSonando) await new Promise(r => setTimeout(r, 350));
  }
  anularResaltadoLectura();
  $("#lectHost").classList.remove("leyendoAlgo");
  lecturaSonando = false;
  $("#lectPlay").textContent = "▶ Escuchar";
}
function hablarParrafo(texto, cont){
  /* Cada nodo de texto o botón se envuelve para poder resaltarlo, y se
     guarda su posición en caracteres para casarla con onboundary. */
  const marcas = [];
  let pos = 0;
  cont.childNodes.forEach(n => {
    if (n.nodeType === 3){
      const partes = n.textContent.match(/[A-Za-z']+|[^A-Za-z']+/g) || [];
      const frag = document.createDocumentFragment();
      partes.forEach(t => {
        if (/^[A-Za-z']+$/.test(t)){
          const s = el("span","rt"); s.textContent = t;
          marcas.push({ nodo:s, a:pos, b:pos + t.length });
          frag.appendChild(s);
        } else frag.appendChild(document.createTextNode(t));
        pos += t.length;
      });
      n.replaceWith(frag);
    } else {
      marcas.push({ nodo:n, a:pos, b:pos + n.textContent.length });
      pos += n.textContent.length;
    }
  });
  const marcar = k => { anularResaltadoLectura(); if (marcas[k]) marcas[k].nodo.classList.add("mark"); };
  let hubo = false, temps = [];
  const total = pos || 1;
  const estimado = Math.max(2500, total * 72);
  temps.push(setTimeout(() => {
    if (hubo) return;
    let acc = 0;
    marcas.forEach((m,k) => {
      temps.push(setTimeout(() => { if (!hubo) marcar(k); }, acc));
      acc += (m.b - m.a + 1) / total * estimado;
    });
  }, 140));
  return TTS.say(texto, {
    rate: 0.82,
    onBoundary(ci){
      hubo = true; temps.forEach(clearTimeout); temps = [];
      let k = marcas.findIndex(m => ci >= m.a && ci < m.b);
      if (k < 0) k = Math.max(0, marcas.findIndex(m => m.a > ci) - 1);
      marcar(k);
    },
    onEnd(){ temps.forEach(clearTimeout); }
  });
}

/* Comprensión */
function renderPreguntas(){
  const lect = LECCION && LECCION.LECTURA;
  const host = $("#lectQ"); host.innerHTML = "";
  if (!lect || !lect.preguntas || !lect.preguntas.length) return;
  host.appendChild(el("div","sechead","Comprensión · cuenta para el diagnóstico"));
  lect.preguntas.forEach((p, i) => {
    const c = el("div","qcard");
    c.appendChild(el("div","qq", (i+1) + ". " + esc(p.q)));
    const ops = el("div","qops");
    p.ops.forEach((texto, k) => {
      const b = el("button","qop"); b.type = "button";
      b.textContent = texto;
      b.addEventListener("click", () => responder(i, k, c, ops));
      ops.appendChild(b);
    });
    c.appendChild(ops);
    c.appendChild(el("div","qfb"));
    host.appendChild(c);
  });
  pintarRespuestas();
}
function responder(i, k, tarjeta, ops){
  const p = LECCION.LECTURA.preguntas[i];
  state.lectura = state.lectura || {};
  if (state.lectura[i] != null) return;          // una sola oportunidad
  state.lectura[i] = k;
  const bien = k === p.ok;
  [...ops.children].forEach((b, j) => {
    b.disabled = true;
    if (j === p.ok) b.classList.add("correcta");
    else if (j === k) b.classList.add("fallada");
  });
  const fb = tarjeta.querySelector(".qfb");
  fb.className = "qfb " + (bien ? "ok" : "bad");
  fb.innerHTML = bien ? "Correcto." : "No es esa. " + esc(p.pista);
  save(); actualizarResumenLectura();
}
function pintarRespuestas(){
  const lect = LECCION && LECCION.LECTURA; if (!lect) return;
  const tarjetas = [...document.querySelectorAll("#lectQ .qcard")];
  (lect.preguntas || []).forEach((p, i) => {
    const elegida = state.lectura && state.lectura[i];
    if (elegida == null || !tarjetas[i]) return;
    const ops = tarjetas[i].querySelector(".qops");
    [...ops.children].forEach((b, j) => {
      b.disabled = true;
      if (j === p.ok) b.classList.add("correcta");
      else if (j === elegida) b.classList.add("fallada");
    });
    const fb = tarjetas[i].querySelector(".qfb");
    const bien = elegida === p.ok;
    fb.className = "qfb " + (bien ? "ok" : "bad");
    fb.innerHTML = bien ? "Correcto." : "No es esa. " + esc(p.pista);
  });
  actualizarResumenLectura();
}
function puntajeLectura(){
  const lect = LECCION && LECCION.LECTURA;
  const n = lect && lect.preguntas ? lect.preguntas.length : 0;
  if (!n) return { n:0, aciertos:0, respondidas:0, ratio:1 };
  let aciertos = 0, respondidas = 0;
  lect.preguntas.forEach((p, i) => {
    const e = state.lectura && state.lectura[i];
    if (e != null){ respondidas++; if (e === p.ok) aciertos++; }
  });
  return { n, aciertos, respondidas, ratio: aciertos / n };
}
function actualizarResumenLectura(){
  const p = puntajeLectura();
  const n = $("#lectScore"); if (!n) return;
  n.textContent = p.respondidas ? p.aciertos + " / " + p.n + " correctas" : "sin responder";
}

/* Pintado completo del apartado */
function renderLectura(){
  const lect = LECCION && LECCION.LECTURA;
  const host = $("#lectHost");
  if (!lect){ host.innerHTML = "<p class='lede'>Esta lección todavía no tiene lectura.</p>"; return; }
  construirDiccionario();
  host.innerHTML = "";
  const marcadas = leerRepaso();
  lect.parrafos.forEach(t => {
    const p = nodosParrafo(t);
    host.appendChild(p);
  });
  host.querySelectorAll(".pal").forEach(b => {
    if (marcadas[b.dataset.k]) b.classList.add("porAprender");
    b.addEventListener("click", ev => { ev.stopPropagation(); abrirTarjeta(b); });
  });
  $("#lectTitulo").textContent = lect.titulo;
  $("#lectEntradilla").innerHTML = lect.entradilla || "";
  const palabras = lect.parrafos.join(" ").split(/\s+/).length;
  $("#lectMeta").textContent = palabras + " palabras · " + Math.max(1, Math.round(palabras / 60)) + " min · "
    + host.querySelectorAll(".pal").length + " palabras tocables";
  renderPreguntas();
}
