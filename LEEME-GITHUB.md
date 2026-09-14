# Publicar en GitHub Pages

**Todos los archivos van en la raíz del repositorio. No hay carpetas.**
Esto es a propósito: el subidor web de GitHub da problemas con carpetas, y con
estructura plana basta arrastrar todos los archivos de golpe.

## 1. Crear el repositorio

1. `github.com/new`.
2. Nombre: `puente-al-ingles`. **Public** (en la cuenta gratuita, Pages no
   funciona con repositorios privados).
3. Marca *Add a README file* y crea.

## 2. Subir

1. **Add file → Upload files**.
2. Abre esta carpeta, selecciona **todos los archivos** con `Ctrl+A` (`Cmd+A`)
   y arrástralos al recuadro.
3. **Baja hasta el fondo y pulsa el botón verde `Commit changes`.** Si no lo
   pulsas, no se guarda nada y la pantalla no te avisa.

## 3. Activar Pages

*Settings → Pages → Source: Deploy from a branch → Branch: `main`, `/ (root)` →
Save.* En un par de minutos aparece arriba tu dirección.

## 4. Actualizar más adelante

*Add file → Upload files* otra vez; los archivos con el mismo nombre se
reemplazan. Para cambios pequeños, entra al archivo y usa el lápiz.

**Siempre que cambies algo, sube el número de `VERSION` en `sw.js`**
(`puente-ingles-v4` → `v5`). Es lo único que obliga a los teléfonos ya
instalados a tirar la copia guardada y bajar la nueva.

## Añadir una lección nueva

1. Copia `a1-01.js`, renómbralo (`a1-02.js`) y sustituye `meta` y los cinco
   bloques de datos.
2. En `index.html`, añade `<script src="a1-02.js"></script>` junto al anterior.
3. En `sw.js`, añade `"./a1-02.js"` a `ARCHIVOS` y sube `VERSION`.
4. Sube los tres archivos y confirma.

El título ya está en `curriculo.js`: al existir el archivo, la ficha pasa sola
de «En preparación» a «Disponible».

## Si algo sale mal

| Síntoma | Causa |
|---|---|
| Sale el README en vez de la app | `index.html` no llegó, o no pulsaste *Commit changes*. |
| Todas las lecciones en gris y sin botón *Continuar* | Falta `a1-01.js` en la raíz. |
| El teléfono no ve los cambios | No subiste `VERSION` en `sw.js`. |
| 404 al abrir la dirección | Pages aún publica, o la rama no es `main`. |
