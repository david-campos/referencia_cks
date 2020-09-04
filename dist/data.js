const THE_OBJ =
    {
        "classes": [
            {
                "name": "void",
                "description": "Este pseudo-tipo indica que la función no devuelve nada.",
                "description_en": "This pseudo-type indicates the function returns nothing."
            },
            {
                "name": "int",
                "description": "Un número entero. Por ejemplo <strong>-2</strong>.",
                "description_en": "Integer number. For example <strong>-2</strong>."
            },
            {
                "name": "bool",
                "description": "Un valor de verdad, es decir: verdadero (<strong>true</strong>) o falso (<strong>false</strong>).",
                "description_en": "A value of truth, i.e.: <strong>true</strong> or <strong>false</strong>."
            },
            {
                "name": "float",
                "description": "Un número de coma flotante. Es el único tipo de números decimales soportados por CKS y los decimales se indican tras un punto cuando escritos en su forma literal. Por ejemplo <strong>3.5</strong>.",
                "description_en": "A floating point number. It is the only type of decimal numbers supported by CKS. The decimal part must be indicated after a dot (.) when written as literals. For example <strong>3.5</strong>."
            },
            {"name": "pstr"},
            {
                "name": "str",
                "description": "Una cadena de texto.<br>Cuando se escriben de forma literal se deben indicar rodeadas por dobles comillas (\"), por ejemplo: <tt>\"Esta es una cadena de texto!\"</tt>. En el caso de querer utilizar dobles comillas dentro de un literal de este tipo ha de escaparse usando la barra invertida (\\). Por ejemplo: <tt>\"Este str contiene \\\" sin problemas\"</tt>.",
                "description_en": "A text string.<br>When written as a literal they must be surrounded by double quotes (\"), for example: <tt>\"This is is a text string!\"</tt>. If you want to use double quotes inside a literal of this type, you will need to escape it using a back-slash (\\). For example: <tt>\"This str contains \\\" without any problems\"</tt>."
            },
            {
                "name": "point",
                "description": "Un punto en dos dimensiones (ejes x e y), algunos métodos permiten manipularlo como un vector (interpretándolo como el vector que va del origen <i>(0, 0)</i> hasta el punto). La función <a href='#Point:int_int'>Point</a> permite crear una instancia.",
                "description_en": "A point in 2 dimensions (axis x and y), some methods allow to use it as a vector (interpreting it as the vector which goes from the origin <i>(0, 0)</i> to the point). The function <a href='#Point:int_int'>Point</a> allows to create an instance."
            },
            {
                "name": "rect",
                "description": "Un rectángulo en dos dimensiones alineado con los ejes, definido por los valores en los que se sitúan sus cuatro lados.",
                "description_en": "An axis-aligned rectangle in 2 dimensions, defined by the values in which their four sides reside."
            },
            {
                "name": "IntArray",
                "description": "Una lista ordenada de números enteros (int), accesibles mediante el operador <tt>[]</tt>.",
                "description_en": "A sorted list of integer numbers (int), accessible through the <tt>[]</tt> operator."
            },
            {
                "name": "StrArray",
                "description": "Una lista ordenada de cadenas de texto (str), accesibles mediante el operador <tt>[]</tt>.",
                "description_en": "A sorted list of text strings (str), accessible through the <tt>[]</tt> operator."
            },
            {
                "name": "StrMap",
                "description": "Un diccionario (es decir, un conjunto de pares clave-valor) en el que tanto las claves como los valores son cadenas de texto (str).",
                "description_en": "A dictionary (i.e., a set of key-value pairs) in which both keys and values are of type string (str)."
            },
            {
                "name": "Obj",
                "description": "Un objeto. Esta es la clase base para todo tipo de objetos interactuables en CKS (unidades, catapultas, edificios...).",
                "description_en": "An object. It is the base class for all kind of interactable objects in CKS (units, catapults, item holders, buildings...)"
            },
            {
                "name": "Item",
                "description": "Un ítem, como los que pueden portar algunos Obj en sus <i>item slots</i>. Algunos pueden ser usados.",
                "description_en": "An item, like the ones some Obj can carry in their <i>item slots</i>. Some of them can be used."
            },
            {
                "name": "Unit",
                "description": "Esta clase corresponde a cualquier unidad del juego.",
                "description_en": "This class corresponds to any unit in the game."
            },
            {
                "name": "Building",
                "description": "Esta clase corresponde a cualquier edificio del juego (como un foro o una herrería, por ejemplo).",
                "description_en": "This class corresponds to any building in the game (like a town hall or a blacksmith, for example)."
            },
            {
                "name": "Hero",
                "description": "Héroes del juego, se caracterizan por poseer habilidades especiales y la capacidad de tener unidades asociadas (su <i>army</i>).",
                "description_en": "Heroes in the game, they are characterised by possessing special skills and the ability to have attached units (their <i>army</i>)."
            },
            {
                "name": "Druid",
                "description": "Cualquier unidad de tipo druida del juego, como las sacerdotisas íberas.",
                "description_en": "Any unit of druid type from the game, like Iberian priestesses."
            },
            {
                "name": "Ghost",
                "description": "Espíritus, usualmente invocados por la muerte de un(a) druida.",
                "description_en": "Spirits, usually invoked by the death of a druid (after \"summoning death\")."
            },
            {
                "name": "Tower",
                "description": "Las torres que forman las murallas que rodean los asentamientos.",
                "description_en": "The towers which form the walls surrounding the settlements."
            },
            {
                "name": "Wagon",
                "description": "Mula. Las mulas transportan recursos entre asentamientos y pueden ser capturadas.",
                "description_en": "Wagons transport resources between settlements and can be captured by other players."
            },
            {
                "name": "Catapult",
                "description": "Las catapultas de las diferentes civilizaciones del juego. Tardan un tiempo en montarse y pueden atacar a cualquier punto y rotar, pero no moverse.",
                "description_en": "The catapults from the different civilisations in the game. They take a time to be built and can attack any point or rotate, but they cannot move."
            },
            {
                "name": "ItemHolder",
                "description": "Soporte / receptáculo de ítems. Tiene una serie de slots en los que puede guardar ítems que otras unidades pueden recoger (como los tocones, las fuentes, etc).",
                "description_en": "They possess a number of slots in which they can save items the units can pick up (like stumps, fountains...)."
            },
            {"name": "Barrack"},
            {
                "name": "Sacrifice",
                "description": "Altar de sacrificios. Bajo el control de un grupo de druidas puede lanzar hechizos que afectan a todos los jugadores de la partida.",
                "description_en": "Sacrifice altar. With the help of a group of druids it is able to cast <i>mist actions</i> which affect every player in the game."
            },
            {
                "name": "Ship",
                "description": "Barco. Los barcos pueden transportar unidades en su interior.",
                "description_en": "Ships can transport units inside them."
            },
            {
                "name": "Flying",
                "description": "Objeto volador del juego, como es el caso de las águilas y otros pájaros.",
                "description_en": "Flying objects of the game, as it is the case of eagles and other birds."
            },
            {
                "name": "ObjList",
                "description": "Lista ordenada de objetos (<a href=\"#Obj\" class=\"type\">Obj</a>).",
                "description_en": "Sorted list of objects (<a href=\"#Obj\" class=\"type\">Obj</a>)."
            },
            {
                "name": "Query",
                "description": "Una consulta para obtener objetos (<a href=\"#Obj\" class=\"type\">Obj</a>). Varios métodos devuelven diferentes tipos de consultas. Un ejemplo de consulta sería <a href='#ClassPlayerObjs:str_int'>\"objetos de clase cUnit del jugador 2\"</a>.",
                "description_en": "A query for a set of objects (<a href=\"#Obj\" class=\"type\">Obj</a>). Several methods return different kinds of queries. An example of query would be  <a href='#ClassPlayerObjs:str_int'>\"objects of the cUnit class belonging to player 2\"</a>.",
            },
            {
                "name": "Settlement",
                "description": "Un asentamiento. Los asentamientos tienen una población, almacenan recursos y pueden albergar unidades.",
                "description_en": "Settlements in the game. They have a population, can store resources and keep units."
            },
            {
                "name": "NamedObj",
                "description": "Un objeto (<a href=\"#Obj\" class=\"type\">Obj</a>) identificado por su nombre (ver <a href='#GetNamedObj:str'>GetNamedObj</a>).",
                "description_en": "An object (<a href=\"#Obj\" class=\"type\">Obj</a>) identified by name (see <a href='#GetNamedObj:str'>GetNamedObj</a>)."
            },
            {
                "name": "Conversation",
                "description": "Conversaciones del juego en las que una serie de actores van hablando por turnos, lo cual se muestra mediante un cuadro de diálogo para el jugador.",
                "description_en": "Conversations in the game, in which a set of actors speaks by turns, shown to the player through dialogue boxes."
            },
            {
                "name": "Gate",
                "description": "Puerta de un asentamiento",
                "description_en": "Settlement gate"
            },
            {
                "name": "Teleport",
                "description": "Las unidades se teleportan entre los objetos de esta clase.",
                "description_en": "Units get teleported between objects of this class."
            },
            {"name": "Squad"},
            {"name": "GAIKA"},
            {"name": "SquadList"}
        ],
        "funcs": [{
            "name": "Sleep",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "milisegundos", "name_en": "milliseconds", "type": 1, "is_ptr": false}],
            "description": "Detiene la ejecución el tiempo indicado por el parámetro milisegundos.",
            "description_en": "It pauses the execution of the script for the time indicated by the \"milliseconds\" parameter"
        }, {
            "name": "KillScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "+=",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Añade la cantidad del <tt>int</tt> situado a la derecha del operador a la referencia a <tt>int</tt> situada a la izquierda, y retorna también el entero resultante. Ejemplo: <pre>int a;  // Declaramos a<br>a = 5;  // Guardamos 5 en la variable a<br>a += 2; // Ahora a contiene 7</pre>",
            "description_en": "Add the value of the <tt>int</tt> at the right of the operator onto the reference to <tt>int</tt> at the left, and also return the resulting integer value. Example: <pre>int a;  // We declare a<br>a = 5;  // We save 5 in the variable a<br>a += 2; // Now a contains 7</pre>"
        }, {
            "name": "-=",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Substrae la cantidad del <tt>int</tt> situado a la derecha del operador de la referencia a <tt>int</tt> situada a la izquierda, y retorna también el entero resultante. Ejemplo: <pre>int a;  // Declaramos a<br>a = 5;  // Guardamos 5 en la variable a<br>a -= 2; // Ahora a contiene 3</pre>",
            "description_en": "Substract the value of the <tt>int</tt> at the right of the operator from the reference to <tt>int</tt> at the left, and also return the resulting integer value. Example: <pre>int a;  // We declare a<br>a = 5;  // We save 5 in the variable a<br>a -= 2; // Now a contains 3</pre>"
        }, {
            "name": "\\a",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el resultado una operación AND binaria entre los dos valores enteros.",
            "description_en": "Returns the result of a binary AND operation among both values."
        }, {
            "name": "|",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el resultado una operación OR binaria entre los dos valores enteros.",
            "description_en": "Returns the result of a binary OR operation among both values."
        }, {
            "name": "+",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es la suma de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the sum of the two given <tt>int</tt> values."
        }, {
            "name": "-",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es la resta de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the difference between the two given <tt>int</tt> values."
        }, {
            "name": "-",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el valor <tt>int</tt> dado pero con signo opuesto (multiplicado por -1).",
            "description_en": "Returns the given <tt>int</tt> value but with the opposite sign (multiplied by -1)."
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Asigna el valor <tt>int</tt> dado a la referencia a <tt>int</tt> indicada (a la izquierda del operador). Ejemplo: <pre>int a; // Declaramos a, ahora es una referencia a int<br>a = 5; // Guardamos 5 en la variable a</pre>",
            "description_en": "Saves the given <tt>int</tt> value into the given <tt>int</tt> reference (at the left of the operator). Example: <pre>int a; // Declare a so it is a reference to an int<br>a = 5; // Save 5 into the variable a</pre>"
        }, {
            "name": "*",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es el producto de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the product of the two given <tt>int</tt> values."
        }, {
            "name": "/",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es la división entera de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the integer division of the two given <tt>int</tt> values."
        }, {
            "name": "%",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el módulo de la división.",
            "description_en": "Returns the remainder of the division."
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambos enteros son iguales, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both integer values are the same, or <tt>false</tt> if they are not."
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambos enteros son distintos, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both integer values are not the same, or <tt>false</tt> if they are."
        }, {
            "name": "\\l",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es menor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is lower than the second, or <tt>false</tt> if it is not."
        }, {
            "name": "\\g",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es mayor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is greater than the second, or <tt>false</tt> if it is not."
        }, {
            "name": "\\l=",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es menor o igual que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is lower than or equal to the second, or <tt>false</tt> if it is not."
        }, {
            "name": "\\g=",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es mayor o igual que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is greater than or equal to the second, or <tt>false</tt> if it is not."
        }, {
            "name": "abs",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el valor absoluto del entero indicado (el mismo valor pero con signo positivo).",
            "description_en": "Returns the absolute value of the given integer (same value but positive sign)."
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MIN",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "numero_a", "name_en": "number_a", "type": 1, "is_ptr": false}, {
                "name": "numero_b",
                "name_en": "number_b",
                "type": 1,
                "is_ptr": false
            }],
            "description": "Devuelve el valor mínimo entre los dos valores dados.",
            "description_en": "Returns the minimum value among the two given values."
        }, {
            "name": "MAX",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "numero_a", "name_en": "number_a", "type": 1, "is_ptr": false}, {
                "name": "numero_b",
                "name_en": "number_b",
                "type": 1,
                "is_ptr": false
            }],
            "description": "Devuelve el valor máximo entre los dos valores dados.",
            "description_en": "Returns the maximum value among the two given values."
        }, {
            "name": "CLAMP",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "+",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un <tt>float</tt> que es la suma de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the sum of the two given <tt>float</tt> values."
        }, {
            "name": "-",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un <tt>float</tt> que es la resta de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the difference between the two given <tt>float</tt> values."
        }, {
            "name": "-",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve el valor <tt>float</tt> dado pero con signo opuesto (multiplicado por -1).",
            "description_en": "Returns the given <tt>float</tt> value but with the opposite sign (multiplied by -1)."
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": true}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Asigna el valor <tt>float</tt> dado a la referencia a <tt>float</tt> indicada (a la izquierda del operador). Ejemplo: <pre>float a; // Declaramos a, ahora es una referencia a float<br>a = 5.32; // Guardamos 5.32 en la variable a</pre>",
            "description_en": "Saves the given <tt>float</tt> value into the given <tt>float</tt> reference (at the left of the operator). Example: <pre>float a; // Declare a so it is a reference to an float<br>a = 5.32; // Save 5.32 into the variable a</pre>"
        }, {
            "name": "*",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un valor <tt>float</tt> correspondiente al producto de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the product of the two given <tt>float</tt> values."
        }, {
            "name": "/",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un <tt>float</tt> que es la división exacta de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the exact division of the two given <tt>float</tt> values."
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambos valores son iguales, o <tt>false</tt> si no lo son. ¡Ten cuidado con los problemas de precisión de los valores con coma flotante! Un ordenador no puede representar decimales con infinita precisión, por lo que dos operaciones que deberían dar el mismo resultado pueden dar resultados muy parecidos pero no exactamente iguales. Para comparar <tt>float</tt>s, obtén el valor absoluto de su resta y comprueba si es menor que un valor muy pequeño, por ejemplo: <tt>abs(a - b) < 0.0001</tt>.",
            "description_en": "Returns <tt>true</tt> if both values are the same, or <tt>false</tt> if they are not. Be careful with the precision problems on floating-point values! A computer cannot represent decimals with infinite precision, so two operations that should give the same theoretical result might give results which are very close but not fully equal. To compare <tt>float</tt> values, get the absolute value of their subtraction and check the value stays bellow a threshold, for example: <tt>abs(a - b) < 0.0001</tt>."
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si los valores son diferentes, o <tt>false</tt> si no lo son. Ver anotación en <a href='#float::-e--e-:float_float'>==</a> sobre la precisión de los valores con coma flotante.",
            "description_en": "Returns <tt>true</tt> if the values are different, or <tt>false</tt> if they are not. See notes in <a href='#float::-e--e-:float_float'>==</a> about the precision of floating-point values."
        }, {
            "name": "\\l",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es menor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is lower than the second, or <tt>false</tt> if it is not."
        }, {
            "name": "\\g",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es mayor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is greater than the second, or <tt>false</tt> if it is not."
        }, {
            "name": "sqrt",
            "returns": 3,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve la raíz cuadrada.",
            "description_en": "Returns the square root."
        }, {
            "name": "Int",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Convierte un valor en coma flotante a entero.",
            "description_en": "Casts a floating-point value to an integer."
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}]
        }, {
            "name": "MIN",
            "returns": 3,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "numero_a", "name_en": "number_a", "type": 3, "is_ptr": false}, {
                "name": "numero_b",
                "name_en": "number_b",
                "type": 3,
                "is_ptr": false
            }],
            "description": "Devuelve el valor mínimo entre los dos valores dados.",
            "description_en": "Of the two given values, this function returns the minimum."
        }, {
            "name": "MAX",
            "returns": 3,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "numero_a", "name_en": "number_a", "type": 3, "is_ptr": false}, {
                "name": "numero_b",
                "name_en": "number_b",
                "type": 3,
                "is_ptr": false
            }],
            "description": "Devuelve el valor máximo entre los dos valores dados.",
            "description_en": "Of the two given values, this function returns the maximum."
        }, {
            "name": "CLAMP",
            "returns": 3,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {
                "name": "number",
                "type": 3,
                "is_ptr": false
            }, {"name": "number", "type": 3, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": true}, {"name": "number", "type": 2, "is_ptr": false}],
            "description": "Asigna el <a href='#bool'>valor de verdad</a> dado a la derecha, a la referencia a la izquierda del operador.",
            "description_en": "Assigns the <a href='#bool'>boolean value</a> at the right to the reference at the left."
        }, {
            "name": "!",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "description": "Niega el valor de verdad. Es decir, si es <tt>true</tt> devolverá <tt>false</tt>, y si es <tt>false</tt> devolverá <tt>true</tt>.",
            "description_en": "Negates the boolean value. Therefore, if it is <tt>true</tt> the operator returns <tt>false</tt>, and if it is <tt>false</tt> it returns <tt>true</tt>."
        }, {
            "name": "\\a\\a",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "description": "Realiza la operación lógica <i>AND</i> (intersección / multiplicación lógica) entre los valores. El valor resultante será <tt>true</tt>, si y solo si ambos argumentos son <tt>true</tt>.",
            "description_en": "Performs a logical <i>AND</i> operation (logical intersection / multiplication). The returned value will be <tt>true</tt> if and only if both arguments are <tt>true</tt>."
        }, {
            "name": "||",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "description": "Realiza la operación lógica <i>OR</i> (unión / suma lógica) entre los valores. El valor resultante será <tt>true</tt> si cualquier uno de los argumentos es <tt>true</tt>.",
            "description_en": "Performs a logical <i>OR</i> operation (logical union / addition). The returned value will be <tt>true</tt> if any of the arguments is <tt>true</tt>."
        }, {
            "name": "^",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 4, "is_ptr": false}]
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 4,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 4, "is_ptr": true}, {"name": "number", "type": 4, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 5, "is_ptr": true}, {"name": "number", "type": 5, "is_ptr": false}],
            "description": "Asigna la cadena de texto a la derecha del operador a la referencia indicada a la izquierda.",
            "description_en": "Assigns the text string at the right of the operator to the reference indicated at the left."
        }, {
            "name": "StrCmp",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "a", "type": 5, "is_ptr": false}, {"name": "b", "type": 5, "is_ptr": false}],
            "description": "Compara las dos cadenas de texto hasta encontrar el primer carácter diferente. Luego devuelve un valor estrictamente menor que 0 si el primer carácter distinto es menor en <tt>a</tt> que en <tt>b</tt>, exactamente 0 si ambas cadenas son iguales o un valor mayor que 0 si el primer carácter distinto es mayor en <tt>a</tt> que en <tt>b</tt>. Por ejemplo:<br><tt>StrCmp(\"Casa\", \"Cara\")</tt> devolverá un <a href='#int'>int</a> estrictamente mayor que <tt>0</tt>, porque <i>s</i> es mayor que <i>r</i>. Sin embargo, <tt>StrCmp(\"Casa\", \"Cava\")</tt> devolverá un valor menor que <tt>0</tt>, y <tt>StrCmp(\"Casa\", \"Casa\")</tt> devolverá exactamente cero.",
            "description_en": "Compares the two strings until it finds the first different character. Then, it returns a value strictly lower than zero if the first character is lower in <tt>a</tt> than in <tt>b</tt>, exactly zero if both strings are equal or a value bigger than zero if the first different character is bigger in <tt>a</tt> than in <tt>b</tt>. For example:<br><tt>StrCmp(\"Light\", \"Line\")</tt> will return a value lower than zero, because <i>g</i> is lower than <i>n</i>. However, <tt>StrCmp(\"Line\", \"Light\")</tt> will return a value greater than zero, and <tt>StrCmp(\"Caesar\", \"Caesar\")</tt> will return exactly zero."
        }, {
            "name": "StrCat",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "destino", "name_en": "target", "type": 5, "is_ptr": true}, {
                "name": "extra",
                "type": 5,
                "is_ptr": false
            }],
            "description": "Guarda en la referencia <tt>destino</tt> el resultado de concatenar el valor de <tt>extra</tt> al final de <tt>destino</tt>. Por ejemplo: <pre>str miCadena = \"Hola \"; // Note el espacio extra al final<br>StrCat(miCadena, \"Cesar\"); // Ahora miCadena contiene \"Hola Cesar\"</pre> <strong>Cuidado: ¡Esta función no retorna ningún valor!</strong> (para eso consulta <a href='#str::-p-:str_str'>el operador suma de str</a>).",
            "description_en": "Saves into <tt>target</tt> the result of appending the value of <tt>extra</tt> at the end. For example: <pre>str myStr = \"Hi \"; // Notice the extra space at the end<br>StrCat(myStr, \"Caesar\"); // Now myStr contains \"Hi Caesar\"</pre> <strong>Warning: This function does not return any value!</strong> (to do this you may check <a href='#str::-p-:str_str'>the sum operation over str</a>)."
        }, {
            "name": "ParseStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "string", "type": 5, "is_ptr": false}, {"name": "reference", "type": 5, "is_ptr": true}]
        }, {
            "name": "StrStr",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "pajar", "name_en": "haystack", "type": 5, "is_ptr": false}, {
                "name": "aguja",
                "name_en": "needle",
                "type": 5,
                "is_ptr": false
            }],
            "description": "Devuelve <tt>true</tt> si el <tt>pajar</tt> contiene la <tt>aguja</tt>, es decir, si <tt>aguja</tt> es una subcadena de <tt>pajar</tt>.",
            "description_en": "Returns <tt>true</tt> if it finds <tt>needle</tt> inside <tt>haystack</tt>, i.e. if the string in <tt>needle</tt> is a substring of that in <tt>haystack</tt>."
        }, {
            "name": "GetFromStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetFromStrToEOL",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "+",
            "returns": 5,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "description": "Devuelve el resultado de concatenar ambas cadenas.",
            "description_en": "Returns the concatenation of both strings."
        }, {
            "name": "FindChrPos",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "cadena", "name_en": "string", "type": 5, "is_ptr": false}, {
                "name": "caracter",
                "name_en": "character",
                "type": 1,
                "is_ptr": false
            }],
            "description": "Devuelve la posición (empezando en 0) en la que aparece por primera vez el carácter con el valor <a href='https://ascii.cl/es/'>ASCII</a> indicado por <tt>caracter</tt> en la cadena <tt>cadena</tt>.<br>Relacionado: <a href='#GetChr:str_int'>GetChr</a>.",
            "description_en": "Returns the position (starting by 0) of the first appearance of the character with the <a href='https://ascii.cl/'>ASCII</a> value indicated by <tt>character</tt> in the string <tt>string</tt>.<br>Related: <a href='#GetChr:str_int'>GetChr</a>."
        }, {
            "name": "GetChr",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "cadena", "name_en": "string", "type": 5, "is_ptr": false}, {
                "name": "n",
                "type": 1,
                "is_ptr": false
            }],
            "description": "Devuelve el valor <a href='https://ascii.cl/es/'>ASCII</a> del n-ésimo carácter (comenzando en 0) de la cadena <tt>cadena</tt>.<br>Relacionado: <a href='#FindChrPos:str_int'>FindChrPos</a>.",
            "description_en": "Returns the <a href='https://ascii.cl/'>ASCII</a> value of the n-th character (starting by 0) of the string <tt>string</tt>.<br>Related: <a href='#FindChrPos:str_int'>FindChrPos</a>."
        }, {
            "name": "IsNull",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "StrLen",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "StrMid",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "texto", "name_en": "text", "type": 5, "is_ptr": false}, {
                "name": "n0",
                "type": 1,
                "is_ptr": false
            }, {"name": "n1", "type": 1, "is_ptr": false}]
        }, {
            "name": "Str2Int",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "description": "Convierte la cadena indicada a <a href='#int'>int</a>, interpretándola como un número entero en base 10.",
            "description_en": "It converts the passed string to an <a href='#int'>int</a>, interpreting it as a whole number in base 10."
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "a", "type": 5, "is_ptr": false}, {"name": "b", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambas cadenas son iguales, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both strings are equal, or <tt>false</tt> otherwise."
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "a", "type": 5, "is_ptr": false}, {"name": "b", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si las cadenas son distintas, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if the strings are different, or <tt>false</tt> otherwise."
        }, {
            "name": "IsFlagSet",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetFlag",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "Point",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "x", "type": 1, "is_ptr": false}, {"name": "y", "type": 1, "is_ptr": false}],
            "description": "Crea un <a href='#point'>punto</a> con las coordenadas <i>x</i> e <i>y</i> dadas.",
            "description_en": "Creates a <a href='#point'>point</a> with the given <i>x</i> and <i>y</i> coordinates."
        }, {
            "name": "x",
            "returns": 1,
            "returns_ptr": true,
            "of": 6,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia al valor del punto en el eje <i>x</i> (coordenada <i>x</i> del punto). Ver <a href='#ptr.int::-e-:ptr.int_int'>operador de asignación de int</a>.",
            "description_en": "Value of the point in the <i>x</i> axis (<i>x</i> coordinate of the point). See <a href='#ptr.int::-e-:ptr.int_int'>assignation operator for int</a>."
        }, {
            "name": "y",
            "returns": 1,
            "returns_ptr": true,
            "of": 6,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia al valor del punto en el eje <i>y</i> (coordenada <i>y</i> del punto). Ver <a href='#ptr.int::-e-:ptr.int_int'>operador de asignación de int</a>.",
            "description_en": "Value of the point in the <i>y</i> axis (<i>y</i> coordinate of the point). See <a href='#ptr.int::-e-:ptr.int_int'>assignation operator for int</a>."
        }, {
            "name": "x",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor del punto en el eje <i>x</i> (coordenada <i>x</i> del punto).",
            "description_en": "Value of the point in the <i>x</i> axis (<i>x</i> coordinate of the point)."
        }, {
            "name": "y",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor del punto en el eje <i>y</i> (coordenada <i>y</i> del punto).",
            "description_en": "Value of the point in the <i>y</i> axis (<i>y</i> coordinate of the point)."
        }, {
            "name": "Set",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "x", "type": 1, "is_ptr": false}, {"name": "y", "type": 1, "is_ptr": false}],
            "description": "Asigna las coordenadas <i>x</i> e <i>y</i> indicadas al punto referenciado.",
            "description_en": "Assigns the indicated coordinates <i>x</i> and <i>y</i> to the referenced point."
        }, {
            "name": "SetLen",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "longitud", "name_en": "length", "type": 1, "is_ptr": false}],
            "description": "Interpretando el punto como un vector, modifica los valores de <i>x</i> e <i>y</i> para que la longitud del vector sea lo más próxima posible a <tt>longitud</tt>. Por ejemplo: <pre>point miVector = Point(30, 40); // Tenemos un vector con coordenadas 30, 40<br>miVector.SetLen(5); // Ahora las coordenadas de miVector son 3, 4</pre>Relacionado: usa el método <a href='#point::Len'>point::Len</a> para obtener la longitud de un vector.",
            "description_en": "Interpreting the point as a vector, this method modifies the <i>x</i> and <i>y</i> properties for the length of this vector to be as close as possible to <tt>length</tt>. For example: <pre>point myVector = Point(30, 40); // We have a vector with coordinates 30, 40<br>myVector.SetLen(5); // Now the coordinates of myVector are 3, 4</pre>Related: use <a href='#point::Len'>point::Len</a> to obtain the length of a vector."
        }, {
            "name": "Len",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve la distancia cartesiana (aproximada) del origen (0, 0) hasta el punto, o lo que es lo mismo, devuelve la longitud del <a href='#point'>point</a> si lo interpretamos como vector. Por ejemplo: <tt>Point(3, 4).Len()</tt> devolvería 5.",
            "description_en": "Returns the (approximated) Cartesian distance from the origin (0, 0) to the point, i.e. the length of the <a href='#point'>point</a> if interpreted as a vector. For example: <tt>Point(3, 4).Len()</tt> returns 5."

        }, {
            "name": "Rot",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "grados", "name_en": "degrees", "type": 1, "is_ptr": false}],
            "description": "Rota el punto tantos grados como se indique alrededor del origen (0, 0) en sentido antihorario. Por ejemplo: <pre>point miPunto = Point(10, 0);<br>miPunto.Rot(90); // Ahora miPunto tiene coordenadas 0, 10 (ha rotado 90 grados)</pre>",
            "description_en": "Rotates the point the indicated degrees around the origin (0, 0) in anticlockwise direction. For example: <pre>point myPoint = Point(10, 0);<br>myPoint.Rot(90); // Now myPoint has coordinates 0, 10 (it has rotated 90 degrees)</pre>"
        }, {
            "name": "InRect",
            "returns": 2,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "r", "name_en": "r", "type": 7, "is_ptr": false}],
            "description_en": "Returns <tt>true</tt> if the point is inside the rectangle <tt>r</tt>, or <tt>false</tt> otherwise.",
            "description": "Devuelve <tt>true</tt> si el punto está dentro del rectángulo <tt>r</tt>, o <tt>false</tt> si no lo está."
        }, {
            "name": "IntoRect",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "Dist",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "otro", "name_en": "other", "type": 6, "is_ptr": false}],
            "description": "Devuelve la distancia cartesiana del punto a <tt>otro</tt>. Es equivalente a <a href='#point::-m-:point_point'>restar el punto al otro</a> y luego <a href='#point::Len'>obtener la longitud</a> del vector resultante.",
            "description_en": "Returns the Cartesian distance from the point to <tt>other</tt>. It is equivalent to <a href='#point::-m-:point_point'>substracting the point from other</a> and then <a href='#point::Len'>obtaining the length</a> of the resulting vector.",
        }, {
            "name": "+",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Interpretando uno como punto y el otro como vector, desplaza el punto según el vector dado. Formalmente, si las coordenadas de un punto son <i>(a, b)</i> y las del otro <i>(c, d)</i>, devuelve un punto con coordenadas <i>(a+c, b+d)</i>.",
            "description_en": "Interpreting one as a point and the other as a vector, moves the point by the given vector. Formally, if the coordinates of a point are <i>(a, b)</i> and the other <i>(c, d)</i>, returns a point with coordinates <i>(a+c, b+d)</i>."
        }, {
            "name": "-",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Devuelve el vector que va del punto indicado a la izquierda al punto indicado a la derecha del operador. Formalmente, si las coordenadas de un punto son <i>(a, b)</i> y las del otro <i>(c, d)</i>, devuelve un punto con coordenadas <i>(a-c, b-d)</i>.",
            "description_en": "Returns the vector which goes from the point indicated at the left to the point indicated at the right of the operator. Formally, if the coordinates of a point are <i>(a, b)</i> and the other <i>(c, d)</i>, returns a point with coordinates <i>(a+c, b+d)</i>."
        }, {
            "name": "*",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Interpretándolo como vector, lo prolonga multiplicando su longitud por el entero indicado. Formalmente, si las coordenadas del punto son <i>(a, b)</i> y llamamos al entero <i>c</i>, retorna el punto de coordenadas <i>(a*c, b*c)</i>.",
            "description_en": "Interpreting it as a vector, elongates the vector multiplying its length by the given integer. Formally, if the coordinates of the point are <i>(a, b)</i> and we call the integer <i>c</i>, this operator returns a point with coordinates <i>(a*c, b*c)</i>."
        }, {
            "name": "/",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Interpretándolo como vector, lo acorta dividiendo su longitud por el entero indicado. Formalmente, si las coordenadas del punto son <i>(a, b)</i> y llamamos al entero <i>c</i>, retorna el punto de coordenadas <i>(a/c, b/c)</i>.",
            "description_en": "Interpreting it as a vector, shortens the vector dividing its length by the given integer. Formally, if the coordinates of the point are <i>(a, b)</i> and we call the integer <i>c</i>, this operator returns a point with coordinates <i>(a/c, b/c)</i>."
        }, {
            "name": "Dist",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "a", "type": 6, "is_ptr": false}, {"name": "b", "type": 6, "is_ptr": false}],
            "description": "Devuelve la distancia cartesiana de <tt>a</tt> a <tt>b</tt> (ver <a href='#point::Dist:point'>point::Dist</a>).",
            "description_en": "Returns the Cartesian distance from <tt>a</tt> to <tt>b</tt> (see <a href='#point::Dist:point'>point::Dist</a>)."
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": true}, {"name": "number", "type": 6, "is_ptr": false}],
            "description_en": "Assigns a point to a point reference (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignation operator</a>).",
            "description": "Asigna un punto a una referencia a un punto (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>)."
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos puntos coinciden, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if the coordinates of both points match, otherwise it returns <tt>false</tt>."
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos puntos son distintas, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if both points are different, otherwise it returns <tt>false</tt>."
        }, {
            "name": "left",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "top",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "right",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "bottom",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "width",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "height",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "left",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "top",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "right",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "bottom",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "Set",
            "returns": 0,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Center",
            "returns": 6,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IntersectRects",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "AddRects",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": true}, {"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 8, "is_ptr": true}]
        }, {
            "name": "[",
            "returns": 1,
            "returns_ptr": true,
            "of": 8,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "resize",
            "returns": 0,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "find",
            "returns": 1,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 9, "is_ptr": true}, {"name": "number", "type": 9, "is_ptr": true}]
        }, {
            "name": "[",
            "returns": 5,
            "returns_ptr": true,
            "of": 9,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 9, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "resize",
            "returns": 0,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "find",
            "returns": 1,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 10, "is_ptr": true}, {"name": "number", "type": 10, "is_ptr": true}]
        }, {
            "name": "[",
            "returns": 5,
            "returns_ptr": true,
            "of": 10,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 10, "is_ptr": true}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "property",
            "params": []
        }, {
            "name": "erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "exists",
            "returns": 2,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "DumpStack",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DumpCode",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetMapSize",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_RandomTerrain2",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": true}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 12, "is_ptr": true}, {"name": "number", "type": 12, "is_ptr": false}]
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Clear",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": true,
            "type": "method",
            "params": []
        }, {
            "name": "AsUnit",
            "returns": 13,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsHero",
            "returns": 15,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsDruid",
            "returns": 16,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsGhost",
            "returns": 17,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsTower",
            "returns": 18,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsWagon",
            "returns": 19,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsCatapult",
            "returns": 20,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsItemHolder",
            "returns": 21,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsBarrack",
            "returns": 22,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsSacrifice",
            "returns": 23,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsFlying",
            "returns": 25,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetClassRace",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "race",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "raceStr",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "raceStrPref",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "raceStrPrefLow",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "GetRaceStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetRaceStrPref",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetRaceStrPrefLow",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "armor_slash",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "armor_pierce",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "maxhealth",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "maxstamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "sight",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "pos",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "posRH",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "damage",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "attack",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "damage_type",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "range",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "min_range",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "radius",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "IsHeirOf",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsSentry",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsGate",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsRam",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsRanged",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsMilitary",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsReligious",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsPeaceful",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsPeasant",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsPeasantAmbient",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetHealth",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetMaxHealth",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetMaxStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetSight",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetStaminaDecTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CmdCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CmdCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "SneakCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ExecDefaultCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "ExecCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "CmdDisable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "CmdEnable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "DistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "IsEnemy",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "IsAlive",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsDead",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsValidTarget",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "IsValidCaptureTarget",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "SetVisible",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "IsVisible",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetMessengerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "CanSee",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "CanAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "player",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Damage",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Heal",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HealStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetPos",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetPosSimple",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetBlind",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetDir",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Progress",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Progress",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "cmddelay",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "IsInGroup",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetName",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Select",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Deselect",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Deselect",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearSelection",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PlayAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetAnimTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "StartAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "StartDelayedAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TimeToActionMoment",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TimeToAnimFinish",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetAnim",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AddItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GiveItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "OpenItemHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 21, "is_ptr": false}]
        }, {
            "name": "PutItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 21, "is_ptr": false}]
        }, {
            "name": "DropItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "FindItem",
            "returns": 12,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveAllItems",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ExchangeItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetItem",
            "returns": 12,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RemoveItemsOfType",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetItemIndex",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}]
        }, {
            "name": "items_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "free_item_slots",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "item_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "max_items",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "ClipDestToMap",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "GetDebug",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "class",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "command",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "command",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "cmdparam",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "cmdwaiting",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "rollover_desc",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "cmdcost_gold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "cmdcost_food",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "cmdcost_pop",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "cmdcost_stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetPlayerRace",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_LastSelectionTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_GetSelection",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Place",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PlaceInHolder",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlaceEx",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlaceBlockEx",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlaceBlockEx",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_Summon",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsWaterUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetCmdEnable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetCmdEnable",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddToStoreBin",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RemoveFromStoreBin",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsInState",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ShowFloatText",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Group",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetGroupSize",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SpawnGroup",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SpawnGroupInHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SpawnGroupInHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "SpawnNamed",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ModLevel",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Union",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "name": "Intersect",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "name": "Substract",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "name": "Subtract",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "name": "ClassPlayerAreaObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ClassPlayerObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "BuildingsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UnitsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UnitsAroundSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UnitsGuardingSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UnitsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UnitsAroundSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UnitsGuardingSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnemyObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FriendlyObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ControllableObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AreaObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ObjsInRect",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ObjsInCircle",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ObjsInSight",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "VisibleObjsInSight",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ObjsInRange",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AttachedUnits",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "PartyQuery",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Damage",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Heal",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HealStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AddDefCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 27, "is_ptr": true}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "IsEmpty",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Contains",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "AddCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "SetCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetObjList",
            "returns": 26,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DistributeExperience",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AttackArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "MoveToArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "InHolder",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddToHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetAverageDirection",
            "returns": 6,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetParty",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetMessengerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetFeeding",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetNamedObj",
            "returns": 29,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsDead",
            "returns": 2,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "obj",
            "returns": 11,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "EnemyInRange",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "BestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Attack",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "GetEnterPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "GetExitPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetExitPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "settlement",
            "returns": 28,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "IsBroken",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsCentralBuliding",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RRepair",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetExitVector",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PopTransportationUI",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetGlobalSpell",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GlobalSpellStart",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GlobalSpellStart",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GlobalSpellStop",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetGlobalSpellData",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WindOfWisdom",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Starvation",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SoothingRain",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DivineSacrifice",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetSoothingRainObjects",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsStonehengeControlable",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StonehengeNumControllingMages",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "itemtypes",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "minlevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "levelperitem",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "ClearDamageTaken",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CountMages",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetUITarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "GetUITarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetNumSentrySlots",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetSentryClassName",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Research",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetResearchHack",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PlaceCatapult",
            "returns": 20,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsBuilt",
            "returns": 2,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetBuilt",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetBuildFrame",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetCatapultAttackPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "RotateTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "Attack",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "BestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetPointOnTarget",
            "returns": 6,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "InRange",
            "returns": 2,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "AttackWait",
            "returns": 1,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CalcEscapeDirection",
            "returns": 6,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetCurrentTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ClearTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearTowerTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "speed",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "speed_factor",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "user",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "maxfood",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "maxstamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "experience",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "level",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "inherentlevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetSpeedFactor",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetUser",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "feeds",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetFeeding",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "Goto",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 2,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GotoEnter",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 2,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Goto",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 2,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GotoAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GotoStraight",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "Stop",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HasPath",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "dest",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "TimeWithoutWalking",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "InHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetHolderSett",
            "returns": 28,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "InShip",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ExitHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "EnterHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "GetUnitsInSameHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TrainAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "BestTrainingTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StartTraining",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StopTraining",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Attack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "AttackEveryone",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "TimeWithoutAttack",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetLastAttackTime",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestTargetInSquadSightMisZeroDamage",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestNoIndependentTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "BestTargetInSquadSightExclusive",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "BestTargetInSquadSight_PreferUndiseased",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestTargetForPos",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestTargetInRange",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsEnemyInSquadSight",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EnemiesInSight",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "InRange",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "hero",
            "returns": 15,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "AttachTo",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}]
        }, {
            "name": "DetachFrom",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}]
        }, {
            "name": "Idle",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Taunt",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetExperience",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetLevel",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IncKills",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "FormAcceptMove",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FormKeepMoving",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PathTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PathTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetParty",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetParty",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetSacrifice",
            "returns": 23,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_OnImpassable",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "max_train_1_level",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetUnexploredPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HasFreedom",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetFlags",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PathLeft",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetShipToBoard",
            "returns": 24,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetStaminaDecTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SameHolderAs",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "SetExperienceModifier",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetExperienceModifier",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetCommanded",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetCommanded",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetEntering",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetEntering",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetWalkAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetWalkAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetCarryWaterAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetCarryGoodsAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DoCarryNothing",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Disappear",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetNoselectFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetMinimapFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetNoAIFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "PathDestFound",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ForceIdle",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Talk",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsCursed",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsDiseased",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetBestCurseTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetBuilding",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}]
        }, {
            "name": "HasSpecial",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetSpecial",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SpecialName",
            "returns": 5,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetParryMode",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetParryMode",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "Curse",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Bless",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Disease",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RamBestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetPlayerUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetPlayerUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "InvalidateRegenConsts",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Mutate",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ExpFromLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LevelFromExp",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "FormKeepMoving",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "FormSetupAndMoveTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "FormSetupAndMoveTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "TimePastLastAttack",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LastAttacker",
            "returns": 11,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "army",
            "returns": 26,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "maxarmy",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "IsHeroArmyFull",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FormRadius",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FormPathLeft",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HasArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetFormation",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "formation",
            "returns": 5,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "DetachArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetRandomHeroClass",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CancelArmyBoard",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetFinalPartyOrientation",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetFinalPartyOrientation",
            "returns": 6,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HasFinalPartyOrientationRequest",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HeroSkillId",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetSkill",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSkill",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UseSkill",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HeroSkillName",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AvailableSkillPoints",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SkillInEffect",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "autocast",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetAutocast",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "FindUnitToHeal",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FindUnitToLearn",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FindUnitToHide",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetBestCrippleTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FindUnitToRevitalize",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FindUnitBelowILevel",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "FindUnitBelowILevel",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetStonehenge",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}]
        }, {
            "name": "GetJupiterAngerTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetJupiterAngerTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "SetSummoningDeath",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "IsSummoningDeath",
            "returns": 2,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_ScriptEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_ScriptEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_DialogEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_DialogEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_de",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_Choose",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_ListClasses",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_ListFolder",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_ListFolderEx",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_ListTerrains",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetMiniMapRect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "name": "BuildMiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ToggleZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ShowZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HideZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_ZoomMapLastShownTime",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "amount",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "restype",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LoadFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LoadGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "loyalty",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DecreaseLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "StartCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StopCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 28, "is_ptr": true}, {"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "name": "GetSettlement",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "population",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "max_population",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "ForceAddUnit",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "AddUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "IsFull",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "name": "Units",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnitsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "max_units",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "max_health",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "max_stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "loyalty",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DecreaseLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "gold",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "max_gold",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "max_food",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AddToPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AddToMaxPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "player",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "loan",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "SetLoan",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetCentralBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FoodProduction",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GoldProduction",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetFoodProduction",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetGoldProduction",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Buildings",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Find",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FirstBldClass",
            "returns": 5,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CanBeCaptured",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "AllowCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "ObjectsAround",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetEnterExit",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetWaterSource",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetGoodsSource",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetFixSite",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetEnterExit",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetWaterSource",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetGoodsSource",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetFixSite",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MostDamagedBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearDamageTaken",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FindNearEnterExit",
            "returns": 6,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "IsCity",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PopulationDied",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GoldConverted",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GoldSpent",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSentry",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PutSentry",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DelSentry",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetNumSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddSentries",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetMaxSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddMaxSentries",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EvalSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "HasItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveAll",
            "returns": 0,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CreateMuleFood",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CreateMuleGold",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CreateBoatFood",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CreateBoatGold",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CreateShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SendMule",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SendBoat",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StartSupplyFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "name": "StopSupply",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnloadWagon",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 19, "is_ptr": false}]
        }, {
            "name": "supplied",
            "returns": 28,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 26, "is_ptr": true}, {"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "[",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Contains",
            "returns": 2,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Add",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Remove",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ClearDead",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddList",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "name": "RemoveList",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "name": "Clear",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "AddCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "ExecDefaultCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "ExecCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "SetCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetCanExecCmd",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FilterClosest",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "InHolder",
            "returns": 1,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddToHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetVisible",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "ObjPlayer",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ObjEnemy",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ObjAlly",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ObjClass",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ObjSpecial",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ObjInjured",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ObjFullStamina",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Find",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FindAlly",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FindEnemy",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Init",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetActor",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "SetDefActor",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ActorPresent",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ConvResult",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ConvSetResult",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": true,
            "type": "method",
            "params": []
        }, {
            "name": "RunConv",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_ListConvs",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EnvWriteString",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteInt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteString",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteInt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteString",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteInt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteString",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteInt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvWriteObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvList",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvList",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvFind",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnvExport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_ClearEnv",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RegisterSettlementUpgrade",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RegisterPlayerUpgrade",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunSequence",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_SequencesStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsRunning",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsWaiting",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsFinished",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ViewPos",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "View",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "PlayMusic",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "MusicPlaying",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetSpeed",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSpeed",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TogglePause",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_Run",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ToggleFPS",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetConst",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetConstStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "rand",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "BlockUserInput",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnblockUserInput",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ExploreCircle",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ExploreArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Party",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetTime",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EndGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "IsMultiplayer",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelAvgLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelAvgFood",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelAvgStamina",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelAvgArmor",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelAvgDamage",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelHealth",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelMaxHealth",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LockView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnlockView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsViewLocked",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StartViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "StopViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StartViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 29, "is_ptr": false}]
        }, {
            "name": "SetDifficulty",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetDifficulty",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetMapRect",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MapName",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ChangeMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetNextSeason",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetTeamMilitaryScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetTeamPowerScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetTeamAchievementsScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetTeamOverallScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetVec",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsPassable",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "IsPassable3x3",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "BlockMiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "IsExplored",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SelectionGold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelectionFood",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "NoTents",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RandomOffset",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RandomPointInCircle",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PlayMovie",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Translate",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Translatef",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Translatef",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Translatef",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SaveAdventure",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "WasSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WasSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetGlobalBloodlust",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "RevealHiddenEnemyUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "InvalidateDamageFormulaParams",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SwapSelectedObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Crash",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AreaCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "DisableArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnableArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetRandomPointInArea",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AreaDistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_AdvPlaceAreaRect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 7,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_AdvPlaceAreaCirc",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AddDruid",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 16, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RemoveDruid",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 16, "is_ptr": false}]
        }, {
            "name": "Consume",
            "returns": 1,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "IsEmpty",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MistAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsInvisibility",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Druids",
            "returns": 26,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UpdateCoverOfMercy",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GiveNote",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RemoveNote",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ShowNotes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearNotes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsNoteActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 13,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DiplCeaseFire",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "DiplShareView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "DiplShareControl",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "DiplShareSupport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "DiplGetCeaseFire",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DiplGetShareView",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DiplGetShareControl",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DiplGetShareSupport",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ClearDiplomacy",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RecreateExploration",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsGate",
            "returns": 31,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsOpened",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsClosed",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AreEnemiesAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AreFriendsAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LookAround",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "OpenNow",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CloseNow",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AsTeleport",
            "returns": 32,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "destination",
            "returns": 32,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "exit_vector",
            "returns": 6,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "Traverse",
            "returns": 0,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ShowBuildAnimation",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "NotifyBoardUnit",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "AreUnitsToBoard",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestCandidateToBoard",
            "returns": 13,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BoardUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "NotifyBoardUnitCancel",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "NotifyShipBoardingCancel",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnboardUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "name": "UnboardAllUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsPointInWater",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "FindPointToStay",
            "returns": 6,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnitsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UnitsMax",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Idle",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HasAiTransport",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetUnitsOnBoard",
            "returns": 26,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ApplyAiTransport",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearAiTransport",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetTransPt",
            "returns": 6,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsBuilding",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "NumUnitsToBoard",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RecalcBonuses",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AddBonus",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RemoveBonus",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ItemUsed",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetUseCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "use_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "custom_data",
            "returns": 1,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "id",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "display_name",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetCustomData",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetThis",
            "returns": 12,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PlayAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsInAir",
            "returns": 2,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsLanding",
            "returns": 2,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "z",
            "returns": 1,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "PickFlyingPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PickLandingPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "FindNearBird",
            "returns": 25,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AdjustFlyDir",
            "returns": 0,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": true}]
        }, {
            "name": "GetTerrainHeight",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetVecByDir",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetAngleByDir",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetDirByAngle",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MapSize",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetAnimDuration",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "dir",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "OnLeft",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "NumSquads",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSquad",
            "returns": 33,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSquad",
            "returns": 33,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Player",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "No",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "State",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "StateTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Size",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SrcGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DestGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GAIKAIn",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Leader",
            "returns": 13,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Units",
            "returns": 26,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ClrCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "SetCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "Siege",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Siege",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SendTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIDest",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "OrderDest",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DelOrder",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetFlags",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TestFlags",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetFlags",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Lock",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Unlock",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LastFightTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "InHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "pos",
            "returns": 6,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "maxhealth",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "FoodComing",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SendFoodWagon",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EvalAttach",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "HasFreedom",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GAIKACount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ID",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Empty",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Type",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Center",
            "returns": 6,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetDestPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "settlement",
            "returns": 28,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}]
        }, {
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Eval",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "EvalNeighbors",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "Count",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "GetPriority",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetLAIKA",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CalcPriority",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetPriority",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Prioritized",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Explored",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Explore",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "CanExplore",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Revealed",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LastSeen",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "NoAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetNoAttack",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "NoRecruit",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetNoRecruit",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetDistToPlayers",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "GetDistToArmies",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "MinNeed",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MaxNeed",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Recruit",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "GetStrat",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "StratRunning",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RunStrat",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllEnemiesInHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MilitaryPresence",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Neighbors",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Neighbor",
            "returns": 34,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetNoAttack",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetNoRecruit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "AreaAINoRecruit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "AreaAINoAttack",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "AreaAIMaxPriority",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "AreaAISetAttackOptimism",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetMAIKA",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {
                "name": "number",
                "type": 34,
                "is_ptr": false
            }, {"name": "number", "type": 34, "is_ptr": false}]
        }, {
            "name": "DumpMAIKA",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UnitsInHolderEval",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EOL",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Rewind",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Next",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Cur",
            "returns": 33,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Size",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Lock",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Unlock",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Add",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "name": "Select",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Train",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "NumTowers",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "NumTowersBroken",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "NumGates",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "NumGatesBroken",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EvalDefences",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FindCatapultSpot",
            "returns": 6,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "BestGate",
            "returns": 31,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "OpenAllGates",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IdleAllGates",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsVeryBroken",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CanBeCaptured",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsStronghold",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsVillage",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsOutpost",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsTTent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsShipyard",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsAlly",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsEnemy",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsOwn",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsIndependent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "IsIndependentGuarded",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetRel",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MaxPopulation",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SupplyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "BestToSupply",
            "returns": 28,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SettlementCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FindRuins",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AttackSetForTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "BestTargetInGAIKA",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AI",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 28,
                "is_ptr": false
            }, {"name": "number", "type": 26, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 28, "is_ptr": false}, {
                "name": "number",
                "type": 26,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIBreakScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIBreakScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIExecCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsAIShow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ScrollTo",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "BestBarrack",
            "returns": 22,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetGaikaCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetSquadCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "FindBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FindResearchLab",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsBarrack",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetToIdx",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "name": "IdxToSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MaxSetIdx",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AIH_UnitBuilt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "name": "AIGetPlayer",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AIO_SendSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIO_Train",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ViewSlot",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Squadize",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {
                "name": "number",
                "type": 35,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsResearched",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsResearched",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsResearching",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsResearching",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetCmdCost",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "GetCmdStaminaCost",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MaxAffordCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "CanResearch",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Research",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Reserve",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StopReserving",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ReserveFor",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GoldSpentOnArmy",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SpentGoldOnArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GoldSpentOnTech",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SpentGoldOnTech",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CheckTechBudget",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaterLsa",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LandLsa",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HeroArmiesFullPerc",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllyMilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllyMilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyMilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyMilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyPlayersEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "Strongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllyStrongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyStrongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Villages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllyVillages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyVillages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Outposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllyOutposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyOutposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AllyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "EnemyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CheckLsaPath",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Ships",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EnemyShips",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AllyShips",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ShipNeeds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ClrShipNeeds",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IncShipNeeds",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsWaterLsa",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIAssist",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIStop",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "NearestHospital",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "NearestSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "NearestSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "NearestSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "GetSettlements",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetEconomyScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RunEconomyScript",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EconomyScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetTacticScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RunTacticScript",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TacticScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetGaika",
            "returns": 34,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CancelSupply",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Inside",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "name": "Outside",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "name": "UpgradeBestBarrack",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RepairAll",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PrepareAiTransportShip",
            "returns": 24,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "CheckLP",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SendSquadToLsaX",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetMouseXY",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RUType",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UTech",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UTrainCmd",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CheckUEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CalcGoAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TakeNearbyItems",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HasItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UseItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "FindTeleport",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "UseTeleport",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "name": "InvadeThroughGate",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "Eval",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "EvalGroup",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "BestMDPos",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "BestProtPos",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsProtected",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 6,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "NeedTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetCounterUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 8, "is_ptr": true}]
        }, {
            "name": "GetClassHealt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetTrainGold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsAIPlayer",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIGetSkillToDevelop",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "name": "SetNoAIFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetAIControlledUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "TSRecruitArmy",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TSGetAllBarracks",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TSGetAllArenae",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TSGetAllTemples",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BestArena",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ArenaTrainCmd",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TSArenaRecruit",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ArenaUTech",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ArenaUType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TSRecruitHero",
            "returns": 15,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TSResearch",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "TSTempleRecruit",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "BestTemple",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TempleUType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TempleUTrain",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TSAdvHeroSkills",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 8, "is_ptr": true}]
        }, {
            "name": "SelSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SelSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SelSquadLeader",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Breakpoint",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PrGAIKAStrat",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ViewGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "vg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SS_STR",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GS_STR",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "IsTeutonTent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AIV",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIV",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "DbgAI",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DbgArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "dp",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "LsaStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIVar",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIVar",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetAIVar",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetAIVar",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "AppendFile",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "cls",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "quit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "switch",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_Black",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_Place",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_InvalidateAllToggle",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_ToggleInvRects",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_SetCursor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ProfileStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ProfileStop",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PerlinTest",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ShrinkEntities",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ReloadConstIni",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BuildSPF",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BuildRLEMMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PrintMemStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DumpObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ConvTerrains",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CheckClasses",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MakePassable",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "CurPlayer",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ToggleFog",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SetFog",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "ExploreAll",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Invalidate",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Render",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ScreenShot",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ActivateScreenShots",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ToggleScreenShots",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DebugSelected",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Save",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ExportObjs",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ExportTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Load",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Save",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "Load",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ChMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "MousePos",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Conv",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ToggleVis",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Spawn",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RemoveDecors",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Explorer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Dlg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "DumpStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "sel",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "selo",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "selu",
            "returns": 13,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "selh",
            "returns": 15,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "selb",
            "returns": 14,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "sels",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "selsq",
            "returns": 33,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "selg",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Desync",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PFPersist",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "AddFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RemFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RebuildPass",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Splash",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "F5",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FlatTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Pause",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TestLoad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TestSave",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "sd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_RedrawAll",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "InsDecor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DelDecor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "PreLit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DeepWater",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RayOfLight",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DumpFuncToXML",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "USR",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ToggleLD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ChangeFormation",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "UndoMemory",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AdvExplorer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ae",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TTest",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "TTestf",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SaveEdit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EdgeOfForever",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TestAdventure",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TestAdventureDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SettlementCount",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "LSA",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GAIKAFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ESG",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GS",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "cvar1",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "cvar1",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "cvar2",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "cvar2",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "TogglePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "DisablePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EnablePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetAnimState",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ClearDecors",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GenTransTables",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetItem",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_PlayersAlly",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlayersShareControl",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlayersShareView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlayersShareSupport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_PlayersMakeEnemies",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "_chs",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_SetNextSeason",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IngameDebugSelected",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "gmp",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GenHelpCmdIcons",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_EnableAllSkills",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "gdb",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_handles",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetFormDsc",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetPlayerSettRace",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetSettRace",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetShortcutSel",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "name": "GetShortcutSel",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UIShowTab",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "UITabShown",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "BlurTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ShowFlatTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "clock",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_DbgSel",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "WaitIdle",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitObjInQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitQueryCountBetween",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitCommonObjects",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitHealthBetween",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitSettlementCapture",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitSettlementAllied",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitEnvStringEqual",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitEnvIntBetween",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitAddNote",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitRemoveNote",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitConvRequest",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": true
            }, {"name": "number", "type": 11, "is_ptr": true}]
        }, {
            "name": "WaitUnitsInArea",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitIdleUnitsInArea",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitEmptyQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitNonEmptyQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitConvRequest",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "EndConvSetup",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "WaitPlayerChat",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {
                "name": "number",
                "type": 5,
                "is_ptr": true
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ShowLastNotificationPos",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "UserNotification",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "HasStarvingArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HasStarvingArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "StarvingArmyPos",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "StopAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsAIHelperRunning",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "pfd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "testpf",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFDone",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFFindAreas_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFInitData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFInitDirectionData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFInitPointToAreaData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFInitConnectData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFCalcConnectHighRes_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFIncreaseConnect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "SPFIncreaseConnect_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetInnState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetInnState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetInnState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "SetInnState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GenTransGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "MousePtm",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Goto",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ToggleFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "Catch",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ClampToMap",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RemakeVis",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HeroStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EqualHeroes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_ui",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_di",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_bi",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "_itools",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "StartPlayerScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "StopPlayerScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "GetPlayerScriptsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetPlayerScript",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ShowAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "HideAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "ShowAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "HideAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetPlayerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "SetPlayerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 1,
                "is_ptr": false
            }, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "ShowNotification",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ShowHint",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "ShowTutorial",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {
                "name": "number",
                "type": 5,
                "is_ptr": false
            }, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "name": "HideNotification",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "TutorialActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "HintsActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "EnableHintsAndTutorials",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DisableHintsAndTutorials",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "AreHintsAndTutorialsEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "MistAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "MagicActionEnd",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "CoverOfMercyAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetDefenderCls",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetDefendersMax",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetDefendersOut",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetStartLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetEndLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetOutpostFood",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "PrintMsg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "_cr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "GetTerritoryState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetTerritoryState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ConquestBonus",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "FormDescription",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "SetControlFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "GetControlFlag",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "ControlledNeighbors",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetFreedom",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "name": "EndGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {
                "name": "number",
                "type": 2,
                "is_ptr": false
            }, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "name": "IsArmyOutside",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "RandomPathCast",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "DiplAreAllied",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "GetLastAttacker",
            "returns": 11,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "name": "ApproachingSquads",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetUseCount",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "SetUseCount",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "name": "WaitForMapChange",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }]
    }
