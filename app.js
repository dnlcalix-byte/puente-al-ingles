/* ============================================================
   APP · índice del curso, enrutado y arranque
   Depende de curriculo.js, motor.js y de los archivos de /lecciones.
   ============================================================ */

/* ---------- Estado guardado de cada lección ---------- */
function estadoLeccion(id){
  try {
    const raw = localStorage.getItem("puente-ingles-" + id);
    return raw ? JSON.parse(raw) : null;
  } catch(e){ return null; }
}
const leccionDisponible = id => !!(window.LECCIONES && window.LECCIONES[id]);
const leccionSuperada   = id => { const e = estadoLeccion(id); return !!(e && e.unlocked); };

function resumenCurso(){
  let superadas = 0, disponibles = 0;
  CURSO.forEach(l => {
    if (leccionSuperada(l.id)) superadas++;
    if (leccionDisponible(l.id)) disponibles++;
  });
  const siguiente = CURSO.find(l => leccionDisponible(l.id) && !leccionSuperada(l.id))
                 || CURSO.find(l => leccionDisponible(l.id));
  const ultimoNivel = [...CURSO].reverse().find(l => leccionSuperada(l.id));
  return { superadas, disponibles, siguiente, nivelActual: ultimoNivel ? ultimoNivel.nivel : "A1" };
}

/* ---------- Índice del curso ---------- */
function renderHome(){
  const r = resumenCurso();

  $("#homeSuperadas").textContent = r.superadas + " / " + TOTAL_LECCIONES;
  $("#homeNivel").textContent = r.nivelActual;
  $("#homeListas").textContent = String(r.disponibles);

  const cont = $("#continueBtn");
  if (r.siguiente){
    cont.hidden = false;
    cont.textContent = (leccionSuperada(r.siguiente.id) ? "Repasar: " : "Continuar: ")
      + r.siguiente.nivel + "-" + String(r.siguiente.numero).padStart(2,"0") + " · " + r.siguiente.titulo;
    cont.onclick = () => irA("/leccion/" + r.siguiente.id);
  } else cont.hidden = true;

  const host = $("#levelsHost"); host.innerHTML = "";
  NIVELES.forEach(n => {
    const lecs = CURSO.filter(l => l.nivel === n.nivel);
    const hechas = lecs.filter(l => leccionSuperada(l.id)).length;
    const sec = el("section","lvlsec");

    const head = el("div","lvlhead");
    head.innerHTML = `
      <div class="lvlbadge">${esc(n.nivel)}</div>
      <div class="lvlmeta">
        <div class="lvlname">${esc(n.nombre)} <span class="lvluser">${esc(n.usuario)}</span></div>
        <div class="lvlfoco">${n.foco}</div>
      </div>
      <div class="lvlnums">
        <div class="lvlband">IELTS ${esc(n.ielts)}</div>
        <div class="lvlcount">${hechas} / ${lecs.length}</div>
      </div>`;
    const bar = el("div","lvlbar", `<i style="width:${lecs.length ? hechas/lecs.length*100 : 0}%"></i>`);
    sec.appendChild(head); sec.appendChild(bar);

    const grid = el("div","lcgrid");
    lecs.forEach(l => {
      const lista = leccionDisponible(l.id);
      const hecha = leccionSuperada(l.id);
      const estado = hecha ? "ok" : (lista ? "go" : "soon");
      const etiqueta = hecha ? "Superada" : (lista ? "Disponible" : "En preparación");
      const b = el("button","lc " + estado);
      b.type = "button";
      b.innerHTML = `<span class="lcn">${String(l.numero).padStart(2,"0")}</span>
        <span class="lct">${esc(l.titulo)}</span>
        <span class="lcs">${etiqueta}</span>`;
      if (lista) b.addEventListener("click", () => irA("/leccion/" + l.id));
      else { b.disabled = true; b.title = "Esta lección aún no se ha redactado"; }
      grid.appendChild(b);
    });
    sec.appendChild(grid);
    host.appendChild(sec);
  });
}

/* ---------- Carga de una lección en el motor ---------- */
function cargarLeccion(id){
  const L = window.LECCIONES && window.LECCIONES[id];
  if (!L) return false;

  LECCION = L;
  VOCAB = L.VOCAB; PRONKEY = L.PRONKEY; VERBS = L.VERBS; GRAMMAR = L.GRAMMAR; DIALOGUE = L.DIALOGUE;
  DIALOGUE.forEach(l => { l.en = l.b.map(x => x[0]).join(" "); l.es = l.b.map(x => x[1]).join(" "); });

  STORE_KEY = "puente-ingles-" + id;
  TOTAL_TURNS = studentLines().length;

  const info = leccionPorId(id);
  $("#lvEyebrow").textContent = "Nivel " + L.meta.nivel + " · Lección "
    + String(L.meta.numero).padStart(2,"0") + " de " + (info ? info.total : "?");
  $("#lvTitle").textContent = L.meta.titulo;
  $("#lvCando").textContent = "Descriptor MCER " + L.meta.nivel + ": «" + L.meta.descriptor + "»";
  $("#lvScene").textContent = L.meta.escena;
  $("#lvRole").textContent = "Tú eres " + L.meta.personajeAlumno;
  $("#pracLede").innerHTML = "La IA interpreta a <b>" + esc(L.meta.personajeIA)
    + "</b>. Escucha su turno y responde con la línea de " + esc(L.meta.personajeAlumno)
    + ". Si tu respuesta es correcta, el diálogo avanza; si no, se detiene y te indica exactamente qué corregir hasta que alcances el nivel requerido.";

  state.idx = 0; state.started = false; state.finished = false;
  state.results = {}; state.lectura = {}; state.lastDiag = null; state.unlocked = false;
  turnsEl.innerHTML = "";

  renderVocab(); renderVerbs(); renderGrammar(); renderDialogue(); renderLectura(); renderRoad();
  go("vocab");
  ensureStartBtn();
  updateStats();

  load().then(() => { updateStats(); pintarRespuestas(); if (state.lastDiag) renderDiag(false); });
  return true;
}

/* ---------- Enrutado ---------- */
function mostrarVista(v){
  const enLeccion = v === "leccion";
  $("#view-home").hidden = enLeccion;
  $("#view-leccion").hidden = !enLeccion;
  $("#lessonbar").hidden = !enLeccion;
  $("#indexBtn").hidden = !enLeccion;
  $("#resetBtn").hidden = !enLeccion;
  TTS.stop();
  window.scrollTo({ top: 0 });
}
function irA(ruta){
  if (location.hash !== "#" + ruta) location.hash = ruta;
  else enrutar();
}
function enrutar(){
  const ruta = (location.hash || "#/").replace(/^#/, "");
  const m = ruta.match(/^\/leccion\/([a-z0-9-]+)$/);
  if (m && cargarLeccion(m[1])) mostrarVista("leccion");
  else { renderHome(); renderRepaso(); mostrarVista("home"); }
}
window.addEventListener("hashchange", enrutar);

$("#indexBtn").addEventListener("click", () => irA("/"));
$("#brandHome").addEventListener("click", () => irA("/"));

/* ---------- Instalación como app ---------- */
let promptInstalar = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  promptInstalar = e;
  $("#installBtn").hidden = false;
});
$("#installBtn").addEventListener("click", async () => {
  if (!promptInstalar) return;
  promptInstalar.prompt();
  await promptInstalar.userChoice;
  promptInstalar = null;
  $("#installBtn").hidden = true;
});
window.addEventListener("appinstalled", () => { $("#installBtn").hidden = true; });

/* En iOS no existe beforeinstallprompt: hay que explicar el gesto. */
(function(){
  const esIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const yaInstalada = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (esIOS && !yaInstalada) $("#iosHint").hidden = false;
})();

/* ---------- Arranque ---------- */
$("#sampleNote").textContent = "Comprobando disponibilidad de la evaluación con Claude…";
enrutar();

(async () => {
  try { DB = await window.claude?.use?.("db"); } catch(e){ DB = null; }
  $("#saveState").textContent = DB ? "Progreso guardado en tu cuenta" : "Progreso guardado en este dispositivo";
  if (LECCION){ await load(); updateStats(); if (state.lastDiag) renderDiag(false); }
})();

(async () => {
  try { SAMPLE = await window.claude?.use?.("sample"); } catch(e){ SAMPLE = null; }
  $("#sampleNote").innerHTML = SAMPLE
    ? "El <b>Modo libre</b> y el diagnóstico final usan Claude desde tu propia cuenta; la primera llamada te pedirá permiso."
    : "Evaluación con Claude no disponible aquí. El <b>Modo guion</b> y el diagnóstico local funcionan sin conexión a Claude.";
})();

if ("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

/* ---------- Lectura: botón de audio ---------- */
$("#lectPlay").addEventListener("click", () => {
  if (lecturaSonando){ lecturaSonando = false; TTS.stop(); return; }
  leerEnVozAlta();
});

/* ---------- Lista de repaso acumulada ---------- */
function renderRepaso(){
  const host = $("#repasoHost"); if (!host) return;
  const r = leerRepaso();
  const claves = Object.keys(r).sort((a,b) => (r[b].fecha||0) - (r[a].fecha||0));
  if (!claves.length){ host.innerHTML = ""; return; }

  const c = el("div","repaso");
  const cab = el("div","rh");
  cab.innerHTML = `<h3>Palabras por repasar</h3>
    <span class="rn">${claves.length}</span>
    <span class="rd">Marcadas mientras leías. Pulsa ✓ cuando ya te la sepas.</span>`;
  c.appendChild(cab);

  const lista = el("div","rlist");
  claves.forEach(k => {
    const p = r[k];
    const it = el("div","ritem");
    it.innerHTML = `<div><div class="re">${esc(p.en)}</div><div class="rs">${esc(p.es)}</div></div>
      <button class="rok" type="button" title="Ya me la sé">&#10003;</button>`;
    it.querySelector(".rok").addEventListener("click", () => {
      const actual = leerRepaso();
      delete actual[k];
      guardarRepaso(actual);
      renderRepaso();
    });
    lista.appendChild(it);
  });
  c.appendChild(lista);
  host.innerHTML = "";
  host.appendChild(c);
}
