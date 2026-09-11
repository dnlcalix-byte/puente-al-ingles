/* ============================================================
   Service worker · permite usar la app sin conexión.
   Sube el número de VERSION cada vez que cambies un archivo:
   así el navegador descarta la copia vieja y baja la nueva.
   ============================================================ */
const VERSION = "puente-ingles-v3";
const ARCHIVOS = [
  "./", "./index.html", "./estilos.css",
  "./curriculo.js", "./motor.js", "./app.js",
  "./lecciones/a1-01.js",
  "./manifest.webmanifest",
  "./iconos/icono-192.png", "./iconos/icono-512.png", "./iconos/icono-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Sólo se sirven desde caché los archivos propios de la app.
   Las tipografías de Google y cualquier otra petición van a la red;
   si la red falla, se devuelve lo que haya en caché. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const mismoOrigen = new URL(req.url).origin === self.location.origin;

  if (mismoOrigen){
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copia = res.clone();
        caches.open(VERSION).then(c => c.put(req, copia)).catch(() => {});
        return res;
      }).catch(() => caches.match("./index.html")))
    );
  } else {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
  }
});
