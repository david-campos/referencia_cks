# Cómo consultar
La parte necesaria para usar a modo de consulta es únicamente el contenido de la carpeta `dist/`,
abrir el archivo `dist/dump_try.html` con cualquier explorador (Chrome, Firefox, etc).

# Cómo colaborar
*(English below)*

En la carpeta `dist/` se encuentra el archivo `data.js` generado a partir
de `dump_try.xml` usando el código python.

Para colaborar, clonar el repositorio, modificar en `dist/data.js` la función elegida
cambiando el valor de `"name"` de los parámetros y añadiendo un nuevo parámetro `"description"`
con una descripción de lo que realiza el método. Si deseas especificar también la traducción al
inglés, puedes usar las claves `"name_en"` y `"description_en"` respectivamente.

Finalmente, realizar una *pull request* y yo lo mezclaré eventualmente.

### Links a métodos o tipos (si sabes algo de HTML)
En las descripciones de los métodos, puedes emplear enlaces a otros métodos. Hay algunos ejemplos
de esto en los métodos ya documentados. Cada método tiene un id único que puedes comprobar desde
tu explorador (es el atributo `id` del div que contiene al método, por ejemplo el método
Obj::AddItem tiene el `id` `Obj::AddItem:str`). Para enlazar a este método basta con poner una
etiqueta `<a>` que enlace al id precedido de `#` (si quisiéramos enlazar al método Obj::AddItem
poniendo como texto *Esto es un link al método* pondríamos:
`<a href="#Obj::AddItem:str">Esto es un link al método</a>`).

Lo mismo sirve para los tipos, aunque basta con enlazar a `#` seguido del nombre del tipo en
cuestión (por ejemplo `<a href="#str">esto sería un enlace a str</a>`).


## English
In the `dist/` folder, you will find a `data.js` file which is the result of parsing the whole
`dump_try.xml` file. You can modify this file to add descriptions to methods which haven't been
documented yet, as well as changing the names of the parameters (you can see already-documented
methods as an example).

In the parameters, use `"name"` to specify the name in Spanish or `"name_en"` to specify the
name in english. Likewise, you can use `"description"` on the methods to specify their description
in Spanish or `"description_en"` to specify a description in English.

Perform a *pull request* in GitHub and I will eventually merge it into the main repo.

### Links to methods or types (some HTML knowledge required)
In the descriptions you provide for the methods, you can use links (or anchors) to other methods.
There are some examples of this in the already-documented methods. Each method has a unique id which
you can check using your browser, for example (it is generated from the name and attributes of the
method, for example the method *Obj::AddItem* has the following id: `Obj::AddItem:str`).

To link a text to this method you can employ the anchor tag `<a>`, linking to the id of the method
preceded by a `#`. For example, to link to the previously-mentioned method through the text *This
is the method*, we could write: `<a href="#Obj::AddItem:str">This is the method</a>`.

The same goes for types, which can be linked by `#` followed by the name of the type (for example
`<a href="#str">this would be a link to str</a>`).
