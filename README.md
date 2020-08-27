# Cómo consultar
La parte necesaria para usar a modo de consulta es únicamente el contenido de la carpeta `dist/`,
abrir el archivo `dist/dump_try.html` con cualquier explorador (Chrome, Firefox, etc).

# Cómo colaborar
En la carpeta `dist/` se encuentra el archivo `data.js` generado a partir
de `dump_try.xml` usando el código python.

Para colaborar, clonar el repositorio, modificar en `dist/data.js` la función elegida
cambiando el valor de `"name"` de los parámetros y añadiendo un nuevo parámetro `"description"`
con una descripción de lo que realiza el método.

Finalmente, realizar una *pull request* y yo lo mezclaré eventualmente.