const THE_OBJ = (function () {
    const THE_CLASSES = [
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
            "description": "Un rectángulo en dos dimensiones alineado con los ejes, definido por los valores en los que se sitúan sus cuatro lados. Utiliza <a href='ptr.rect::Set:int_int_int_int'>rect::Set</a> para fijar los lados.",
            "description_en": "An axis-aligned rectangle in 2 dimensions, defined by the values in which their four sides reside. Use <a href='ptr.rect::Set:int_int_int_int'>rect::Set</a> to select the sides."
        },
        {
            "name": "IntArray",
            "description": "Una lista ordenada y de tamaño fijo de números enteros (<a class='type' href='#int'>int</a>), accesibles mediante el operador <a href='#ptr.IntArray::-c-:ptr.IntArray_int'><tt>[]</tt></a>.",
            "description_en": "A sorted, fixed-size list of integer numbers (<a class='type' href='#int'>int</a>), accessible through the <a href='#ptr.IntArray::-c-:ptr.IntArray_int'><tt>[]</tt></a> operator."
        },
        {
            "name": "StrArray",
            "description": "Una lista ordenada y de tamaño fijo de cadenas de texto (<a class='type' href='#str'>str</a>), accesibles mediante el operador <a href='#ptr.StrArray::-c-:ptr.StrArray_int'><tt>[]</tt></a>.",
            "description_en": "A sorted, fixed-size list of text strings (<a class='type' href='#str'>str</a>), accessible through the <a href='#ptr.StrArray::-c-:ptr.StrArray_int'><tt>[]</tt></a> operator."
        },
        {
            "name": "StrMap",
            "description": "Un diccionario (es decir, un conjunto de pares clave-valor) en el que tanto las claves como los valores son cadenas de texto (<a class='type' href='#str'>str</a>).",
            "description_en": "A dictionary (i.e., a set of key-value pairs) in which both keys and values are of type string (<a class='type' href='#str'>str</a>)."
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
    ];

    function defaultAssignDescription(classIdx) {
        return `Asigna un <a class='type' href='#${THE_CLASSES[classIdx].name}'>${THE_CLASSES[classIdx].name}</a> a una referencia a <a class='type' href='#${THE_CLASSES[classIdx].name}'>${THE_CLASSES[classIdx].name}</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).`;
    }

    function defaultAssignDescriptionEn(classIdx) {
        return `Assigns the given <a class='type' href='#${THE_CLASSES[classIdx].name}'>${THE_CLASSES[classIdx].name}</a> to a reference to <a class='type' href='#${THE_CLASSES[classIdx].name}'>${THE_CLASSES[classIdx].name}</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).`;
    }

    function defaultCast(fromIdx, toIdx) {
        return `Devuelve el <a class='type' href='#${THE_CLASSES[fromIdx].name}'>${THE_CLASSES[fromIdx].name}</a> como <a class='type' href='#${THE_CLASSES[toIdx].name}'>${THE_CLASSES[toIdx].name}</a>, suponiendo que, en efecto, es una instancia este tipo.`;
    }

    function defaultCastEn(fromIdx, toIdx) {
        return `Returns this <a class='type' href='#${THE_CLASSES[fromIdx].name}'>${THE_CLASSES[fromIdx].name}</a> as <a class='type' href='#${THE_CLASSES[toIdx].name}'>${THE_CLASSES[toIdx].name}</a>, assuming it is, indeed, an instance of this type.`;
    }

    return {
        "classes": THE_CLASSES,
        "funcs": [{
            "name": "Sleep",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "milisegundos", "name_en": "milliseconds", "type": 1, "is_ptr": false}],
            "description": "Detiene la ejecución el tiempo indicado por el parámetro milisegundos.",
            "description_en": "It pauses the execution of the script for the time indicated by the \"milliseconds\" parameter",
            "id": "Sleep:int"
        }, {
            "name": "KillScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "KillScript"
        }, {
            "name": "+=",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Añade la cantidad del <tt>int</tt> situado a la derecha del operador a la referencia a <tt>int</tt> situada a la izquierda, y retorna también el entero resultante. Ejemplo: <pre>int a;  // Declaramos a<br>a = 5;  // Guardamos 5 en la variable a<br>a += 2; // Ahora a contiene 7</pre>",
            "description_en": "Add the value of the <tt>int</tt> at the right of the operator onto the reference to <tt>int</tt> at the left, and also return the resulting integer value. Example: <pre>int a;  // We declare a<br>a = 5;  // We save 5 in the variable a<br>a += 2; // Now a contains 7</pre>",
            "id": "ptr.int::-p--e-:ptr.int_int"
        }, {
            "name": "-=",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Substrae la cantidad del <tt>int</tt> situado a la derecha del operador de la referencia a <tt>int</tt> situada a la izquierda, y retorna también el entero resultante. Ejemplo: <pre>int a;  // Declaramos a<br>a = 5;  // Guardamos 5 en la variable a<br>a -= 2; // Ahora a contiene 3</pre>",
            "description_en": "Substract the value of the <tt>int</tt> at the right of the operator from the reference to <tt>int</tt> at the left, and also return the resulting integer value. Example: <pre>int a;  // We declare a<br>a = 5;  // We save 5 in the variable a<br>a -= 2; // Now a contains 3</pre>",
            "id": "ptr.int::-m--e-:ptr.int_int"
        }, {
            "name": "\\a",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el resultado una operación AND binaria entre los dos valores enteros.",
            "description_en": "Returns the result of a binary AND operation among both values.",
            "id": "int::-bs-a:int_int"
        }, {
            "name": "|",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el resultado una operación OR binaria entre los dos valores enteros.",
            "description_en": "Returns the result of a binary OR operation among both values.",
            "id": "int::-b-:int_int"
        }, {
            "name": "+",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es la suma de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the sum of the two given <tt>int</tt> values.",
            "id": "int::-p-:int_int"
        }, {
            "name": "-",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es la resta de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the difference between the two given <tt>int</tt> values.",
            "id": "int::-m-:int_int"
        }, {
            "name": "-",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el valor <tt>int</tt> dado pero con signo opuesto (multiplicado por -1).",
            "description_en": "Returns the given <tt>int</tt> value but with the opposite sign (multiplied by -1).",
            "id": "int::-m-:int"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Asigna el valor <tt>int</tt> dado a la referencia a <tt>int</tt> indicada (a la izquierda del operador). Ejemplo: <pre>int a; // Declaramos a, ahora es una referencia a int<br>a = 5; // Guardamos 5 en la variable a</pre>",
            "description_en": "Saves the given <tt>int</tt> value into the given <tt>int</tt> reference (at the left of the operator). Example: <pre>int a; // Declare a so it is a reference to an int<br>a = 5; // Save 5 into the variable a</pre>",
            "id": "ptr.int::-e-:ptr.int_int"
        }, {
            "name": "*",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es el producto de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the product of the two given <tt>int</tt> values.",
            "id": "int::-a-:int_int"
        }, {
            "name": "/",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve un <tt>int</tt> que es la división entera de los dos valores <tt>int</tt> dados.",
            "description_en": "Returns an <tt>int</tt> value which is the integer division of the two given <tt>int</tt> values.",
            "id": "int::-s-:int_int"
        }, {
            "name": "%",
            "returns": 1,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el módulo de la división.",
            "description_en": "Returns the remainder of the division.",
            "id": "int::%:int_int"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambos enteros son iguales, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both integer values are the same, or <tt>false</tt> if they are not.",
            "id": "int::-e--e-:int_int"
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambos enteros son distintos, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both integer values are not the same, or <tt>false</tt> if they are.",
            "id": "int::-x--e-:int_int"
        }, {
            "name": "\\l",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es menor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is lower than the second, or <tt>false</tt> if it is not.",
            "id": "int::-bs-l:int_int"
        }, {
            "name": "\\g",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es mayor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is greater than the second, or <tt>false</tt> if it is not.",
            "id": "int::-bs-g:int_int"
        }, {
            "name": "\\l=",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es menor o igual que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is lower than or equal to the second, or <tt>false</tt> if it is not.",
            "id": "int::-bs-l-e-:int_int"
        }, {
            "name": "\\g=",
            "returns": 2,
            "returns_ptr": false,
            "of": 1,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es mayor o igual que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is greater than or equal to the second, or <tt>false</tt> if it is not.",
            "id": "int::-bs-g-e-:int_int"
        }, {
            "name": "abs",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el valor absoluto del entero indicado (el mismo valor pero con signo positivo).",
            "description_en": "Returns the absolute value of the given integer (same value but positive sign).",
            "id": "abs:int"
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Write:int"
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
            "description_en": "Returns the minimum value among the two given values.",
            "id": "MIN:int_int"
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
            "description_en": "Returns the maximum value among the two given values.",
            "id": "MAX:int_int"
        }, {
            "name": "CLAMP",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "x", "type": 1, "is_ptr": false}, {
                "name": "min",
                "type": 1,
                "is_ptr": false
            }, {"name": "max", "type": 1, "is_ptr": false}],
            "description": "<p>Restringe el valor a los límites dados. Si <tt>x</tt> está contenido entre <tt>min</tt> y <tt>max</tt>, retorna <tt>x</tt>. Si <tt>x</tt> es menor que <tt>min</tt> retorna <tt>min</tt> y si es mayor que <tt>max</tt> retorna <tt>max</tt>.</p><p>Equivalente a <tt>MIN(MAX(x, min), max)</tt></p>",
            "description_en": "<p>Clamps the value between the given limits. If <tt>x</tt> is contained between <tt>min</tt> and <tt>max</tt>, this function returns <tt>x</tt>. If <tt>x</tt> is lower than <tt>min</tt>, it returns <tt>min</tt>; and if it is greater than <tt>max</tt> it returns <tt>max</tt>.</p><p>Equivalent to <tt>MIN(MAX(x, min), max)</tt></p>",
            "id": "CLAMP:int_int_int"
        }, {
            "name": "+",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un <tt>float</tt> que es la suma de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the sum of the two given <tt>float</tt> values.",
            "id": "float::-p-:float_float"
        }, {
            "name": "-",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un <tt>float</tt> que es la resta de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the difference between the two given <tt>float</tt> values.",
            "id": "float::-m-:float_float"
        }, {
            "name": "-",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve el valor <tt>float</tt> dado pero con signo opuesto (multiplicado por -1).",
            "description_en": "Returns the given <tt>float</tt> value but with the opposite sign (multiplied by -1).",
            "id": "float::-m-:float"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": true}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Asigna el valor <tt>float</tt> dado a la referencia a <tt>float</tt> indicada (a la izquierda del operador). Ejemplo: <pre>float a; // Declaramos a, ahora es una referencia a float<br>a = 5.32; // Guardamos 5.32 en la variable a</pre>",
            "description_en": "Saves the given <tt>float</tt> value into the given <tt>float</tt> reference (at the left of the operator). Example: <pre>float a; // Declare a so it is a reference to an float<br>a = 5.32; // Save 5.32 into the variable a</pre>",
            "id": "ptr.float::-e-:ptr.float_float"
        }, {
            "name": "*",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un valor <tt>float</tt> correspondiente al producto de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the product of the two given <tt>float</tt> values.",
            "id": "float::-a-:float_float"
        }, {
            "name": "/",
            "returns": 3,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve un <tt>float</tt> que es la división exacta de los dos valores <tt>float</tt> dados.",
            "description_en": "Returns an <tt>float</tt> value which is the exact division of the two given <tt>float</tt> values.",
            "id": "float::-s-:float_float"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambos valores son iguales, o <tt>false</tt> si no lo son. ¡Ten cuidado con los problemas de precisión de los valores con coma flotante! Un ordenador no puede representar decimales con infinita precisión, por lo que dos operaciones que deberían dar el mismo resultado pueden dar resultados muy parecidos pero no exactamente iguales. Para comparar <tt>float</tt>s, obtén el valor absoluto de su resta y comprueba si es menor que un valor muy pequeño, por ejemplo: <tt>abs(a - b) < 0.0001</tt>.",
            "description_en": "Returns <tt>true</tt> if both values are the same, or <tt>false</tt> if they are not. Be careful with the precision problems on floating-point values! A computer cannot represent decimals with infinite precision, so two operations that should give the same theoretical result might give results which are very close but not fully equal. To compare <tt>float</tt> values, get the absolute value of their subtraction and check the value stays bellow a threshold, for example: <tt>abs(a - b) < 0.0001</tt>.",
            "id": "float::-e--e-:float_float"
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si los valores son diferentes, o <tt>false</tt> si no lo son. Ver anotación en <a href='#float::-e--e-:float_float'>==</a> sobre la precisión de los valores con coma flotante.",
            "description_en": "Returns <tt>true</tt> if the values are different, or <tt>false</tt> if they are not. See notes in <a href='#float::-e--e-:float_float'>==</a> about the precision of floating-point values.",
            "id": "float::-x--e-:float_float"
        }, {
            "name": "\\l",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es menor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is lower than the second, or <tt>false</tt> if it is not.",
            "id": "float::-bs-l:float_float"
        }, {
            "name": "\\g",
            "returns": 2,
            "returns_ptr": false,
            "of": 3,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 3, "is_ptr": false}, {"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el primer valor es mayor que el segundo, o <tt>false</tt> si no lo es.",
            "description_en": "Returns <tt>true</tt> if the first integer value is greater than the second, or <tt>false</tt> if it is not.",
            "id": "float::-bs-g:float_float"
        }, {
            "name": "sqrt",
            "returns": 3,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Devuelve la raíz cuadrada.",
            "description_en": "Returns the square root.",
            "id": "sqrt:float"
        }, {
            "name": "Int",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Convierte un valor en coma flotante a entero, eliminando los decimales si los hubiera. Nótese que el número <strong>no</strong> se redondea al entero más cercano, sino al inmediatamente inferior.",
            "description_en": "Casts a floating-point value to an integer, removing the decimal part of the number. Notice the number <strong>is not</strong> rounded to the closest integer, but rather floored to the immediately lower one.",
            "id": "Int:float"
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "id": "Write:float"
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
            "description_en": "Of the two given values, this function returns the minimum.",
            "id": "MIN:float_float"
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
            "description_en": "Of the two given values, this function returns the maximum.",
            "id": "MAX:float_float"
        }, {
            "name": "CLAMP",
            "returns": 3,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "x", "type": 3, "is_ptr": false}, {
                "name": "min",
                "type": 3,
                "is_ptr": false
            }, {"name": "max", "type": 3, "is_ptr": false}],
            "description": "<p>Restringe el valor a los límites dados. Si <tt>x</tt> está contenido entre <tt>min</tt> y <tt>max</tt>, retorna <tt>x</tt>. Si <tt>x</tt> es menor que <tt>min</tt> retorna <tt>min</tt> y si es mayor que <tt>max</tt> retorna <tt>max</tt>.</p><p>Equivalente a <tt>MIN(MAX(x, min), max)</tt></p>",
            "description_en": "<p>Clamps the value between the given limits. If <tt>x</tt> is contained between <tt>min</tt> and <tt>max</tt>, this function returns <tt>x</tt>. If <tt>x</tt> is lower than <tt>min</tt>, it returns <tt>min</tt>; and if it is greater than <tt>max</tt> it returns <tt>max</tt>.</p><p>Equivalent to <tt>MIN(MAX(x, min), max)</tt></p>",
            "id": "CLAMP:float_float_float"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": true}, {"name": "number", "type": 2, "is_ptr": false}],
            "description": "Asigna el <a href='#bool'>valor de verdad</a> dado a la derecha, a la referencia a la izquierda del operador.",
            "description_en": "Assigns the <a href='#bool'>boolean value</a> at the right to the reference at the left.",
            "id": "ptr.bool::-e-:ptr.bool_bool"
        }, {
            "name": "!",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "description": "Niega el valor de verdad. Es decir, si es <tt>true</tt> devolverá <tt>false</tt>, y si es <tt>false</tt> devolverá <tt>true</tt>.",
            "description_en": "Negates the boolean value. Therefore, if it is <tt>true</tt> the operator returns <tt>false</tt>, and if it is <tt>false</tt> it returns <tt>true</tt>.",
            "id": "bool::-x-:bool"
        }, {
            "name": "\\a\\a",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "description": "Realiza la operación lógica <i>AND</i> (intersección / multiplicación lógica) entre los valores. El valor resultante será <tt>true</tt>, si y solo si ambos argumentos son <tt>true</tt>.",
            "description_en": "Performs a logical <i>AND</i> operation (logical intersection / multiplication). The returned value will be <tt>true</tt> if and only if both arguments are <tt>true</tt>.",
            "id": "bool::-bs-a-bs-a:bool_bool"
        }, {
            "name": "||",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "description": "Realiza la operación lógica <i>OR</i> (unión / suma lógica) entre los valores. El valor resultante será <tt>true</tt> si cualquier uno de los argumentos es <tt>true</tt>.",
            "description_en": "Performs a logical <i>OR</i> operation (logical union / addition). The returned value will be <tt>true</tt> if any of the arguments is <tt>true</tt>.",
            "id": "bool::-b--b-:bool_bool"
        }, {
            "name": "^",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "p", "type": 2, "is_ptr": false}, {"name": "q", "type": 2, "is_ptr": false}],
            "description": "Realiza una operación XOR entre los dos valores de verdad dados. El valor de retorno será <tt>true</tt> sólo si ambos valores son distintos.",
            "description_en": "Performs an XOR between the two given boolean values. The return value will be <tt>true</tt> only if the two values are different.",
            "id": "bool::-h-:bool_bool"
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 4, "is_ptr": false}],
            "id": "Write:pstr"
        }, {
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Write:str"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 4,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 4, "is_ptr": true}, {"name": "number", "type": 4, "is_ptr": false}],
            "id": "ptr.pstr::-e-:ptr.pstr_pstr"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 5, "is_ptr": true}, {"name": "number", "type": 5, "is_ptr": false}],
            "description": "Asigna la cadena de texto a la derecha del operador a la referencia indicada a la izquierda.",
            "description_en": "Assigns the text string at the right of the operator to the reference indicated at the left.",
            "id": "ptr.str::-e-:ptr.str_str"
        }, {
            "name": "StrCmp",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "a", "type": 5, "is_ptr": false}, {"name": "b", "type": 5, "is_ptr": false}],
            "description": "Compara las dos cadenas de texto hasta encontrar el primer carácter diferente. Luego devuelve un valor estrictamente menor que 0 si el primer carácter distinto es menor en <tt>a</tt> que en <tt>b</tt>, exactamente 0 si ambas cadenas son iguales o un valor mayor que 0 si el primer carácter distinto es mayor en <tt>a</tt> que en <tt>b</tt>. Por ejemplo:<br><tt>StrCmp(\"Casa\", \"Cara\")</tt> devolverá un <a href='#int'>int</a> estrictamente mayor que <tt>0</tt>, porque <i>s</i> es mayor que <i>r</i>. Sin embargo, <tt>StrCmp(\"Casa\", \"Cava\")</tt> devolverá un valor menor que <tt>0</tt>, y <tt>StrCmp(\"Casa\", \"Casa\")</tt> devolverá exactamente cero.",
            "description_en": "Compares the two strings until it finds the first different character. Then, it returns a value strictly lower than zero if the first character is lower in <tt>a</tt> than in <tt>b</tt>, exactly zero if both strings are equal or a value bigger than zero if the first different character is bigger in <tt>a</tt> than in <tt>b</tt>. For example:<br><tt>StrCmp(\"Light\", \"Line\")</tt> will return a value lower than zero, because <i>g</i> is lower than <i>n</i>. However, <tt>StrCmp(\"Line\", \"Light\")</tt> will return a value greater than zero, and <tt>StrCmp(\"Caesar\", \"Caesar\")</tt> will return exactly zero.",
            "id": "StrCmp:str_str"
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
            "description_en": "Saves into <tt>target</tt> the result of appending the value of <tt>extra</tt> at the end. For example: <pre>str myStr = \"Hi \"; // Notice the extra space at the end<br>StrCat(myStr, \"Caesar\"); // Now myStr contains \"Hi Caesar\"</pre> <strong>Warning: This function does not return any value!</strong> (to do this you may check <a href='#str::-p-:str_str'>the sum operation over str</a>).",
            "id": "StrCat:ptr.str_str"
        }, {
            "name": "ParseStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "string", "type": 5, "is_ptr": false}, {
                "name": "reference",
                "type": 5,
                "is_ptr": true
            }],
            "id": "ParseStr:str_ptr.str"
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
            "description_en": "Returns <tt>true</tt> if it finds <tt>needle</tt> inside <tt>haystack</tt>, i.e. if the string in <tt>needle</tt> is a substring of that in <tt>haystack</tt>.",
            "id": "StrStr:str_str"
        }, {
            "name": "GetFromStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetFromStr:str_str"
        }, {
            "name": "GetFromStrToEOL",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetFromStrToEOL:str_str"
        }, {
            "name": "+",
            "returns": 5,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "description": "Devuelve el resultado de concatenar ambas cadenas.",
            "description_en": "Returns the concatenation of both strings.",
            "id": "str::-p-:str_str"
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
            "description": "Devuelve la posición (empezando en 0) en la que aparece por primera vez el carácter con el valor <a href='https://ascii.cl/es/'>ASCII</a> indicado por <tt>caracter</tt> en la cadena <tt>cadena</tt>. Si no encuentra el carácter devuelve <tt>-1</tt>.",
            "description_en": "Returns the position (starting by 0) of the first appearance of the character with the <a href='https://ascii.cl/'>ASCII</a> value indicated by <tt>character</tt> in the string <tt>string</tt>. If the character is not found it returns <tt>-1</tt>.",
            "related": ["GetChr:str_int"],
            "id": "FindChrPos:str_int"
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
            "description_en": "Returns the <a href='https://ascii.cl/'>ASCII</a> value of the n-th character (starting by 0) of the string <tt>string</tt>.<br>Related: <a href='#FindChrPos:str_int'>FindChrPos</a>.",
            "id": "GetChr:str_int"
        }, {
            "name": "IsNull",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsNull:str"
        }, {
            "name": "StrLen",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "description": "Retorna la longitud de la cadena en bytes. Con caracteres <a href='https://ascii.cl/es/'>ASCII</a>, que ocupan un byte cada uno, esta longitud se corresponde con el número de caracteres de la cadena. Sin embargo, los caracteres no-ASCII (como á), pueden ocupar más de un byte.",
            "description_en": "Returns the length of the string in bytes. With basic <a href='https://ascii.cl/es/'>ASCII</a> characters, which occupy 1 byte each, this corresponds to the length of the string in characters. Be aware, however, that non-ASCII characters (like ä) may measure more than 1 byte.",
            "id": "StrLen:str"
        }, {
            "name": "StrMid",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "texto", "name_en": "text", "type": 5, "is_ptr": false}, {
                "name": "inicio",
                "name_en": "start",
                "type": 1,
                "is_ptr": false
            }, {"name": "longitud", "name_en": "length", "type": 1, "is_ptr": false}],
            "description": "Obtiene la subcadena de <tt>texto</tt> comenzando desde el carácter con índice <tt>inicio</tt> y de longitud <tt>longitud</tt>. Recuerde que los índices de los caracteres comienzan en 0.<br>Ejemplo: <tt>StrMid(\"Caesar\", 2, 3)</tt> devuelve <tt>\"esa\"</tt>.",
            "description_en": "Returns the substring of <tt>text</tt> starting at <tt>start</tt> and with length <tt>length</tt>. Remember that character indices start by 0.<br>Example: <tt>StrMid(\"Caesar\", 2, 3)</tt> will return <tt>\"esa\"</tt>.",
            "id": "StrMid:str_int_int"
        }, {
            "name": "Str2Int",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "description": "Convierte la cadena indicada a <a href='#int'>int</a>, interpretándola como un número entero en base 10. Sólo se interpretarán todos los caracteres numéricos (<tt>0</tt>-<tt>9</tt>) hasta el primer carácter no numérico de la cadena. Opcionalmente se puede añadir <tt>+</tt> o <tt>-</tt> al inicio.",
            "description_en": "It converts the passed string to an <a href='#int'>int</a>, interpreting it as a whole number in base 10. Only digits (<tt>0</tt>-<tt>9</tt>) of the string up to the first non-digit will be interpreted. Optionally, the string may start by <tt>+</tt> or <tt>-</tt>.",
            "id": "Str2Int:str"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "a", "type": 5, "is_ptr": false}, {"name": "b", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si ambas cadenas son iguales, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both strings are equal, or <tt>false</tt> otherwise.",
            "id": "str::-e--e-:str_str"
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 5,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "a", "type": 5, "is_ptr": false}, {"name": "b", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si las cadenas son distintas, o <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if the strings are different, or <tt>false</tt> otherwise.",
            "id": "str::-x--e-:str_str"
        }, {
            "name": "IsFlagSet",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IsFlagSet:int_int"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetFlag:ptr.int_int_bool"
        }, {
            "name": "Point",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "x", "type": 1, "is_ptr": false}, {"name": "y", "type": 1, "is_ptr": false}],
            "description": "Crea un <a href='#point'>punto</a> con las coordenadas <i>x</i> e <i>y</i> dadas.",
            "description_en": "Creates a <a href='#point'>point</a> with the given <i>x</i> and <i>y</i> coordinates.",
            "id": "Point:int_int"
        }, {
            "name": "x",
            "returns": 1,
            "returns_ptr": true,
            "of": 6,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia al valor del punto en el eje <i>x</i> (coordenada <i>x</i> del punto). Ver <a href='#ptr.int::-e-:ptr.int_int'>operador de asignación de int</a>.",
            "description_en": "Value of the point in the <i>x</i> axis (<i>x</i> coordinate of the point). See <a href='#ptr.int::-e-:ptr.int_int'>assignation operator for int</a>.",
            "related": ["ptr.point::Set:int_int"],
            "id": "ptr.point::x"
        }, {
            "name": "y",
            "returns": 1,
            "returns_ptr": true,
            "of": 6,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia al valor del punto en el eje <i>y</i> (coordenada <i>y</i> del punto). Ver <a href='#ptr.int::-e-:ptr.int_int'>operador de asignación de int</a>.",
            "description_en": "Value of the point in the <i>y</i> axis (<i>y</i> coordinate of the point). See <a href='#ptr.int::-e-:ptr.int_int'>assignation operator for int</a>.",
            "related": ["ptr.point::Set:int_int"],
            "id": "ptr.point::y"
        }, {
            "name": "x",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor del punto en el eje <i>x</i> (coordenada <i>x</i> del punto).",
            "description_en": "Value of the point in the <i>x</i> axis (<i>x</i> coordinate of the point).",
            "id": "point::x"
        }, {
            "name": "y",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor del punto en el eje <i>y</i> (coordenada <i>y</i> del punto).",
            "description_en": "Value of the point in the <i>y</i> axis (<i>y</i> coordinate of the point).",
            "id": "point::y"
        }, {
            "name": "Set",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "x", "type": 1, "is_ptr": false}, {"name": "y", "type": 1, "is_ptr": false}],
            "description": "Asigna las coordenadas <i>x</i> e <i>y</i> indicadas al punto referenciado.",
            "description_en": "Assigns the indicated coordinates <i>x</i> and <i>y</i> to the referenced point.",
            "id": "ptr.point::Set:int_int"
        }, {
            "name": "SetLen",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "longitud", "name_en": "length", "type": 1, "is_ptr": false}],
            "description": "Interpretando el punto como un vector, modifica los valores de <i>x</i> e <i>y</i> para que la longitud del vector sea lo más próxima posible a <tt>longitud</tt>. Por ejemplo: <pre>point miVector;<br>miVector = Point(30, 40); // Tenemos un vector con coordenadas 30, 40<br>miVector.SetLen(5); // Ahora las coordenadas de miVector son 3, 4</pre>Relacionado: usa el método <a href='#point::Len'>point::Len</a> para obtener la longitud de un vector.",
            "description_en": "Interpreting the point as a vector, this method modifies the <i>x</i> and <i>y</i> properties for the length of this vector to be as close as possible to <tt>length</tt>. For example: <pre>point myVector;<br>myVector = Point(30, 40); // We have a vector with coordinates 30, 40<br>myVector.SetLen(5); // Now the coordinates of myVector are 3, 4</pre>Related: use <a href='#point::Len'>point::Len</a> to obtain the length of a vector.",
            "id": "ptr.point::SetLen:int"
        }, {
            "name": "Len",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve la distancia cartesiana (aproximada) del origen (0, 0) hasta el punto, o lo que es lo mismo, devuelve la longitud del <a href='#point'>point</a> si lo interpretamos como vector. Por ejemplo: <tt>Point(3, 4).Len()</tt> devolvería 5.",
            "description_en": "Returns the (approximated) Cartesian distance from the origin (0, 0) to the point, i.e. the length of the <a href='#point'>point</a> if interpreted as a vector. For example: <tt>Point(3, 4).Len()</tt> returns 5.",
            "id": "point::Len"
        }, {
            "name": "Rot",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "grados", "name_en": "degrees", "type": 1, "is_ptr": false}],
            "description": "Rota el punto tantos grados como se indique alrededor del origen (0, 0) en sentido horario. Por ejemplo: <pre>point miPunto;<br>miPunto = Point(10, 0);<br>miPunto.Rot(90); // Ahora miPunto tiene coordenadas 0, -10 (ha rotado 90 grados)</pre>",
            "description_en": "Rotates the point the indicated degrees around the origin (0, 0) in clockwise direction. For example: <pre>point myPoint;<br>myPoint = Point(10, 0);<br>myPoint.Rot(90); // Now myPoint has coordinates 0, -10 (it has rotated 90 degrees)</pre>",
            "id": "ptr.point::Rot:int"
        }, {
            "name": "InRect",
            "returns": 2,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "r", "name_en": "r", "type": 7, "is_ptr": false}],
            "description_en": "Returns <tt>true</tt> if the point is inside the rectangle <tt>r</tt>, or <tt>false</tt> otherwise.",
            "description": "Devuelve <tt>true</tt> si el punto está dentro del rectángulo <tt>r</tt>, o <tt>false</tt> si no lo está.",
            "id": "point::InRect:rect"
        }, {
            "name": "IntoRect",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "rectangulo", "name_en": "rectangle", "type": 7, "is_ptr": false}],
            "description": "Restringe el punto al rectángulo dado. Es decir, que reemplaza sus coordenadas por las del punto más cercano situado dentro del rectángulo.<br><tt>p.IntoRect(r)</tt> es equivalente a <tt>p.Set(CLAMP(p.x, r.left, r.right), CLAMP(p.y, r.top, r.bottom))</tt>.",
            "description_en": "Restricts the point to the given rectangle. I.e., it replaces its coordinates by the ones of the closest point within the rectangle.<br><tt>p.IntoRect(r)</tt> is equivalent to <tt>p.Set(CLAMP(p.x, r.left, r.right), CLAMP(p.y, r.top, r.bottom))</tt>",
            "id": "ptr.point::IntoRect:rect"
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
            "id": "point::Dist:point"
        }, {
            "name": "+",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Interpretando uno como punto y el otro como vector, desplaza el punto según el vector dado. Formalmente, si las coordenadas de un punto son <i>(a, b)</i> y las del otro <i>(c, d)</i>, devuelve un punto con coordenadas <i>(a+c, b+d)</i>.",
            "description_en": "Interpreting one as a point and the other as a vector, moves the point by the given vector. Formally, if the coordinates of a point are <i>(a, b)</i> and the other <i>(c, d)</i>, returns a point with coordinates <i>(a+c, b+d)</i>.",
            "id": "point::-p-:point_point"
        }, {
            "name": "-",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Devuelve el vector que va del punto indicado a la izquierda al punto indicado a la derecha del operador. Formalmente, si las coordenadas de un punto son <i>(a, b)</i> y las del otro <i>(c, d)</i>, devuelve un punto con coordenadas <i>(a-c, b-d)</i>.",
            "description_en": "Returns the vector which goes from the point indicated at the left to the point indicated at the right of the operator. Formally, if the coordinates of a point are <i>(a, b)</i> and the other <i>(c, d)</i>, returns a point with coordinates <i>(a+c, b+d)</i>.",
            "id": "point::-m-:point_point"
        }, {
            "name": "*",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Interpretándolo como vector, lo prolonga multiplicando su longitud por el entero indicado. Formalmente, si las coordenadas del punto son <i>(a, b)</i> y llamamos al entero <i>c</i>, retorna el punto de coordenadas <i>(a*c, b*c)</i>.",
            "description_en": "Interpreting it as a vector, elongates the vector multiplying its length by the given integer. Formally, if the coordinates of the point are <i>(a, b)</i> and we call the integer <i>c</i>, this operator returns a point with coordinates <i>(a*c, b*c)</i>.",
            "id": "point::-a-:point_int"
        }, {
            "name": "/",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Interpretándolo como vector, lo acorta dividiendo su longitud por el entero indicado. Formalmente, si las coordenadas del punto son <i>(a, b)</i> y llamamos al entero <i>c</i>, retorna el punto de coordenadas <i>(a/c, b/c)</i>.",
            "description_en": "Interpreting it as a vector, shortens the vector dividing its length by the given integer. Formally, if the coordinates of the point are <i>(a, b)</i> and we call the integer <i>c</i>, this operator returns a point with coordinates <i>(a/c, b/c)</i>.",
            "id": "point::-s-:point_int"
        }, {
            "name": "Dist",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "a", "type": 6, "is_ptr": false}, {"name": "b", "type": 6, "is_ptr": false}],
            "description": "Devuelve la distancia cartesiana de <tt>a</tt> a <tt>b</tt> (ver <a href='#point::Dist:point'>point::Dist</a>).",
            "description_en": "Returns the Cartesian distance from <tt>a</tt> to <tt>b</tt> (see <a href='#point::Dist:point'>point::Dist</a>).",
            "id": "Dist:point_point"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": true}, {"name": "number", "type": 6, "is_ptr": false}],
            "description_en": "Assigns a point to a point reference (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignation operator</a>).",
            "description": "Asigna un punto a una referencia a un punto (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "id": "ptr.point::-e-:ptr.point_point"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos puntos coinciden, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if the coordinates of both points match, otherwise it returns <tt>false</tt>.",
            "id": "point::-e--e-:point_point"
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos puntos son distintas, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if both points are different, otherwise it returns <tt>false</tt>.",
            "id": "point::-x--e-:point_point"
        }, {
            "name": "left",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>x</i> en la que se sitúa el lado izquierdo del rectángulo.",
            "description_en": "Value of the <i>x</i> coordinate in which the left side of the rectangle is placed.",
            "id": "rect::left"
        }, {
            "name": "top",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>y</i> en la que se sitúa el lado superior del rectángulo.",
            "description_en": "Value of the <i>y</i> coordinate in which the top side of the rectangle is placed.",
            "id": "rect::top"
        }, {
            "name": "right",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>x</i> en la que se sitúa el lado derecho del rectángulo.",
            "description_en": "Value of the <i>x</i> coordinate in which the right side of the rectangle is placed.",
            "id": "rect::right"
        }, {
            "name": "bottom",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>y</i> en la que se sitúa el lado inferior del rectángulo.",
            "description_en": "Value of the <i>y</i> coordinate in which the bottom side of the rectangle is placed.",
            "id": "rect::bottom"
        }, {
            "name": "width",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Ancho del rectángulo.",
            "description_en": "Width of the rectangle.",
            "id": "rect::width"
        }, {
            "name": "height",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Alto del rectángulo.",
            "description_en": "Height of the rectangle.",
            "id": "rect::height"
        }, {
            "name": "left",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>x</i> en la que se sitúa el lado izquierdo del rectángulo.",
            "description_en": "Reference to modify the <i>x</i> coordinate in which the left side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"],
            "id": "ptr.rect::left"
        }, {
            "name": "top",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>y</i> en la que se sitúa el lado superior del rectángulo.",
            "description_en": "Reference to modify the <i>y</i> coordinate in which the top side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"],
            "id": "ptr.rect::top"
        }, {
            "name": "right",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>x</i> en la que se sitúa el lado derecho del rectángulo.",
            "description_en": "Reference to modify the <i>x</i> coordinate in which the right side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"],
            "id": "ptr.rect::right"
        }, {
            "name": "bottom",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>y</i> en la que se sitúa el lado inferior del rectángulo.",
            "description_en": "Reference to modify the <i>y</i> coordinate in which the bottom side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"],
            "id": "ptr.rect::bottom"
        }, {
            "name": "Set",
            "returns": 0,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "izquierdo", "name_en": "left", "type": 1, "is_ptr": false}, {
                "name": "superior",
                "name_en": "top",
                "type": 1,
                "is_ptr": false
            }, {"name": "derecho", "name_en": "right", "type": 1, "is_ptr": false}, {
                "name": "inferior",
                "name_en": "bottom",
                "type": 1,
                "is_ptr": false
            }],
            "description": "Asigna los valores para los lados <a href='#rect::left'>izquierdo</a>, <a href='#rect::top'>superior</a>, <a href='#rect::right'>derecho</a> e <a href='#rect::bottom'>inferior</a> del rectángulo.",
            "description_en": "Assigns the values for the <a href='#rect::left'>left</a>, <a href='#rect::top'>top</a>, <a href='#rect::right'>right</a> and <a href='#rect::bottom'>bottom</a> sides of the rectangle.",
            "id": "ptr.rect::Set:int_int_int_int"
        }, {
            "name": "Center",
            "returns": 6,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve un punto con las coordenadas del centro del rectángulo.",
            "description_en": "Returns a point with the coordinates of the center of the rectangle.",
            "id": "rect::Center"
        }, {
            "name": "IntersectRects",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "rect_a", "type": 7, "is_ptr": false}, {"name": "rect_b", "type": 7, "is_ptr": false}],
            "description": "<p>Devuelve la \"intersección\" de ambos rectángulos, es decir, el rectángulo correspondiente a la superposición de ambos rectángulos. <strong>Cuidado</strong>: si los rectángulos no se intersecan, el rectángulo resultante puede no ser intuitivo.</p><p>Formalmente, lo que esta función hace es coger el máximo de ambos rectángulos para <a href='#rect::left'>left</a> y <a href='#rect::top'>top</a>, y el mínimo de ambos rectángulos para <a href='#rect::right'>right</a> y <a href='#rect::bottom'>bottom</a>.</p><p><tt>r = IntersectRects(a, b)</tt> es, pues, equivalente a <tt>r.Set(MAX(a.left, b.left), MAX(a.top, b.top), MIN(a.right, b.right), MIN(a.bottom, b.bottom))</tt></p>",
            "description_en": "Returns the \"intersection\" of both rectangles, i.e., the rectangle formed where both rectangles overlap. <strong>Warning</strong>: if the rectangles do not intersect, the return of this function will not be intuitive.</p><p>In reality, this function takes the maximum for <a href='#rect::left'>left</a> and <a href='#rect::top'>top</a> among the rectangles, and the minimum for <a href='#rect::right'>right</a> and <a href='#rect::bottom'>bottom</a>.</p><p><tt>r = IntersectRects(a, b)</tt> is, therefore, equivalent to <tt>r.Set(MAX(a.left, b.left), MAX(a.top, b.top), MIN(a.right, b.right), MIN(a.bottom, b.bottom))</tt></p>",
            "related": ["ptr.rect::Set:int_int_int_int", "rect::left", "rect::top", "rect::right", "rect::bottom"],
            "id": "IntersectRects:rect_rect"
        }, {
            "name": "AddRects",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "rect_a", "type": 7, "is_ptr": false}, {"name": "rect_b", "type": 7, "is_ptr": false}],
            "id": "AddRects:rect_rect"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": true}, {"name": "number", "type": 7, "is_ptr": false}],
            "description_en": "Assigns a rectangle to a rectangle reference (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignation operator</a>).",
            "description": "Asigna un rectángulo a una referencia a un rectángulo (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "id": "ptr.rect::-e-:ptr.rect_rect"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos rectángulos para sus cuatro lados coinciden, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if the coordinates of the four sides of both rectangles match, otherwise it returns <tt>false</tt>.",
            "id": "rect::-e--e-:rect_rect"
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos rectángulos para alguno de los lados son distintas, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if the rectangles are different, otherwise it returns <tt>false</tt>.",
            "id": "rect::-x--e-:rect_rect"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 8, "is_ptr": true}],
            "description": "Asigna un <a class='type' href='#IntArray'>IntArray</a> a una referencia a <a class='type' href='#IntArray'>IntArray</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#IntArray'>IntArray</a> to a reference to <a class='type' href='#IntArray'>IntArray</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.IntArray::-e-:ptr.IntArray_ptr.IntArray"
        }, {
            "name": "[",
            "returns": 1,
            "returns_ptr": true,
            "of": 8,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Obtiene el entero en la posición indicada. Las posiciones comienzan en 0 (siendo 0 el primer elemento, 1 el segundo, etc). Por ejemplo, para acceder al cuarto elemento de <tt>miArray</tt> podemos poner: <tt>miArray[3]</tt>. Nótese que el último elemento tiene índice <tt>miArray.size - 1</tt>. Nótese también que el operador devuelve una referencia, por lo que el valor puede ser modificado, por ejemplo, con el <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>.",
            "description_en": "Obtains the integer in the indicated index. The indices are 0-based (being 0 the first element, 1 the second, etc). For example, to retrieve the fourth element in <tt>myArray</tt> we can write: <tt>myArray[3]</tt>. Notice that the last element has index <tt>myArray.size - 1</tt>. Notice also that the operator returns a reference, so it can be modified (for example, with the <a href='#ptr.int::-e-:ptr.int_int'>integer assignment operator</a>).",
            "id": "ptr.IntArray::-c-:ptr.IntArray_int"
        }, {
            "name": "resize",
            "returns": 0,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "n", "type": 1, "is_ptr": false}],
            "description": "Redimensiona el array a <tt>n</tt> elementos (see <a href='#ptr.IntArray::size'>IntArray::size</a>).",
            "description_en": "Resizes the array to <tt>n</tt> elements (see <a href='#ptr.IntArray::size'>IntArray:size</a>).",
            "id": "ptr.IntArray::resize:int"
        }, {
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Número de elementos contenidos en el array. Nótese que, al comenzar los índices por 0, el último elemento tiene índice <tt>miArray.size - 1</tt>. Para cambiar el tamaño consultar <a href='#ptr.IntArray::resize:int'>IntArray::resize</a>.",
            "description_en": "Number of elements contained by the array. Notice that, since indices start in 0, the last element has index <tt>myArray.size - 1</tt>. To change the size of the array check <a href='#ptr.IntArray::resize:int'>IntArray::resize</a>.",
            "id": "ptr.IntArray::size"
        }, {
            "name": "find",
            "returns": 1,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Retorna el índice de la primera aparición del entero dado en el <a href='#IntArray'>IntArray</a>.",
            "description_en": "Returns the lowest position at which the given integer can be found inside the array.",
            "id": "ptr.IntArray::find:int"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 9, "is_ptr": true}, {"name": "number", "type": 9, "is_ptr": true}],
            "description": "Asigna un <a class='type' href='#StrArray'>StrArray</a> a una referencia a <a class='type' href='#StrArray'>StrArray</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#StrArray'>StrArray</a> to a reference to <a class='type' href='#StrArray'>StrArray</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.StrArray::-e-:ptr.StrArray_ptr.StrArray"
        }, {
            "name": "[",
            "returns": 5,
            "returns_ptr": true,
            "of": 9,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 9, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Obtiene el <a class='type' href='#str'>str</a> en la posición indicada. Las posiciones comienzan en 0 (siendo 0 el primer elemento, 1 el segundo, etc). Por ejemplo, para acceder al cuarto elemento de <tt>miArray</tt> podemos poner: <tt>miArray[3]</tt>. Nótese que el último elemento tiene índice <tt>miArray.size - 1</tt>. Nótese también que el operador devuelve una referencia, por lo que el valor puede ser modificado, por ejemplo, con el <a href='#ptr.str::-e-:ptr.str_str'>el operador de asignación para cadenas</a>.",
            "description_en": "Obtains the <a class='type' href='#str'>str</a> in the indicated index. The indices are 0-based (being 0 the first element, 1 the second, etc). For example, to retrieve the fourth element in <tt>myArray</tt> we can write: <tt>myArray[3]</tt>. Notice that the last element has index <tt>myArray.size - 1</tt>. Notice also that the operator returns a reference, so it can be modified (for example, with the <a href='#ptr.str::-e-:ptr.str_str'>string assignment operator</a>).",
            "id": "ptr.StrArray::-c-:ptr.StrArray_int"
        }, {
            "name": "resize",
            "returns": 0,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Redimensiona el array a <tt>n</tt> elementos (see <a href='#ptr.StrArray::size'>StrArray::size</a>).",
            "description_en": "Resizes the array to <tt>n</tt> elements (see <a href='#ptr.StrArray::size'>StrArray:size</a>).",
            "id": "ptr.StrArray::resize:int"
        }, {
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Número de elementos contenidos en el array. Nótese que, al comenzar los índices por 0, el último elemento tiene índice <tt>miArray.size - 1</tt>. Para cambiar el tamaño consultar <a href='#ptr.StrArray::resize:int'>StrArray::resize</a>.",
            "description_en": "Number of elements contained by the array. Notice that, since indices start in 0, the last element has index <tt>myArray.size - 1</tt>. To change the size of the array check <a href='#ptr.StrArray::resize:int'>StrArray::resize</a>.",
            "id": "ptr.StrArray::size"
        }, {
            "name": "find",
            "returns": 1,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "cadena", "name_en": "string", "type": 5, "is_ptr": false}],
            "description": "Retorna el índice de la primera aparición del <a class='type' href='#str'>str</a> dado en el <a class='type' href='#StrArray'>StrArray</a>.",
            "description_en": "Returns the lowest position at which the given <a class='type' href='#str'>str</a> can be found inside the array.",
            "id": "ptr.StrArray::find:str"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 10, "is_ptr": true}, {"name": "number", "type": 10, "is_ptr": true}],
            "description": "Asigna un <a class='type' href='#StrMap'>StrMap</a> a una referencia a <a class='type' href='#StrMap'>StrMap</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#StrMap'>StrMap</a> to a reference to <a class='type' href='#StrMap'>StrMap</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.StrMap::-e-:ptr.StrMap_ptr.StrMap"
        }, {
            "name": "[",
            "returns": 5,
            "returns_ptr": true,
            "of": 10,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "map", "type": 10, "is_ptr": true}, {"name": "key", "type": 5, "is_ptr": false}],
            "description": "Obtiene una referencia al valor <a class='type' href='#str'>str</a> para la clave indicada. Nótese que el operador devuelve una referencia, por lo que el valor puede ser modificado, por ejemplo, con el <a href='#ptr.str::-e-:ptr.str_str'>el operador de asignación para cadenas</a>.",
            "description_en": "Obtains a reference to the <a class='type' href='#str'>str</a> value for the given key. Notice that the operator returns a reference, so it can be modified (for example, with the <a href='#ptr.str::-e-:ptr.str_str'>string assignment operator</a>).",
            "id": "ptr.StrMap::-c-:ptr.StrMap_str"
        }, {
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Número de elementos contenidos en el diccionario.",
            "description_en": "Number of elements contained by the map.",
            "id": "ptr.StrMap::size"
        }, {
            "name": "erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "clave", "name_en": "key", "type": 5, "is_ptr": false}],
            "description": "Elimina el elemento con la clave dada del diccionario.",
            "description_en": "Removes the element with the given key from the map.",
            "id": "ptr.StrMap::erase:str"
        }, {
            "name": "exists",
            "returns": 2,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "clave", "name_en": "key", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si existe un elemento con clave <tt>clave</tt>, si no existe devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if there is an element with key <tt>key</tt>, otherwise it returns <tt>false</tt>.",
            "id": "ptr.StrMap::exists:str"
        }, {
            "name": "DumpStack",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "DumpStack"
        }, {
            "name": "DumpCode",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "DumpCode:int"
        }, {
            "name": "GetMapSize",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Obtiene las dimensiones del mapa actual. El ancho estará contenido en <a href='#point::x'>point::x</a> y el alto en <a href='#point::y'>point::y</a>.",
            "description_en": "Gets the dimensions of the current map. The width is contained in the <a href='#point::x'>point::x</a> property and the height is contained in <a href='#point::y'>point::y</a>.",
            "id": "GetMapSize"
        }, {
            "name": "_RandomTerrain2",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_RandomTerrain2:str"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": true}, {"name": "number", "type": 11, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Obj'>Obj</a> a una referencia a <a class='type' href='#Obj'>Obj</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Obj'>Obj</a> to a reference to <a class='type' href='#Obj'>Obj</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.Obj::-e-:ptr.Obj_Obj"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 12, "is_ptr": true}, {"name": "number", "type": 12, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Item'>Item</a> a una referencia a <a class='type' href='#Item'>Item</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Item'>Item</a> to a reference to <a class='type' href='#Item'>Item</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.Item::-e-:ptr.Item_Item"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }],
            "description": "Devuelve <tt>true</tt> si ambos objetos son el mismo, <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both objects are the same, <tt>false</tt> if they are not.",
            "id": "Obj::-e--e-:Obj_Obj"
        }, {
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }],
            "description": "Devuelve <tt>true</tt> si ambos objetos son distintos (no son el mismo objeto), <tt>false</tt> si no lo son.",
            "description_en": "Returns <tt>true</tt> if both objects are different (they are not the same object), <tt>false</tt> if they are not.",
            "id": "Obj::-x--e-:Obj_Obj"
        }, {
            "name": "Clear",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": true,
            "type": "method",
            "params": [],
            "id": "ptr.Obj::Clear"
        }, {
            "name": "AsUnit",
            "returns": 13,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Unit'>Unit</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Unit'>Unit</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsUnit"
        }, {
            "name": "AsBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Building'>Building</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Building'>Building</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsBuilding"
        }, {
            "name": "AsHero",
            "returns": 15,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Hero'>Hero</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Hero'>Hero</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsHero"
        }, {
            "name": "AsDruid",
            "returns": 16,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Druid'>Druid</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Druid'>Druid</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsDruid"
        }, {
            "name": "AsGhost",
            "returns": 17,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Ghost'>Ghost</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Ghost'>Ghost</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsGhost"
        }, {
            "name": "AsTower",
            "returns": 18,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Tower'>Tower</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Tower'>Tower</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsTower"
        }, {
            "name": "AsWagon",
            "returns": 19,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Wagon'>Wagon</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Wagon'>Wagon</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsWagon"
        }, {
            "name": "AsCatapult",
            "returns": 20,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Catapult'>Catapult</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Catapult'>Catapult</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsCatapult"
        }, {
            "name": "AsItemHolder",
            "returns": 21,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#ItemHolder'>ItemHolder</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#ItemHolder'>ItemHolder</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsItemHolder"
        }, {
            "name": "AsBarrack",
            "returns": 22,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Barrack'>Barrack</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Barrack'>Barrack</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsBarrack"
        }, {
            "name": "AsSacrifice",
            "returns": 23,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Sacrifice'>Sacrifice</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Sacrifice'>Sacrifice</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsSacrifice"
        }, {
            "name": "AsShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Ship'>Ship</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Ship'>Ship</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsShip"
        }, {
            "name": "AsFlying",
            "returns": 25,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el <a class='type' href='#Obj'>Obj</a> como <a class='type' href='#Flying'>Flying</a>, suponiendo que, en efecto, es una instancia este tipo.",
            "description_en": "Returns this <a class='type' href='#Obj'>Obj</a> as <a class='type' href='#Flying'>Flying</a>, assuming it is, indeed, an instance of this type.",
            "id": "Obj::AsFlying"
        }, {
            "name": "GetClassRace",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetClassRace:str"
        }, {
            "name": "race",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::race"
        }, {
            "name": "raceStr",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::raceStr"
        }, {
            "name": "raceStrPref",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::raceStrPref"
        }, {
            "name": "raceStrPrefLow",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::raceStrPrefLow"
        }, {
            "name": "GetRaceStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetRaceStr:int"
        }, {
            "name": "GetRaceStrPref",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetRaceStrPref:int"
        }, {
            "name": "GetRaceStrPrefLow",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetRaceStrPrefLow:int"
        }, {
            "name": "armor_slash",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::armor_slash"
        }, {
            "name": "armor_pierce",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::armor_pierce"
        }, {
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Puntos de salud actuales del objeto. Para algunos objetos, como las <a class='type' href='#Unit'>unidades</a>, perder toda la salud significa su muerte, pero para otros no. Para <a class='type' href='#Building'>edificios</a>, por ejemplo, simplemente significa perder su funcionalidad hasta que son reparados.",
            "description_en": "Current health of the object. For some objects, like <a class='type' href='#Unit'>units</a>, to loose all health means death, but not for others. For <a class='type' href='#Building'>buildings</a>, for example, it simply means to stop functioning until they are repaired.",
            "related": ["Obj::maxhealth", "Obj::Heal:int", "Obj::SetHealth:int", "Druid::FindUnitToHeal", "Query::Heal:int", "Settlement::health", "Squad::health", "SelHealth", "SelMaxHealth", "WaitHealthBetween:Query_int_int_int"],
            "id": "Obj::health"
        }, {
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Energía actual del objeto. Las <a class='type' href='#Unit'>unidades</a> gastan energía para usar <a href='#Unit::SetSpecial:int_bool'>habilidades especiales</a>.",
            "description_en": "Current stamina of the object. <a class='type' href='#Unit'>Units</a> spend stamina to use <a href='#Unit::SetSpecial:int_bool'>special skills</a>.",
            "related": ["Obj::maxstamina", "Obj::GetStaminaDecTime", "Obj::HealStamina:int", "Obj::SetStamina:int", "Query::HealStamina:int", "GetCmdStaminaCost:str", "SelAvgStamina"],
            "id": "Obj::stamina"
        }, {
            "name": "maxhealth",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Máxima salud del objeto.",
            "description_en": "Maximum health of the object.",
            "related": ["Obj::health", "Obj::SetMaxHealth:int", "Settlement::max_health", "Squad::maxhealth", "SelMaxHealth"],
            "id": "Obj::maxhealth"
        }, {
            "name": "maxstamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Máxima energía del objeto.",
            "description_en": "Maximum stamina of the object.",
            "related": ["Obj::stamina", "Obj::SetMaxStamina:int", "Unit::maxstamina", "ObjList::ObjFullStamina", "Settlement::max_stamina"],
            "id": "Obj::maxstamina"
        }, {
            "name": "sight",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Distancia de visión del objeto (radio de su círculo de visión).",
            "description_en": "Sight distance for the object (radius of its vision circle).",
            "related": ["Obj::SetSight:int", "Unit::EnemiesInSight", "Unit::IsEnemyInSquadSight", "ObjsInSight:Obj_str", "VisibleObjsInSight:Obj_str", "Unit::BestNoIndependentTargetInSquadSight", "Unit::BestTargetInSquadSight", "Unit::BestTargetInSquadSight:str", "Unit::BestTargetInSquadSight_PreferUndiseased", "Unit::BestTargetInSquadSightExclusive:str", "Unit::BestTargetInSquadSightMisZeroDamage"],
            "id": "Obj::sight"
        }, {
            "name": "pos",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Posición del objeto en el mundo.",
            "description_en": "Position of the object in the world.",
            "related": ["Obj::SetPos:point", "Obj::SetPosSimple:point", "Unit::BestTargetForPos", "Squad::pos"],
            "id": "Obj::pos"
        }, {
            "name": "posRH",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::posRH"
        }, {
            "name": "damage",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::damage"
        }, {
            "name": "attack",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::attack"
        }, {
            "name": "damage_type",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::damage_type"
        }, {
            "name": "range",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::range"
        }, {
            "name": "min_range",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::min_range"
        }, {
            "name": "radius",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::radius"
        }, {
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Nombre del objeto",
            "description_en": "Name of the object",
            "related": ["Obj::SetName:str", "Item::name", "Settlement::name", "GetNamedObj:str", "SpawnNamed:str"],
            "id": "Obj::name"
        }, {
            "name": "IsHeirOf",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::IsHeirOf:str"
        }, {
            "name": "IsSentry",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un centinela de las murallas.",
            "description_en": "Indicates whether the object is a sentry of the walls.",
            "id": "Obj::IsSentry"
        }, {
            "name": "IsGate",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un <a class='type' href='#Gate'>Gate</a>.",
            "description_en": "Indicates whether the object is a <a class='type' href='#Gate'>Gate</a>.",
            "id": "Obj::IsGate"
        }, {
            "name": "IsRam",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un ariete.",
            "description_en": "Indicates whether the object is a battering ram.",
            "id": "Obj::IsRam"
        }, {
            "name": "IsRanged",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es del tipo de ataque a distancia.",
            "description_en": "Indicates whether the object is a ranged one (attacks in a range).",
            "id": "Obj::IsRanged"
        }, {
            "name": "IsMilitary",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es militar.",
            "description_en": "Indicates whether the object is a military one.",
            "id": "Obj::IsMilitary"
        }, {
            "name": "IsReligious",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es de tipo religioso (como los <a class='type' href='#Druid'>druidas</a>, por ejemplo).",
            "description_en": "Indicates whether the object is a religious one (like <a class='type' href='#Druid'>druids</a>, for example)",
            "id": "Obj::IsReligious"
        }, {
            "name": "IsPeaceful",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es pacífico.",
            "description_en": "Indicates whether the object is a peaceful one.",
            "id": "Obj::IsPeaceful"
        }, {
            "name": "IsPeasant",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un campesino/a.",
            "description_en": "Indicates whether the object is a peasant.",
            "id": "Obj::IsPeasant"
        }, {
            "name": "IsPeasantAmbient",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsPeasantAmbient"
        }, {
            "name": "SetHealth",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "salud", "name_en": "health", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::health'>salud</a> actual del objeto.",
            "description_en": "Modifies the current <a href='#Obj::health'>health</a> of the object.",
            "id": "Obj::SetHealth:int"
        }, {
            "name": "SetMaxHealth",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "salud_maxima", "name_en": "max_health", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::maxhealth'>salud máxima</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::maxhealth'>maximum health</a> of the object.",
            "id": "Obj::SetMaxHealth:int"
        }, {
            "name": "SetStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::stamina'>energía</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::stamina'>stamina</a> of the object.",
            "id": "Obj::SetStamina:int"
        }, {
            "name": "SetMaxStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::maxstamina'>energía máxima</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::maxstamina'>maximum stamina</a> of the object.",
            "id": "Obj::SetMaxStamina:int"
        }, {
            "name": "SetSight",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Modifica el <a href='#Obj::sight'>radio de visión</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::sight'>sight radius</a> of the object.",
            "id": "Obj::SetSight:int"
        }, {
            "name": "GetStaminaDecTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::GetStaminaDecTime"
        }, {
            "name": "CmdCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::CmdCount"
        }, {
            "name": "CmdCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::CmdCount:str"
        }, {
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::ClearCommands"
        }, {
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::KillCommand"
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::AddCommand:bool_str"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::AddCommand:bool_str_point"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::AddCommand:bool_str_Obj"
        }, {
            "name": "SneakCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::SneakCommand:str"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::SetCommand:str"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::SetCommand:str_point"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::SetCommand:str_Obj"
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
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::ExecDefaultCmd:point_Obj_bool_bool"
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
            }, {"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::ExecCmd:str_point_Obj_bool"
        }, {
            "name": "CmdDisable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::CmdDisable:str"
        }, {
            "name": "CmdEnable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::CmdEnable:str"
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsValid"
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Item::IsValid"
        }, {
            "name": "DistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::DistTo:point"
        }, {
            "name": "DistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::DistTo:Obj"
        }, {
            "name": "IsEnemy",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::IsEnemy:Obj"
        }, {
            "name": "IsAlive",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsAlive"
        }, {
            "name": "IsDead",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsDead"
        }, {
            "name": "IsValidTarget",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::IsValidTarget:Obj"
        }, {
            "name": "IsValidCaptureTarget",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::IsValidCaptureTarget:Obj"
        }, {
            "name": "SetVisible",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::SetVisible:bool"
        }, {
            "name": "IsVisible",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsVisible"
        }, {
            "name": "SetMessengerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::SetMessengerStatus:bool"
        }, {
            "name": "CanSee",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::CanSee:Obj"
        }, {
            "name": "CanAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::CanAttack:Obj"
        }, {
            "name": "Erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::Erase"
        }, {
            "name": "player",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::player"
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::SetPlayer:int"
        }, {
            "name": "Damage",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::Damage:int"
        }, {
            "name": "Heal",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::Heal:int"
        }, {
            "name": "HealStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::HealStamina:int"
        }, {
            "name": "SetPos",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::SetPos:point"
        }, {
            "name": "SetPosSimple",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::SetPosSimple:point"
        }, {
            "name": "SetBlind",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::SetBlind:bool"
        }, {
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::Face:point"
        }, {
            "name": "GetDir",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::GetDir"
        }, {
            "name": "Progress",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::Progress"
        }, {
            "name": "Progress",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::Progress:int"
        }, {
            "name": "cmddelay",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::cmddelay"
        }, {
            "name": "IsInGroup",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::IsInGroup:str"
        }, {
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::AddToGroup:str"
        }, {
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::RemoveFromGroup:str"
        }, {
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::RemoveFromAllGroups"
        }, {
            "name": "SetName",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::SetName:str"
        }, {
            "name": "Select",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::Select:int"
        }, {
            "name": "Deselect",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::Deselect:int"
        }, {
            "name": "Deselect",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::Deselect"
        }, {
            "name": "ClearSelection",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ClearSelection:int"
        }, {
            "name": "PlayAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::PlayAnim:int_point"
        }, {
            "name": "GetAnimTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::GetAnimTime:int"
        }, {
            "name": "StartAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::StartAnim:int_point"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::StartDelayedAnim:int_point_int"
        }, {
            "name": "TimeToActionMoment",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::TimeToActionMoment"
        }, {
            "name": "TimeToAnimFinish",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::TimeToAnimFinish"
        }, {
            "name": "GetAnim",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::GetAnim"
        }, {
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::SetState:int"
        }, {
            "name": "AddItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::AddItem:str"
        }, {
            "name": "GiveItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }],
            "id": "Obj::GiveItem:Item_Obj"
        }, {
            "name": "OpenItemHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 21, "is_ptr": false}],
            "id": "Obj::OpenItemHolder:ItemHolder"
        }, {
            "name": "PutItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {
                "name": "number",
                "type": 21,
                "is_ptr": false
            }],
            "id": "Obj::PutItem:Item_ItemHolder"
        }, {
            "name": "DropItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::DropItem:Item_point"
        }, {
            "name": "FindItem",
            "returns": 12,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::FindItem:str"
        }, {
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::RemoveItem:int"
        }, {
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::RemoveItem:str"
        }, {
            "name": "RemoveAllItems",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::RemoveAllItems"
        }, {
            "name": "ExchangeItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::ExchangeItem:Item_str"
        }, {
            "name": "GetItem",
            "returns": 12,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::GetItem:int"
        }, {
            "name": "RemoveItemsOfType",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::RemoveItemsOfType:str"
        }, {
            "name": "GetItemIndex",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}],
            "id": "Obj::GetItemIndex:Item"
        }, {
            "name": "items_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::items_count"
        }, {
            "name": "free_item_slots",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::free_item_slots"
        }, {
            "name": "item_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::item_count"
        }, {
            "name": "max_items",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::max_items"
        }, {
            "name": "ClipDestToMap",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Obj::ClipDestToMap:point"
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::pr:str"
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::pr:int"
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Obj::pr:Obj"
        }, {
            "name": "GetDebug",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::GetDebug"
        }, {
            "name": "SetDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::SetDebug:bool"
        }, {
            "name": "class",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::class"
        }, {
            "name": "command",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Obj::command"
        }, {
            "name": "command",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::command:int"
        }, {
            "name": "cmdparam",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cmdparam"
        }, {
            "name": "cmdwaiting",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cmdwaiting"
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "rollover"
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "rollover:Obj_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "rollover:Obj_str_bool"
        }, {
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "rollover:Obj_str"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "rollover_desc:Obj_str_bool"
        }, {
            "name": "cmdcost_gold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cmdcost_gold"
        }, {
            "name": "cmdcost_food",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cmdcost_food"
        }, {
            "name": "cmdcost_pop",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cmdcost_pop"
        }, {
            "name": "cmdcost_stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cmdcost_stamina"
        }, {
            "name": "GetPlayerRace",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetPlayerRace:int"
        }, {
            "name": "_LastSelectionTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::_LastSelectionTime"
        }, {
            "name": "_GetSelection",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_GetSelection"
        }, {
            "name": "ClearDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ClearDebug"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Place:str_point_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "PlaceInHolder:str_str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlaceEx:str_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlaceBlockEx:str_int_int_int_int_int_int_int"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "_PlaceBlockEx:str_int_int_int_int_int_int_int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_Summon:str_int_int_int"
        }, {
            "name": "IsWaterUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsWaterUnit"
        }, {
            "name": "SetCmdEnable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Obj::SetCmdEnable:bool"
        }, {
            "name": "GetCmdEnable",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::GetCmdEnable"
        }, {
            "name": "AddToStoreBin",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::AddToStoreBin"
        }, {
            "name": "RemoveFromStoreBin",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::RemoveFromStoreBin"
        }, {
            "name": "IsInState",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::IsInState"
        }, {
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::PlaySound:str"
        }, {
            "name": "ShowFloatText",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::ShowFloatText:str"
        }, {
            "name": "Group",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Group:str"
        }, {
            "name": "GetGroupSize",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetGroupSize:str"
        }, {
            "name": "SpawnGroup",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "SpawnGroup:str"
        }, {
            "name": "SpawnGroupInHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "SpawnGroupInHolder:str_str"
        }, {
            "name": "SpawnGroupInHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "SpawnGroupInHolder:str_Obj"
        }, {
            "name": "SpawnNamed",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "SpawnNamed:str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ModLevel:str_int_int_int"
        }, {
            "name": "Union",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }],
            "id": "Union:Query_Query"
        }, {
            "name": "Intersect",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }],
            "id": "Intersect:Query_Query"
        }, {
            "name": "Substract",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }],
            "id": "Substract:Query_Query"
        }, {
            "name": "Subtract",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 27,
                "is_ptr": false
            }],
            "id": "Subtract:Query_Query"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ClassPlayerAreaObjs:str_int_str"
        }, {
            "name": "ClassPlayerObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ClassPlayerObjs:str_int"
        }, {
            "name": "BuildingsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "BuildingsInSettlement:str_str"
        }, {
            "name": "UnitsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "UnitsInSettlement:str_str"
        }, {
            "name": "UnitsAroundSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "UnitsAroundSettlement:str_str"
        }, {
            "name": "UnitsGuardingSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "UnitsGuardingSettlement:str_str"
        }, {
            "name": "UnitsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "UnitsInSettlement:Settlement_str"
        }, {
            "name": "UnitsAroundSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "UnitsAroundSettlement:Settlement_str"
        }, {
            "name": "UnitsGuardingSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "UnitsGuardingSettlement:Settlement_str"
        }, {
            "name": "EnemyObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnemyObjs:int_str"
        }, {
            "name": "FriendlyObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "FriendlyObjs:int_str"
        }, {
            "name": "ControllableObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ControllableObjs:int_str"
        }, {
            "name": "AreaObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AreaObjs:str_str"
        }, {
            "name": "ObjsInRect",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjsInRect:rect_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjsInCircle:point_int_str"
        }, {
            "name": "ObjsInSight",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjsInSight:Obj_str"
        }, {
            "name": "VisibleObjsInSight",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "VisibleObjsInSight:Obj_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjsInRange:Obj_str_int"
        }, {
            "name": "AttachedUnits",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AttachedUnits:Hero_str"
        }, {
            "name": "PartyQuery",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "PartyQuery"
        }, {
            "name": "Erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::Erase"
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Query::SetPlayer:int"
        }, {
            "name": "Damage",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Query::Damage:int"
        }, {
            "name": "Heal",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Query::Heal:int"
        }, {
            "name": "HealStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Query::HealStamina:int"
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
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Query::AddDefCmd:point_Obj_bool_bool"
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::IsValid"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 27, "is_ptr": true}, {"name": "number", "type": 27, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Query'>Query</a> a una referencia a <a class='type' href='#Query'>Query</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Query'>Query</a> to a reference to <a class='type' href='#Query'>Query</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.Query::-e-:ptr.Query_Query"
        }, {
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Query::count"
        }, {
            "name": "IsEmpty",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::IsEmpty"
        }, {
            "name": "Contains",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Query::Contains:Obj"
        }, {
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::ClearCommands"
        }, {
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::KillCommand"
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Query::AddCommand:bool_str"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Query::AddCommand:bool_str_point"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "Query::AddCommand:bool_str_Obj"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Query::AddCommandOffset:bool_str_point"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Query::SetCommand:str"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Query::SetCommand:str_point"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "Query::SetCommand:str_Obj"
        }, {
            "name": "SetCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Query::SetCommandOffset:str_point"
        }, {
            "name": "GetObjList",
            "returns": 26,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::GetObjList"
        }, {
            "name": "DistributeExperience",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DistributeExperience:Query_int"
        }, {
            "name": "AttackArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AttackArea:Query_str"
        }, {
            "name": "MoveToArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "MoveToArea:Query_str"
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "NearestObj:Query_point"
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }],
            "id": "NearestObj:Query_Obj"
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Query::NearestObj:point"
        }, {
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Query::NearestObj:Obj"
        }, {
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Query::AddToGroup:str"
        }, {
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Query::RemoveFromGroup:str"
        }, {
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::RemoveFromAllGroups"
        }, {
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Query::Face:point"
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Query::SetFood:int"
        }, {
            "name": "InHolder",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Query::InHolder:str"
        }, {
            "name": "AddToHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Query::AddToHolder:str"
        }, {
            "name": "GetAverageDirection",
            "returns": 6,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Query::GetAverageDirection"
        }, {
            "name": "SetParty",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Query::SetParty:bool"
        }, {
            "name": "SetMessengerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Query::SetMessengerStatus:bool"
        }, {
            "name": "SetFeeding",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Query::SetFeeding:bool"
        }, {
            "name": "GetNamedObj",
            "returns": 29,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetNamedObj:str"
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "NamedObj::IsValid"
        }, {
            "name": "IsDead",
            "returns": 2,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "NamedObj::IsDead"
        }, {
            "name": "obj",
            "returns": 11,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "NamedObj::obj"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "EnemyInRange:point_int_Obj"
        }, {
            "name": "BestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::BestTarget"
        }, {
            "name": "Attack",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Building::Attack:Obj"
        }, {
            "name": "GetEnterPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Building::GetEnterPoint:Unit"
        }, {
            "name": "GetExitPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Building::GetExitPoint:Obj_point"
        }, {
            "name": "GetExitPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Building::GetExitPoint:point_bool"
        }, {
            "name": "GetPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GetPoint:int_int"
        }, {
            "name": "settlement",
            "returns": 28,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Building::settlement"
        }, {
            "name": "IsBroken",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::IsBroken"
        }, {
            "name": "IsCentralBuliding",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::IsCentralBuliding"
        }, {
            "name": "RRepair",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::RRepair"
        }, {
            "name": "GetExitVector",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetExitVector"
        }, {
            "name": "PopTransportationUI",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::PopTransportationUI"
        }, {
            "name": "GetGlobalSpell",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetGlobalSpell"
        }, {
            "name": "GlobalSpellStart",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GlobalSpellStart:int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GlobalSpellStart:int_int_int"
        }, {
            "name": "GlobalSpellStop",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GlobalSpellStop"
        }, {
            "name": "SetGlobalSpellData",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::SetGlobalSpellData:int"
        }, {
            "name": "WindOfWisdom",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::WindOfWisdom:int"
        }, {
            "name": "Starvation",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::Starvation"
        }, {
            "name": "SoothingRain",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::SoothingRain:int"
        }, {
            "name": "DivineSacrifice",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::DivineSacrifice"
        }, {
            "name": "GetSoothingRainObjects",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetSoothingRainObjects"
        }, {
            "name": "IsStonehengeControlable",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::IsStonehengeControlable"
        }, {
            "name": "StonehengeNumControllingMages",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::StonehengeNumControllingMages"
        }, {
            "name": "itemtypes",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Building::itemtypes"
        }, {
            "name": "minlevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Building::minlevel"
        }, {
            "name": "levelperitem",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Building::levelperitem"
        }, {
            "name": "ClearDamageTaken",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::ClearDamageTaken"
        }, {
            "name": "CountMages",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::CountMages"
        }, {
            "name": "SetUITarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Building::SetUITarget:Obj"
        }, {
            "name": "GetUITarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetUITarget"
        }, {
            "name": "GetNumSentrySlots",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetNumSentrySlots"
        }, {
            "name": "GetSentryClassName",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetSentryClassName"
        }, {
            "name": "Research",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Building::Research:str"
        }, {
            "name": "GetResearchHack",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetResearchHack"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "PlaceCatapult:int_int_int_int"
        }, {
            "name": "IsBuilt",
            "returns": 2,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::IsBuilt"
        }, {
            "name": "SetBuilt",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::SetBuilt"
        }, {
            "name": "SetBuildFrame",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Catapult::SetBuildFrame:int"
        }, {
            "name": "GetCatapultAttackPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "GetCatapultAttackPoint:point"
        }, {
            "name": "RotateTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Catapult::RotateTo:point"
        }, {
            "name": "Attack",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Catapult::Attack:point"
        }, {
            "name": "BestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::BestTarget"
        }, {
            "name": "GetPointOnTarget",
            "returns": 6,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Catapult::GetPointOnTarget:Obj"
        }, {
            "name": "InRange",
            "returns": 2,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Catapult::InRange:point"
        }, {
            "name": "AttackWait",
            "returns": 1,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::AttackWait"
        }, {
            "name": "CalcEscapeDirection",
            "returns": 6,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::CalcEscapeDirection"
        }, {
            "name": "GetCurrentTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::GetCurrentTarget"
        }, {
            "name": "SetTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Catapult::SetTarget:Obj"
        }, {
            "name": "ClearTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::ClearTarget"
        }, {
            "name": "ClearTowerTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Catapult::ClearTowerTarget"
        }, {
            "name": "speed",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::speed"
        }, {
            "name": "speed_factor",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::speed_factor"
        }, {
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::stamina"
        }, {
            "name": "user",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::user"
        }, {
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::food"
        }, {
            "name": "maxfood",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::maxfood"
        }, {
            "name": "maxstamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::maxstamina"
        }, {
            "name": "experience",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::experience"
        }, {
            "name": "level",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::level"
        }, {
            "name": "inherentlevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::inherentlevel"
        }, {
            "name": "SetSpeedFactor",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SetSpeedFactor:int"
        }, {
            "name": "SetUser",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SetUser:int"
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SetFood:int"
        }, {
            "name": "feeds",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::feeds"
        }, {
            "name": "SetFeeding",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetFeeding:bool"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::Goto:point_int_int_bool_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::GotoEnter:point_int_int_bool_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::Goto:Obj_int_int_bool_int"
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
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::GotoAttack:Obj_int_bool_int"
        }, {
            "name": "GotoStraight",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Unit::GotoStraight:point"
        }, {
            "name": "Stop",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::Stop:int"
        }, {
            "name": "HasPath",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::HasPath"
        }, {
            "name": "dest",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::dest"
        }, {
            "name": "TimeWithoutWalking",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::TimeWithoutWalking"
        }, {
            "name": "InHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::InHolder"
        }, {
            "name": "GetHolderSett",
            "returns": 28,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetHolderSett"
        }, {
            "name": "InShip",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::InShip"
        }, {
            "name": "GetShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetShip"
        }, {
            "name": "ExitHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Unit::ExitHolder:point"
        }, {
            "name": "EnterHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Unit::EnterHolder:Obj"
        }, {
            "name": "GetUnitsInSameHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetUnitsInSameHolder"
        }, {
            "name": "TrainAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Unit::TrainAttack:Obj"
        }, {
            "name": "BestTrainingTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestTrainingTarget"
        }, {
            "name": "StartTraining",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::StartTraining"
        }, {
            "name": "StopTraining",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::StopTraining"
        }, {
            "name": "IsTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::IsTraining"
        }, {
            "name": "Attack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Unit::Attack:Obj"
        }, {
            "name": "AttackEveryone",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Unit::AttackEveryone:Obj"
        }, {
            "name": "TimeWithoutAttack",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::TimeWithoutAttack"
        }, {
            "name": "SetLastAttackTime",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::SetLastAttackTime"
        }, {
            "name": "BestTargetInSquadSightMisZeroDamage",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestTargetInSquadSightMisZeroDamage"
        }, {
            "name": "BestTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestTargetInSquadSight"
        }, {
            "name": "BestNoIndependentTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestNoIndependentTargetInSquadSight"
        }, {
            "name": "BestTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Unit::BestTargetInSquadSight:str"
        }, {
            "name": "BestTargetInSquadSightExclusive",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Unit::BestTargetInSquadSightExclusive:str"
        }, {
            "name": "BestTargetInSquadSight_PreferUndiseased",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestTargetInSquadSight_PreferUndiseased"
        }, {
            "name": "BestTargetForPos",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestTargetForPos"
        }, {
            "name": "BestTargetInRange",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::BestTargetInRange:point_int"
        }, {
            "name": "IsEnemyInSquadSight",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::IsEnemyInSquadSight"
        }, {
            "name": "EnemiesInSight",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::EnemiesInSight"
        }, {
            "name": "InRange",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Unit::InRange:Obj"
        }, {
            "name": "hero",
            "returns": 15,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::hero"
        }, {
            "name": "AttachTo",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}],
            "id": "Unit::AttachTo:Hero"
        }, {
            "name": "DetachFrom",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}],
            "id": "Unit::DetachFrom:Hero"
        }, {
            "name": "Idle",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::Idle:int"
        }, {
            "name": "Taunt",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::Taunt:int"
        }, {
            "name": "SetExperience",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SetExperience:int"
        }, {
            "name": "SetLevel",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SetLevel:int"
        }, {
            "name": "IncKills",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::IncKills:int"
        }, {
            "name": "FormAcceptMove",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::FormAcceptMove"
        }, {
            "name": "FormKeepMoving",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::FormKeepMoving:int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::PathTo:point_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::PathTo:Obj_int_int"
        }, {
            "name": "SetParty",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetParty:bool"
        }, {
            "name": "GetParty",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetParty"
        }, {
            "name": "GetSacrifice",
            "returns": 23,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetSacrifice"
        }, {
            "name": "_OnImpassable",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::_OnImpassable"
        }, {
            "name": "max_train_1_level",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "max_train_1_level"
        }, {
            "name": "GetUnexploredPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::GetUnexploredPoint:int"
        }, {
            "name": "HasFreedom",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::HasFreedom"
        }, {
            "name": "GetFlags",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::GetFlags:int"
        }, {
            "name": "PathLeft",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::PathLeft"
        }, {
            "name": "GetShipToBoard",
            "returns": 24,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetShipToBoard"
        }, {
            "name": "GetStaminaDecTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetStaminaDecTime"
        }, {
            "name": "SameHolderAs",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Unit::SameHolderAs:Unit"
        }, {
            "name": "SetExperienceModifier",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetExperienceModifier:int_int"
        }, {
            "name": "GetExperienceModifier",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetExperienceModifier:int"
        }, {
            "name": "SetCommanded",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetCommanded:bool"
        }, {
            "name": "GetCommanded",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetCommanded"
        }, {
            "name": "SetEntering",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetEntering:bool"
        }, {
            "name": "GetEntering",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetEntering"
        }, {
            "name": "SetWalkAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SetWalkAnim:int"
        }, {
            "name": "SetWalkAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::SetWalkAnim"
        }, {
            "name": "SetCarryWaterAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::SetCarryWaterAnim"
        }, {
            "name": "SetCarryGoodsAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::SetCarryGoodsAnim"
        }, {
            "name": "DoCarryNothing",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::DoCarryNothing"
        }, {
            "name": "Disappear",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::Disappear"
        }, {
            "name": "SetNoselectFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetNoselectFlag:bool"
        }, {
            "name": "SetMinimapFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetMinimapFlag:bool"
        }, {
            "name": "SetNoAIFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetNoAIFlag:bool"
        }, {
            "name": "PathDestFound",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::PathDestFound"
        }, {
            "name": "ForceIdle",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::ForceIdle"
        }, {
            "name": "Talk",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::Talk"
        }, {
            "name": "IsCursed",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::IsCursed"
        }, {
            "name": "IsDiseased",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::IsDiseased"
        }, {
            "name": "GetBestCurseTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetBestCurseTarget"
        }, {
            "name": "GetBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetBuilding"
        }, {
            "name": "SetBuilding",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}],
            "id": "Unit::SetBuilding:Building"
        }, {
            "name": "HasSpecial",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::HasSpecial:int"
        }, {
            "name": "SetSpecial",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetSpecial:int_bool"
        }, {
            "name": "SpecialName",
            "returns": 5,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::SpecialName:int"
        }, {
            "name": "GetParryMode",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetParryMode"
        }, {
            "name": "SetParryMode",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetParryMode:bool"
        }, {
            "name": "Curse",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::Curse"
        }, {
            "name": "Bless",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::Bless"
        }, {
            "name": "Disease",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::Disease"
        }, {
            "name": "RamBestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::RamBestTarget"
        }, {
            "name": "GetPlayerUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetPlayerUnits:int"
        }, {
            "name": "GetPlayerUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetPlayerUnits:int_str"
        }, {
            "name": "InvalidateRegenConsts",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "InvalidateRegenConsts"
        }, {
            "name": "Mutate",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Unit::Mutate:str"
        }, {
            "name": "ExpFromLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ExpFromLevel:int"
        }, {
            "name": "LevelFromExp",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "LevelFromExp:int"
        }, {
            "name": "FormKeepMoving",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Hero::FormKeepMoving:int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Hero::FormSetupAndMoveTo:point_int_int_bool"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Hero::FormSetupAndMoveTo:Obj_int_int_bool"
        }, {
            "name": "TimePastLastAttack",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::TimePastLastAttack"
        }, {
            "name": "LastAttacker",
            "returns": 11,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::LastAttacker"
        }, {
            "name": "army",
            "returns": 26,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Hero::army"
        }, {
            "name": "maxarmy",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Hero::maxarmy"
        }, {
            "name": "IsHeroArmyFull",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::IsHeroArmyFull"
        }, {
            "name": "FormRadius",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::FormRadius"
        }, {
            "name": "FormPathLeft",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::FormPathLeft"
        }, {
            "name": "HasArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::HasArmy"
        }, {
            "name": "SetFormation",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Hero::SetFormation:str"
        }, {
            "name": "formation",
            "returns": 5,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Hero::formation"
        }, {
            "name": "DetachArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::DetachArmy"
        }, {
            "name": "GetRandomHeroClass",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetRandomHeroClass:str_int"
        }, {
            "name": "CancelArmyBoard",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::CancelArmyBoard"
        }, {
            "name": "SetFinalPartyOrientation",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Hero::SetFinalPartyOrientation:point"
        }, {
            "name": "GetFinalPartyOrientation",
            "returns": 6,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::GetFinalPartyOrientation"
        }, {
            "name": "HasFinalPartyOrientationRequest",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::HasFinalPartyOrientationRequest"
        }, {
            "name": "HeroSkillId",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "HeroSkillId:str"
        }, {
            "name": "SetSkill",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Hero::SetSkill:int_int"
        }, {
            "name": "GetSkill",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Hero::GetSkill:int"
        }, {
            "name": "UseSkill",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Hero::UseSkill:int"
        }, {
            "name": "HeroSkillName",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "HeroSkillName:int"
        }, {
            "name": "AvailableSkillPoints",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::AvailableSkillPoints"
        }, {
            "name": "SkillInEffect",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Hero::SkillInEffect:int"
        }, {
            "name": "autocast",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Hero::autocast"
        }, {
            "name": "SetAutocast",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Hero::SetAutocast:bool"
        }, {
            "name": "FindUnitToHeal",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::FindUnitToHeal"
        }, {
            "name": "FindUnitToLearn",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::FindUnitToLearn"
        }, {
            "name": "FindUnitToHide",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::FindUnitToHide"
        }, {
            "name": "GetBestCrippleTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::GetBestCrippleTarget"
        }, {
            "name": "FindUnitToRevitalize",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::FindUnitToRevitalize"
        }, {
            "name": "FindUnitBelowILevel",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Druid::FindUnitBelowILevel:int"
        }, {
            "name": "FindUnitBelowILevel",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Druid::FindUnitBelowILevel:int_int"
        }, {
            "name": "SetStonehenge",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}],
            "id": "Druid::SetStonehenge:Building"
        }, {
            "name": "GetJupiterAngerTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::GetJupiterAngerTarget"
        }, {
            "name": "SetJupiterAngerTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Druid::SetJupiterAngerTarget:Unit"
        }, {
            "name": "SetSummoningDeath",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Druid::SetSummoningDeath:bool"
        }, {
            "name": "IsSummoningDeath",
            "returns": 2,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Druid::IsSummoningDeath"
        }, {
            "name": "_ScriptEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ScriptEditor"
        }, {
            "name": "_ScriptEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_ScriptEditor:str"
        }, {
            "name": "_DialogEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_DialogEditor"
        }, {
            "name": "_DialogEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_DialogEditor:str"
        }, {
            "name": "_de",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_de"
        }, {
            "name": "_Choose",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "_Choose:str_str"
        }, {
            "name": "_ListClasses",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ListClasses"
        }, {
            "name": "_ListFolder",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_ListFolder:str"
        }, {
            "name": "_ListFolderEx",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "_ListFolderEx:str_str"
        }, {
            "name": "_ListTerrains",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ListTerrains"
        }, {
            "name": "MiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MiniMap"
        }, {
            "name": "SetMiniMapRect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}],
            "id": "SetMiniMapRect:rect"
        }, {
            "name": "BuildMiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "BuildMiniMap:str"
        }, {
            "name": "ToggleZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ToggleZoomMap"
        }, {
            "name": "ShowZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ShowZoomMap"
        }, {
            "name": "HideZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "HideZoomMap"
        }, {
            "name": "_ZoomMapLastShownTime",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ZoomMapLastShownTime"
        }, {
            "name": "amount",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Wagon::amount"
        }, {
            "name": "restype",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Wagon::restype"
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Wagon::SetFood:int"
        }, {
            "name": "SetGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Wagon::SetGold:int"
        }, {
            "name": "LoadFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Wagon::LoadFood:int"
        }, {
            "name": "LoadGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Wagon::LoadGold:int"
        }, {
            "name": "loyalty",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Wagon::loyalty"
        }, {
            "name": "SetLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Wagon::SetLoyalty:int"
        }, {
            "name": "DecreaseLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Wagon::DecreaseLoyalty:int"
        }, {
            "name": "StartCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Wagon::StartCapture"
        }, {
            "name": "StopCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Wagon::StopCapture"
        }, {
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {
                "name": "number",
                "type": 28,
                "is_ptr": false
            }],
            "id": "Settlement::-e--e-:Settlement_Settlement"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 28, "is_ptr": true}, {"name": "number", "type": 28, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Settlement'>Settlement</a> a una referencia a <a class='type' href='#Settlement'>Settlement</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Settlement'>Settlement</a> to a reference to <a class='type' href='#Settlement'>Settlement</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.Settlement::-e-:ptr.Settlement_Settlement"
        }, {
            "name": "GetSettlement",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetSettlement:str"
        }, {
            "name": "population",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::population"
        }, {
            "name": "max_population",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::max_population"
        }, {
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::name"
        }, {
            "name": "ForceAddUnit",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Settlement::ForceAddUnit:Unit"
        }, {
            "name": "AddUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Settlement::AddUnit:Unit"
        }, {
            "name": "IsFull",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsFull"
        }, {
            "name": "AddUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}],
            "id": "Settlement::AddUnits:ObjList"
        }, {
            "name": "Units",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::Units"
        }, {
            "name": "UnitsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::UnitsCount"
        }, {
            "name": "max_units",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::max_units"
        }, {
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::health"
        }, {
            "name": "max_health",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::max_health"
        }, {
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::stamina"
        }, {
            "name": "max_stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::max_stamina"
        }, {
            "name": "loyalty",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::loyalty"
        }, {
            "name": "SetLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetLoyalty:int"
        }, {
            "name": "DecreaseLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::DecreaseLoyalty:int"
        }, {
            "name": "gold",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::gold"
        }, {
            "name": "max_gold",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::max_gold"
        }, {
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::food"
        }, {
            "name": "max_food",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::max_food"
        }, {
            "name": "SetGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetGold:int"
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetFood:int"
        }, {
            "name": "SetPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetPopulation:int"
        }, {
            "name": "AddToPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::AddToPopulation:int"
        }, {
            "name": "AddToMaxPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::AddToMaxPopulation:int"
        }, {
            "name": "player",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::player"
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetPlayer:int"
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsValid"
        }, {
            "name": "loan",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::loan"
        }, {
            "name": "SetLoan",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetLoan:int"
        }, {
            "name": "GetCentralBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetCentralBuilding"
        }, {
            "name": "FoodProduction",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::FoodProduction"
        }, {
            "name": "GoldProduction",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GoldProduction"
        }, {
            "name": "SetFoodProduction",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetFoodProduction:int"
        }, {
            "name": "SetGoldProduction",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SetGoldProduction:int"
        }, {
            "name": "Buildings",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::Buildings"
        }, {
            "name": "Find",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::Find:str"
        }, {
            "name": "FirstBldClass",
            "returns": 5,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::FirstBldClass"
        }, {
            "name": "CanBeCaptured",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Settlement::CanBeCaptured:Unit"
        }, {
            "name": "AllowCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Settlement::AllowCapture:bool"
        }, {
            "name": "ObjectsAround",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::ObjectsAround:str"
        }, {
            "name": "GetEnterExit",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetEnterExit"
        }, {
            "name": "GetWaterSource",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetWaterSource"
        }, {
            "name": "GetGoodsSource",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetGoodsSource"
        }, {
            "name": "GetFixSite",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetFixSite"
        }, {
            "name": "GetEnterExit",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetEnterExit"
        }, {
            "name": "GetWaterSource",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetWaterSource"
        }, {
            "name": "GetGoodsSource",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetGoodsSource"
        }, {
            "name": "GetFixSite",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetFixSite"
        }, {
            "name": "MostDamagedBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::MostDamagedBuilding"
        }, {
            "name": "ClearDamageTaken",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::ClearDamageTaken"
        }, {
            "name": "FindNearEnterExit",
            "returns": 6,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Settlement::FindNearEnterExit:point"
        }, {
            "name": "IsCity",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsCity"
        }, {
            "name": "PopulationDied",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::PopulationDied"
        }, {
            "name": "GoldConverted",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::GoldConverted:int"
        }, {
            "name": "GoldSpent",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::GoldSpent:int"
        }, {
            "name": "GetSentry",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetSentry"
        }, {
            "name": "PutSentry",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::PutSentry"
        }, {
            "name": "DelSentry",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::DelSentry"
        }, {
            "name": "GetNumSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetNumSentries"
        }, {
            "name": "AddSentries",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::AddSentries:int"
        }, {
            "name": "GetMaxSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetMaxSentries"
        }, {
            "name": "AddMaxSentries",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::AddMaxSentries:int"
        }, {
            "name": "EvalSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::EvalSentries"
        }, {
            "name": "AddItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ItemHolder::AddItem:str"
        }, {
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "ItemHolder::count"
        }, {
            "name": "HasItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ItemHolder::HasItem:str"
        }, {
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ItemHolder::RemoveItem:str"
        }, {
            "name": "RemoveAll",
            "returns": 0,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ItemHolder::RemoveAll"
        }, {
            "name": "CreateMuleFood",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CreateMuleFood:int"
        }, {
            "name": "CreateMuleGold",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CreateMuleGold:int"
        }, {
            "name": "CreateBoatFood",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CreateBoatFood:int"
        }, {
            "name": "CreateBoatGold",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CreateBoatGold:int"
        }, {
            "name": "CreateShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::CreateShip:str"
        }, {
            "name": "SendMule",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::SendMule"
        }, {
            "name": "SendBoat",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::SendBoat"
        }, {
            "name": "StartSupplyFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}],
            "id": "Settlement::StartSupplyFood:Settlement"
        }, {
            "name": "StopSupply",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::StopSupply"
        }, {
            "name": "UnloadWagon",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 19, "is_ptr": false}],
            "id": "Settlement::UnloadWagon:Wagon"
        }, {
            "name": "supplied",
            "returns": 28,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Settlement::supplied"
        }, {
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 26, "is_ptr": true}, {"name": "number", "type": 26, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#ObjList'>ObjList</a> a una referencia a <a class='type' href='#ObjList'>ObjList</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#ObjList'>ObjList</a> to a reference to <a class='type' href='#ObjList'>ObjList</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>).",
            "id": "ptr.ObjList::-e-:ptr.ObjList_ObjList"
        }, {
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "ObjList::count"
        }, {
            "name": "[",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::-c-:ObjList_int"
        }, {
            "name": "Contains",
            "returns": 2,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "ObjList::Contains:Obj"
        }, {
            "name": "Add",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "ObjList::Add:Obj"
        }, {
            "name": "Remove",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "ObjList::Remove:Obj"
        }, {
            "name": "ClearDead",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::ClearDead"
        }, {
            "name": "AddList",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}],
            "id": "ObjList::AddList:ObjList"
        }, {
            "name": "RemoveList",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}],
            "id": "ObjList::RemoveList:ObjList"
        }, {
            "name": "Clear",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::Clear"
        }, {
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::AddToGroup:str"
        }, {
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::RemoveFromGroup:str"
        }, {
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::RemoveFromAllGroups"
        }, {
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::KillCommand"
        }, {
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::ClearCommands"
        }, {
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::AddCommand:bool_str"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "ObjList::AddCommand:bool_str_point"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "ObjList::AddCommand:bool_str_Obj"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "ObjList::AddCommandOffset:bool_str_point"
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
            }, {"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "ObjList::ExecDefaultCmd:point_Obj_bool_bool"
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
            }, {"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "ObjList::ExecCmd:str_point_Obj_bool"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::SetCommand:str"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "ObjList::SetCommand:str_point"
        }, {
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "ObjList::SetCommand:str_Obj"
        }, {
            "name": "SetCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "ObjList::SetCommandOffset:str_point"
        }, {
            "name": "GetCanExecCmd",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::GetCanExecCmd:str"
        }, {
            "name": "FilterClosest",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::FilterClosest:point_int"
        }, {
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "ObjList::Face:point"
        }, {
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::SetFood:int"
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::SetPlayer:int"
        }, {
            "name": "InHolder",
            "returns": 1,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::InHolder:str"
        }, {
            "name": "AddToHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::AddToHolder:str"
        }, {
            "name": "SetVisible",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "ObjList::SetVisible:bool"
        }, {
            "name": "ObjPlayer",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::ObjPlayer:int"
        }, {
            "name": "ObjEnemy",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::ObjEnemy:int"
        }, {
            "name": "ObjAlly",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::ObjAlly:int"
        }, {
            "name": "ObjClass",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::ObjClass:str"
        }, {
            "name": "ObjSpecial",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::ObjSpecial:int"
        }, {
            "name": "ObjInjured",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::ObjInjured"
        }, {
            "name": "ObjFullStamina",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ObjList::ObjFullStamina"
        }, {
            "name": "Find",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::Find:str"
        }, {
            "name": "FindAlly",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::FindAlly:int_str"
        }, {
            "name": "FindEnemy",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ObjList::FindEnemy:int_str"
        }, {
            "name": "Init",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ptr.Conversation::Init:str"
        }, {
            "name": "SetActor",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 13, "is_ptr": false}],
            "id": "Conversation::SetActor:str_Unit"
        }, {
            "name": "SetDefActor",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Conversation::SetDefActor:str_str"
        }, {
            "name": "ActorPresent",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ActorPresent:str"
        }, {
            "name": "ConvResult",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ConvResult:str"
        }, {
            "name": "ConvSetResult",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ConvSetResult:str_str"
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": true,
            "type": "method",
            "params": [],
            "id": "ptr.Conversation::Run"
        }, {
            "name": "RunConv",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunConv:str"
        }, {
            "name": "_ListConvs",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ListConvs"
        }, {
            "name": "EnvWriteString",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvWriteString:str_str"
        }, {
            "name": "EnvWriteInt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnvWriteInt:str_int"
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadString:str"
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadInt:str"
        }, {
            "name": "EnvWriteObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "EnvWriteObj:str_Obj"
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadObj:str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvWriteString:Settlement_str_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnvWriteInt:Settlement_str_int"
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadString:Settlement_str"
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadInt:Settlement_str"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "EnvWriteObj:Settlement_str_Obj"
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadObj:Settlement_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvWriteString:Building_str_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnvWriteInt:Building_str_int"
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadString:Building_str"
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadInt:Building_str"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "EnvWriteObj:Building_str_Obj"
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadObj:Building_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvWriteString:int_str_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnvWriteInt:int_str_int"
        }, {
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadString:int_str"
        }, {
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadInt:int_str"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "EnvWriteObj:int_str_Obj"
        }, {
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvReadObj:int_str"
        }, {
            "name": "EnvList",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvList:str"
        }, {
            "name": "EnvList",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvList:Settlement_str"
        }, {
            "name": "EnvFind",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvFind:str"
        }, {
            "name": "EnvExport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnvExport:str"
        }, {
            "name": "_ClearEnv",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ClearEnv"
        }, {
            "name": "RegisterSettlementUpgrade",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RegisterSettlementUpgrade:Settlement_str"
        }, {
            "name": "RegisterPlayerUpgrade",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RegisterPlayerUpgrade:int_str"
        }, {
            "name": "RunSequence",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunSequence:str"
        }, {
            "name": "_SequencesStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_SequencesStatus"
        }, {
            "name": "IsRunning",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsRunning:str"
        }, {
            "name": "IsWaiting",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsWaiting:str"
        }, {
            "name": "IsFinished",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsFinished:str"
        }, {
            "name": "ViewPos",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ViewPos"
        }, {
            "name": "View",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "View:point_bool"
        }, {
            "name": "PlayMusic",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "PlayMusic:str"
        }, {
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "PlaySound:str"
        }, {
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "PlaySound:int_str"
        }, {
            "name": "MusicPlaying",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MusicPlaying"
        }, {
            "name": "SetSpeed",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetSpeed:int"
        }, {
            "name": "GetSpeed",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetSpeed"
        }, {
            "name": "TogglePause",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TogglePause"
        }, {
            "name": "_Run",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_Run:str"
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Run:str"
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Run:str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Run:str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Run:str_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Run:str_int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Run:str_int_int_int_int_int"
        }, {
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::Run:str"
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IRun:str"
        }, {
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IRun:str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IRun:str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IRun:str_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IRun:str_int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IRun:str_int_int_int_int_int"
        }, {
            "name": "ToggleFPS",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ToggleFPS"
        }, {
            "name": "GetConst",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetConst:str"
        }, {
            "name": "GetConstStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetConstStr:str"
        }, {
            "name": "rand",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "rand:int"
        }, {
            "name": "BlockUserInput",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "BlockUserInput"
        }, {
            "name": "UnblockUserInput",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "UnblockUserInput"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ExploreCircle:int_point_int"
        }, {
            "name": "ExploreArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ExploreArea:int_str"
        }, {
            "name": "Party",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Party"
        }, {
            "name": "GetTime",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetTime"
        }, {
            "name": "EndGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "EndGame:int_bool"
        }, {
            "name": "IsMultiplayer",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "IsMultiplayer"
        }, {
            "name": "SelAvgLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelAvgLevel"
        }, {
            "name": "SelAvgFood",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelAvgFood"
        }, {
            "name": "SelAvgStamina",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelAvgStamina"
        }, {
            "name": "SelAvgArmor",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelAvgArmor"
        }, {
            "name": "SelAvgDamage",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelAvgDamage"
        }, {
            "name": "SelHealth",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelHealth"
        }, {
            "name": "SelMaxHealth",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelMaxHealth"
        }, {
            "name": "LockView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "LockView"
        }, {
            "name": "UnlockView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "UnlockView"
        }, {
            "name": "IsViewLocked",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "IsViewLocked"
        }, {
            "name": "StartViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "StartViewFollow:Unit"
        }, {
            "name": "StopViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "StopViewFollow"
        }, {
            "name": "StartViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 29, "is_ptr": false}],
            "id": "StartViewFollow:NamedObj"
        }, {
            "name": "SetDifficulty",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetDifficulty:int"
        }, {
            "name": "GetDifficulty",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetDifficulty"
        }, {
            "name": "GetMapRect",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetMapRect"
        }, {
            "name": "MapName",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MapName"
        }, {
            "name": "ChangeMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ChangeMap:str_str"
        }, {
            "name": "SetNextSeason",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "SetNextSeason:str"
        }, {
            "name": "GetTeamMilitaryScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetTeamMilitaryScore:int"
        }, {
            "name": "GetTeamPowerScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetTeamPowerScore:int"
        }, {
            "name": "GetTeamAchievementsScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetTeamAchievementsScore:int"
        }, {
            "name": "GetTeamOverallScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetTeamOverallScore:int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetVec:point_point_int"
        }, {
            "name": "IsPassable",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "IsPassable:point"
        }, {
            "name": "IsPassable3x3",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "IsPassable3x3:point"
        }, {
            "name": "BlockMiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "BlockMiniMap:bool"
        }, {
            "name": "IsExplored",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IsExplored:point_int"
        }, {
            "name": "SelectionGold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelectionGold"
        }, {
            "name": "SelectionFood",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelectionFood"
        }, {
            "name": "NoTents",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "NoTents"
        }, {
            "name": "RandomOffset",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "RandomOffset:int"
        }, {
            "name": "RandomPointInCircle",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "RandomPointInCircle:point_int"
        }, {
            "name": "PlayMovie",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "PlayMovie:str"
        }, {
            "name": "Translate",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Translate:str"
        }, {
            "name": "Translatef",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Translatef:str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Translatef:str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Translatef:str_str_str_str"
        }, {
            "name": "SaveAdventure",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "SaveAdventure:str"
        }, {
            "name": "WasSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WasSelectionAssigned:int_int"
        }, {
            "name": "WasSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "WasSelectionAssigned:int"
        }, {
            "name": "IsSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IsSelectionAssigned:int_int"
        }, {
            "name": "IsSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "IsSelectionAssigned:int"
        }, {
            "name": "SetGlobalBloodlust",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetGlobalBloodlust:bool"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "RevealHiddenEnemyUnits:point_int_int"
        }, {
            "name": "InvalidateDamageFormulaParams",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "InvalidateDamageFormulaParams"
        }, {
            "name": "SwapSelectedObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }],
            "id": "SwapSelectedObj:Obj_Obj"
        }, {
            "name": "Crash",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Crash"
        }, {
            "name": "AreaCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "AreaCenter:str"
        }, {
            "name": "DisableArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "DisableArea:str"
        }, {
            "name": "EnableArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnableArea:str"
        }, {
            "name": "GetRandomPointInArea",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetRandomPointInArea:str"
        }, {
            "name": "AreaDistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AreaDistTo:point_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "_AdvPlaceAreaRect:str_rect_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "_AdvPlaceAreaCirc:str_point_int_str_str"
        }, {
            "name": "AddDruid",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 16, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Sacrifice::AddDruid:Druid_int"
        }, {
            "name": "RemoveDruid",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 16, "is_ptr": false}],
            "id": "Sacrifice::RemoveDruid:Druid"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Sacrifice::Consume:int_int_bool"
        }, {
            "name": "IsEmpty",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Sacrifice::IsEmpty"
        }, {
            "name": "MistAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Sacrifice::MistAction:int"
        }, {
            "name": "IsInvisibility",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Sacrifice::IsInvisibility"
        }, {
            "name": "Druids",
            "returns": 26,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Sacrifice::Druids"
        }, {
            "name": "UpdateCoverOfMercy",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Sacrifice::UpdateCoverOfMercy"
        }, {
            "name": "GiveNote",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GiveNote:str"
        }, {
            "name": "RemoveNote",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "RemoveNote:str"
        }, {
            "name": "ShowNotes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ShowNotes"
        }, {
            "name": "ClearNotes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ClearNotes"
        }, {
            "name": "IsNoteActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsNoteActive:str"
        }, {
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 13, "is_ptr": false}],
            "id": "CreateFeedback:str_Unit"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "CreateFeedback:str_Unit_int"
        }, {
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "CreateFeedback:str_point"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "CreateFeedback:str_point_int"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "DiplCeaseFire:int_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "DiplShareView:int_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "DiplShareControl:int_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "DiplShareSupport:int_int_bool"
        }, {
            "name": "DiplGetCeaseFire",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DiplGetCeaseFire:int_int"
        }, {
            "name": "DiplGetShareView",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DiplGetShareView:int_int"
        }, {
            "name": "DiplGetShareControl",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DiplGetShareControl:int_int"
        }, {
            "name": "DiplGetShareSupport",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DiplGetShareSupport:int_int"
        }, {
            "name": "ClearDiplomacy",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ClearDiplomacy"
        }, {
            "name": "RecreateExploration",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "RecreateExploration"
        }, {
            "name": "AsGate",
            "returns": 31,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::AsGate"
        }, {
            "name": "IsOpened",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Gate::IsOpened"
        }, {
            "name": "IsClosed",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Gate::IsClosed"
        }, {
            "name": "AreEnemiesAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Gate::AreEnemiesAround"
        }, {
            "name": "AreFriendsAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Gate::AreFriendsAround"
        }, {
            "name": "LookAround",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Gate::LookAround:int"
        }, {
            "name": "OpenNow",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Gate::OpenNow"
        }, {
            "name": "CloseNow",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Gate::CloseNow"
        }, {
            "name": "AsTeleport",
            "returns": 32,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::AsTeleport"
        }, {
            "name": "destination",
            "returns": 32,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Teleport::destination"
        }, {
            "name": "exit_vector",
            "returns": 6,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Teleport::exit_vector"
        }, {
            "name": "Traverse",
            "returns": 0,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Teleport::Traverse:int"
        }, {
            "name": "ShowBuildAnimation",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Ship::ShowBuildAnimation:point"
        }, {
            "name": "NotifyBoardUnit",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Ship::NotifyBoardUnit:Unit"
        }, {
            "name": "AreUnitsToBoard",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::AreUnitsToBoard"
        }, {
            "name": "BestCandidateToBoard",
            "returns": 13,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::BestCandidateToBoard"
        }, {
            "name": "BoardUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Ship::BoardUnit:Unit"
        }, {
            "name": "NotifyBoardUnitCancel",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "Ship::NotifyBoardUnitCancel:Unit"
        }, {
            "name": "NotifyShipBoardingCancel",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::NotifyShipBoardingCancel"
        }, {
            "name": "UnboardUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}],
            "id": "Ship::UnboardUnits:ObjList"
        }, {
            "name": "UnboardAllUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::UnboardAllUnits"
        }, {
            "name": "IsPointInWater",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "IsPointInWater:point"
        }, {
            "name": "FindPointToStay",
            "returns": 6,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::FindPointToStay"
        }, {
            "name": "UnitsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::UnitsCount"
        }, {
            "name": "UnitsMax",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::UnitsMax"
        }, {
            "name": "Idle",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::Idle"
        }, {
            "name": "HasAiTransport",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::HasAiTransport"
        }, {
            "name": "GetUnitsOnBoard",
            "returns": 26,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::GetUnitsOnBoard"
        }, {
            "name": "ApplyAiTransport",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::ApplyAiTransport"
        }, {
            "name": "ClearAiTransport",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::ClearAiTransport"
        }, {
            "name": "GetTransPt",
            "returns": 6,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::GetTransPt"
        }, {
            "name": "IsBuilding",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::IsBuilding"
        }, {
            "name": "NumUnitsToBoard",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Ship::NumUnitsToBoard"
        }, {
            "name": "RecalcBonuses",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::RecalcBonuses"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::AddBonus:int_int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::RemoveBonus:int_int_int_int_int"
        }, {
            "name": "ItemUsed",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ItemUsed:int"
        }, {
            "name": "GetUseCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetUseCount"
        }, {
            "name": "use_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Item::use_count"
        }, {
            "name": "custom_data",
            "returns": 1,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Item::custom_data"
        }, {
            "name": "id",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Item::id"
        }, {
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Item::name"
        }, {
            "name": "display_name",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Item::display_name"
        }, {
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Item::Use"
        }, {
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Item::Use:Obj"
        }, {
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Item::Use:point"
        }, {
            "name": "SetCustomData",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Item::SetCustomData:int"
        }, {
            "name": "GetThis",
            "returns": 12,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetThis"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Flying::PlayAnim:int_point_int"
        }, {
            "name": "IsInAir",
            "returns": 2,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Flying::IsInAir"
        }, {
            "name": "IsLanding",
            "returns": 2,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Flying::IsLanding"
        }, {
            "name": "z",
            "returns": 1,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Flying::z"
        }, {
            "name": "PickFlyingPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Flying::PickFlyingPoint:int"
        }, {
            "name": "PickLandingPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Flying::PickLandingPoint:int"
        }, {
            "name": "FindNearBird",
            "returns": 25,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Flying::FindNearBird"
        }, {
            "name": "AdjustFlyDir",
            "returns": 0,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": true}],
            "id": "Flying::AdjustFlyDir:ptr.point"
        }, {
            "name": "GetTerrainHeight",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "GetTerrainHeight:point"
        }, {
            "name": "GetVecByDir",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetVecByDir:point_int"
        }, {
            "name": "GetAngleByDir",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "GetAngleByDir:point"
        }, {
            "name": "GetDirByAngle",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetDirByAngle:int"
        }, {
            "name": "MapSize",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MapSize"
        }, {
            "name": "GetAnimDuration",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::GetAnimDuration:int"
        }, {
            "name": "dir",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Unit::dir"
        }, {
            "name": "OnLeft",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "OnLeft:point_point"
        }, {
            "name": "NumSquads",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "NumSquads:int"
        }, {
            "name": "GetSquad",
            "returns": 33,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetSquad:int_int"
        }, {
            "name": "GetSquad",
            "returns": 33,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetSquad"
        }, {
            "name": "Player",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Player"
        }, {
            "name": "No",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::No"
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Eval"
        }, {
            "name": "State",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::State"
        }, {
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::SetState:int"
        }, {
            "name": "StateTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::StateTime"
        }, {
            "name": "Size",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Size"
        }, {
            "name": "SrcGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::SrcGAIKA"
        }, {
            "name": "DestGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::DestGAIKA"
        }, {
            "name": "GAIKAIn",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::GAIKAIn"
        }, {
            "name": "Leader",
            "returns": 13,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Leader"
        }, {
            "name": "Units",
            "returns": 26,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Units"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::SetState:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::ClrCmd:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Squad::SetCmd:int_int_int_str"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Squad::SetCmd:int_int_int_str_point"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "Squad::SetCmd:int_int_int_str_Obj"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ObjList::Siege:Obj_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::Siege:Obj_int_int_int"
        }, {
            "name": "SendTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::SendTo:GAIKA_int"
        }, {
            "name": "AIDest",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::AIDest"
        }, {
            "name": "OrderDest",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::OrderDest"
        }, {
            "name": "DelOrder",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::DelOrder"
        }, {
            "name": "GetFlags",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::GetFlags"
        }, {
            "name": "TestFlags",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::TestFlags:int"
        }, {
            "name": "SetFlags",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::SetFlags:int_int"
        }, {
            "name": "Lock",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Lock"
        }, {
            "name": "Unlock",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Unlock"
        }, {
            "name": "LastFightTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::LastFightTime"
        }, {
            "name": "InHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::InHolder"
        }, {
            "name": "pos",
            "returns": 6,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Squad::pos"
        }, {
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Squad::health"
        }, {
            "name": "maxhealth",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Squad::maxhealth"
        }, {
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "Squad::food"
        }, {
            "name": "FoodComing",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::FoodComing"
        }, {
            "name": "SendFoodWagon",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::SendFoodWagon:int_int"
        }, {
            "name": "EvalAttach",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::EvalAttach:Unit_int"
        }, {
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Squad::Count:str"
        }, {
            "name": "HasFreedom",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::HasFreedom"
        }, {
            "name": "GAIKACount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKACount"
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetGAIKA:int"
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "GetGAIKA:Obj"
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "GetGAIKA:point"
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetGAIKA:int_int"
        }, {
            "name": "LAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "LAIKA:int_int"
        }, {
            "name": "ID",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::ID"
        }, {
            "name": "Empty",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::Empty"
        }, {
            "name": "Type",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::Type"
        }, {
            "name": "Center",
            "returns": 6,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::Center"
        }, {
            "name": "GetDestPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "GAIKA::GetDestPoint:Unit"
        }, {
            "name": "settlement",
            "returns": 28,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "id": "GAIKA::settlement"
        }, {
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}],
            "id": "GAIKA::GetSquads:ptr.SquadList"
        }, {
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetSquads:ptr.SquadList_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetSquads:ptr.SquadList_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetSquads:ptr.SquadList_int_int_int"
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Eval:int"
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Eval:int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Eval:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "GAIKA::Eval:int_int_ptr.int_ptr.int_ptr.int_ptr.int"
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
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "GAIKA::EvalNeighbors:int_int_ptr.int_ptr.int_ptr.int_bool"
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
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "GAIKA::Count:int_int_ptr.int_ptr.int_ptr.int_ptr.int"
        }, {
            "name": "GetPriority",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetPriority:int"
        }, {
            "name": "GetLAIKA",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetLAIKA:int"
        }, {
            "name": "CalcPriority",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::CalcPriority:int"
        }, {
            "name": "SetPriority",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::SetPriority:int_int"
        }, {
            "name": "Prioritized",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Prioritized:int"
        }, {
            "name": "Explored",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Explored:int"
        }, {
            "name": "Explore",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "GAIKA::Explore:int_bool"
        }, {
            "name": "CanExplore",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::CanExplore:int"
        }, {
            "name": "Revealed",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Revealed:int"
        }, {
            "name": "LastSeen",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::LastSeen:int"
        }, {
            "name": "NoAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::NoAttack:int"
        }, {
            "name": "SetNoAttack",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "GAIKA::SetNoAttack:int_bool"
        }, {
            "name": "NoRecruit",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::NoRecruit:int"
        }, {
            "name": "SetNoRecruit",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "GAIKA::SetNoRecruit:int_bool"
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
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "GAIKA::GetDistToPlayers:int_ptr.int_ptr.int_ptr.int"
        }, {
            "name": "GetDistToArmies",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetDistToArmies:int"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "GAIKA::Count:int_int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::MinNeed:int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::MaxNeed:int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "GAIKA::Recruit:int_int_int_ptr.int"
        }, {
            "name": "GetStrat",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetStrat:int"
        }, {
            "name": "StratRunning",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::StratRunning:int"
        }, {
            "name": "RunStrat",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::RunStrat:int_int"
        }, {
            "name": "AllEnemiesInHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::AllEnemiesInHolder:int"
        }, {
            "name": "MilitaryPresence",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::MilitaryPresence:int"
        }, {
            "name": "Neighbors",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::Neighbors"
        }, {
            "name": "Neighbor",
            "returns": 34,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::Neighbor:int"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetNoAttack:str_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetNoRecruit:str_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "AreaAINoRecruit:str_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "AreaAINoAttack:str_int_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "AreaAIMaxPriority:str_int_bool"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AreaAISetAttackOptimism:str_int_int"
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
            }, {"name": "number", "type": 34, "is_ptr": false}],
            "id": "SetMAIKA:GAIKA_GAIKA_GAIKA"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DumpMAIKA:int_int_int"
        }, {
            "name": "UnitsInHolderEval",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::UnitsInHolderEval"
        }, {
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::IsValid"
        }, {
            "name": "EOL",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::EOL"
        }, {
            "name": "Rewind",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Rewind"
        }, {
            "name": "Next",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Next"
        }, {
            "name": "Cur",
            "returns": 33,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Cur"
        }, {
            "name": "Size",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Size"
        }, {
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Eval"
        }, {
            "name": "Lock",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Lock"
        }, {
            "name": "Unlock",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Unlock"
        }, {
            "name": "Add",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}],
            "id": "ptr.SquadList::Add:Squad"
        }, {
            "name": "Select",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "SquadList::Select:int"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "SquadList::Train:int_int_int_int_Obj"
        }, {
            "name": "NumTowers",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::NumTowers"
        }, {
            "name": "NumTowersBroken",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::NumTowersBroken"
        }, {
            "name": "NumGates",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::NumGates"
        }, {
            "name": "NumGatesBroken",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::NumGatesBroken"
        }, {
            "name": "EvalDefences",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::EvalDefences"
        }, {
            "name": "FindCatapultSpot",
            "returns": 6,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Settlement::FindCatapultSpot:point"
        }, {
            "name": "BestGate",
            "returns": 31,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "Settlement::BestGate:point"
        }, {
            "name": "OpenAllGates",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::OpenAllGates"
        }, {
            "name": "IdleAllGates",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IdleAllGates"
        }, {
            "name": "IsVeryBroken",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::IsVeryBroken"
        }, {
            "name": "CanBeCaptured",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::CanBeCaptured"
        }, {
            "name": "IsStronghold",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsStronghold"
        }, {
            "name": "IsVillage",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsVillage"
        }, {
            "name": "IsOutpost",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsOutpost"
        }, {
            "name": "IsTTent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsTTent"
        }, {
            "name": "IsShipyard",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsShipyard"
        }, {
            "name": "IsAlly",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::IsAlly:int"
        }, {
            "name": "IsEnemy",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::IsEnemy:int"
        }, {
            "name": "IsOwn",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::IsOwn:int"
        }, {
            "name": "IsIndependent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsIndependent"
        }, {
            "name": "IsIndependentGuarded",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsIndependentGuarded"
        }, {
            "name": "GetRel",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::GetRel:int"
        }, {
            "name": "MaxPopulation",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::MaxPopulation"
        }, {
            "name": "SupplyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::SupplyCount:str"
        }, {
            "name": "BestToSupply",
            "returns": 28,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::BestToSupply"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "SettlementCount:point_int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "FindRuins:point_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AttackSetForTraining:Obj_point_int"
        }, {
            "name": "BestTargetInGAIKA",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::BestTargetInGAIKA"
        }, {
            "name": "AI",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::AI"
        }, {
            "name": "AIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "AIRun:str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:str_Settlement_ObjList_Obj_int"
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
            }, {"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:int_str_Settlement_ObjList_Obj_int"
        }, {
            "name": "AIBreakScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIBreakScript:int"
        }, {
            "name": "AIBreakScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIBreakScript:int_int"
        }, {
            "name": "AIExecCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AIExecCmd:Obj_str"
        }, {
            "name": "IsAIShow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "IsAIShow"
        }, {
            "name": "ScrollTo",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ScrollTo:point_int"
        }, {
            "name": "BestBarrack",
            "returns": 22,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::BestBarrack:int"
        }, {
            "name": "GetGaikaCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetGaikaCenter:int"
        }, {
            "name": "GetSquadCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetSquadCenter:int_int"
        }, {
            "name": "FindBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::FindBuilding:str"
        }, {
            "name": "FindResearchLab",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::FindResearchLab:str"
        }, {
            "name": "IsBarrack",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::IsBarrack"
        }, {
            "name": "SetToIdx",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}],
            "id": "SetToIdx:Settlement"
        }, {
            "name": "IdxToSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "IdxToSet:int"
        }, {
            "name": "MaxSetIdx",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MaxSetIdx"
        }, {
            "name": "AIH_UnitBuilt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}],
            "id": "AIH_UnitBuilt:Unit"
        }, {
            "name": "AIGetPlayer",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "AIGetPlayer"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIO_SendSquad:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIO_Train:int_str_int_int"
        }, {
            "name": "ViewSlot",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ViewSlot"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squadize:ObjList_ptr.SquadList_int"
        }, {
            "name": "IsResearched",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsResearched:Settlement_str"
        }, {
            "name": "IsResearched",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsResearched:int_str"
        }, {
            "name": "IsResearching",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsResearching:Settlement_str"
        }, {
            "name": "IsResearching",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsResearching:int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "GetCmdCost:str_ptr.int_ptr.int"
        }, {
            "name": "GetCmdStaminaCost",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetCmdStaminaCost:str"
        }, {
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CanAfford:int_int"
        }, {
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::CanAfford:str"
        }, {
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CanAfford:str_int"
        }, {
            "name": "MaxAffordCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::MaxAffordCount:str"
        }, {
            "name": "CanResearch",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::CanResearch:str"
        }, {
            "name": "Research",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::Research:str"
        }, {
            "name": "Reserve",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::Reserve"
        }, {
            "name": "StopReserving",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::StopReserving"
        }, {
            "name": "ReserveFor",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::ReserveFor:str_int"
        }, {
            "name": "GoldSpentOnArmy",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GoldSpentOnArmy"
        }, {
            "name": "SpentGoldOnArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SpentGoldOnArmy:int"
        }, {
            "name": "GoldSpentOnTech",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GoldSpentOnTech"
        }, {
            "name": "SpentGoldOnTech",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::SpentGoldOnTech:int"
        }, {
            "name": "CheckTechBudget",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::CheckTechBudget:str_int"
        }, {
            "name": "WaterLsa",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::WaterLsa"
        }, {
            "name": "LandLsa",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::LandLsa"
        }, {
            "name": "MilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "MilUnits:int"
        }, {
            "name": "HeroArmiesFullPerc",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "HeroArmiesFullPerc:int"
        }, {
            "name": "MilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "MilEval:int"
        }, {
            "name": "AllyMilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AllyMilUnits:int"
        }, {
            "name": "AllyMilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AllyMilEval:int"
        }, {
            "name": "EnemyMilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnemyMilUnits:int"
        }, {
            "name": "EnemyMilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnemyMilEval:int"
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
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "EnemyPlayersEval:int_ptr.int_ptr.int_ptr.int"
        }, {
            "name": "Strongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Strongholds:int"
        }, {
            "name": "AllyStrongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AllyStrongholds:int"
        }, {
            "name": "EnemyStrongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnemyStrongholds:int"
        }, {
            "name": "Villages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Villages:int"
        }, {
            "name": "AllyVillages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AllyVillages:int"
        }, {
            "name": "EnemyVillages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnemyVillages:int"
        }, {
            "name": "Outposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Outposts:int"
        }, {
            "name": "AllyOutposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AllyOutposts:int"
        }, {
            "name": "EnemyOutposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnemyOutposts:int"
        }, {
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Count:int_str"
        }, {
            "name": "AllyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AllyCount:int_str"
        }, {
            "name": "EnemyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EnemyCount:int_str"
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::LSA"
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "LSA:int_int"
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "LSA:point"
        }, {
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::LSA"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "CheckLsaPath:int_int_int"
        }, {
            "name": "Ships",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Ships:int_int"
        }, {
            "name": "EnemyShips",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "EnemyShips:int_int"
        }, {
            "name": "AllyShips",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AllyShips:int_int"
        }, {
            "name": "ShipNeeds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ShipNeeds:int_int"
        }, {
            "name": "ClrShipNeeds",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ClrShipNeeds:int_int"
        }, {
            "name": "IncShipNeeds",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "IncShipNeeds:int_int"
        }, {
            "name": "IsWaterLsa",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "IsWaterLsa:int"
        }, {
            "name": "AIAssist",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "AIAssist"
        }, {
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIStart:int"
        }, {
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AIStart:int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIStart:int_str_int"
        }, {
            "name": "AIStop",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIStop:int"
        }, {
            "name": "NearestHospital",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}],
            "id": "NearestHospital:Squad"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "NearestStronghold:point_int_int"
        }, {
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "NearestStronghold:point_int"
        }, {
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "NearestStronghold:point"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "NearestSet:point_str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "NearestSet:point_str_int"
        }, {
            "name": "NearestSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}],
            "id": "NearestSet:point"
        }, {
            "name": "GetSettlements",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetSettlements:str_int"
        }, {
            "name": "GetEconomyScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::GetEconomyScript:int"
        }, {
            "name": "RunEconomyScript",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::RunEconomyScript:int"
        }, {
            "name": "EconomyScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::EconomyScript"
        }, {
            "name": "GetTacticScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::GetTacticScript:int"
        }, {
            "name": "RunTacticScript",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::RunTacticScript:int"
        }, {
            "name": "TacticScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::TacticScript"
        }, {
            "name": "GetGaika",
            "returns": 34,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::GetGaika"
        }, {
            "name": "CancelSupply",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::CancelSupply"
        }, {
            "name": "Inside",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}],
            "id": "Gate::Inside:Squad"
        }, {
            "name": "Outside",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}],
            "id": "Gate::Outside:Squad"
        }, {
            "name": "UpgradeBestBarrack",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::UpgradeBestBarrack:int"
        }, {
            "name": "RepairAll",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::RepairAll"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "PrepareAiTransportShip:int_int_int_str_point"
        }, {
            "name": "CheckLP",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "CheckLP"
        }, {
            "name": "SendSquadToLsaX",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SendSquadToLsaX"
        }, {
            "name": "GetMouseXY",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GetMouseXY"
        }, {
            "name": "RUType",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "RUType:str_int"
        }, {
            "name": "UType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "UType:int_int"
        }, {
            "name": "UTech",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "UTech:int_int"
        }, {
            "name": "UTrainCmd",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "UTrainCmd:int_int"
        }, {
            "name": "UEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "UEnabled:int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "CheckUEnabled:ptr.int_int_int_int_int"
        }, {
            "name": "CalcGoAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::CalcGoAround"
        }, {
            "name": "TakeNearbyItems",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::TakeNearbyItems:int"
        }, {
            "name": "HasItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::HasItem:str"
        }, {
            "name": "UseItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Obj::UseItem:str"
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
            }, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "FindTeleport:int_point_point"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}],
            "id": "Squad::UseTeleport:Obj_int_str_point"
        }, {
            "name": "InvadeThroughGate",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Squad::InvadeThroughGate:Obj_int"
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
            }, {"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "Eval:int_point_int_ptr.int_ptr.int_ptr.int"
        }, {
            "name": "EvalGroup",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "EvalGroup:str"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::BestMDPos:int_int_int_int_bool"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Unit::BestProtPos:int_int_int_int"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsProtected:int_point_str"
        }, {
            "name": "NeedTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "NeedTraining:int"
        }, {
            "name": "GetCounterUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 8, "is_ptr": true}],
            "id": "GetCounterUnits:Settlement_ptr.IntArray"
        }, {
            "name": "GetClassHealt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetClassHealt:str"
        }, {
            "name": "GetTrainGold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetTrainGold:str"
        }, {
            "name": "IsAIPlayer",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "IsAIPlayer:int"
        }, {
            "name": "AIGetSkillToDevelop",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}],
            "id": "Hero::AIGetSkillToDevelop:ptr.int_ptr.int"
        }, {
            "name": "SetNoAIFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetNoAIFlag:ObjList_bool"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "GAIKA::GetAIControlledUnits:str_int_int_bool"
        }, {
            "name": "TSRecruitArmy",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::TSRecruitArmy:str_int"
        }, {
            "name": "TSGetAllBarracks",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::TSGetAllBarracks"
        }, {
            "name": "TSGetAllArenae",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::TSGetAllArenae"
        }, {
            "name": "TSGetAllTemples",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::TSGetAllTemples"
        }, {
            "name": "BestArena",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::BestArena"
        }, {
            "name": "ArenaTrainCmd",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ArenaTrainCmd:int"
        }, {
            "name": "TSArenaRecruit",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::TSArenaRecruit:int"
        }, {
            "name": "ArenaUTech",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ArenaUTech:int"
        }, {
            "name": "ArenaUType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ArenaUType:int"
        }, {
            "name": "TSRecruitHero",
            "returns": 15,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::TSRecruitHero"
        }, {
            "name": "TSResearch",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::TSResearch:str"
        }, {
            "name": "TSTempleRecruit",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Settlement::TSTempleRecruit:int"
        }, {
            "name": "BestTemple",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::BestTemple"
        }, {
            "name": "TempleUType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "TempleUType:int"
        }, {
            "name": "TempleUTrain",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "TempleUTrain:int"
        }, {
            "name": "TSAdvHeroSkills",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 8, "is_ptr": true}],
            "id": "Hero::TSAdvHeroSkills:ptr.IntArray_ptr.IntArray"
        }, {
            "name": "SelSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelSquad"
        }, {
            "name": "SelSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SelSquad:int_int"
        }, {
            "name": "SelSquadLeader",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SelSquadLeader"
        }, {
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKA::Dump"
        }, {
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::Dump"
        }, {
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SquadList::Dump"
        }, {
            "name": "Breakpoint",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Breakpoint"
        }, {
            "name": "PrGAIKAStrat",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "PrGAIKAStrat:GAIKA_int"
        }, {
            "name": "ViewGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ViewGAIKA"
        }, {
            "name": "vg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "vg:int"
        }, {
            "name": "SS_STR",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "SS_STR:int"
        }, {
            "name": "GS_STR",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GS_STR:int"
        }, {
            "name": "IsTeutonTent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Settlement::IsTeutonTent"
        }, {
            "name": "AIV",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIV:int"
        }, {
            "name": "AIV",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AIV:int_str"
        }, {
            "name": "DbgAI",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "DbgAI:int"
        }, {
            "name": "DbgArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "DbgArmy:int"
        }, {
            "name": "dp",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "dp:int"
        }, {
            "name": "LsaStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "LsaStr:int"
        }, {
            "name": "AIVar",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIVar:int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIVar:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetAIVar:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetAIVar:int_int_int_bool"
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AIRun:int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:int_str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:int_str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:int_str_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:int_str_int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIRun:int_str_int_int_int_int_int"
        }, {
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AIIRun:int_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIIRun:int_str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIIRun:int_str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIIRun:int_str_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIIRun:int_str_int_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "AIIRun:int_str_int_int_int_int_int"
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Settlement::AIRun:str"
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::AIRun:str_int"
        }, {
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Squad::AIRun:str"
        }, {
            "name": "AppendFile",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "AppendFile:str_str"
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "pr:str"
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "pr:int"
        }, {
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "pr:bool"
        }, {
            "name": "cls",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cls"
        }, {
            "name": "quit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "quit"
        }, {
            "name": "switch",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "switch"
        }, {
            "name": "_Black",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_Black"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_Place:str_int_int"
        }, {
            "name": "_InvalidateAllToggle",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_InvalidateAllToggle"
        }, {
            "name": "_ToggleInvRects",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ToggleInvRects"
        }, {
            "name": "_SetCursor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_SetCursor:str"
        }, {
            "name": "ProfileStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ProfileStart"
        }, {
            "name": "ProfileStop",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ProfileStop"
        }, {
            "name": "PerlinTest",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "PerlinTest"
        }, {
            "name": "ShrinkEntities",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ShrinkEntities"
        }, {
            "name": "ReloadConstIni",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ReloadConstIni"
        }, {
            "name": "BuildSPF",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "BuildSPF"
        }, {
            "name": "BuildRLEMMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "BuildRLEMMap"
        }, {
            "name": "PrintMemStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "PrintMemStats"
        }, {
            "name": "DumpObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "DumpObj"
        }, {
            "name": "ConvTerrains",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ConvTerrains"
        }, {
            "name": "CheckClasses",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "CheckClasses"
        }, {
            "name": "MakePassable",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MakePassable"
        }, {
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetPlayer:int"
        }, {
            "name": "CurPlayer",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "CurPlayer"
        }, {
            "name": "ToggleFog",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ToggleFog"
        }, {
            "name": "SetFog",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetFog:bool"
        }, {
            "name": "ExploreAll",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ExploreAll"
        }, {
            "name": "Invalidate",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Invalidate"
        }, {
            "name": "Render",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Render"
        }, {
            "name": "ScreenShot",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ScreenShot"
        }, {
            "name": "ActivateScreenShots",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ActivateScreenShots:int"
        }, {
            "name": "ToggleScreenShots",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "ToggleScreenShots:int"
        }, {
            "name": "DebugSelected",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "DebugSelected"
        }, {
            "name": "Save",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Save"
        }, {
            "name": "ExportObjs",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ExportObjs:str"
        }, {
            "name": "ExportTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ExportTerrain:str"
        }, {
            "name": "Load",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Load"
        }, {
            "name": "Save",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Save:str"
        }, {
            "name": "Load",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Load:str"
        }, {
            "name": "ChMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ChMap:str"
        }, {
            "name": "MousePos",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MousePos"
        }, {
            "name": "Conv",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Conv"
        }, {
            "name": "ToggleVis",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ToggleVis"
        }, {
            "name": "Spawn",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Spawn:int_int"
        }, {
            "name": "RemoveDecors",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "RemoveDecors"
        }, {
            "name": "Explorer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Explorer"
        }, {
            "name": "Dlg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "Dlg:str"
        }, {
            "name": "DumpStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "DumpStats:Obj"
        }, {
            "name": "sel",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "sel"
        }, {
            "name": "selo",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "selo"
        }, {
            "name": "selu",
            "returns": 13,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "selu"
        }, {
            "name": "selh",
            "returns": 15,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "selh"
        }, {
            "name": "selb",
            "returns": 14,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "selb"
        }, {
            "name": "sels",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "sels"
        }, {
            "name": "selsq",
            "returns": 33,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "selsq"
        }, {
            "name": "selg",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "selg"
        }, {
            "name": "Desync",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Desync"
        }, {
            "name": "PFPersist",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "PFPersist:bool"
        }, {
            "name": "AddFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "AddFD"
        }, {
            "name": "RemFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "RemFD"
        }, {
            "name": "RebuildPass",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "RebuildPass"
        }, {
            "name": "Splash",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "Splash:str_str"
        }, {
            "name": "F5",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "F5"
        }, {
            "name": "FlatTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "FlatTerrain"
        }, {
            "name": "Pause",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Pause"
        }, {
            "name": "TestLoad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TestLoad"
        }, {
            "name": "TestSave",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TestSave"
        }, {
            "name": "sd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "sd"
        }, {
            "name": "_RedrawAll",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_RedrawAll"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "InsDecor:int_int_int"
        }, {
            "name": "DelDecor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DelDecor:int_int"
        }, {
            "name": "PreLit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "PreLit"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DeepWater:int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "RayOfLight:int_int_int_int"
        }, {
            "name": "DumpFuncToXML",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "DumpFuncToXML"
        }, {
            "name": "USR",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "USR"
        }, {
            "name": "ToggleLD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ToggleLD"
        }, {
            "name": "ChangeFormation",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "ChangeFormation:str"
        }, {
            "name": "UndoMemory",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "UndoMemory"
        }, {
            "name": "AdvExplorer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "AdvExplorer"
        }, {
            "name": "ae",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ae"
        }, {
            "name": "TTest",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "TTest:str"
        }, {
            "name": "TTestf",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TTestf"
        }, {
            "name": "SaveEdit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SaveEdit"
        }, {
            "name": "EdgeOfForever",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "EdgeOfForever"
        }, {
            "name": "TestAdventure",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TestAdventure"
        }, {
            "name": "TestAdventureDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TestAdventureDebug"
        }, {
            "name": "SettlementCount",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SettlementCount"
        }, {
            "name": "LSA",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "LSA"
        }, {
            "name": "GAIKAFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GAIKAFD"
        }, {
            "name": "ESG",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "ESG:int_int"
        }, {
            "name": "GS",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GS:int"
        }, {
            "name": "cvar1",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "cvar1:int"
        }, {
            "name": "cvar1",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cvar1"
        }, {
            "name": "cvar2",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "cvar2:int"
        }, {
            "name": "cvar2",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "cvar2"
        }, {
            "name": "TogglePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "TogglePtDraw:int"
        }, {
            "name": "DisablePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "DisablePtDraw"
        }, {
            "name": "EnablePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "EnablePtDraw"
        }, {
            "name": "GetAnimState",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Unit::GetAnimState"
        }, {
            "name": "ClearDecors",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ClearDecors"
        }, {
            "name": "GenTransTables",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GenTransTables"
        }, {
            "name": "GetItem",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetItem:str"
        }, {
            "name": "_PlayersAlly",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlayersAlly:int_int"
        }, {
            "name": "_PlayersShareControl",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlayersShareControl:int_int"
        }, {
            "name": "_PlayersShareView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlayersShareView:int_int"
        }, {
            "name": "_PlayersShareSupport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlayersShareSupport:int_int"
        }, {
            "name": "_PlayersMakeEnemies",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "_PlayersMakeEnemies:int_int"
        }, {
            "name": "_chs",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_chs:str"
        }, {
            "name": "_SetNextSeason",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "_SetNextSeason:str"
        }, {
            "name": "IngameDebugSelected",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "IngameDebugSelected"
        }, {
            "name": "gmp",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "gmp"
        }, {
            "name": "GenHelpCmdIcons",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "GenHelpCmdIcons"
        }, {
            "name": "_EnableAllSkills",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::_EnableAllSkills"
        }, {
            "name": "gdb",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "gdb"
        }, {
            "name": "_handles",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_handles"
        }, {
            "name": "GetFormDsc",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetFormDsc:str"
        }, {
            "name": "SetPlayerSettRace",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetPlayerSettRace:int_int"
        }, {
            "name": "SetSettRace",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetSettRace:str_int"
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
            }, {"name": "number", "type": 26, "is_ptr": false}],
            "id": "SetShortcutSel:int_int_ObjList"
        }, {
            "name": "GetShortcutSel",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetShortcutSel:int_int"
        }, {
            "name": "UIShowTab",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "UIShowTab:int"
        }, {
            "name": "UITabShown",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "UITabShown"
        }, {
            "name": "BlurTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "BlurTerrain:int"
        }, {
            "name": "ShowFlatTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ShowFlatTerrain"
        }, {
            "name": "clock",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "clock"
        }, {
            "name": "_DbgSel",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_DbgSel"
        }, {
            "name": "WaitIdle",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitIdle:Query_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitObjInQuery:Obj_Query_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitQueryCountBetween:Query_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitCommonObjects:Query_Query_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitHealthBetween:Query_int_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitSettlementCapture:str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitSettlementAllied:str_int_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitEnvStringEqual:str_str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitEnvIntBetween:str_int_int_int"
        }, {
            "name": "WaitAddNote",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitAddNote:str_int"
        }, {
            "name": "WaitRemoveNote",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitRemoveNote:str_int"
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
            }, {"name": "number", "type": 11, "is_ptr": true}],
            "id": "WaitConvRequest:Query_Query_int_ptr.Obj_ptr.Obj"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitUnitsInArea:Query_str_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitIdleUnitsInArea:Query_str_int"
        }, {
            "name": "WaitEmptyQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitEmptyQuery:Query_int"
        }, {
            "name": "WaitNonEmptyQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitNonEmptyQuery:Query_int"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitConvRequest:Obj_Obj_int"
        }, {
            "name": "EndConvSetup",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {
                "name": "number",
                "type": 11,
                "is_ptr": false
            }],
            "id": "EndConvSetup:Obj_Obj"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "WaitPlayerChat:ptr.int_ptr.str_int"
        }, {
            "name": "ShowLastNotificationPos",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ShowLastNotificationPos"
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
            }, {"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "UserNotification:str_str_point_int"
        }, {
            "name": "HasStarvingArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "HasStarvingArmy"
        }, {
            "name": "HasStarvingArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "HasStarvingArmy:int"
        }, {
            "name": "StarvingArmyPos",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "StarvingArmyPos:int"
        }, {
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str_str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str_str_str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str_str_str_str_str_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "RunAIHelper:str_str_str_str_str_str_str_str_str"
        }, {
            "name": "StopAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "StopAIHelper:str"
        }, {
            "name": "IsAIHelperRunning",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "IsAIHelperRunning:str"
        }, {
            "name": "pfd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "pfd"
        }, {
            "name": "testpf",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "testpf"
        }, {
            "name": "SPFDone",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFDone"
        }, {
            "name": "SPFFindAreas_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFFindAreas_Quant"
        }, {
            "name": "SPFInitData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFInitData"
        }, {
            "name": "SPFInitDirectionData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFInitDirectionData"
        }, {
            "name": "SPFInitPointToAreaData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFInitPointToAreaData"
        }, {
            "name": "SPFInitConnectData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFInitConnectData"
        }, {
            "name": "SPFCalcConnectHighRes_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFCalcConnectHighRes_Quant"
        }, {
            "name": "SPFIncreaseConnect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFIncreaseConnect"
        }, {
            "name": "SPFIncreaseConnect_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "SPFIncreaseConnect_Quant"
        }, {
            "name": "GetInnState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetInnState:str_str"
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
            }, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetInnState:str_str_int"
        }, {
            "name": "GetInnState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "GetInnState:Obj"
        }, {
            "name": "SetInnState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetInnState:Obj_int"
        }, {
            "name": "GenTransGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GenTransGame:str"
        }, {
            "name": "MousePtm",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "MousePtm"
        }, {
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "point::GetGAIKA"
        }, {
            "name": "Goto",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "Goto:int_int"
        }, {
            "name": "ToggleFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ToggleFD"
        }, {
            "name": "Catch",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}],
            "id": "Catch:Obj"
        }, {
            "name": "ClampToMap",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "point::ClampToMap"
        }, {
            "name": "RemakeVis",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "RemakeVis"
        }, {
            "name": "HeroStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "HeroStats"
        }, {
            "name": "EqualHeroes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "EqualHeroes"
        }, {
            "name": "_ui",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_ui"
        }, {
            "name": "_di",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_di"
        }, {
            "name": "_bi",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_bi"
        }, {
            "name": "_itools",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_itools"
        }, {
            "name": "StartPlayerScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "StartPlayerScript:int_str"
        }, {
            "name": "StopPlayerScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "StopPlayerScript:int_str"
        }, {
            "name": "GetPlayerScriptsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetPlayerScriptsCount:int"
        }, {
            "name": "GetPlayerScript",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GetPlayerScript:int_int"
        }, {
            "name": "ShowAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ShowAnnouncement:str_str"
        }, {
            "name": "HideAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "HideAnnouncement:str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "ShowAnnouncement:int_str_str"
        }, {
            "name": "HideAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "HideAnnouncement:int_str"
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
            }, {"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetPlayerStatus:int_int_str_bool"
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
            }, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "SetPlayerStatus:int_int_bool"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "ShowNotification:str_str_int_str_Obj"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "ShowHint:str_str_Obj"
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
            }, {"name": "number", "type": 11, "is_ptr": false}],
            "id": "ShowTutorial:str_str_Obj"
        }, {
            "name": "HideNotification",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "HideNotification:int"
        }, {
            "name": "TutorialActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "TutorialActive"
        }, {
            "name": "HintsActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "HintsActive"
        }, {
            "name": "EnableHintsAndTutorials",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "EnableHintsAndTutorials"
        }, {
            "name": "DisableHintsAndTutorials",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "DisableHintsAndTutorials"
        }, {
            "name": "AreHintsAndTutorialsEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "AreHintsAndTutorialsEnabled"
        }, {
            "name": "MistAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Obj::MistAction:int"
        }, {
            "name": "MagicActionEnd",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::MagicActionEnd"
        }, {
            "name": "CoverOfMercyAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Obj::CoverOfMercyAction"
        }, {
            "name": "GetDefenderCls",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GetDefenderCls:int"
        }, {
            "name": "GetDefendersMax",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GetDefendersMax:int"
        }, {
            "name": "GetDefendersOut",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GetDefendersOut:int"
        }, {
            "name": "GetStartLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GetStartLevel:int"
        }, {
            "name": "GetEndLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Building::GetEndLevel:int"
        }, {
            "name": "GetOutpostFood",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Building::GetOutpostFood"
        }, {
            "name": "PrintMsg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "PrintMsg:int_str"
        }, {
            "name": "_cr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "_cr"
        }, {
            "name": "GetTerritoryState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "GetTerritoryState:str"
        }, {
            "name": "SetTerritoryState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetTerritoryState:str_int"
        }, {
            "name": "ConquestBonus",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "ConquestBonus"
        }, {
            "name": "FormDescription",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "id": "FormDescription:str"
        }, {
            "name": "SetControlFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}],
            "id": "GAIKA::SetControlFlag:int_bool"
        }, {
            "name": "GetControlFlag",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::GetControlFlag:int"
        }, {
            "name": "ControlledNeighbors",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::ControlledNeighbors:int"
        }, {
            "name": "SetFreedom",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}],
            "id": "Unit::SetFreedom:bool"
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
            }, {"name": "number", "type": 5, "is_ptr": false}],
            "id": "EndGame:int_bool_str"
        }, {
            "name": "IsArmyOutside",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Hero::IsArmyOutside"
        }, {
            "name": "RandomPathCast",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "RandomPathCast"
        }, {
            "name": "DiplAreAllied",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "DiplAreAllied:int_int"
        }, {
            "name": "GetLastAttacker",
            "returns": 11,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "Squad::GetLastAttacker"
        }, {
            "name": "ApproachingSquads",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}],
            "id": "GAIKA::ApproachingSquads:int_int"
        }, {
            "name": "SetUseCount",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "SetUseCount:int"
        }, {
            "name": "SetUseCount",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "id": "Item::SetUseCount:int"
        }, {
            "name": "WaitForMapChange",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "id": "WaitForMapChange"
        }]
    }
})();
