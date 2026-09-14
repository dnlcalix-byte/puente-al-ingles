# Puente al Inglés · app instalable (PWA)

Curso de inglés alineado con el MCER y orientado al IELTS. Se instala en Android
e iOS desde el navegador, funciona sin conexión y guarda el progreso en el
dispositivo.

## Archivos

Todos en la raíz, sin carpetas.

```
index.html              Cabecera, índice del curso y vista de lección
estilos.css             Todo el diseño, en temas claro y oscuro
curriculo.js            Los 150 títulos de lección repartidos en A1…C1
motor.js                El motor: audio, resaltado, voz, evaluación, diagnóstico
app.js                  Índice del curso, enrutado e instalación
a1-01.js                Los datos de una lección (uno por lección)
manifest.webmanifest    Nombre, iconos y colores de la app instalada
sw.js                   Service worker: permite usar la app sin internet
icono-*.png             Iconos 192, 512 y maskable
```

## Publicarlo (hace falta una dirección https)

El service worker y el micrófono **solo funcionan sobre https**, así que abrir
`index.html` con doble clic no sirve para la versión instalable.

**GitHub Pages es la vía elegida para este proyecto**: sin cuota de
despliegues, cada cambio queda versionado y se actualiza desde el navegador.
Los pasos exactos están en **LEEME-GITHUB.md**.

Alternativas si alguna vez la necesitas: Cloudflare Pages y `vercel.com/drop`
aceptan la carpeta arrastrada directamente.

## Instalarlo en el teléfono

- **Android (Chrome):** abre la dirección y aparecerá el botón *Instalar app*
  en la cabecera, o usa *⋮ → Instalar aplicación*.
- **iPhone / iPad (Safari):** abre la dirección, toca **Compartir** y luego
  **Añadir a pantalla de inicio**. iOS no ofrece botón automático; la app lo
  explica en pantalla cuando detecta un iPhone.

Una vez instalada se abre a pantalla completa, con su propio icono, y funciona
sin conexión salvo el *Modo libre*, que necesita internet.

## Probarlo en tu computadora antes de publicar

```bash
cd carpeta-de-la-app
python3 -m http.server 8000
```

Y abre `http://localhost:8000`. `localhost` cuenta como origen seguro, así que
el micrófono y el service worker funcionan igual que en producción.

## Añadir una lección nueva

1. Copia `lecciones/a1-01.js` a `lecciones/a1-02.js`.
2. Cambia el `meta` (id, número, título, descriptor, personajes) y sustituye los
   cinco bloques de datos: `VOCAB`, `PRONKEY`, `VERBS`, `GRAMMAR`, `DIALOGUE`.
3. En `index.html`, añade `<script src="lecciones/a1-02.js"></script>` junto al
   de la lección anterior.
4. En `sw.js`, añade `"./lecciones/a1-02.js"` a la lista `ARCHIVOS` y **sube el
   número de `VERSION`** (`v1` → `v2`). Sin ese cambio, los teléfonos que ya
   tengan la app seguirán viendo la versión antigua guardada en caché.

El título de la lección ya está en `curriculo.js`: al existir el archivo, la
ficha pasa sola de «En preparación» a «Disponible». El motor no se toca.

## Notas técnicas

- **Micrófono:** usa la Web Speech API del navegador. Funciona bien en Chrome
  para Android y en Safari para iOS, aunque en iOS tiene fallos conocidos con
  los resultados parciales. Si falla, la respuesta escrita da la misma
  corrección gramatical.
- **Modo libre y diagnóstico con IA:** solo funcionan cuando la app corre dentro
  de Claude. Publicada como PWA, el motor usa la evaluación local, que compara
  palabra por palabra y sí funciona sin conexión.
- **Progreso:** se guarda en `localStorage` con la clave
  `puente-ingles-<id-leccion>`. Es por dispositivo y por navegador: no se
  sincroniza entre el teléfono y la computadora.
