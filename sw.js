/* ============================================================
   Service worker · permite usar la app sin conexión.
   Sube el número de VERSION cada vez que cambies un archivo:
   así el navegador descarta la copia vieja y baja la nueva.
   ============================================================ */
const VERSION = "puente-ingles-v7";
const ARCHIVOS = [
  "./", "./index.html", "./estilos.css",
  "./curriculo.js", "./motor.js", "./app.js",
  "./a1-01.js", "./a1-02.js",
  "./manifest.webmanifest",
  "./icono-192.png", "./icono-512.png", "./icono-maskable-512.png"
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

  /* El propio service worker nunca se cachea: si no, no habría forma de
     actualizarlo. */
  if (new URL(req.url).pathname.endsWith("/sw.js")) return;

  if (mismoOrigen){
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        /* Sólo se guardan las respuestas buenas. Guardar un 404 lo dejaría
           congelado para siempre, aunque el archivo apareciera después. */
        if (res.ok){
          const copia = res.clone();
          caches.open(VERSION).then(c => c.put(req, copia)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match("./index.html")))
    );
  } else {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
  }
});
