// noinspection HtmlUnknownAnchorTarget
const THE_OBJ = (function () {
    // noinspection HtmlUnknownAnchorTarget
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
            "description": "Un rectángulo en dos dimensiones alineado con los ejes, definido por los valores en los que se sitúan sus cuatro lados. Utiliza <a href='#ptr.rect::Set:int_int_int_int'>rect::Set</a> para fijar los lados.",
            "description_en": "An axis-aligned rectangle in 2 dimensions, defined by the values in which their four sides reside. Use <a href='#ptr.rect::Set:int_int_int_int'>rect::Set</a> to select the sides."
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
        return `Devuelve el <a class='type' href='#${THE_CLASSES[fromIdx].name}'>${THE_CLASSES[fromIdx].name}</a> como <a class='type' href='#${THE_CLASSES[toIdx].name}'>${THE_CLASSES[toIdx].name}</a>, suponiendo que, en efecto, es una instancia este tipo. Si no lo es, devuelve el equivalente a un <a href='#Obj::IsValid'>objeto inválido / nulo</a>`;
    }

    function defaultCastEn(fromIdx, toIdx) {
        return `Returns this <a class='type' href='#${THE_CLASSES[fromIdx].name}'>${THE_CLASSES[fromIdx].name}</a> as <a class='type' href='#${THE_CLASSES[toIdx].name}'>${THE_CLASSES[toIdx].name}</a>, assuming it is, indeed, an instance of this type. If it is not, it returns the equivalent to a <a href='#Obj::IsValid'>null / invalid object</a>`;
    }

    // noinspection HtmlUnknownAnchorTarget
    return {
        "classes": THE_CLASSES,
        "funcs": [{
            "id": "Sleep:int",
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
            "id": "KillScript",
            "name": "KillScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ptr.int::-p--e-:ptr.int_int",
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
            "id": "ptr.int::-m--e-:ptr.int_int",
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
            "id": "int::-bs-a:int_int",
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
            "id": "int::-b-:int_int",
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
            "id": "int::-p-:int_int",
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
            "id": "int::-m-:int_int",
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
            "id": "int::-m-:int",
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
            "id": "ptr.int::-e-:ptr.int_int",
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
            "id": "int::-a-:int_int",
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
            "id": "int::-s-:int_int",
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
            "id": "int::%:int_int",
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
            "id": "int::-e--e-:int_int",
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
            "id": "int::-x--e-:int_int",
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
            "id": "int::-bs-l:int_int",
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
            "id": "int::-bs-g:int_int",
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
            "id": "int::-bs-l-e-:int_int",
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
            "id": "int::-bs-g-e-:int_int",
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
            "id": "abs:int",
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
            "id": "Write:int",
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "MIN:int_int",
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
            "id": "MAX:int_int",
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
            "id": "CLAMP:int_int_int",
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
            "description_en": "<p>Clamps the value between the given limits. If <tt>x</tt> is contained between <tt>min</tt> and <tt>max</tt>, this function returns <tt>x</tt>. If <tt>x</tt> is lower than <tt>min</tt>, it returns <tt>min</tt>; and if it is greater than <tt>max</tt> it returns <tt>max</tt>.</p><p>Equivalent to <tt>MIN(MAX(x, min), max)</tt></p>"
        }, {
            "id": "float::-p-:float_float",
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
            "id": "float::-m-:float_float",
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
            "id": "float::-m-:float",
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
            "id": "ptr.float::-e-:ptr.float_float",
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
            "id": "float::-a-:float_float",
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
            "id": "float::-s-:float_float",
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
            "id": "float::-e--e-:float_float",
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
            "id": "float::-x--e-:float_float",
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
            "id": "float::-bs-l:float_float",
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
            "id": "float::-bs-g:float_float",
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
            "id": "sqrt:float",
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
            "id": "Int:float",
            "name": "Int",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}],
            "description": "Convierte un valor en coma flotante a entero, eliminando los decimales si los hubiera. Nótese que el número <strong>no</strong> se redondea al entero más cercano, sino al inmediatamente inferior.",
            "description_en": "Casts a floating-point value to an integer, removing the decimal part of the number. Notice the number <strong>is not</strong> rounded to the closest integer, but rather floored to the immediately lower one."
        }, {
            "id": "Write:float",
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 3, "is_ptr": false}]
        }, {
            "id": "MIN:float_float",
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
            "id": "MAX:float_float",
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
            "id": "CLAMP:float_float_float",
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
            "description_en": "<p>Clamps the value between the given limits. If <tt>x</tt> is contained between <tt>min</tt> and <tt>max</tt>, this function returns <tt>x</tt>. If <tt>x</tt> is lower than <tt>min</tt>, it returns <tt>min</tt>; and if it is greater than <tt>max</tt> it returns <tt>max</tt>.</p><p>Equivalent to <tt>MIN(MAX(x, min), max)</tt></p>"
        }, {
            "id": "ptr.bool::-e-:ptr.bool_bool",
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
            "id": "bool::-x-:bool",
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
            "id": "bool::-bs-a-bs-a:bool_bool",
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
            "id": "bool::-b--b-:bool_bool",
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
            "id": "bool::-h-:bool_bool",
            "name": "^",
            "returns": 2,
            "returns_ptr": false,
            "of": 2,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "p", "type": 2, "is_ptr": false}, {"name": "q", "type": 2, "is_ptr": false}],
            "description": "Realiza una operación XOR entre los dos valores de verdad dados. El valor de retorno será <tt>true</tt> sólo si ambos valores son distintos.",
            "description_en": "Performs an XOR between the two given boolean values. The return value will be <tt>true</tt> only if the two values are different."
        }, {
            "id": "Write:pstr",
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 4, "is_ptr": false}]
        }, {
            "id": "Write:str",
            "name": "Write",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ptr.pstr::-e-:ptr.pstr_pstr",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 4,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 4, "is_ptr": true}, {"name": "number", "type": 4, "is_ptr": false}]
        }, {
            "id": "ptr.str::-e-:ptr.str_str",
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
            "id": "StrCmp:str_str",
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
            "id": "StrCat:ptr.str_str",
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
            "id": "ParseStr:str_ptr.str",
            "name": "ParseStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "cadena", "name_en": "string", "type": 5, "is_ptr": false}, {
                "name": "resto_out",
                "name_en": "rest_out",
                "type": 5,
                "is_ptr": true
            }],
            "description": "Retorna el contenido de la cadena <tt>cadena</tt> hasta la primera coma (<tt>,</tt>), descarta la coma y guarda el resto en <tt>resto_out</tt>. Esta función es útil para dividir cadenas de parámetros separados por comas, por ejemplo: <pre>str params, siguiente;<br>StrArray parsed;<br><br>params = \"param1, param2, param3\";<br><br>siguiente = ParseStr(params, params);<br>while(siguiente != \"\") {<br>&nbsp;&nbsp;&nbsp;&nbsp;parsed[parsed.size] = siguiente;<br>&nbsp;&nbsp;&nbsp;&nbsp;siguiente = ParseStr(params, params);<br>}<br>// Ahora parsed contiene \"param1\", \"param2\" y \"param3\" en los índices 0, 1 y 2, respectivamente</pre>",
            "description_en": "Returns the content of the string <tt>string</tt> up until the first comma (<tt>,</tt>), discards the comma and saves the rest into <tt>rest_out</tt>. This function is useful to divide strings of comma-separated parameters, for example: <pre>str params, next;<br>StrArray parsed;<br><br>params = \"param1, param2, param3\";<br><br>next = ParseStr(params, params);<br>while(next != \"\") {<br>&nbsp;&nbsp;&nbsp;&nbsp;parsed[parsed.size] = next;<br>&nbsp;&nbsp;&nbsp;&nbsp;next = ParseStr(params, params);<br>}<br>// Now parsed contains \"param1\", \"param2\" and \"param3\" in the indices 0, 1 and 2, respectively</pre>"
        }, {
            "id": "StrStr:str_str",
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
            "id": "GetFromStr:str_str",
            "name": "GetFromStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetFromStrToEOL:str_str",
            "name": "GetFromStrToEOL",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "str::-p-:str_str",
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
            "id": "FindChrPos:str_int",
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
            "related": ["GetChr:str_int"]
        }, {
            "id": "GetChr:str_int",
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
            "id": "IsNull:str",
            "name": "IsNull",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "StrLen:str",
            "name": "StrLen",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "description": "Retorna la longitud de la cadena en bytes. Con caracteres <a href='https://ascii.cl/es/'>ASCII</a>, que ocupan un byte cada uno, esta longitud se corresponde con el número de caracteres de la cadena. Sin embargo, los caracteres no-ASCII (como á), pueden ocupar más de un byte.",
            "description_en": "Returns the length of the string in bytes. With basic <a href='https://ascii.cl/es/'>ASCII</a> characters, which occupy 1 byte each, this corresponds to the length of the string in characters. Be aware, however, that non-ASCII characters (like ä) may measure more than 1 byte."
        }, {
            "id": "StrMid:str_int_int",
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
            "description_en": "Returns the substring of <tt>text</tt> starting at <tt>start</tt> and with length <tt>length</tt>. Remember that character indices start by 0.<br>Example: <tt>StrMid(\"Caesar\", 2, 3)</tt> will return <tt>\"esa\"</tt>."
        }, {
            "id": "Str2Int:str",
            "name": "Str2Int",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "description": "Convierte la cadena indicada a <a href='#int'>int</a>, interpretándola como un número entero en base 10. Sólo se interpretarán todos los caracteres numéricos (<tt>0</tt>-<tt>9</tt>) hasta el primer carácter no numérico de la cadena. Opcionalmente se puede añadir <tt>+</tt> o <tt>-</tt> al inicio.",
            "description_en": "It converts the passed string to an <a href='#int'>int</a>, interpreting it as a whole number in base 10. Only digits (<tt>0</tt>-<tt>9</tt>) of the string up to the first non-digit will be interpreted. Optionally, the string may start by <tt>+</tt> or <tt>-</tt>."
        }, {
            "id": "str::-e--e-:str_str",
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
            "id": "str::-x--e-:str_str",
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
            "id": "IsFlagSet:int_int",
            "name": "IsFlagSet",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SetFlag:ptr.int_int_bool",
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
            "id": "Point:int_int",
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
            "id": "ptr.point::x",
            "name": "x",
            "returns": 1,
            "returns_ptr": true,
            "of": 6,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia al valor del punto en el eje <i>x</i> (coordenada <i>x</i> del punto). Ver <a href='#ptr.int::-e-:ptr.int_int'>operador de asignación de int</a>.",
            "description_en": "Value of the point in the <i>x</i> axis (<i>x</i> coordinate of the point). See <a href='#ptr.int::-e-:ptr.int_int'>assignation operator for int</a>.",
            "related": ["ptr.point::Set:int_int"]
        }, {
            "id": "ptr.point::y",
            "name": "y",
            "returns": 1,
            "returns_ptr": true,
            "of": 6,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia al valor del punto en el eje <i>y</i> (coordenada <i>y</i> del punto). Ver <a href='#ptr.int::-e-:ptr.int_int'>operador de asignación de int</a>.",
            "description_en": "Value of the point in the <i>y</i> axis (<i>y</i> coordinate of the point). See <a href='#ptr.int::-e-:ptr.int_int'>assignation operator for int</a>.",
            "related": ["ptr.point::Set:int_int"]
        }, {
            "id": "point::x",
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
            "id": "point::y",
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
            "id": "ptr.point::Set:int_int",
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
            "id": "ptr.point::SetLen:int",
            "name": "SetLen",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "longitud", "name_en": "length", "type": 1, "is_ptr": false}],
            "description": "Interpretando el punto como un vector, modifica los valores de <i>x</i> e <i>y</i> para que la longitud del vector sea lo más próxima posible a <tt>longitud</tt>. Por ejemplo: <pre>point miVector;<br>miVector = Point(30, 40); // Tenemos un vector con coordenadas 30, 40<br>miVector.SetLen(5); // Ahora las coordenadas de miVector son 3, 4</pre>Relacionado: usa el método <a href='#point::Len'>point::Len</a> para obtener la longitud de un vector.",
            "description_en": "Interpreting the point as a vector, this method modifies the <i>x</i> and <i>y</i> properties for the length of this vector to be as close as possible to <tt>length</tt>. For example: <pre>point myVector;<br>myVector = Point(30, 40); // We have a vector with coordinates 30, 40<br>myVector.SetLen(5); // Now the coordinates of myVector are 3, 4</pre>Related: use <a href='#point::Len'>point::Len</a> to obtain the length of a vector."
        }, {
            "id": "point::Len",
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
            "id": "ptr.point::Rot:int",
            "name": "Rot",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "grados", "name_en": "degrees", "type": 1, "is_ptr": false}],
            "description": "Rota el punto tantos grados como se indique alrededor del origen (0, 0) en sentido horario. Por ejemplo: <pre>point miPunto;<br>miPunto = Point(10, 0);<br>miPunto.Rot(90); // Ahora miPunto tiene coordenadas 0, -10 (ha rotado 90 grados)</pre>",
            "description_en": "Rotates the point the indicated degrees around the origin (0, 0) in clockwise direction. For example: <pre>point myPoint;<br>myPoint = Point(10, 0);<br>myPoint.Rot(90); // Now myPoint has coordinates 0, -10 (it has rotated 90 degrees)</pre>"
        }, {
            "id": "point::InRect:rect",
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
            "id": "ptr.point::IntoRect:rect",
            "name": "IntoRect",
            "returns": 0,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "rectangulo", "name_en": "rectangle", "type": 7, "is_ptr": false}],
            "description": "Restringe el punto al rectángulo dado. Es decir, que reemplaza sus coordenadas por las del punto más cercano situado dentro del rectángulo.<br><tt>p.IntoRect(r)</tt> es equivalente a <tt>p.Set(CLAMP(p.x, r.left, r.right), CLAMP(p.y, r.top, r.bottom))</tt>.",
            "description_en": "Restricts the point to the given rectangle. I.e., it replaces its coordinates by the ones of the closest point within the rectangle.<br><tt>p.IntoRect(r)</tt> is equivalent to <tt>p.Set(CLAMP(p.x, r.left, r.right), CLAMP(p.y, r.top, r.bottom))</tt>"
        }, {
            "id": "point::Dist:point",
            "name": "Dist",
            "returns": 1,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "otro", "name_en": "other", "type": 6, "is_ptr": false}],
            "description": "Devuelve la distancia cartesiana del punto a <tt>otro</tt>. Es equivalente a <a href='#point::-m-:point_point'>restar el punto al otro</a> y luego <a href='#point::Len'>obtener la longitud</a> del vector resultante.",
            "description_en": "Returns the Cartesian distance from the point to <tt>other</tt>. It is equivalent to <a href='#point::-m-:point_point'>substracting the point from other</a> and then <a href='#point::Len'>obtaining the length</a> of the resulting vector."
        }, {
            "id": "point::-p-:point_point",
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
            "id": "point::-m-:point_point",
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
            "id": "point::-a-:point_int",
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
            "id": "point::-s-:point_int",
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
            "id": "Dist:point_point",
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
            "id": "ptr.point::-e-:ptr.point_point",
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
            "id": "point::-e--e-:point_point",
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
            "id": "point::-x--e-:point_point",
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
            "id": "rect::left",
            "name": "left",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>x</i> en la que se sitúa el lado izquierdo del rectángulo.",
            "description_en": "Value of the <i>x</i> coordinate in which the left side of the rectangle is placed."
        }, {
            "id": "rect::top",
            "name": "top",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>y</i> en la que se sitúa el lado superior del rectángulo.",
            "description_en": "Value of the <i>y</i> coordinate in which the top side of the rectangle is placed."
        }, {
            "id": "rect::right",
            "name": "right",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>x</i> en la que se sitúa el lado derecho del rectángulo.",
            "description_en": "Value of the <i>x</i> coordinate in which the right side of the rectangle is placed."
        }, {
            "id": "rect::bottom",
            "name": "bottom",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Valor de la coordenada en <i>y</i> en la que se sitúa el lado inferior del rectángulo.",
            "description_en": "Value of the <i>y</i> coordinate in which the bottom side of the rectangle is placed."
        }, {
            "id": "rect::width",
            "name": "width",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Ancho del rectángulo.",
            "description_en": "Width of the rectangle."
        }, {
            "id": "rect::height",
            "name": "height",
            "returns": 1,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Alto del rectángulo.",
            "description_en": "Height of the rectangle."
        }, {
            "id": "ptr.rect::left",
            "name": "left",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>x</i> en la que se sitúa el lado izquierdo del rectángulo.",
            "description_en": "Reference to modify the <i>x</i> coordinate in which the left side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"]
        }, {
            "id": "ptr.rect::top",
            "name": "top",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>y</i> en la que se sitúa el lado superior del rectángulo.",
            "description_en": "Reference to modify the <i>y</i> coordinate in which the top side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"]
        }, {
            "id": "ptr.rect::right",
            "name": "right",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>x</i> en la que se sitúa el lado derecho del rectángulo.",
            "description_en": "Reference to modify the <i>x</i> coordinate in which the right side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"]
        }, {
            "id": "ptr.rect::bottom",
            "name": "bottom",
            "returns": 1,
            "returns_ptr": true,
            "of": 7,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Referencia para modificar la coordenada en <i>y</i> en la que se sitúa el lado inferior del rectángulo.",
            "description_en": "Reference to modify the <i>y</i> coordinate in which the bottom side of the rectangle is placed.",
            "related": ["ptr.rect::Set:int_int_int_int"]
        }, {
            "id": "ptr.rect::Set:int_int_int_int",
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
            "description_en": "Assigns the values for the <a href='#rect::left'>left</a>, <a href='#rect::top'>top</a>, <a href='#rect::right'>right</a> and <a href='#rect::bottom'>bottom</a> sides of the rectangle."
        }, {
            "id": "rect::Center",
            "name": "Center",
            "returns": 6,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve un punto con las coordenadas del centro del rectángulo.",
            "description_en": "Returns a point with the coordinates of the center of the rectangle."
        }, {
            "id": "IntersectRects:rect_rect",
            "name": "IntersectRects",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "rect_a", "type": 7, "is_ptr": false}, {"name": "rect_b", "type": 7, "is_ptr": false}],
            "description": "<p>Devuelve la \"intersección\" de ambos rectángulos, es decir, el rectángulo correspondiente a la superposición de ambos rectángulos. <strong>Cuidado</strong>: si los rectángulos no se intersecan, el rectángulo resultante puede no ser intuitivo.</p><p>Formalmente, lo que esta función hace es coger el máximo de ambos rectángulos para <a href='#rect::left'>left</a> y <a href='#rect::top'>top</a>, y el mínimo de ambos rectángulos para <a href='#rect::right'>right</a> y <a href='#rect::bottom'>bottom</a>.</p><p><tt>r = IntersectRects(a, b)</tt> es, pues, equivalente a <tt>r.Set(MAX(a.left, b.left), MAX(a.top, b.top), MIN(a.right, b.right), MIN(a.bottom, b.bottom))</tt></p>",
            "description_en": "Returns the \"intersection\" of both rectangles, i.e., the rectangle formed where both rectangles overlap. <strong>Warning</strong>: if the rectangles do not intersect, the return of this function will not be intuitive.</p><p>In reality, this function takes the maximum for <a href='#rect::left'>left</a> and <a href='#rect::top'>top</a> among the rectangles, and the minimum for <a href='#rect::right'>right</a> and <a href='#rect::bottom'>bottom</a>.</p><p><tt>r = IntersectRects(a, b)</tt> is, therefore, equivalent to <tt>r.Set(MAX(a.left, b.left), MAX(a.top, b.top), MIN(a.right, b.right), MIN(a.bottom, b.bottom))</tt></p>",
            "related": ["ptr.rect::Set:int_int_int_int", "rect::left", "rect::top", "rect::right", "rect::bottom"]
        }, {
            "id": "AddRects:rect_rect",
            "name": "AddRects",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "rect_a", "type": 7, "is_ptr": false}, {"name": "rect_b", "type": 7, "is_ptr": false}],
            "description": "<p>Devuelve la \"suma\" de ambos rectángulos, es decir, el rectángulo de área mínima que contiene a ambos rectángulos. Este rectángulo es aquel cuyos lados <a href='#rect::left'>left</a> y <a href='#rect::top'>top</a> son, cada uno, los mínimos de ambos rectángulos, y cuyos lados <a href='#rect::right'>right</a> y <a href='#rect::bottom'>bottom</a> son, cada uno, los máximos de ambos rectángulos.</p><p><tt>r = AddRects(a, b)</tt> es, pues, equivalente a <tt>r.Set(MIN(a.left, b.left), MIN(a.top, b.top), MAX(a.right, b.right), MAX(a.bottom, b.bottom))</tt></p>",
            "description_en": "Returns the \"sum\" of both rectangles, i.e., the rectangle of minimum area that overlaps both rectangles. This rectangle is that one with the minimum values for <a href='#rect::left'>left</a> and <a href='#rect::top'>top</a> among the rectangles, and the maximum for <a href='#rect::right'>right</a> and <a href='#rect::bottom'>bottom</a>.</p><p><tt>r = AddRects(a, b)</tt> is, therefore, equivalent to <tt>r.Set(MIN(a.left, b.left), MIN(a.top, b.top), MAX(a.right, b.right), MAX(a.bottom, b.bottom))</tt></p>",
            "related": ["ptr.rect::Set:int_int_int_int", "rect::left", "rect::top", "rect::right", "rect::bottom"]
        }, {
            "id": "ptr.rect::-e-:ptr.rect_rect",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": true}, {"name": "number", "type": 7, "is_ptr": false}],
            "description_en": "Assigns a rectangle to a rectangle reference (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignation operator</a>).",
            "description": "Asigna un rectángulo a una referencia a un rectángulo (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>)."
        }, {
            "id": "rect::-e--e-:rect_rect",
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos rectángulos para sus cuatro lados coinciden, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if the coordinates of the four sides of both rectangles match, otherwise it returns <tt>false</tt>."
        }, {
            "id": "rect::-x--e-:rect_rect",
            "name": "!=",
            "returns": 2,
            "returns_ptr": false,
            "of": 7,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 7, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si y solo si las coordenadas de ambos rectángulos para alguno de los lados son distintas, en caso contrario devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if and only if the rectangles are different, otherwise it returns <tt>false</tt>."
        }, {
            "id": "ptr.IntArray::-e-:ptr.IntArray_ptr.IntArray",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 8, "is_ptr": true}],
            "description": "Asigna un <a class='type' href='#IntArray'>IntArray</a> a una referencia a <a class='type' href='#IntArray'>IntArray</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#IntArray'>IntArray</a> to a reference to <a class='type' href='#IntArray'>IntArray</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "ptr.IntArray::-c-:ptr.IntArray_int",
            "name": "[",
            "returns": 1,
            "returns_ptr": true,
            "of": 8,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "<p>Obtiene el entero en la posición indicada.</p> <p>Las posiciones comienzan en 0 (siendo 0 el primer elemento, 1 el segundo, etc). Por ejemplo, para acceder al cuarto elemento de <tt>miArray</tt> podemos poner: <tt>miArray[3]</tt>. Nótese que el último elemento tiene índice <tt>miArray.size - 1</tt>. </p><p>Nótese también que el operador devuelve una referencia, por lo que el valor puede ser modificado, por ejemplo, con el <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>. Modificar el valor de un índice no existente redimensiona el array para incluir ese índice.</p><p>Si el array no contiene el índice dado, el valor retornado es <tt>0</tt>.</p>",
            "description_en": "<p>Obtains the integer in the indicated index.</p><p>The indices are 0-based (being 0 the first element, 1 the second, etc). For example, to retrieve the fourth element in <tt>myArray</tt> we can write: <tt>myArray[3]</tt>. Notice that the last element has index <tt>myArray.size - 1</tt>.</p><p>Notice also that the operator returns a reference, so it can be modified (for example, with the <a href='#ptr.int::-e-:ptr.int_int'>integer assignment operator</a>). Modifying the value of a non-existent index resizes the array to include the given index.</p><p>If the array does not contain the given index, the returned value is <tt>0</tt>.</p>",
            "related": ["ptr.IntArray::size"]
        }, {
            "id": "ptr.IntArray::resize:int",
            "name": "resize",
            "returns": 0,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "n", "type": 1, "is_ptr": false}],
            "description": "Redimensiona el array a <tt>n</tt> elementos (see <a href='#ptr.IntArray::size'>IntArray::size</a>). Nótese que esto tiene el mismo efecto que asignar un valor al elemento en la posición <tt>n-1</tt>.",
            "description_en": "Resizes the array to <tt>n</tt> elements (see <a href='#ptr.IntArray::size'>IntArray:size</a>). Notice this has the same effect as assigning a value to the element at the position <tt>n-1</tt>."
        }, {
            "id": "ptr.IntArray::size",
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Número de elementos contenidos en el array. Nótese que, al comenzar los índices por 0, el último elemento tiene índice <tt>miArray.size - 1</tt>. Para cambiar el tamaño consultar <a href='#ptr.IntArray::resize:int'>IntArray::resize</a>.",
            "description_en": "Number of elements contained by the array. Notice that, since indices start in 0, the last element has index <tt>myArray.size - 1</tt>. To change the size of the array check <a href='#ptr.IntArray::resize:int'>IntArray::resize</a>."
        }, {
            "id": "ptr.IntArray::find:int",
            "name": "find",
            "returns": 1,
            "returns_ptr": false,
            "of": 8,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Retorna el índice <strong>más uno</strong> de la primera aparición del entero dado en el <a href='#IntArray'>IntArray</a> (así que si el elemento está en la primera posición, el valor retornado es 1). Si el elemento no se encuentra en el array, devuelve -1.",
            "description_en": "Returns the lowest index at which the given integer can be found inside the array <strong>adding 1</strong> (so if the element is in the first position, the value returned is 1). If the element is not in the array, it returns -1."
        }, {
            "id": "ptr.StrArray::-e-:ptr.StrArray_ptr.StrArray",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 9, "is_ptr": true}, {"name": "number", "type": 9, "is_ptr": true}],
            "description": "Asigna un <a class='type' href='#StrArray'>StrArray</a> a una referencia a <a class='type' href='#StrArray'>StrArray</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#StrArray'>StrArray</a> to a reference to <a class='type' href='#StrArray'>StrArray</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "ptr.StrArray::-c-:ptr.StrArray_int",
            "name": "[",
            "returns": 5,
            "returns_ptr": true,
            "of": 9,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 9, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}],
            "description": "Obtiene el <a class='type' href='#str'>str</a> en la posición indicada. Las posiciones comienzan en 0 (siendo 0 el primer elemento, 1 el segundo, etc). Por ejemplo, para acceder al cuarto elemento de <tt>miArray</tt> podemos poner: <tt>miArray[3]</tt>. Nótese que el último elemento tiene índice <tt>miArray.size - 1</tt>. Nótese también que el operador devuelve una referencia, por lo que el valor puede ser modificado, por ejemplo, con el <a href='#ptr.str::-e-:ptr.str_str'>el operador de asignación para cadenas</a>.",
            "description_en": "Obtains the <a class='type' href='#str'>str</a> in the indicated index. The indices are 0-based (being 0 the first element, 1 the second, etc). For example, to retrieve the fourth element in <tt>myArray</tt> we can write: <tt>myArray[3]</tt>. Notice that the last element has index <tt>myArray.size - 1</tt>. Notice also that the operator returns a reference, so it can be modified (for example, with the <a href='#ptr.str::-e-:ptr.str_str'>string assignment operator</a>)."
        }, {
            "id": "ptr.StrArray::resize:int",
            "name": "resize",
            "returns": 0,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Redimensiona el array a <tt>n</tt> elementos (see <a href='#ptr.StrArray::size'>StrArray::size</a>).",
            "description_en": "Resizes the array to <tt>n</tt> elements (see <a href='#ptr.StrArray::size'>StrArray:size</a>)."
        }, {
            "id": "ptr.StrArray::size",
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Número de elementos contenidos en el array. Nótese que, al comenzar los índices por 0, el último elemento tiene índice <tt>miArray.size - 1</tt>. Para cambiar el tamaño consultar <a href='#ptr.StrArray::resize:int'>StrArray::resize</a>.",
            "description_en": "Number of elements contained by the array. Notice that, since indices start in 0, the last element has index <tt>myArray.size - 1</tt>. To change the size of the array check <a href='#ptr.StrArray::resize:int'>StrArray::resize</a>."
        }, {
            "id": "ptr.StrArray::find:str",
            "name": "find",
            "returns": 1,
            "returns_ptr": false,
            "of": 9,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "cadena", "name_en": "string", "type": 5, "is_ptr": false}],
            "description": "Retorna el índice <strong>más uno</strong> de la primera aparición del <a class='type' href='#str'>str</a> dado en el <a class='type' href='#StrArray'>StrArray</a>. Ver <a href='#ptr.IntArray::find:int'>IntArray::find</a>.",
            "description_en": "Returns the lowest index at which the given <a class='type' href='#str'>str</a> can be found inside the array <strong>adding one</strong>. See <a href='#ptr.IntArray::find:int'>IntArray::find</a>."
        }, {
            "id": "ptr.StrMap::-e-:ptr.StrMap_ptr.StrMap",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 10, "is_ptr": true}, {"name": "number", "type": 10, "is_ptr": true}],
            "description": "Asigna un <a class='type' href='#StrMap'>StrMap</a> a una referencia a <a class='type' href='#StrMap'>StrMap</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#StrMap'>StrMap</a> to a reference to <a class='type' href='#StrMap'>StrMap</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "ptr.StrMap::-c-:ptr.StrMap_str",
            "name": "[",
            "returns": 5,
            "returns_ptr": true,
            "of": 10,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "map", "type": 10, "is_ptr": true}, {"name": "key", "type": 5, "is_ptr": false}],
            "description": "Obtiene una referencia al valor <a class='type' href='#str'>str</a> para la clave indicada. Nótese que el operador devuelve una referencia, por lo que el valor puede ser modificado, por ejemplo, con el <a href='#ptr.str::-e-:ptr.str_str'>el operador de asignación para cadenas</a>.",
            "description_en": "Obtains a reference to the <a class='type' href='#str'>str</a> value for the given key. Notice that the operator returns a reference, so it can be modified (for example, with the <a href='#ptr.str::-e-:ptr.str_str'>string assignment operator</a>)."
        }, {
            "id": "ptr.StrMap::size",
            "name": "size",
            "returns": 1,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "property",
            "params": [],
            "description": "Número de elementos contenidos en el diccionario.",
            "description_en": "Number of elements contained by the map."
        }, {
            "id": "ptr.StrMap::erase:str",
            "name": "erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "clave", "name_en": "key", "type": 5, "is_ptr": false}],
            "description": "Este método crashea el juego cuando la clave existe en el diccionario.",
            "description_en": "This method crashes the game when the key exists in the map.",
            "dangerous": true
        }, {
            "id": "ptr.StrMap::exists:str",
            "name": "exists",
            "returns": 2,
            "returns_ptr": false,
            "of": 10,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "clave", "name_en": "key", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si existe un elemento con clave <tt>clave</tt>, si no existe devuelve <tt>false</tt>.",
            "description_en": "Returns <tt>true</tt> if there is an element with key <tt>key</tt>, otherwise it returns <tt>false</tt>."
        }, {
            "id": "DumpStack",
            "name": "DumpStack",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Imprime el contenido actual del stack de ejecución a la consola. Esta función es para gente con conocimientos de programación.",
            "description_en": "Prints to the shell the current content of the execution stack. This function is for people with advanced programming knowledge."
        }, {
            "id": "DumpCode:int",
            "name": "DumpCode",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetMapSize",
            "name": "GetMapSize",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Obtiene las dimensiones del mapa actual. El ancho estará contenido en <a href='#point::x'>point::x</a> y el alto en <a href='#point::y'>point::y</a>.",
            "description_en": "Gets the dimensions of the current map. The width is contained in the <a href='#point::x'>point::x</a> property and the height is contained in <a href='#point::y'>point::y</a>.",
            "related": ["GetMapRect"]
        }, {
            "id": "_RandomTerrain2:str",
            "name": "_RandomTerrain2",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "config_file", "type": 5, "is_ptr": false}],
            "description": "Esta función crashea el juego si no logra abrir el archivo de configuración. Genera el terreno aleatoriamente a partir de la configuración que lee del archivo indicado.",
            "description_en": "This function crashes the game if the configuration file cannot be open. Generates a random terrain using the configuration in the given file.",
            "dangerous": true
        }, {
            "id": "ptr.Obj::-e-:ptr.Obj_Obj",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 11, "is_ptr": true}, {"name": "number", "type": 11, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Obj'>Obj</a> a una referencia a <a class='type' href='#Obj'>Obj</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Obj'>Obj</a> to a reference to <a class='type' href='#Obj'>Obj</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "ptr.Item::-e-:ptr.Item_Item",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 12, "is_ptr": true}, {"name": "number", "type": 12, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Item'>Item</a> a una referencia a <a class='type' href='#Item'>Item</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Item'>Item</a> to a reference to <a class='type' href='#Item'>Item</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "Obj::-e--e-:Obj_Obj",
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
            "description_en": "Returns <tt>true</tt> if both objects are the same, <tt>false</tt> if they are not."
        }, {
            "id": "Obj::-x--e-:Obj_Obj",
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
            "description_en": "Returns <tt>true</tt> if both objects are different (they are not the same object), <tt>false</tt> if they are not."
        }, {
            "id": "ptr.Obj::Clear",
            "name": "Clear",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": true,
            "type": "method",
            "params": [],
            "description": "Limpia la referencia a objeto dada, de forma que ya no referencia un objeto. Si se compara, por ejemplo, con el operador <a href='#Obj::-e--e-:Obj_Obj'>==</a> con una referencia a un objeto recién creada (sin asignar), dará <tt>true</tt>. Este tipo de objetos / referencias a objeto también son <a href='#Obj::IsValid'>inválidas</a>.",
            "description_en": "Clears the reference to object given, so it does not reference the current object anymore. If compared, for example, using the operator <a href='#Obj::-e--e-:Obj_Obj'>==</a> with a just-created reference to an object (before assigning anything to it), it will return <tt>true</tt>. This kind of objects or references to objects are also <a href='#Obj::IsValid'>invalid</a>.",
            "related": ["Obj::IsValid"]
        }, {
            "id": "Obj::AsUnit",
            "name": "AsUnit",
            "returns": 13,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 13),
            "description_en": defaultCastEn(11, 13)
        }, {
            "id": "Obj::AsBuilding",
            "name": "AsBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 14),
            "description_en": defaultCastEn(11, 14)
        }, {
            "id": "Obj::AsHero",
            "name": "AsHero",
            "returns": 15,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 15),
            "description_en": defaultCastEn(11, 15)
        }, {
            "id": "Obj::AsDruid",
            "name": "AsDruid",
            "returns": 16,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 16),
            "description_en": defaultCastEn(11, 16)
        }, {
            "id": "Obj::AsGhost",
            "name": "AsGhost",
            "returns": 17,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 17),
            "description_en": defaultCastEn(11, 17)
        }, {
            "id": "Obj::AsTower",
            "name": "AsTower",
            "returns": 18,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 18),
            "description_en": defaultCastEn(11, 18)
        }, {
            "id": "Obj::AsWagon",
            "name": "AsWagon",
            "returns": 19,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 19),
            "description_en": defaultCastEn(11, 19)
        }, {
            "id": "Obj::AsCatapult",
            "name": "AsCatapult",
            "returns": 20,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 20),
            "description_en": defaultCastEn(11, 20)
        }, {
            "id": "Obj::AsItemHolder",
            "name": "AsItemHolder",
            "returns": 21,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 21),
            "description_en": defaultCastEn(11, 21)
        }, {
            "id": "Obj::AsBarrack",
            "name": "AsBarrack",
            "returns": 22,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 22),
            "description_en": defaultCastEn(11, 22)
        }, {
            "id": "Obj::AsSacrifice",
            "name": "AsSacrifice",
            "returns": 23,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 23),
            "description_en": defaultCastEn(11, 23)
        }, {
            "id": "Obj::AsShip",
            "name": "AsShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 24),
            "description_en": defaultCastEn(11, 24)
        }, {
            "id": "Obj::AsFlying",
            "name": "AsFlying",
            "returns": 25,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": defaultCast(11, 25),
            "description_en": defaultCastEn(11, 25)
        }, {
            "id": "GetClassRace:str",
            "name": "GetClassRace",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "clase", "name_en": "class", "type": 5, "is_ptr": false}],
            "description": "Dada una <a href='#Obj::class'>clase de objeto</a>, devuelve la <a href='#Obj::race'>raza</a> a la que pertenece.",
            "description_en": "Given an <a href='#Obj::class'>object class</a>, returns the <a href='#Obj::race'>race</a> it belongs to.",
            "related": ["Obj::class", "Obj::race", "Obj::raceStr", "Obj::raceStrPref", "Obj::raceStrPrefLow", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "Obj::race",
            "name": "race",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Raza del objeto (galo, íbero, cartaginés, etc). Cada raza tiene asociado un nombre y un prefijo. Estas son las posibles razas: <table class='tt c-0 c-1 c-2'><thead><tr><th>race</th><th>raceStr</th><th>raceStrPref (prefijo)</th><th>Descripción</th></tr></thead>" +
                "<tbody><tr><td>-1</td><td></td><td></td><td>Raza de los objetos que no tienen raza asociada.</td></tr>" +
                "<tr><td>0</td><td>Gaul</td><td>G</td><td>Galos</td></tr>" +
                "<tr><td>1</td><td>RepublicanRome</td><td>R</td><td>Romanos republicanos</td></tr>" +
                "<tr><td>2</td><td>Carthage</td><td>C</td><td>Cartagineses</td></tr>" +
                "<tr><td>3</td><td>Iberia</td><td>I</td><td>Íberos</td></tr>" +
                "<tr><td>4</td><td>ImperialRome</td><td>M</td><td>Romanos imperiales</td></tr>" +
                "<tr><td>5</td><td>Britain</td><td>B</td><td>Britanos</td></tr>" +
                "<tr><td>6</td><td>Egypt</td><td>E</td><td>Egipcios</td></tr>" +
                "<tr><td>7</td><td>Germany</td><td>T</td><td>Germanos</td></tr></tbody></table>",
            "description_en": "Race of the object (Gaul, German, British, etc). Each race has a name and a prefix associated. These are the available races: <table class='tt c-0 c-1 c-2'><thead><tr><th>race</th><th>raceStr</th><th>raceStrPref (prefix)</th></tr></thead>" +
                "<tbody><tr><td>-1</td><td colspan='2'>Objects with no associated race return this value.</td></tr>" +
                "<tr><td>0</td><td>Gaul</td><td>G</td></tr>" +
                "<tr><td>1</td><td>RepublicanRome</td><td>R</td></tr>" +
                "<tr><td>2</td><td>Carthage</td><td>C</td></tr>" +
                "<tr><td>3</td><td>Iberia</td><td>I</td></tr>" +
                "<tr><td>4</td><td>ImperialRome</td><td>M</td></tr>" +
                "<tr><td>5</td><td>Britain</td><td>B</td></tr>" +
                "<tr><td>6</td><td>Egypt</td><td>E</td></tr>" +
                "<tr><td>7</td><td>Germany</td><td>T</td></tr></tbody></table>",
            "related": ["Obj::race", "Obj::raceStr", "Obj::raceStrPref", "Obj::raceStrPrefLow", "GetClassRace:str", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "Obj::raceStr",
            "name": "raceStr",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Nombre de la <a href='#Obj::race'>raza del objeto.</a>",
            "description_en": "Name of the <a href='#Obj::race'>race of the object.</a>",
            "related": ["Obj::race", "Obj::raceStrPref", "Obj::raceStrPrefLow", "GetClassRace:str", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "Obj::raceStrPref",
            "name": "raceStrPref",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Prefijo de la <a href='#Obj::race'>raza del objeto.</a>",
            "description_en": "Prefix of the <a href='#Obj::race'>race of the object.</a>",
            "related": ["Obj::race", "Obj::raceStr", "Obj::raceStrPrefLow", "GetClassRace:str", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "Obj::raceStrPrefLow",
            "name": "raceStrPrefLow",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Prefijo de la <a href='#Obj::race'>raza del objeto</a> en minúsculas.",
            "description_en": "Prefix of the <a href='#Obj::race'>race of the object</a> in lower case.",
            "related": ["Obj::race", "Obj::raceStr", "Obj::raceStrPref", "GetClassRace:str", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "GetRaceStr:int",
            "name": "GetRaceStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "numero_de_raza", "name_en": "race_number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el nombre de la <a href='#Obj::race'>raza</a> dada.",
            "description_en": "Returns the name of the given <a href='#Obj::race'>race</a>.",
            "related": ["Obj::race", "Obj::raceStr", "Obj::raceStrPref", "Obj::raceStrPrefLow", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "GetRaceStrPref:int",
            "name": "GetRaceStrPref",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "description": "Devuelve el prefijo de la <a href='#Obj::race'>raza</a> dada.",
            "description_en": "Returns the prefix of the given <a href='#Obj::race'>race</a>.",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "related": ["Obj::class", "Obj::race", "Obj::raceStr", "Obj::raceStrPref", "Obj::raceStrPrefLow", "GetClassRace:str", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPrefLow:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "GetRaceStrPrefLow:int",
            "name": "GetRaceStrPrefLow",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Devuelve el prefijo de la <a href='#Obj::race'>raza</a> dada en minúsculas.",
            "description_en": "Returns the prefix of the given <a href='#Obj::race'>race</a> in lower case.",
            "related": ["Obj::class", "Obj::race", "Obj::raceStr", "Obj::raceStrPref", "Obj::raceStrPrefLow", "GetClassRace:str", "GetPlayerRace:int", "GetRaceStr:int", "GetRaceStrPref:int", "SetPlayerSettRace:int_int", "SetSettRace:str_int"]
        }, {
            "id": "Obj::armor_slash",
            "name": "armor_slash",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Defensa del objeto frente a ataques oblicuos.",
            "description_en": "Defense of the object against slash attacks.",
            "related": ["Obj::armor_pierce", "SelAvgArmor"]
        }, {
            "id": "Obj::armor_pierce",
            "name": "armor_pierce",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Defensa del objeto frente a ataques de penetración.",
            "description_en": "Defense of the object against pierce attacks.",
            "related": ["Obj::armor_slash", "SelAvgArmor"]
        }, {
            "id": "Obj::health",
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Puntos de salud actuales del objeto. Para algunos objetos, como las <a class='type' href='#Unit'>unidades</a>, perder toda la salud significa su muerte, pero para otros no. Para <a class='type' href='#Building'>edificios</a>, por ejemplo, simplemente significa perder su funcionalidad hasta que son reparados.",
            "description_en": "Current health of the object. For some objects, like <a class='type' href='#Unit'>units</a>, to loose all health means death, but not for others. For <a class='type' href='#Building'>buildings</a>, for example, it simply means to stop functioning until they are repaired.",
            "related": ["Obj::maxhealth", "Obj::Heal:int", "Obj::SetHealth:int", "Druid::FindUnitToHeal", "Query::Heal:int", "Settlement::health", "Squad::health", "SelHealth", "SelMaxHealth", "WaitHealthBetween:Query_int_int_int"]
        }, {
            "id": "Obj::stamina",
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Energía actual del objeto. Las <a class='type' href='#Unit'>unidades</a> gastan energía para usar <a href='#Unit::SetSpecial:int_bool'>habilidades especiales</a>.",
            "description_en": "Current stamina of the object. <a class='type' href='#Unit'>Units</a> spend stamina to use <a href='#Unit::SetSpecial:int_bool'>special skills</a>.",
            "related": ["Obj::maxstamina", "Obj::GetStaminaDecTime", "Obj::HealStamina:int", "Obj::SetStamina:int", "Query::HealStamina:int", "GetCmdStaminaCost:str", "SelAvgStamina"]
        }, {
            "id": "Obj::maxhealth",
            "name": "maxhealth",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Máxima salud del objeto.",
            "description_en": "Maximum health of the object.",
            "related": ["Obj::health", "Obj::SetMaxHealth:int", "Settlement::max_health", "Squad::maxhealth", "SelMaxHealth"]
        }, {
            "id": "Obj::maxstamina",
            "name": "maxstamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Máxima energía del objeto.",
            "description_en": "Maximum stamina of the object.",
            "related": ["Obj::stamina", "Obj::SetMaxStamina:int", "Unit::maxstamina", "ObjList::ObjFullStamina", "Settlement::max_stamina"]
        }, {
            "id": "Obj::sight",
            "name": "sight",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Distancia de visión del objeto (radio de su círculo de visión).",
            "description_en": "Sight distance for the object (radius of its vision circle).",
            "related": ["Obj::SetSight:int", "Unit::EnemiesInSight", "Unit::IsEnemyInSquadSight", "ObjsInSight:Obj_str", "VisibleObjsInSight:Obj_str", "Unit::BestNoIndependentTargetInSquadSight", "Unit::BestTargetInSquadSight", "Unit::BestTargetInSquadSight:str", "Unit::BestTargetInSquadSight_PreferUndiseased", "Unit::BestTargetInSquadSightExclusive:str", "Unit::BestTargetInSquadSightMisZeroDamage"]
        }, {
            "id": "Obj::pos",
            "name": "pos",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Posición del objeto en el mundo. Cuando el objeto está dentro de un edificio, esta propiedad devuelve <tt>(-1, -1)</tt>. Para obtener la posición del edificio en caso de que el objeto esté dentro de uno utiliza <a href='#Obj::posRH'>Obj::posRH</a>.",
            "description_en": "Position of the object in the world. When the object is inside a building, this property returns <tt>(-1, -1)</tt>. To obtain the position of the building in case of the object being inside one use <a href='#Obj::posRH'>Obj::posRH</a>.",
            "related": ["Obj::posRH", "Obj::SetPos:point", "Obj::SetPosSimple:point", "Unit::BestTargetForPos", "Squad::pos"]
        }, {
            "id": "Obj::posRH",
            "name": "posRH",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Posición del objeto, o posición del contenedor en caso de que el objeto esté dentro de algo.",
            "description_en": "Position of the object, or position of the holder in case the object is inside one.",
            "related": ["Obj::pos", "Unit::InHolder", "Obj::SetPos:point", "Obj::SetPosSimple:point"]
        }, {
            "id": "Obj::damage",
            "name": "damage",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Puntos de daño infligidos por el objeto cuando ataca. Parece ser siempre el mismo valor que <a href='#Obj::attack'>attack</a> para todos los objetos.",
            "description_en": "Damage points caused by this object when it attacks. Seems to be the same value as <a href='#Obj::attack'>attack</a> for every object.",
            "related": ["Obj::attack", "Obj::damage_type", "Obj::Damage:int", "Query::Damage:int", "SelAvgDamage", "Obj::CanAttack:Obj", "Unit::Attack:Obj", "Building::Attack:Obj", "Catapult::Attack:point", "AttackArea:Query_str"]
        }, {
            "id": "Obj::attack",
            "name": "attack",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Puntos de daño infligidos por el objeto cuando ataca. Parece ser siempre el mismo valor que <a href='#Obj::damage'>damage</a> para todos los objetos.",
            "description_en": "Damage points caused by this object when it attacks. Seems to be the same value as <a href='#Obj::damage'>damage</a> for every object.",
            "related": ["Obj::damage", "Obj::damage_type", "Obj::Damage:int", "Query::Damage:int", "SelAvgDamage", "Obj::CanAttack:Obj", "Unit::Attack:Obj", "Building::Attack:Obj", "Catapult::Attack:point", "AttackArea:Query_str"]
        }, {
            "id": "Obj::damage_type",
            "name": "damage_type",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Tipo de ataque del objeto (cuerpo a cuerpo, distancia, catapultas o pacífico). Los valores son: <table><tbody><tr><td>0</td><td>Ataque cuerpo a cuerpo</td></tr><tr><td>1</td><td>Ataque a distancia</td></tr><tr><td>2</td><td>Ataque de catapultas y arietes</td></tr><tr><td>3</td><td>Sin ataque</td></tr></tbody></table>",
            "description_en": "Attack type of the object (melee, ranged, catapults or peaceful). The values are: <table><tbody><tr><td>0</td><td>Melee attack</td></tr><tr><td>1</td><td>Ranged attack</td></tr><tr><td>2</td><td>Attack of catapults and rams</td></tr><tr><td>3</td><td>No attack</td></tr></tbody></table>",
            "related": ["Obj::damage", "Obj::attack"]
        }, {
            "id": "Obj::range",
            "name": "range",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Rango máximo de ataque del objeto.",
            "description_en": "Maximum range of attack of the object.",
            "related": ["Obj::min_range", "Obj::IsRanged", "Unit::BestTargetInRange:point_int", "Unit::InRange:Obj", "Catapult::InRange:point", "EnemyInRange:point_int_Obj", "ObjsInRange:Obj_str_int"]
        }, {
            "id": "Obj::min_range",
            "name": "min_range",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Rango mínimo de ataque del objeto.",
            "description_en": "Minimum range of attack of the object.",
            "related": ["Obj::range", "Obj::IsRanged", "Unit::BestTargetInRange:point_int", "Unit::InRange:Obj", "Catapult::InRange:point", "EnemyInRange:point_int_Obj", "ObjsInRange:Obj_str_int"]
        }, {
            "id": "Obj::radius",
            "name": "radius",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Radio del círculo que ocupa el objeto (visible en el editor al seleccionarlo).",
            "description_en": "Radius of the circle the object occupies (visible in the editor when selected).",
            "related": ["Hero::FormRadius"]
        }, {
            "id": "Obj::name",
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Nombre de script del objeto. Este no es el nombre visible durante el juego, sino el usado en los scripts y que puedes ver en el editor.",
            "description_en": "Scripting name of the object. This is not the displayed name during the game, but rather the one used in scripts which you can see in the editor.",
            "related": ["Obj::SetName:str", "Item::name", "Settlement::name", "GetNamedObj:str", "SpawnNamed:str"]
        }, {
            "id": "Obj::IsHeirOf:str",
            "name": "IsHeirOf",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "clase", "name_en": "class", "type": 5, "is_ptr": false}],
            "description": "Devuelve <tt>true</tt> si el objeto hereda de la clase dada. Por ejemplo, una instancia de <tt>BHero1</tt> hereda de <tt>Hero</tt> y <tt>Unit</tt>, pero no de <tt>Building</tt>. <a href='class_list.html'>Aquí</a> puedes encontrar una lista con la jerarquía completa de todas las clases del juego.",
            "description_en": "Returns <tt>true</tt> if the object inherits from the given class. For example, an instance of <tt>BHero1</tt> inherits from <tt>Hero</tt> and <tt>Unit</tt>, but not from <tt>Building</tt>. You can find the complete hierarchy of classes in the game <a href='class_list.html'>here</a>.",
            "related": ["Obj::class"]
        }, {
            "id": "Obj::IsSentry",
            "name": "IsSentry",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un centinela de las murallas.",
            "description_en": "Indicates whether the object is a sentry of the walls."
        }, {
            "id": "Obj::IsGate",
            "name": "IsGate",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un <a class='type' href='#Gate'>Gate</a>.",
            "description_en": "Indicates whether the object is a <a class='type' href='#Gate'>Gate</a>."
        }, {
            "id": "Obj::IsRam",
            "name": "IsRam",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un ariete.",
            "description_en": "Indicates whether the object is a battering ram."
        }, {
            "id": "Obj::IsRanged",
            "name": "IsRanged",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es del tipo de ataque a distancia.",
            "description_en": "Indicates whether the object is a ranged one (attacks in a range)."
        }, {
            "id": "Obj::IsMilitary",
            "name": "IsMilitary",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es militar.",
            "description_en": "Indicates whether the object is a military one."
        }, {
            "id": "Obj::IsReligious",
            "name": "IsReligious",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es de tipo religioso (como los <a class='type' href='#Druid'>druidas</a>, por ejemplo).",
            "description_en": "Indicates whether the object is a religious one (like <a class='type' href='#Druid'>druids</a>, for example)"
        }, {
            "id": "Obj::IsPeaceful",
            "name": "IsPeaceful",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es pacífico.",
            "description_en": "Indicates whether the object is a peaceful one."
        }, {
            "id": "Obj::IsPeasant",
            "name": "IsPeasant",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un campesino/a.",
            "description_en": "Indicates whether the object is a peasant."
        }, {
            "id": "Obj::IsPeasantAmbient",
            "name": "IsPeasantAmbient",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Indica si el objeto es un campesino/a ambiental. Estos campesinos se mueven por los asentamientos aleatoriamente y no pueden ser seleccionados.",
            "description_en": "Indicates whether the object is a decorative peasant. These peasants move randomly around the settlements and cannot be selected."
        }, {
            "id": "Obj::SetHealth:int",
            "name": "SetHealth",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "salud", "name_en": "health", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::health'>salud</a> actual del objeto.",
            "description_en": "Modifies the current <a href='#Obj::health'>health</a> of the object.",
            "related": ["Obj::health", "Obj::Heal:int", "Druid::FindUnitToHeal", "Query::Heal:int", "Settlement::health", "Squad::health", "SelHealth", "SelMaxHealth", "WaitHealthBetween:Query_int_int_int"]
        }, {
            "id": "Obj::SetMaxHealth:int",
            "name": "SetMaxHealth",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "salud_maxima", "name_en": "max_health", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::maxhealth'>salud máxima</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::maxhealth'>maximum health</a> of the object.",
            "related": ["Obj::maxhealth", "Obj::health", "Obj::Heal:int", "Obj::SetHealth:int"]
        }, {
            "id": "Obj::SetStamina:int",
            "name": "SetStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::stamina'>energía</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::stamina'>stamina</a> of the object.",
            "related": ["Obj::stamina"]
        }, {
            "id": "Obj::SetMaxStamina:int",
            "name": "SetMaxStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Modifica la <a href='#Obj::maxstamina'>energía máxima</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::maxstamina'>maximum stamina</a> of the object.",
            "related": ["Obj::maxstamina"]
        }, {
            "id": "Obj::SetSight:int",
            "name": "SetSight",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}],
            "description": "Modifica el <a href='#Obj::sight'>radio de visión</a> del objeto.",
            "description_en": "Modifies the <a href='#Obj::sight'>sight radius</a> of the object.",
            "related": ["Obj::sight"]
        }, {
            "id": "Obj::GetStaminaDecTime",
            "name": "GetStaminaDecTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Obtiene el tiempo de decaimiento de la energía del objeto. Algunos objetos, como los espíritus, pierden energía progresivamente; este método retorna cada cuanto tiempo el objeto pierde 1 de energía (en milésimas de segundo) o 0 si no decae.",
            "description_en": "Obtains the time for the decaying of the stamina of the object. Some objects, like the spirits, lose stamina progressively over time; this method returns each how much time the object loses one stamina point (in milliseconds) or 0 if its stamina does not decay.",
            "related": ["Obj::stamina"]
        }, {
            "id": "Obj::CmdCount",
            "name": "CmdCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Devuelve el número actual de comandos en la cola de comandos del objeto.",
            "description_en": "Returns the current number of commands in the command queue of the object.",
            "related": ["Obj::command", "Obj::CmdCount:str", "Obj::CmdDisable:str", "Obj::CmdEnable:str", "Obj::ExecCmd:str_point_Obj_bool", "Obj::ExecDefaultCmd:point_Obj_bool_bool", "Obj::GetCmdEnable", "Obj::SetCmdEnable:bool", "Obj::AddCommand:bool_str", "Obj::ClearCommands", "Obj::KillCommand", "Obj::SetCommand:str", "ObjList::AddCommand:bool_str", "ObjList::AddCommandOffset:bool_str_point", "ObjList::ClearCommands", "ObjList::KillCommand", "ObjList::SetCommand:str", "ObjList::SetCommandOffset:str_point", "Query::AddCommand:bool_str", "Query::AddCommandOffset:bool_str_point", "Query::ClearCommands", "Query::KillCommand", "Query::SetCommand:str", "Query::SetCommandOffset:str_point", "ObjList::ExecCmd:str_point_Obj_bool", "ObjList::ExecDefaultCmd:point_Obj_bool_bool", "ObjList::GetCanExecCmd:str", "Query::AddDefCmd:point_Obj_bool_bool", "Squad::ClrCmd:int_int_int", "Squad::SetCmd:int_int_int_str", "AIExecCmd:Obj_str"]
        }, {
            "id": "Obj::CmdCount:str",
            "name": "CmdCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}],
            "description": "Devuelve el número de veces que el comando dado aparece en la cola de comandos actual del objeto.",
            "description_en": "Returns the number of times the given command appears in the current command queue of the object.",
            "related": ["Obj::command", "Obj::CmdCount", "Obj::CmdDisable:str", "Obj::CmdEnable:str", "Obj::ExecCmd:str_point_Obj_bool", "Obj::ExecDefaultCmd:point_Obj_bool_bool", "Obj::GetCmdEnable", "Obj::SetCmdEnable:bool", "Obj::AddCommand:bool_str", "Obj::ClearCommands", "Obj::KillCommand", "Obj::SetCommand:str", "ObjList::AddCommand:bool_str", "ObjList::AddCommandOffset:bool_str_point", "ObjList::ClearCommands", "ObjList::KillCommand", "ObjList::SetCommand:str", "ObjList::SetCommandOffset:str_point", "Query::AddCommand:bool_str", "Query::AddCommandOffset:bool_str_point", "Query::ClearCommands", "Query::KillCommand", "Query::SetCommand:str", "Query::SetCommandOffset:str_point", "ObjList::ExecCmd:str_point_Obj_bool", "ObjList::ExecDefaultCmd:point_Obj_bool_bool", "ObjList::GetCanExecCmd:str", "Query::AddDefCmd:point_Obj_bool_bool", "Squad::ClrCmd:int_int_int", "Squad::SetCmd:int_int_int_str", "AIExecCmd:Obj_str"]
        }, {
            "id": "Obj::ClearCommands",
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Elimina todos los comandos en la cola de comandos del objeto, deteniendo también el comando actual.",
            "description_en": "Removes all the commands from the queue of commands of the object, stopping the current command as well.",
            "related": ["Obj::command", "Obj::CmdCount", "Obj::CmdDisable:str", "Obj::CmdEnable:str", "Obj::ExecCmd:str_point_Obj_bool", "Obj::ExecDefaultCmd:point_Obj_bool_bool", "Obj::GetCmdEnable", "Obj::SetCmdEnable:bool", "Obj::AddCommand:bool_str", "Obj::KillCommand", "Obj::SetCommand:str", "ObjList::AddCommand:bool_str", "ObjList::AddCommandOffset:bool_str_point", "ObjList::ClearCommands", "ObjList::KillCommand", "ObjList::SetCommand:str", "ObjList::SetCommandOffset:str_point", "Query::AddCommand:bool_str", "Query::AddCommandOffset:bool_str_point", "Query::ClearCommands", "Query::KillCommand", "Query::SetCommand:str", "Query::SetCommandOffset:str_point", "ObjList::ExecCmd:str_point_Obj_bool", "ObjList::ExecDefaultCmd:point_Obj_bool_bool", "ObjList::GetCanExecCmd:str", "Query::AddDefCmd:point_Obj_bool_bool", "Squad::ClrCmd:int_int_int", "Squad::SetCmd:int_int_int_str", "AIExecCmd:Obj_str"]
        }, {
            "id": "Obj::KillCommand",
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [],
            "description": "Detiene la ejecución del comando actual del objeto, pasando al siguiente comando en la cola si lo hubiese.",
            "description_en": "Stops the execution of the current command, starting the next command in the queue of commands of the object if there is any.",
            "related": ["Obj::command", "Obj::CmdCount", "Obj::CmdDisable:str", "Obj::CmdEnable:str", "Obj::ExecCmd:str_point_Obj_bool", "Obj::ExecDefaultCmd:point_Obj_bool_bool", "Obj::GetCmdEnable", "Obj::SetCmdEnable:bool", "Obj::AddCommand:bool_str", "Obj::ClearCommands", "Obj::SetCommand:str", "ObjList::AddCommand:bool_str", "ObjList::AddCommandOffset:bool_str_point", "ObjList::ClearCommands", "ObjList::KillCommand", "ObjList::SetCommand:str", "ObjList::SetCommandOffset:str_point", "Query::AddCommand:bool_str", "Query::AddCommandOffset:bool_str_point", "Query::ClearCommands", "Query::KillCommand", "Query::SetCommand:str", "Query::SetCommandOffset:str_point", "ObjList::ExecCmd:str_point_Obj_bool", "ObjList::ExecDefaultCmd:point_Obj_bool_bool", "ObjList::GetCanExecCmd:str", "Query::AddDefCmd:point_Obj_bool_bool", "Squad::ClrCmd:int_int_int", "Squad::SetCmd:int_int_int_str", "AIExecCmd:Obj_str"]
        }, {
            "id": "Obj::AddCommand:bool_str",
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "principio", "name_en": "beginning", "type": 2, "is_ptr": false}, {"name": "comando", "name_en": "command", "type": 5, "is_ptr": false}],
            "description": "Añade el comando indicado a la cola de comandos del objeto. Si <tt>principio</tt> es <tt>true</tt> se añadirá al principio de la cola (sin reemplazar al comando actual), si es <tt>false</tt> se añadirá al final de la cola.",
            "description_en": "Adds the given command at the end of the command queue of the object. If <tt>beginning</tt> is <tt>true</tt>, then it will be added at the beginning of the queue, if it is <tt>false</tt>, the command will be added at the end of the queue."
        }, {
            "id": "Obj::AddCommand:bool_str_point",
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
            "id": "Obj::AddCommand:bool_str_Obj",
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
            "id": "Obj::SneakCommand:str",
            "name": "SneakCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::SetCommand:str",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::SetCommand:str_point",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::SetCommand:str_Obj",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::ExecDefaultCmd:point_Obj_bool_bool",
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
            "id": "Obj::ExecCmd:str_point_Obj_bool",
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
            "id": "Obj::CmdDisable:str",
            "name": "CmdDisable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::CmdEnable:str",
            "name": "CmdEnable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::IsValid",
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Item::IsValid",
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::DistTo:point",
            "name": "DistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::DistTo:Obj",
            "name": "DistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::IsEnemy:Obj",
            "name": "IsEnemy",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::IsAlive",
            "name": "IsAlive",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::IsDead",
            "name": "IsDead",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::IsValidTarget:Obj",
            "name": "IsValidTarget",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::IsValidCaptureTarget:Obj",
            "name": "IsValidCaptureTarget",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::SetVisible:bool",
            "name": "SetVisible",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Obj::IsVisible",
            "name": "IsVisible",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::SetMessengerStatus:bool",
            "name": "SetMessengerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Obj::CanSee:Obj",
            "name": "CanSee",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::CanAttack:Obj",
            "name": "CanAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::Erase",
            "name": "Erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::player",
            "name": "player",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::SetPlayer:int",
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::Damage:int",
            "name": "Damage",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::Heal:int",
            "name": "Heal",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::HealStamina:int",
            "name": "HealStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::SetPos:point",
            "name": "SetPos",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::SetPosSimple:point",
            "name": "SetPosSimple",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::SetBlind:bool",
            "name": "SetBlind",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Obj::Face:point",
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::GetDir",
            "name": "GetDir",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::Progress",
            "name": "Progress",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::Progress:int",
            "name": "Progress",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::cmddelay",
            "name": "cmddelay",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::IsInGroup:str",
            "name": "IsInGroup",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::AddToGroup:str",
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::RemoveFromGroup:str",
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::RemoveFromAllGroups",
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::SetName:str",
            "name": "SetName",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::Select:int",
            "name": "Select",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::Deselect:int",
            "name": "Deselect",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::Deselect",
            "name": "Deselect",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ClearSelection:int",
            "name": "ClearSelection",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::PlayAnim:int_point",
            "name": "PlayAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::GetAnimTime:int",
            "name": "GetAnimTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::StartAnim:int_point",
            "name": "StartAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::StartDelayedAnim:int_point_int",
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
            "id": "Obj::TimeToActionMoment",
            "name": "TimeToActionMoment",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::TimeToAnimFinish",
            "name": "TimeToAnimFinish",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::GetAnim",
            "name": "GetAnim",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::SetState:int",
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::AddItem:str",
            "name": "AddItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::GiveItem:Item_Obj",
            "name": "GiveItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::OpenItemHolder:ItemHolder",
            "name": "OpenItemHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 21, "is_ptr": false}]
        }, {
            "id": "Obj::PutItem:Item_ItemHolder",
            "name": "PutItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 21, "is_ptr": false}]
        }, {
            "id": "Obj::DropItem:Item_point",
            "name": "DropItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::FindItem:str",
            "name": "FindItem",
            "returns": 12,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::RemoveItem:int",
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::RemoveItem:str",
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::RemoveAllItems",
            "name": "RemoveAllItems",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::ExchangeItem:Item_str",
            "name": "ExchangeItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::GetItem:int",
            "name": "GetItem",
            "returns": 12,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "indice", "name_en": "index", "type": 1, "is_ptr": false}],
            "description": "Obtiene el <a href='#Item'>Item</a> portado por el objeto en el índice indicado. Los índices de los ítems para este método comienzan en 1 (en lugar de en 0).",
            "description_en": "Gets the <a href='#Item'>Item</a> held by the object at the given index. The indices start by 1 (rather than 0).",
            "related": ["Obj::free_item_slots", "Obj::item_count", "Obj::items_count", "Obj::max_items", "Obj::AddItem:str", "Obj::AsItemHolder", "Obj::DropItem:Item_point", "Obj::ExchangeItem:Item_str", "Obj::FindItem:str", "Obj::GetItemIndex:Item", "Obj::GiveItem:Item_Obj", "Obj::HasItem:str", "Obj::OpenItemHolder:ItemHolder", "Obj::PutItem:Item_ItemHolder", "Obj::RemoveAllItems", "Obj::RemoveItem:int", "Obj::RemoveItem:str", "Obj::RemoveItemsOfType:str", "Obj::UseItem:str", "Squad::TakeNearbyItems:int", "GetItem:str"]
        }, {
            "id": "Obj::RemoveItemsOfType:str",
            "name": "RemoveItemsOfType",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::GetItemIndex:Item",
            "name": "GetItemIndex",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 12, "is_ptr": false}]
        }, {
            "id": "Obj::items_count",
            "name": "items_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::free_item_slots",
            "name": "free_item_slots",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::item_count",
            "name": "item_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::max_items",
            "name": "max_items",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::ClipDestToMap:point",
            "name": "ClipDestToMap",
            "returns": 6,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::pr:str",
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::pr:int",
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::pr:Obj",
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Obj::GetDebug",
            "name": "GetDebug",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::SetDebug:bool",
            "name": "SetDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Obj::class",
            "name": "class",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::command",
            "name": "command",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Obj::command:int",
            "name": "command",
            "returns": 5,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "cmdparam",
            "name": "cmdparam",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "cmdwaiting",
            "name": "cmdwaiting",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "rollover",
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "rollover:Obj_bool",
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "rollover:Obj_str_bool",
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
            "id": "rollover:Obj_str",
            "name": "rollover",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "rollover_desc:Obj_str_bool",
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
            "id": "cmdcost_gold",
            "name": "cmdcost_gold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "cmdcost_food",
            "name": "cmdcost_food",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "cmdcost_pop",
            "name": "cmdcost_pop",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "cmdcost_stamina",
            "name": "cmdcost_stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetPlayerRace:int",
            "name": "GetPlayerRace",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::_LastSelectionTime",
            "name": "_LastSelectionTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_GetSelection",
            "name": "_GetSelection",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ClearDebug",
            "name": "ClearDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Place:str_point_int",
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
            "id": "PlaceInHolder:str_str_int",
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
            "id": "_PlaceEx:str_int_int_int",
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
            "id": "_PlaceBlockEx:str_int_int_int_int_int_int_int",
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
            "id": "_PlaceBlockEx:str_int_int_int_int_int_int_int_str",
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
            "id": "_Summon:str_int_int_int",
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
            "id": "Obj::IsWaterUnit",
            "name": "IsWaterUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::SetCmdEnable:bool",
            "name": "SetCmdEnable",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Obj::GetCmdEnable",
            "name": "GetCmdEnable",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::AddToStoreBin",
            "name": "AddToStoreBin",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::RemoveFromStoreBin",
            "name": "RemoveFromStoreBin",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::IsInState",
            "name": "IsInState",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::PlaySound:str",
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::ShowFloatText:str",
            "name": "ShowFloatText",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Group:str",
            "name": "Group",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetGroupSize:str",
            "name": "GetGroupSize",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SpawnGroup:str",
            "name": "SpawnGroup",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SpawnGroupInHolder:str_str",
            "name": "SpawnGroupInHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SpawnGroupInHolder:str_Obj",
            "name": "SpawnGroupInHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "SpawnNamed:str",
            "name": "SpawnNamed",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ModLevel:str_int_int_int",
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
            "id": "Union:Query_Query",
            "name": "Union",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "id": "Intersect:Query_Query",
            "name": "Intersect",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "id": "Substract:Query_Query",
            "name": "Substract",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "id": "Subtract:Query_Query",
            "name": "Subtract",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 27, "is_ptr": false}]
        }, {
            "id": "ClassPlayerAreaObjs:str_int_str",
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
            "id": "ClassPlayerObjs:str_int",
            "name": "ClassPlayerObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "BuildingsInSettlement:str_str",
            "name": "BuildingsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UnitsInSettlement:str_str",
            "name": "UnitsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UnitsAroundSettlement:str_str",
            "name": "UnitsAroundSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UnitsGuardingSettlement:str_str",
            "name": "UnitsGuardingSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UnitsInSettlement:Settlement_str",
            "name": "UnitsInSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UnitsAroundSettlement:Settlement_str",
            "name": "UnitsAroundSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UnitsGuardingSettlement:Settlement_str",
            "name": "UnitsGuardingSettlement",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnemyObjs:int_str",
            "name": "EnemyObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "FriendlyObjs:int_str",
            "name": "FriendlyObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ControllableObjs:int_str",
            "name": "ControllableObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AreaObjs:str_str",
            "name": "AreaObjs",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjsInRect:rect_str",
            "name": "ObjsInRect",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjsInCircle:point_int_str",
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
            "id": "ObjsInSight:Obj_str",
            "name": "ObjsInSight",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "VisibleObjsInSight:Obj_str",
            "name": "VisibleObjsInSight",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjsInRange:Obj_str_int",
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
            "id": "AttachedUnits:Hero_str",
            "name": "AttachedUnits",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "PartyQuery",
            "name": "PartyQuery",
            "returns": 27,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::Erase",
            "name": "Erase",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::SetPlayer:int",
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Query::Damage:int",
            "name": "Damage",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Query::Heal:int",
            "name": "Heal",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Query::HealStamina:int",
            "name": "HealStamina",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Query::AddDefCmd:point_Obj_bool_bool",
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
            "id": "Query::IsValid",
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ptr.Query::-e-:ptr.Query_Query",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 27, "is_ptr": true}, {"name": "number", "type": 27, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Query'>Query</a> a una referencia a <a class='type' href='#Query'>Query</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Query'>Query</a> to a reference to <a class='type' href='#Query'>Query</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "Query::count",
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Query::IsEmpty",
            "name": "IsEmpty",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::Contains:Obj",
            "name": "Contains",
            "returns": 2,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Query::ClearCommands",
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::KillCommand",
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::AddCommand:bool_str",
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Query::AddCommand:bool_str_point",
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
            "id": "Query::AddCommand:bool_str_Obj",
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
            "id": "Query::AddCommandOffset:bool_str_point",
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
            "id": "Query::SetCommand:str",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Query::SetCommand:str_point",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Query::SetCommand:str_Obj",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Query::SetCommandOffset:str_point",
            "name": "SetCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Query::GetObjList",
            "name": "GetObjList",
            "returns": 26,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "DistributeExperience:Query_int",
            "name": "DistributeExperience",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AttackArea:Query_str",
            "name": "AttackArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "MoveToArea:Query_str",
            "name": "MoveToArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "NearestObj:Query_point",
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "NearestObj:Query_Obj",
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Query::NearestObj:point",
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Query::NearestObj:Obj",
            "name": "NearestObj",
            "returns": 11,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Query::AddToGroup:str",
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Query::RemoveFromGroup:str",
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Query::RemoveFromAllGroups",
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::Face:point",
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Query::SetFood:int",
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Query::InHolder:str",
            "name": "InHolder",
            "returns": 1,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Query::AddToHolder:str",
            "name": "AddToHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Query::GetAverageDirection",
            "name": "GetAverageDirection",
            "returns": 6,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Query::SetParty:bool",
            "name": "SetParty",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Query::SetMessengerStatus:bool",
            "name": "SetMessengerStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Query::SetFeeding:bool",
            "name": "SetFeeding",
            "returns": 0,
            "returns_ptr": false,
            "of": 27,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "GetNamedObj:str",
            "name": "GetNamedObj",
            "returns": 29,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "NamedObj::IsValid",
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "NamedObj::IsDead",
            "name": "IsDead",
            "returns": 2,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "NamedObj::obj",
            "name": "obj",
            "returns": 11,
            "returns_ptr": false,
            "of": 29,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "EnemyInRange:point_int_Obj",
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
            "id": "Building::BestTarget",
            "name": "BestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::Attack:Obj",
            "name": "Attack",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Building::GetEnterPoint:Unit",
            "name": "GetEnterPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Building::GetExitPoint:Obj_point",
            "name": "GetExitPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Building::GetExitPoint:point_bool",
            "name": "GetExitPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Building::GetPoint:int_int",
            "name": "GetPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::settlement",
            "name": "settlement",
            "returns": 28,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Building::IsBroken",
            "name": "IsBroken",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::IsCentralBuliding",
            "name": "IsCentralBuliding",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::RRepair",
            "name": "RRepair",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetExitVector",
            "name": "GetExitVector",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::PopTransportationUI",
            "name": "PopTransportationUI",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetGlobalSpell",
            "name": "GetGlobalSpell",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GlobalSpellStart:int_int",
            "name": "GlobalSpellStart",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::GlobalSpellStart:int_int_int",
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
            "id": "Building::GlobalSpellStop",
            "name": "GlobalSpellStop",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::SetGlobalSpellData:int",
            "name": "SetGlobalSpellData",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::WindOfWisdom:int",
            "name": "WindOfWisdom",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::Starvation",
            "name": "Starvation",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::SoothingRain:int",
            "name": "SoothingRain",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::DivineSacrifice",
            "name": "DivineSacrifice",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetSoothingRainObjects",
            "name": "GetSoothingRainObjects",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::IsStonehengeControlable",
            "name": "IsStonehengeControlable",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::StonehengeNumControllingMages",
            "name": "StonehengeNumControllingMages",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::itemtypes",
            "name": "itemtypes",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Building::minlevel",
            "name": "minlevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Building::levelperitem",
            "name": "levelperitem",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Building::ClearDamageTaken",
            "name": "ClearDamageTaken",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::CountMages",
            "name": "CountMages",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::SetUITarget:Obj",
            "name": "SetUITarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Building::GetUITarget",
            "name": "GetUITarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetNumSentrySlots",
            "name": "GetNumSentrySlots",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetSentryClassName",
            "name": "GetSentryClassName",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::Research:str",
            "name": "Research",
            "returns": 0,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetResearchHack",
            "name": "GetResearchHack",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PlaceCatapult:int_int_int_int",
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
            "id": "Catapult::IsBuilt",
            "name": "IsBuilt",
            "returns": 2,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::SetBuilt",
            "name": "SetBuilt",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::SetBuildFrame:int",
            "name": "SetBuildFrame",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetCatapultAttackPoint:point",
            "name": "GetCatapultAttackPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Catapult::RotateTo:point",
            "name": "RotateTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Catapult::Attack:point",
            "name": "Attack",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Catapult::BestTarget",
            "name": "BestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::GetPointOnTarget:Obj",
            "name": "GetPointOnTarget",
            "returns": 6,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Catapult::InRange:point",
            "name": "InRange",
            "returns": 2,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Catapult::AttackWait",
            "name": "AttackWait",
            "returns": 1,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::CalcEscapeDirection",
            "name": "CalcEscapeDirection",
            "returns": 6,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::GetCurrentTarget",
            "name": "GetCurrentTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::SetTarget:Obj",
            "name": "SetTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Catapult::ClearTarget",
            "name": "ClearTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catapult::ClearTowerTarget",
            "name": "ClearTowerTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 20,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::speed",
            "name": "speed",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::speed_factor",
            "name": "speed_factor",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::stamina",
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::user",
            "name": "user",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::food",
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::maxfood",
            "name": "maxfood",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::maxstamina",
            "name": "maxstamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::experience",
            "name": "experience",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::level",
            "name": "level",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::inherentlevel",
            "name": "inherentlevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::SetSpeedFactor:int",
            "name": "SetSpeedFactor",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetUser:int",
            "name": "SetUser",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetFood:int",
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::feeds",
            "name": "feeds",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::SetFeeding:bool",
            "name": "SetFeeding",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::Goto:point_int_int_bool_int",
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
            "id": "Unit::GotoEnter:point_int_int_bool_int",
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
            "id": "Unit::Goto:Obj_int_int_bool_int",
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
            "id": "Unit::GotoAttack:Obj_int_bool_int",
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
            "id": "Unit::GotoStraight:point",
            "name": "GotoStraight",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Unit::Stop:int",
            "name": "Stop",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::HasPath",
            "name": "HasPath",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::dest",
            "name": "dest",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::TimeWithoutWalking",
            "name": "TimeWithoutWalking",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::InHolder",
            "name": "InHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetHolderSett",
            "name": "GetHolderSett",
            "returns": 28,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::InShip",
            "name": "InShip",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetShip",
            "name": "GetShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::ExitHolder:point",
            "name": "ExitHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Unit::EnterHolder:Obj",
            "name": "EnterHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Unit::GetUnitsInSameHolder",
            "name": "GetUnitsInSameHolder",
            "returns": 26,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::TrainAttack:Obj",
            "name": "TrainAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Unit::BestTrainingTarget",
            "name": "BestTrainingTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::StartTraining",
            "name": "StartTraining",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::StopTraining",
            "name": "StopTraining",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::IsTraining",
            "name": "IsTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::Attack:Obj",
            "name": "Attack",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Unit::AttackEveryone:Obj",
            "name": "AttackEveryone",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Unit::TimeWithoutAttack",
            "name": "TimeWithoutAttack",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetLastAttackTime",
            "name": "SetLastAttackTime",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::BestTargetInSquadSightMisZeroDamage",
            "name": "BestTargetInSquadSightMisZeroDamage",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::BestTargetInSquadSight",
            "name": "BestTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::BestNoIndependentTargetInSquadSight",
            "name": "BestNoIndependentTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::BestTargetInSquadSight:str",
            "name": "BestTargetInSquadSight",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Unit::BestTargetInSquadSightExclusive:str",
            "name": "BestTargetInSquadSightExclusive",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Unit::BestTargetInSquadSight_PreferUndiseased",
            "name": "BestTargetInSquadSight_PreferUndiseased",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::BestTargetForPos",
            "name": "BestTargetForPos",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::BestTargetInRange:point_int",
            "name": "BestTargetInRange",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::IsEnemyInSquadSight",
            "name": "IsEnemyInSquadSight",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::EnemiesInSight",
            "name": "EnemiesInSight",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::InRange:Obj",
            "name": "InRange",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Unit::hero",
            "name": "hero",
            "returns": 15,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Unit::AttachTo:Hero",
            "name": "AttachTo",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}]
        }, {
            "id": "Unit::DetachFrom:Hero",
            "name": "DetachFrom",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 15, "is_ptr": false}]
        }, {
            "id": "Unit::Idle:int",
            "name": "Idle",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::Taunt:int",
            "name": "Taunt",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetExperience:int",
            "name": "SetExperience",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetLevel:int",
            "name": "SetLevel",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::IncKills:int",
            "name": "IncKills",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::FormAcceptMove",
            "name": "FormAcceptMove",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::FormKeepMoving:int",
            "name": "FormKeepMoving",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::PathTo:point_int_int",
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
            "id": "Unit::PathTo:Obj_int_int",
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
            "id": "Unit::SetParty:bool",
            "name": "SetParty",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::GetParty",
            "name": "GetParty",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetSacrifice",
            "name": "GetSacrifice",
            "returns": 23,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::_OnImpassable",
            "name": "_OnImpassable",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "max_train_1_level",
            "name": "max_train_1_level",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetUnexploredPoint:int",
            "name": "GetUnexploredPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::HasFreedom",
            "name": "HasFreedom",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetFlags:int",
            "name": "GetFlags",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::PathLeft",
            "name": "PathLeft",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetShipToBoard",
            "name": "GetShipToBoard",
            "returns": 24,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetStaminaDecTime",
            "name": "GetStaminaDecTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SameHolderAs:Unit",
            "name": "SameHolderAs",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "SetExperienceModifier:int_int",
            "name": "SetExperienceModifier",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetExperienceModifier:int",
            "name": "GetExperienceModifier",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetCommanded:bool",
            "name": "SetCommanded",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::GetCommanded",
            "name": "GetCommanded",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetEntering:bool",
            "name": "SetEntering",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::GetEntering",
            "name": "GetEntering",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetWalkAnim:int",
            "name": "SetWalkAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetWalkAnim",
            "name": "SetWalkAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetCarryWaterAnim",
            "name": "SetCarryWaterAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetCarryGoodsAnim",
            "name": "SetCarryGoodsAnim",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::DoCarryNothing",
            "name": "DoCarryNothing",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::Disappear",
            "name": "Disappear",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetNoselectFlag:bool",
            "name": "SetNoselectFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::SetMinimapFlag:bool",
            "name": "SetMinimapFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::SetNoAIFlag:bool",
            "name": "SetNoAIFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::PathDestFound",
            "name": "PathDestFound",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::ForceIdle",
            "name": "ForceIdle",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::Talk",
            "name": "Talk",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::IsCursed",
            "name": "IsCursed",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::IsDiseased",
            "name": "IsDiseased",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetBestCurseTarget",
            "name": "GetBestCurseTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetBuilding",
            "name": "GetBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetBuilding:Building",
            "name": "SetBuilding",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}]
        }, {
            "id": "Unit::HasSpecial:int",
            "name": "HasSpecial",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetSpecial:int_bool",
            "name": "SetSpecial",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::SpecialName:int",
            "name": "SpecialName",
            "returns": 5,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::GetParryMode",
            "name": "GetParryMode",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::SetParryMode:bool",
            "name": "SetParryMode",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Unit::Curse",
            "name": "Curse",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::Bless",
            "name": "Bless",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::Disease",
            "name": "Disease",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::RamBestTarget",
            "name": "RamBestTarget",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetPlayerUnits:int",
            "name": "GetPlayerUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetPlayerUnits:int_str",
            "name": "GetPlayerUnits",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "InvalidateRegenConsts",
            "name": "InvalidateRegenConsts",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::Mutate:str",
            "name": "Mutate",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ExpFromLevel:int",
            "name": "ExpFromLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "LevelFromExp:int",
            "name": "LevelFromExp",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::FormKeepMoving:int",
            "name": "FormKeepMoving",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::FormSetupAndMoveTo:point_int_int_bool",
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
            "id": "Hero::FormSetupAndMoveTo:Obj_int_int_bool",
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
            "id": "Hero::TimePastLastAttack",
            "name": "TimePastLastAttack",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::LastAttacker",
            "name": "LastAttacker",
            "returns": 11,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::army",
            "name": "army",
            "returns": 26,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Hero::maxarmy",
            "name": "maxarmy",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Hero::IsHeroArmyFull",
            "name": "IsHeroArmyFull",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::FormRadius",
            "name": "FormRadius",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::FormPathLeft",
            "name": "FormPathLeft",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::HasArmy",
            "name": "HasArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::SetFormation:str",
            "name": "SetFormation",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Hero::formation",
            "name": "formation",
            "returns": 5,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Hero::DetachArmy",
            "name": "DetachArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetRandomHeroClass:str_int",
            "name": "GetRandomHeroClass",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::CancelArmyBoard",
            "name": "CancelArmyBoard",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::SetFinalPartyOrientation:point",
            "name": "SetFinalPartyOrientation",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Hero::GetFinalPartyOrientation",
            "name": "GetFinalPartyOrientation",
            "returns": 6,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::HasFinalPartyOrientationRequest",
            "name": "HasFinalPartyOrientationRequest",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "HeroSkillId:str",
            "name": "HeroSkillId",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Hero::SetSkill:int_int",
            "name": "SetSkill",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::GetSkill:int",
            "name": "GetSkill",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::UseSkill:int",
            "name": "UseSkill",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "HeroSkillName:int",
            "name": "HeroSkillName",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::AvailableSkillPoints",
            "name": "AvailableSkillPoints",
            "returns": 1,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::SkillInEffect:int",
            "name": "SkillInEffect",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::autocast",
            "name": "autocast",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Hero::SetAutocast:bool",
            "name": "SetAutocast",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Druid::FindUnitToHeal",
            "name": "FindUnitToHeal",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Druid::FindUnitToLearn",
            "name": "FindUnitToLearn",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Druid::FindUnitToHide",
            "name": "FindUnitToHide",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Druid::GetBestCrippleTarget",
            "name": "GetBestCrippleTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Druid::FindUnitToRevitalize",
            "name": "FindUnitToRevitalize",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Druid::FindUnitBelowILevel:int",
            "name": "FindUnitBelowILevel",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Druid::FindUnitBelowILevel:int_int",
            "name": "FindUnitBelowILevel",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Druid::SetStonehenge:Building",
            "name": "SetStonehenge",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}]
        }, {
            "id": "Druid::GetJupiterAngerTarget",
            "name": "GetJupiterAngerTarget",
            "returns": 13,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Druid::SetJupiterAngerTarget:Unit",
            "name": "SetJupiterAngerTarget",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Druid::SetSummoningDeath:bool",
            "name": "SetSummoningDeath",
            "returns": 0,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Druid::IsSummoningDeath",
            "name": "IsSummoningDeath",
            "returns": 2,
            "returns_ptr": false,
            "of": 16,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_ScriptEditor",
            "name": "_ScriptEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_ScriptEditor:str",
            "name": "_ScriptEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_DialogEditor",
            "name": "_DialogEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_DialogEditor:str",
            "name": "_DialogEditor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_de",
            "name": "_de",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_Choose:str_str",
            "name": "_Choose",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_ListClasses",
            "name": "_ListClasses",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_ListFolder:str",
            "name": "_ListFolder",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_ListFolderEx:str_str",
            "name": "_ListFolderEx",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_ListTerrains",
            "name": "_ListTerrains",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "MiniMap",
            "name": "MiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SetMiniMapRect:rect",
            "name": "SetMiniMapRect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 7, "is_ptr": false}]
        }, {
            "id": "BuildMiniMap:str",
            "name": "BuildMiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ToggleZoomMap",
            "name": "ToggleZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ShowZoomMap",
            "name": "ShowZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "HideZoomMap",
            "name": "HideZoomMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_ZoomMapLastShownTime",
            "name": "_ZoomMapLastShownTime",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Wagon::amount",
            "name": "amount",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Wagon::restype",
            "name": "restype",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Wagon::SetFood:int",
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Wagon::SetGold:int",
            "name": "SetGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Wagon::LoadFood:int",
            "name": "LoadFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Wagon::LoadGold:int",
            "name": "LoadGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Wagon::loyalty",
            "name": "loyalty",
            "returns": 1,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Wagon::SetLoyalty:int",
            "name": "SetLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Wagon::DecreaseLoyalty:int",
            "name": "DecreaseLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Wagon::StartCapture",
            "name": "StartCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Wagon::StopCapture",
            "name": "StopCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 19,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::-e--e-:Settlement_Settlement",
            "name": "==",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "id": "ptr.Settlement::-e-:ptr.Settlement_Settlement",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 28, "is_ptr": true}, {"name": "number", "type": 28, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#Settlement'>Settlement</a> a una referencia a <a class='type' href='#Settlement'>Settlement</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#Settlement'>Settlement</a> to a reference to <a class='type' href='#Settlement'>Settlement</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "GetSettlement:str",
            "name": "GetSettlement",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::population",
            "name": "population",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::max_population",
            "name": "max_population",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::name",
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::ForceAddUnit:Unit",
            "name": "ForceAddUnit",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Settlement::AddUnit:Unit",
            "name": "AddUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Settlement::IsFull",
            "name": "IsFull",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::AddUnits:ObjList",
            "name": "AddUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "id": "Settlement::Units",
            "name": "Units",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::UnitsCount",
            "name": "UnitsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::max_units",
            "name": "max_units",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::health",
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::max_health",
            "name": "max_health",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::stamina",
            "name": "stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::max_stamina",
            "name": "max_stamina",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::loyalty",
            "name": "loyalty",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::SetLoyalty:int",
            "name": "SetLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::DecreaseLoyalty:int",
            "name": "DecreaseLoyalty",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::gold",
            "name": "gold",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::max_gold",
            "name": "max_gold",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::food",
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::max_food",
            "name": "max_food",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::SetGold:int",
            "name": "SetGold",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::SetFood:int",
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::SetPopulation:int",
            "name": "SetPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::AddToPopulation:int",
            "name": "AddToPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::AddToMaxPopulation:int",
            "name": "AddToMaxPopulation",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::player",
            "name": "player",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::SetPlayer:int",
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::IsValid",
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::loan",
            "name": "loan",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Settlement::SetLoan:int",
            "name": "SetLoan",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GetCentralBuilding",
            "name": "GetCentralBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::FoodProduction",
            "name": "FoodProduction",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GoldProduction",
            "name": "GoldProduction",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::SetFoodProduction:int",
            "name": "SetFoodProduction",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::SetGoldProduction:int",
            "name": "SetGoldProduction",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::Buildings",
            "name": "Buildings",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::Find:str",
            "name": "Find",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::FirstBldClass",
            "name": "FirstBldClass",
            "returns": 5,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::CanBeCaptured:Unit",
            "name": "CanBeCaptured",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Settlement::AllowCapture:bool",
            "name": "AllowCapture",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "Settlement::ObjectsAround:str",
            "name": "ObjectsAround",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Building::GetEnterExit",
            "name": "GetEnterExit",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetWaterSource",
            "name": "GetWaterSource",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetGoodsSource",
            "name": "GetGoodsSource",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetFixSite",
            "name": "GetFixSite",
            "returns": 6,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetEnterExit",
            "name": "GetEnterExit",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetWaterSource",
            "name": "GetWaterSource",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetGoodsSource",
            "name": "GetGoodsSource",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetFixSite",
            "name": "GetFixSite",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::MostDamagedBuilding",
            "name": "MostDamagedBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::ClearDamageTaken",
            "name": "ClearDamageTaken",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::FindNearEnterExit:point",
            "name": "FindNearEnterExit",
            "returns": 6,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Settlement::IsCity",
            "name": "IsCity",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::PopulationDied",
            "name": "PopulationDied",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GoldConverted:int",
            "name": "GoldConverted",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GoldSpent:int",
            "name": "GoldSpent",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GetSentry",
            "name": "GetSentry",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::PutSentry",
            "name": "PutSentry",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::DelSentry",
            "name": "DelSentry",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetNumSentries",
            "name": "GetNumSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::AddSentries:int",
            "name": "AddSentries",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GetMaxSentries",
            "name": "GetMaxSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::AddMaxSentries:int",
            "name": "AddMaxSentries",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::EvalSentries",
            "name": "EvalSentries",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ItemHolder::AddItem:str",
            "name": "AddItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ItemHolder::count",
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "ItemHolder::HasItem:str",
            "name": "HasItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ItemHolder::RemoveItem:str",
            "name": "RemoveItem",
            "returns": 0,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ItemHolder::RemoveAll",
            "name": "RemoveAll",
            "returns": 0,
            "returns_ptr": false,
            "of": 21,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::CreateMuleFood:int",
            "name": "CreateMuleFood",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::CreateMuleGold:int",
            "name": "CreateMuleGold",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::CreateBoatFood:int",
            "name": "CreateBoatFood",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::CreateBoatGold:int",
            "name": "CreateBoatGold",
            "returns": 19,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::CreateShip:str",
            "name": "CreateShip",
            "returns": 24,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::SendMule",
            "name": "SendMule",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::SendBoat",
            "name": "SendBoat",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::StartSupplyFood:Settlement",
            "name": "StartSupplyFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "id": "Settlement::StopSupply",
            "name": "StopSupply",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::UnloadWagon:Wagon",
            "name": "UnloadWagon",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 19, "is_ptr": false}]
        }, {
            "id": "Settlement::supplied",
            "name": "supplied",
            "returns": 28,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "ptr.ObjList::-e-:ptr.ObjList_ObjList",
            "name": "=",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": true,
            "type": "operator",
            "params": [{"name": "number", "type": 26, "is_ptr": true}, {"name": "number", "type": 26, "is_ptr": false}],
            "description": "Asigna un <a class='type' href='#ObjList'>ObjList</a> a una referencia a <a class='type' href='#ObjList'>ObjList</a> (ver ejemplo en <a href='#ptr.int::-e-:ptr.int_int'>el operador de asignación para enteros</a>).",
            "description_en": "Assigns the given <a class='type' href='#ObjList'>ObjList</a> to a reference to <a class='type' href='#ObjList'>ObjList</a> (see example in <a href='#ptr.int::-e-:ptr.int_int'>the integer assignment operator</a>)."
        }, {
            "id": "ObjList::count",
            "name": "count",
            "returns": 1,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "ObjList::-c-:ObjList_int",
            "name": "[",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "operator",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::Contains:Obj",
            "name": "Contains",
            "returns": 2,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "ObjList::Add:Obj",
            "name": "Add",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "ObjList::Remove:Obj",
            "name": "Remove",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "ObjList::ClearDead",
            "name": "ClearDead",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::AddList:ObjList",
            "name": "AddList",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "id": "ObjList::RemoveList:ObjList",
            "name": "RemoveList",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "id": "ObjList::Clear",
            "name": "Clear",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::AddToGroup:str",
            "name": "AddToGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::RemoveFromGroup:str",
            "name": "RemoveFromGroup",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::RemoveFromAllGroups",
            "name": "RemoveFromAllGroups",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::KillCommand",
            "name": "KillCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::ClearCommands",
            "name": "ClearCommands",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::AddCommand:bool_str",
            "name": "AddCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::AddCommand:bool_str_point",
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
            "id": "ObjList::AddCommand:bool_str_Obj",
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
            "id": "ObjList::AddCommandOffset:bool_str_point",
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
            "id": "ObjList::ExecDefaultCmd:point_Obj_bool_bool",
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
            "id": "ObjList::ExecCmd:str_point_Obj_bool",
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
            "id": "ObjList::SetCommand:str",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::SetCommand:str_point",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "ObjList::SetCommand:str_Obj",
            "name": "SetCommand",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "ObjList::SetCommandOffset:str_point",
            "name": "SetCommandOffset",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "ObjList::GetCanExecCmd:str",
            "name": "GetCanExecCmd",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::FilterClosest:point_int",
            "name": "FilterClosest",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::Face:point",
            "name": "Face",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "ObjList::SetFood:int",
            "name": "SetFood",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::SetPlayer:int",
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::InHolder:str",
            "name": "InHolder",
            "returns": 1,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::AddToHolder:str",
            "name": "AddToHolder",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::SetVisible:bool",
            "name": "SetVisible",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "ObjList::ObjPlayer:int",
            "name": "ObjPlayer",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::ObjEnemy:int",
            "name": "ObjEnemy",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::ObjAlly:int",
            "name": "ObjAlly",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::ObjClass:str",
            "name": "ObjClass",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::ObjSpecial:int",
            "name": "ObjSpecial",
            "returns": 0,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ObjList::ObjInjured",
            "name": "ObjInjured",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::ObjFullStamina",
            "name": "ObjFullStamina",
            "returns": 26,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ObjList::Find:str",
            "name": "Find",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::FindAlly:int_str",
            "name": "FindAlly",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ObjList::FindEnemy:int_str",
            "name": "FindEnemy",
            "returns": 11,
            "returns_ptr": false,
            "of": 26,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ptr.Conversation::Init:str",
            "name": "Init",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Conversation::SetActor:str_Unit",
            "name": "SetActor",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Conversation::SetDefActor:str_str",
            "name": "SetDefActor",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ActorPresent:str",
            "name": "ActorPresent",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ConvResult:str",
            "name": "ConvResult",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ConvSetResult:str_str",
            "name": "ConvSetResult",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ptr.Conversation::Run",
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": 30,
            "of_ptr": true,
            "type": "method",
            "params": []
        }, {
            "id": "RunConv:str",
            "name": "RunConv",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_ListConvs",
            "name": "_ListConvs",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "EnvWriteString:str_str",
            "name": "EnvWriteString",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteInt:str_int",
            "name": "EnvWriteInt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnvReadString:str",
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvReadInt:str",
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteObj:str_Obj",
            "name": "EnvWriteObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "EnvReadObj:str",
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteString:Settlement_str_str",
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
            "id": "EnvWriteInt:Settlement_str_int",
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
            "id": "EnvReadString:Settlement_str",
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvReadInt:Settlement_str",
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteObj:Settlement_str_Obj",
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
            "id": "EnvReadObj:Settlement_str",
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteString:Building_str_str",
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
            "id": "EnvWriteInt:Building_str_int",
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
            "id": "EnvReadString:Building_str",
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvReadInt:Building_str",
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteObj:Building_str_Obj",
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
            "id": "EnvReadObj:Building_str",
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 14, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteString:int_str_str",
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
            "id": "EnvWriteInt:int_str_int",
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
            "id": "EnvReadString:int_str",
            "name": "EnvReadString",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvReadInt:int_str",
            "name": "EnvReadInt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvWriteObj:int_str_Obj",
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
            "id": "EnvReadObj:int_str",
            "name": "EnvReadObj",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvList:str",
            "name": "EnvList",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvList:Settlement_str",
            "name": "EnvList",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvFind:str",
            "name": "EnvFind",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnvExport:str",
            "name": "EnvExport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_ClearEnv",
            "name": "_ClearEnv",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RegisterSettlementUpgrade:Settlement_str",
            "name": "RegisterSettlementUpgrade",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "RegisterPlayerUpgrade:int_str",
            "name": "RegisterPlayerUpgrade",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "RunSequence:str",
            "name": "RunSequence",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_SequencesStatus",
            "name": "_SequencesStatus",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "IsRunning:str",
            "name": "IsRunning",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsWaiting:str",
            "name": "IsWaiting",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsFinished:str",
            "name": "IsFinished",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ViewPos",
            "name": "ViewPos",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "View:point_bool",
            "name": "View",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "PlayMusic:str",
            "name": "PlayMusic",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "PlaySound:str",
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "PlaySound:int_str",
            "name": "PlaySound",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "MusicPlaying",
            "name": "MusicPlaying",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SetSpeed:int",
            "name": "SetSpeed",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetSpeed",
            "name": "GetSpeed",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TogglePause",
            "name": "TogglePause",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_Run:str",
            "name": "_Run",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Run:str",
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Run:str_int",
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Run:str_int_int",
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
            "id": "Run:str_int_int_int",
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
            "id": "Run:str_int_int_int_int",
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
            "id": "Run:str_int_int_int_int_int",
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
            "id": "Settlement::Run:str",
            "name": "Run",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IRun:str",
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IRun:str_int",
            "name": "IRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "IRun:str_int_int",
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
            "id": "IRun:str_int_int_int",
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
            "id": "IRun:str_int_int_int_int",
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
            "id": "IRun:str_int_int_int_int_int",
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
            "id": "ToggleFPS",
            "name": "ToggleFPS",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetConst:str",
            "name": "GetConst",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetConstStr:str",
            "name": "GetConstStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "rand:int",
            "name": "rand",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "BlockUserInput",
            "name": "BlockUserInput",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "UnblockUserInput",
            "name": "UnblockUserInput",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ExploreCircle:int_point_int",
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
            "id": "ExploreArea:int_str",
            "name": "ExploreArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Party",
            "name": "Party",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetTime",
            "name": "GetTime",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "EndGame:int_bool",
            "name": "EndGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "IsMultiplayer",
            "name": "IsMultiplayer",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelAvgLevel",
            "name": "SelAvgLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelAvgFood",
            "name": "SelAvgFood",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelAvgStamina",
            "name": "SelAvgStamina",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelAvgArmor",
            "name": "SelAvgArmor",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelAvgDamage",
            "name": "SelAvgDamage",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelHealth",
            "name": "SelHealth",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelMaxHealth",
            "name": "SelMaxHealth",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "LockView",
            "name": "LockView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "UnlockView",
            "name": "UnlockView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "IsViewLocked",
            "name": "IsViewLocked",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "StartViewFollow:Unit",
            "name": "StartViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "StopViewFollow",
            "name": "StopViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "StartViewFollow:NamedObj",
            "name": "StartViewFollow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 29, "is_ptr": false}]
        }, {
            "id": "SetDifficulty:int",
            "name": "SetDifficulty",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetDifficulty",
            "name": "GetDifficulty",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetMapRect",
            "name": "GetMapRect",
            "returns": 7,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "MapName",
            "name": "MapName",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ChangeMap:str_str",
            "name": "ChangeMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SetNextSeason:str",
            "name": "SetNextSeason",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetTeamMilitaryScore:int",
            "name": "GetTeamMilitaryScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetTeamPowerScore:int",
            "name": "GetTeamPowerScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetTeamAchievementsScore:int",
            "name": "GetTeamAchievementsScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetTeamOverallScore:int",
            "name": "GetTeamOverallScore",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetVec:point_point_int",
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
            "id": "IsPassable:point",
            "name": "IsPassable",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "IsPassable3x3:point",
            "name": "IsPassable3x3",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "BlockMiniMap:bool",
            "name": "BlockMiniMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "IsExplored:point_int",
            "name": "IsExplored",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SelectionGold",
            "name": "SelectionGold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelectionFood",
            "name": "SelectionFood",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "NoTents",
            "name": "NoTents",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RandomOffset:int",
            "name": "RandomOffset",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "RandomPointInCircle:point_int",
            "name": "RandomPointInCircle",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "PlayMovie:str",
            "name": "PlayMovie",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Translate:str",
            "name": "Translate",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Translatef:str_str",
            "name": "Translatef",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Translatef:str_str_str",
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
            "id": "Translatef:str_str_str_str",
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
            "id": "SaveAdventure:str",
            "name": "SaveAdventure",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "WasSelectionAssigned:int_int",
            "name": "WasSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WasSelectionAssigned:int",
            "name": "WasSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "IsSelectionAssigned:int_int",
            "name": "IsSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "IsSelectionAssigned:int",
            "name": "IsSelectionAssigned",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SetGlobalBloodlust:bool",
            "name": "SetGlobalBloodlust",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "RevealHiddenEnemyUnits:point_int_int",
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
            "id": "InvalidateDamageFormulaParams",
            "name": "InvalidateDamageFormulaParams",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SwapSelectedObj:Obj_Obj",
            "name": "SwapSelectedObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Crash",
            "name": "Crash",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AreaCenter:str",
            "name": "AreaCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "DisableArea:str",
            "name": "DisableArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnableArea:str",
            "name": "EnableArea",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetRandomPointInArea:str",
            "name": "GetRandomPointInArea",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AreaDistTo:point_str",
            "name": "AreaDistTo",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_AdvPlaceAreaRect:str_rect_str_str",
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
            "id": "_AdvPlaceAreaCirc:str_point_int_str_str",
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
            "id": "Sacrifice::AddDruid:Druid_int",
            "name": "AddDruid",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 16, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Sacrifice::RemoveDruid:Druid",
            "name": "RemoveDruid",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 16, "is_ptr": false}]
        }, {
            "id": "Sacrifice::Consume:int_int_bool",
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
            "id": "Sacrifice::IsEmpty",
            "name": "IsEmpty",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Sacrifice::MistAction:int",
            "name": "MistAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Sacrifice::IsInvisibility",
            "name": "IsInvisibility",
            "returns": 2,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Sacrifice::Druids",
            "name": "Druids",
            "returns": 26,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Sacrifice::UpdateCoverOfMercy",
            "name": "UpdateCoverOfMercy",
            "returns": 0,
            "returns_ptr": false,
            "of": 23,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GiveNote:str",
            "name": "GiveNote",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "RemoveNote:str",
            "name": "RemoveNote",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ShowNotes",
            "name": "ShowNotes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ClearNotes",
            "name": "ClearNotes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "IsNoteActive:str",
            "name": "IsNoteActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "CreateFeedback:str_Unit",
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "CreateFeedback:str_Unit_int",
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
            "id": "CreateFeedback:str_point",
            "name": "CreateFeedback",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "CreateFeedback:str_point_int",
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
            "id": "DiplCeaseFire:int_int_bool",
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
            "id": "DiplShareView:int_int_bool",
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
            "id": "DiplShareControl:int_int_bool",
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
            "id": "DiplShareSupport:int_int_bool",
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
            "id": "DiplGetCeaseFire:int_int",
            "name": "DiplGetCeaseFire",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "DiplGetShareView:int_int",
            "name": "DiplGetShareView",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "DiplGetShareControl:int_int",
            "name": "DiplGetShareControl",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "DiplGetShareSupport:int_int",
            "name": "DiplGetShareSupport",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ClearDiplomacy",
            "name": "ClearDiplomacy",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RecreateExploration",
            "name": "RecreateExploration",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::AsGate",
            "name": "AsGate",
            "returns": 31,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::IsOpened",
            "name": "IsOpened",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::IsClosed",
            "name": "IsClosed",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::AreEnemiesAround",
            "name": "AreEnemiesAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::AreFriendsAround",
            "name": "AreFriendsAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::LookAround:int",
            "name": "LookAround",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Gate::OpenNow",
            "name": "OpenNow",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::CloseNow",
            "name": "CloseNow",
            "returns": 0,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::AsTeleport",
            "name": "AsTeleport",
            "returns": 32,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Teleport::destination",
            "name": "destination",
            "returns": 32,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Teleport::exit_vector",
            "name": "exit_vector",
            "returns": 6,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Teleport::Traverse:int",
            "name": "Traverse",
            "returns": 0,
            "returns_ptr": false,
            "of": 32,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Ship::ShowBuildAnimation:point",
            "name": "ShowBuildAnimation",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Ship::NotifyBoardUnit:Unit",
            "name": "NotifyBoardUnit",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Ship::AreUnitsToBoard",
            "name": "AreUnitsToBoard",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::BestCandidateToBoard",
            "name": "BestCandidateToBoard",
            "returns": 13,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::BoardUnit:Unit",
            "name": "BoardUnit",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Ship::NotifyBoardUnitCancel:Unit",
            "name": "NotifyBoardUnitCancel",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "Ship::NotifyShipBoardingCancel",
            "name": "NotifyShipBoardingCancel",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::UnboardUnits:ObjList",
            "name": "UnboardUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}]
        }, {
            "id": "Ship::UnboardAllUnits",
            "name": "UnboardAllUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "IsPointInWater:point",
            "name": "IsPointInWater",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Ship::FindPointToStay",
            "name": "FindPointToStay",
            "returns": 6,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::UnitsCount",
            "name": "UnitsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::UnitsMax",
            "name": "UnitsMax",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::Idle",
            "name": "Idle",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::HasAiTransport",
            "name": "HasAiTransport",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::GetUnitsOnBoard",
            "name": "GetUnitsOnBoard",
            "returns": 26,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::ApplyAiTransport",
            "name": "ApplyAiTransport",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::ClearAiTransport",
            "name": "ClearAiTransport",
            "returns": 0,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::GetTransPt",
            "name": "GetTransPt",
            "returns": 6,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::IsBuilding",
            "name": "IsBuilding",
            "returns": 2,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Ship::NumUnitsToBoard",
            "name": "NumUnitsToBoard",
            "returns": 1,
            "returns_ptr": false,
            "of": 24,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::RecalcBonuses",
            "name": "RecalcBonuses",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::AddBonus:int_int_int_int_int",
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
            "id": "Unit::RemoveBonus:int_int_int_int_int",
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
            "id": "ItemUsed:int",
            "name": "ItemUsed",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetUseCount",
            "name": "GetUseCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Item::use_count",
            "name": "use_count",
            "returns": 1,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Item::custom_data",
            "name": "custom_data",
            "returns": 1,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Item::id",
            "name": "id",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Cadena de texto que identifica el objeto, parece ser la misma que <a href='#Item::name'>Item::name</a>.",
            "description_en": "Text string which identifies the object, seems to be the same as <a href='#Item::name'>Item::name</a>.",
            "related": ["Item::name"]
        }, {
            "id": "Item::name",
            "name": "name",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Cadena de texto que identifica el objeto, parece ser la misma que <a href='#Item::id'>Item::id</a>. Nótese que este es el que aparece en el editor como <i>nombre de script</i>, si se desea obtener el nombre visible utilizar <a href='#Item::display_name'>Item::display_name</a>.",
            "description_en": "Text string which identifies the object, seems to be the same as <a href='#Item::id'>Item::id</a>. Notice this is the name showing up in the editor as <i>script name</i>; if you wish to obtain the visible name, you should use <a href='#Item::display_name'>Item::display_name</a>.",
            "related": ["Item::id", "Item::display_name"]
        }, {
            "id": "Item::display_name",
            "name": "display_name",
            "returns": 5,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "property",
            "params": [],
            "description": "Nombre a mostrar del ítem, devuelve el nombre traducido para los objetos originales del juego.",
            "description_en": "Name of the item to display to the player, it returns the translated value for the original objects of the game."
        }, {
            "id": "Item::Use",
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Item::Use:Obj",
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "Item::Use:point",
            "name": "Use",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Item::SetCustomData:int",
            "name": "SetCustomData",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetThis",
            "name": "GetThis",
            "returns": 12,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Flying::PlayAnim:int_point_int",
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
            "id": "Flying::IsInAir",
            "name": "IsInAir",
            "returns": 2,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Flying::IsLanding",
            "name": "IsLanding",
            "returns": 2,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Flying::z",
            "name": "z",
            "returns": 1,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Flying::PickFlyingPoint:int",
            "name": "PickFlyingPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Flying::PickLandingPoint:int",
            "name": "PickLandingPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Flying::FindNearBird",
            "name": "FindNearBird",
            "returns": 25,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Flying::AdjustFlyDir:ptr.point",
            "name": "AdjustFlyDir",
            "returns": 0,
            "returns_ptr": false,
            "of": 25,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": true}]
        }, {
            "id": "GetTerrainHeight:point",
            "name": "GetTerrainHeight",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "GetVecByDir:point_int",
            "name": "GetVecByDir",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetAngleByDir:point",
            "name": "GetAngleByDir",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "GetDirByAngle:int",
            "name": "GetDirByAngle",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "MapSize",
            "name": "MapSize",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetAnimDuration:int",
            "name": "GetAnimDuration",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::dir",
            "name": "dir",
            "returns": 6,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "OnLeft:point_point",
            "name": "OnLeft",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "NumSquads:int",
            "name": "NumSquads",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetSquad:int_int",
            "name": "GetSquad",
            "returns": 33,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::GetSquad",
            "name": "GetSquad",
            "returns": 33,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Player",
            "name": "Player",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::No",
            "name": "No",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Eval",
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::State",
            "name": "State",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::SetState:int",
            "name": "SetState",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::StateTime",
            "name": "StateTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Size",
            "name": "Size",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::SrcGAIKA",
            "name": "SrcGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::DestGAIKA",
            "name": "DestGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::GAIKAIn",
            "name": "GAIKAIn",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Leader",
            "name": "Leader",
            "returns": 13,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Units",
            "name": "Units",
            "returns": 26,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::SetState:int_int_int",
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
            "id": "Squad::ClrCmd:int_int_int",
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
            "id": "Squad::SetCmd:int_int_int_str",
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
            "id": "Squad::SetCmd:int_int_int_str_point",
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
            "id": "Squad::SetCmd:int_int_int_str_Obj",
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
            "id": "ObjList::Siege:Obj_int_int",
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
            "id": "Squad::Siege:Obj_int_int_int",
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
            "id": "Squad::SendTo:GAIKA_int",
            "name": "SendTo",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::AIDest",
            "name": "AIDest",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::OrderDest",
            "name": "OrderDest",
            "returns": 34,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::DelOrder",
            "name": "DelOrder",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::GetFlags",
            "name": "GetFlags",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::TestFlags:int",
            "name": "TestFlags",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::SetFlags:int_int",
            "name": "SetFlags",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::Lock",
            "name": "Lock",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Unlock",
            "name": "Unlock",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::LastFightTime",
            "name": "LastFightTime",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::InHolder",
            "name": "InHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::pos",
            "name": "pos",
            "returns": 6,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Squad::health",
            "name": "health",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Squad::maxhealth",
            "name": "maxhealth",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Squad::food",
            "name": "food",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "Squad::FoodComing",
            "name": "FoodComing",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::SendFoodWagon:int_int",
            "name": "SendFoodWagon",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::EvalAttach:Unit_int",
            "name": "EvalAttach",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::Count:str",
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Squad::HasFreedom",
            "name": "HasFreedom",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKACount",
            "name": "GAIKACount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetGAIKA:int",
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetGAIKA:Obj",
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "GetGAIKA:point",
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "GetGAIKA:int_int",
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "LAIKA:int_int",
            "name": "LAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::ID",
            "name": "ID",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::Empty",
            "name": "Empty",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::Type",
            "name": "Type",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::Center",
            "name": "Center",
            "returns": 6,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::GetDestPoint:Unit",
            "name": "GetDestPoint",
            "returns": 6,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "GAIKA::settlement",
            "name": "settlement",
            "returns": 28,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "property",
            "params": []
        }, {
            "id": "GAIKA::GetSquads:ptr.SquadList",
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}]
        }, {
            "id": "GAIKA::GetSquads:ptr.SquadList_int",
            "name": "GetSquads",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 35, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::GetSquads:ptr.SquadList_int_int",
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
            "id": "GAIKA::GetSquads:ptr.SquadList_int_int_int",
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
            "id": "GAIKA::Eval:int",
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Eval:int_int",
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Eval:int_int_int",
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
            "id": "GAIKA::Eval:int_int_ptr.int_ptr.int_ptr.int_ptr.int",
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
            "id": "GAIKA::EvalNeighbors:int_int_ptr.int_ptr.int_ptr.int_bool",
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
            "id": "GAIKA::Count:int_int_ptr.int_ptr.int_ptr.int_ptr.int",
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
            "id": "GAIKA::GetPriority:int",
            "name": "GetPriority",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::GetLAIKA:int",
            "name": "GetLAIKA",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::CalcPriority:int",
            "name": "CalcPriority",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::SetPriority:int_int",
            "name": "SetPriority",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Prioritized:int",
            "name": "Prioritized",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Explored:int",
            "name": "Explored",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Explore:int_bool",
            "name": "Explore",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "GAIKA::CanExplore:int",
            "name": "CanExplore",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Revealed:int",
            "name": "Revealed",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::LastSeen:int",
            "name": "LastSeen",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::NoAttack:int",
            "name": "NoAttack",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::SetNoAttack:int_bool",
            "name": "SetNoAttack",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "GAIKA::NoRecruit:int",
            "name": "NoRecruit",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::SetNoRecruit:int_bool",
            "name": "SetNoRecruit",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "GAIKA::GetDistToPlayers:int_ptr.int_ptr.int_ptr.int",
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
            "id": "GAIKA::GetDistToArmies:int",
            "name": "GetDistToArmies",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Count:int_int_str",
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
            "id": "GAIKA::MinNeed:int_int_int_int",
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
            "id": "GAIKA::MaxNeed:int_int_int_int",
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
            "id": "GAIKA::Recruit:int_int_int_ptr.int",
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
            "id": "GAIKA::GetStrat:int",
            "name": "GetStrat",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::StratRunning:int",
            "name": "StratRunning",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::RunStrat:int_int",
            "name": "RunStrat",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::AllEnemiesInHolder:int",
            "name": "AllEnemiesInHolder",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::MilitaryPresence:int",
            "name": "MilitaryPresence",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::Neighbors",
            "name": "Neighbors",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::Neighbor:int",
            "name": "Neighbor",
            "returns": 34,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SetNoAttack:str_int_bool",
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
            "id": "SetNoRecruit:str_int_bool",
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
            "id": "AreaAINoRecruit:str_int_bool",
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
            "id": "AreaAINoAttack:str_int_bool",
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
            "id": "AreaAIMaxPriority:str_int_bool",
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
            "id": "AreaAISetAttackOptimism:str_int_int",
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
            "id": "SetMAIKA:GAIKA_GAIKA_GAIKA",
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
            "id": "DumpMAIKA:int_int_int",
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
            "id": "Settlement::UnitsInHolderEval",
            "name": "UnitsInHolderEval",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::IsValid",
            "name": "IsValid",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::EOL",
            "name": "EOL",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Rewind",
            "name": "Rewind",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Next",
            "name": "Next",
            "returns": 2,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Cur",
            "name": "Cur",
            "returns": 33,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Size",
            "name": "Size",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Eval",
            "name": "Eval",
            "returns": 1,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Lock",
            "name": "Lock",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Unlock",
            "name": "Unlock",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ptr.SquadList::Add:Squad",
            "name": "Add",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": true,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "id": "SquadList::Select:int",
            "name": "Select",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SquadList::Train:int_int_int_int_Obj",
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
            "id": "Settlement::NumTowers",
            "name": "NumTowers",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::NumTowersBroken",
            "name": "NumTowersBroken",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::NumGates",
            "name": "NumGates",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::NumGatesBroken",
            "name": "NumGatesBroken",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::EvalDefences",
            "name": "EvalDefences",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::FindCatapultSpot:point",
            "name": "FindCatapultSpot",
            "returns": 6,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Settlement::BestGate:point",
            "name": "BestGate",
            "returns": 31,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Settlement::OpenAllGates",
            "name": "OpenAllGates",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IdleAllGates",
            "name": "IdleAllGates",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::IsVeryBroken",
            "name": "IsVeryBroken",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::CanBeCaptured",
            "name": "CanBeCaptured",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsStronghold",
            "name": "IsStronghold",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsVillage",
            "name": "IsVillage",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsOutpost",
            "name": "IsOutpost",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsTTent",
            "name": "IsTTent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsShipyard",
            "name": "IsShipyard",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsAlly:int",
            "name": "IsAlly",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::IsEnemy:int",
            "name": "IsEnemy",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::IsOwn:int",
            "name": "IsOwn",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::IsIndependent",
            "name": "IsIndependent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::IsIndependentGuarded",
            "name": "IsIndependentGuarded",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetRel:int",
            "name": "GetRel",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::MaxPopulation",
            "name": "MaxPopulation",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::SupplyCount:str",
            "name": "SupplyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::BestToSupply",
            "name": "BestToSupply",
            "returns": 28,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SettlementCount:point_int_str",
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
            "id": "FindRuins:point_int_int",
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
            "id": "AttackSetForTraining:Obj_point_int",
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
            "id": "Unit::BestTargetInGAIKA",
            "name": "BestTargetInGAIKA",
            "returns": 11,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::AI",
            "name": "AI",
            "returns": 2,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AIRun:str",
            "name": "AIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AIRun:str_Settlement_ObjList_Obj_int",
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
            "id": "AIRun:int_str_Settlement_ObjList_Obj_int",
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
            "id": "AIBreakScript:int",
            "name": "AIBreakScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIBreakScript:int_int",
            "name": "AIBreakScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIExecCmd:Obj_str",
            "name": "AIExecCmd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsAIShow",
            "name": "IsAIShow",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ScrollTo:point_int",
            "name": "ScrollTo",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::BestBarrack:int",
            "name": "BestBarrack",
            "returns": 22,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetGaikaCenter:int",
            "name": "GetGaikaCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetSquadCenter:int_int",
            "name": "GetSquadCenter",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::FindBuilding:str",
            "name": "FindBuilding",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::FindResearchLab:str",
            "name": "FindResearchLab",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Building::IsBarrack",
            "name": "IsBarrack",
            "returns": 2,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SetToIdx:Settlement",
            "name": "SetToIdx",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}]
        }, {
            "id": "IdxToSet:int",
            "name": "IdxToSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "MaxSetIdx",
            "name": "MaxSetIdx",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AIH_UnitBuilt:Unit",
            "name": "AIH_UnitBuilt",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 13, "is_ptr": false}]
        }, {
            "id": "AIGetPlayer",
            "name": "AIGetPlayer",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AIO_SendSquad:int_int_int",
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
            "id": "AIO_Train:int_str_int_int",
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
            "id": "ViewSlot",
            "name": "ViewSlot",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squadize:ObjList_ptr.SquadList_int",
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
            "id": "IsResearched:Settlement_str",
            "name": "IsResearched",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsResearched:int_str",
            "name": "IsResearched",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsResearching:Settlement_str",
            "name": "IsResearching",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsResearching:int_str",
            "name": "IsResearching",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetCmdCost:str_ptr.int_ptr.int",
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
            "id": "GetCmdStaminaCost:str",
            "name": "GetCmdStaminaCost",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::CanAfford:int_int",
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::CanAfford:str",
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::CanAfford:str_int",
            "name": "CanAfford",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::MaxAffordCount:str",
            "name": "MaxAffordCount",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::CanResearch:str",
            "name": "CanResearch",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::Research:str",
            "name": "Research",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::Reserve",
            "name": "Reserve",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::StopReserving",
            "name": "StopReserving",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::ReserveFor:str_int",
            "name": "ReserveFor",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GoldSpentOnArmy",
            "name": "GoldSpentOnArmy",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::SpentGoldOnArmy:int",
            "name": "SpentGoldOnArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GoldSpentOnTech",
            "name": "GoldSpentOnTech",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::SpentGoldOnTech:int",
            "name": "SpentGoldOnTech",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::CheckTechBudget:str_int",
            "name": "CheckTechBudget",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::WaterLsa",
            "name": "WaterLsa",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::LandLsa",
            "name": "LandLsa",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "MilUnits:int",
            "name": "MilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "HeroArmiesFullPerc:int",
            "name": "HeroArmiesFullPerc",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "MilEval:int",
            "name": "MilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AllyMilUnits:int",
            "name": "AllyMilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AllyMilEval:int",
            "name": "AllyMilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyMilUnits:int",
            "name": "EnemyMilUnits",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyMilEval:int",
            "name": "EnemyMilEval",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyPlayersEval:int_ptr.int_ptr.int_ptr.int",
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
            "id": "Strongholds:int",
            "name": "Strongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AllyStrongholds:int",
            "name": "AllyStrongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyStrongholds:int",
            "name": "EnemyStrongholds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Villages:int",
            "name": "Villages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AllyVillages:int",
            "name": "AllyVillages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyVillages:int",
            "name": "EnemyVillages",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Outposts:int",
            "name": "Outposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AllyOutposts:int",
            "name": "AllyOutposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyOutposts:int",
            "name": "EnemyOutposts",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Count:int_str",
            "name": "Count",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AllyCount:int_str",
            "name": "AllyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "EnemyCount:int_str",
            "name": "EnemyCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GAIKA::LSA",
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "LSA:int_int",
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "LSA:point",
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "Obj::LSA",
            "name": "LSA",
            "returns": 1,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "CheckLsaPath:int_int_int",
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
            "id": "Ships:int_int",
            "name": "Ships",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "EnemyShips:int_int",
            "name": "EnemyShips",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AllyShips:int_int",
            "name": "AllyShips",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ShipNeeds:int_int",
            "name": "ShipNeeds",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ClrShipNeeds:int_int",
            "name": "ClrShipNeeds",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "IncShipNeeds:int_int",
            "name": "IncShipNeeds",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "IsWaterLsa:int",
            "name": "IsWaterLsa",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIAssist",
            "name": "AIAssist",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AIStart:int",
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIStart:int_str",
            "name": "AIStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AIStart:int_str_int",
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
            "id": "AIStop:int",
            "name": "AIStop",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "NearestHospital:Squad",
            "name": "NearestHospital",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "id": "NearestStronghold:point_int_int",
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
            "id": "NearestStronghold:point_int",
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "NearestStronghold:point",
            "name": "NearestStronghold",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "NearestSet:point_str_int_int",
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
            "id": "NearestSet:point_str_int",
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
            "id": "NearestSet:point",
            "name": "NearestSet",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 6, "is_ptr": false}]
        }, {
            "id": "GetSettlements:str_int",
            "name": "GetSettlements",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::GetEconomyScript:int",
            "name": "GetEconomyScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::RunEconomyScript:int",
            "name": "RunEconomyScript",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::EconomyScript",
            "name": "EconomyScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetTacticScript:int",
            "name": "GetTacticScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::RunTacticScript:int",
            "name": "RunTacticScript",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::TacticScript",
            "name": "TacticScript",
            "returns": 1,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::GetGaika",
            "name": "GetGaika",
            "returns": 34,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::CancelSupply",
            "name": "CancelSupply",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Gate::Inside:Squad",
            "name": "Inside",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "id": "Gate::Outside:Squad",
            "name": "Outside",
            "returns": 2,
            "returns_ptr": false,
            "of": 31,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 33, "is_ptr": false}]
        }, {
            "id": "Settlement::UpgradeBestBarrack:int",
            "name": "UpgradeBestBarrack",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::RepairAll",
            "name": "RepairAll",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PrepareAiTransportShip:int_int_int_str_point",
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
            "id": "CheckLP",
            "name": "CheckLP",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SendSquadToLsaX",
            "name": "SendSquadToLsaX",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetMouseXY",
            "name": "GetMouseXY",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RUType:str_int",
            "name": "RUType",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "UType:int_int",
            "name": "UType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "UTech:int_int",
            "name": "UTech",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "UTrainCmd:int_int",
            "name": "UTrainCmd",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "UEnabled:int_int",
            "name": "UEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "CheckUEnabled:ptr.int_int_int_int_int",
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
            "id": "Squad::CalcGoAround",
            "name": "CalcGoAround",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::TakeNearbyItems:int",
            "name": "TakeNearbyItems",
            "returns": 2,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::HasItem:str",
            "name": "HasItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Obj::UseItem:str",
            "name": "UseItem",
            "returns": 2,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "FindTeleport:int_point_point",
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
            "id": "Squad::UseTeleport:Obj_int_str_point",
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
            "id": "Squad::InvadeThroughGate:Obj_int",
            "name": "InvadeThroughGate",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Eval:int_point_int_ptr.int_ptr.int_ptr.int",
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
            "id": "EvalGroup:str",
            "name": "EvalGroup",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Unit::BestMDPos:int_int_int_int_bool",
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
            "id": "Unit::BestProtPos:int_int_int_int",
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
            "id": "IsProtected:int_point_str",
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
            "id": "NeedTraining:int",
            "name": "NeedTraining",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetCounterUnits:Settlement_ptr.IntArray",
            "name": "GetCounterUnits",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 28, "is_ptr": false}, {"name": "number", "type": 8, "is_ptr": true}]
        }, {
            "id": "GetClassHealt:str",
            "name": "GetClassHealt",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetTrainGold:str",
            "name": "GetTrainGold",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsAIPlayer:int",
            "name": "IsAIPlayer",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::AIGetSkillToDevelop:ptr.int_ptr.int",
            "name": "AIGetSkillToDevelop",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": true}, {"name": "number", "type": 1, "is_ptr": true}]
        }, {
            "id": "SetNoAIFlag:ObjList_bool",
            "name": "SetNoAIFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 26, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "GAIKA::GetAIControlledUnits:str_int_int_bool",
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
            "id": "Settlement::TSRecruitArmy:str_int",
            "name": "TSRecruitArmy",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::TSGetAllBarracks",
            "name": "TSGetAllBarracks",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::TSGetAllArenae",
            "name": "TSGetAllArenae",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::TSGetAllTemples",
            "name": "TSGetAllTemples",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::BestArena",
            "name": "BestArena",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ArenaTrainCmd:int",
            "name": "ArenaTrainCmd",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::TSArenaRecruit:int",
            "name": "TSArenaRecruit",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ArenaUTech:int",
            "name": "ArenaUTech",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ArenaUType:int",
            "name": "ArenaUType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::TSRecruitHero",
            "name": "TSRecruitHero",
            "returns": 15,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Settlement::TSResearch:str",
            "name": "TSResearch",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Settlement::TSTempleRecruit:int",
            "name": "TSTempleRecruit",
            "returns": 26,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::BestTemple",
            "name": "BestTemple",
            "returns": 14,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TempleUType:int",
            "name": "TempleUType",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "TempleUTrain:int",
            "name": "TempleUTrain",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Hero::TSAdvHeroSkills:ptr.IntArray_ptr.IntArray",
            "name": "TSAdvHeroSkills",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 8, "is_ptr": true}, {"name": "number", "type": 8, "is_ptr": true}]
        }, {
            "id": "SelSquad",
            "name": "SelSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SelSquad:int_int",
            "name": "SelSquad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SelSquadLeader",
            "name": "SelSquadLeader",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::Dump",
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Squad::Dump",
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SquadList::Dump",
            "name": "Dump",
            "returns": 0,
            "returns_ptr": false,
            "of": 35,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Breakpoint",
            "name": "Breakpoint",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PrGAIKAStrat:GAIKA_int",
            "name": "PrGAIKAStrat",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 34, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ViewGAIKA",
            "name": "ViewGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "vg:int",
            "name": "vg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SS_STR:int",
            "name": "SS_STR",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GS_STR:int",
            "name": "GS_STR",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Settlement::IsTeutonTent",
            "name": "IsTeutonTent",
            "returns": 2,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AIV:int",
            "name": "AIV",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIV:int_str",
            "name": "AIV",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "DbgAI:int",
            "name": "DbgAI",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "DbgArmy:int",
            "name": "DbgArmy",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "dp:int",
            "name": "dp",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "LsaStr:int",
            "name": "LsaStr",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIVar:int_int",
            "name": "AIVar",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "AIVar:int_int_int",
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
            "id": "SetAIVar:int_int_int",
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
            "id": "SetAIVar:int_int_int_bool",
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
            "id": "AIRun:int_str",
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AIRun:int_str_int",
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
            "id": "AIRun:int_str_int_int",
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
            "id": "AIRun:int_str_int_int_int",
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
            "id": "AIRun:int_str_int_int_int_int",
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
            "id": "AIRun:int_str_int_int_int_int_int",
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
            "id": "AIIRun:int_str",
            "name": "AIIRun",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AIIRun:int_str_int",
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
            "id": "AIIRun:int_str_int_int",
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
            "id": "AIIRun:int_str_int_int_int",
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
            "id": "AIIRun:int_str_int_int_int_int",
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
            "id": "AIIRun:int_str_int_int_int_int_int",
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
            "id": "Settlement::AIRun:str",
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 28,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GAIKA::AIRun:str_int",
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::AIRun:str",
            "name": "AIRun",
            "returns": 0,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "AppendFile:str_str",
            "name": "AppendFile",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "pr:str",
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "pr:int",
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "pr:bool",
            "name": "pr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "cls",
            "name": "cls",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "quit",
            "name": "quit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "switch",
            "name": "switch",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_Black",
            "name": "_Black",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_Place:str_int_int",
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
            "id": "_InvalidateAllToggle",
            "name": "_InvalidateAllToggle",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_ToggleInvRects",
            "name": "_ToggleInvRects",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_SetCursor:str",
            "name": "_SetCursor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ProfileStart",
            "name": "ProfileStart",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ProfileStop",
            "name": "ProfileStop",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PerlinTest",
            "name": "PerlinTest",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ShrinkEntities",
            "name": "ShrinkEntities",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ReloadConstIni",
            "name": "ReloadConstIni",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "BuildSPF",
            "name": "BuildSPF",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "BuildRLEMMap",
            "name": "BuildRLEMMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PrintMemStats",
            "name": "PrintMemStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "DumpObj",
            "name": "DumpObj",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ConvTerrains",
            "name": "ConvTerrains",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "CheckClasses",
            "name": "CheckClasses",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "MakePassable",
            "name": "MakePassable",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SetPlayer:int",
            "name": "SetPlayer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "CurPlayer",
            "name": "CurPlayer",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ToggleFog",
            "name": "ToggleFog",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SetFog:bool",
            "name": "SetFog",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "ExploreAll",
            "name": "ExploreAll",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Invalidate",
            "name": "Invalidate",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Render",
            "name": "Render",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ScreenShot",
            "name": "ScreenShot",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ActivateScreenShots:int",
            "name": "ActivateScreenShots",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ToggleScreenShots:int",
            "name": "ToggleScreenShots",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "DebugSelected",
            "name": "DebugSelected",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Save",
            "name": "Save",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ExportObjs:str",
            "name": "ExportObjs",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ExportTerrain:str",
            "name": "ExportTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Load",
            "name": "Load",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Save:str",
            "name": "Save",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "Load:str",
            "name": "Load",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ChMap:str",
            "name": "ChMap",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "MousePos",
            "name": "MousePos",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Conv",
            "name": "Conv",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ToggleVis",
            "name": "ToggleVis",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Spawn:int_int",
            "name": "Spawn",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "RemoveDecors",
            "name": "RemoveDecors",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Explorer",
            "name": "Explorer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Dlg:str",
            "name": "Dlg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "DumpStats:Obj",
            "name": "DumpStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "sel",
            "name": "sel",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "selo",
            "name": "selo",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "selu",
            "name": "selu",
            "returns": 13,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "selh",
            "name": "selh",
            "returns": 15,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "selb",
            "name": "selb",
            "returns": 14,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "sels",
            "name": "sels",
            "returns": 28,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "selsq",
            "name": "selsq",
            "returns": 33,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "selg",
            "name": "selg",
            "returns": 34,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Desync",
            "name": "Desync",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PFPersist:bool",
            "name": "PFPersist",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "AddFD",
            "name": "AddFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RemFD",
            "name": "RemFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RebuildPass",
            "name": "RebuildPass",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Splash:str_str",
            "name": "Splash",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "F5",
            "name": "F5",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "FlatTerrain",
            "name": "FlatTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Pause",
            "name": "Pause",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TestLoad",
            "name": "TestLoad",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TestSave",
            "name": "TestSave",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "sd",
            "name": "sd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_RedrawAll",
            "name": "_RedrawAll",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "InsDecor:int_int_int",
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
            "id": "DelDecor:int_int",
            "name": "DelDecor",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "PreLit",
            "name": "PreLit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "DeepWater:int_int_int",
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
            "id": "RayOfLight:int_int_int_int",
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
            "id": "DumpFuncToXML",
            "name": "DumpFuncToXML",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "USR",
            "name": "USR",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ToggleLD",
            "name": "ToggleLD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ChangeFormation:str",
            "name": "ChangeFormation",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "UndoMemory",
            "name": "UndoMemory",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AdvExplorer",
            "name": "AdvExplorer",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ae",
            "name": "ae",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TTest:str",
            "name": "TTest",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "TTestf",
            "name": "TTestf",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SaveEdit",
            "name": "SaveEdit",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "EdgeOfForever",
            "name": "EdgeOfForever",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TestAdventure",
            "name": "TestAdventure",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TestAdventureDebug",
            "name": "TestAdventureDebug",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SettlementCount",
            "name": "SettlementCount",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "LSA",
            "name": "LSA",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKAFD",
            "name": "GAIKAFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ESG:int_int",
            "name": "ESG",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GS:int",
            "name": "GS",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "cvar1:int",
            "name": "cvar1",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "cvar1",
            "name": "cvar1",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "cvar2:int",
            "name": "cvar2",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "cvar2",
            "name": "cvar2",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "TogglePtDraw:int",
            "name": "TogglePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "DisablePtDraw",
            "name": "DisablePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "EnablePtDraw",
            "name": "EnablePtDraw",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Unit::GetAnimState",
            "name": "GetAnimState",
            "returns": 1,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "ClearDecors",
            "name": "ClearDecors",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GenTransTables",
            "name": "GenTransTables",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetItem:str",
            "name": "GetItem",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_PlayersAlly:int_int",
            "name": "_PlayersAlly",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "_PlayersShareControl:int_int",
            "name": "_PlayersShareControl",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "_PlayersShareView:int_int",
            "name": "_PlayersShareView",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "_PlayersShareSupport:int_int",
            "name": "_PlayersShareSupport",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "_PlayersMakeEnemies:int_int",
            "name": "_PlayersMakeEnemies",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "_chs:str",
            "name": "_chs",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_SetNextSeason:str",
            "name": "_SetNextSeason",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IngameDebugSelected",
            "name": "IngameDebugSelected",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "gmp",
            "name": "gmp",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GenHelpCmdIcons",
            "name": "GenHelpCmdIcons",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Hero::_EnableAllSkills",
            "name": "_EnableAllSkills",
            "returns": 0,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "gdb",
            "name": "gdb",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_handles",
            "name": "_handles",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetFormDsc:str",
            "name": "GetFormDsc",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SetPlayerSettRace:int_int",
            "name": "SetPlayerSettRace",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SetSettRace:str_int",
            "name": "SetSettRace",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SetShortcutSel:int_int_ObjList",
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
            "id": "GetShortcutSel:int_int",
            "name": "GetShortcutSel",
            "returns": 26,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "UIShowTab:int",
            "name": "UIShowTab",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "UITabShown",
            "name": "UITabShown",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "BlurTerrain:int",
            "name": "BlurTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ShowFlatTerrain",
            "name": "ShowFlatTerrain",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "clock",
            "name": "clock",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_DbgSel",
            "name": "_DbgSel",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "WaitIdle:Query_int",
            "name": "WaitIdle",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WaitObjInQuery:Obj_Query_int",
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
            "id": "WaitQueryCountBetween:Query_int_int_int",
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
            "id": "WaitCommonObjects:Query_Query_int",
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
            "id": "WaitHealthBetween:Query_int_int_int",
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
            "id": "WaitSettlementCapture:str_int_int",
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
            "id": "WaitSettlementAllied:str_int_int",
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
            "id": "WaitEnvStringEqual:str_str_int",
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
            "id": "WaitEnvIntBetween:str_int_int_int",
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
            "id": "WaitAddNote:str_int",
            "name": "WaitAddNote",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WaitRemoveNote:str_int",
            "name": "WaitRemoveNote",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WaitConvRequest:Query_Query_int_ptr.Obj_ptr.Obj",
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
            "id": "WaitUnitsInArea:Query_str_int",
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
            "id": "WaitIdleUnitsInArea:Query_str_int",
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
            "id": "WaitEmptyQuery:Query_int",
            "name": "WaitEmptyQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WaitNonEmptyQuery:Query_int",
            "name": "WaitNonEmptyQuery",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 27, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WaitConvRequest:Obj_Obj_int",
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
            "id": "EndConvSetup:Obj_Obj",
            "name": "EndConvSetup",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "WaitPlayerChat:ptr.int_ptr.str_int",
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
            "id": "ShowLastNotificationPos",
            "name": "ShowLastNotificationPos",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "UserNotification:str_str_point_int",
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
            "id": "HasStarvingArmy",
            "name": "HasStarvingArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "HasStarvingArmy:int",
            "name": "HasStarvingArmy",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "StarvingArmyPos:int",
            "name": "StarvingArmyPos",
            "returns": 11,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "RunAIHelper:str_str",
            "name": "RunAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "RunAIHelper:str_str_str",
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
            "id": "RunAIHelper:str_str_str_str",
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
            "id": "RunAIHelper:str_str_str_str_str",
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
            "id": "RunAIHelper:str_str_str_str_str_str",
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
            "id": "RunAIHelper:str_str_str_str_str_str_str",
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
            "id": "RunAIHelper:str_str_str_str_str_str_str_str",
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
            "id": "RunAIHelper:str_str_str_str_str_str_str_str_str",
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
            "id": "StopAIHelper:str",
            "name": "StopAIHelper",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "IsAIHelperRunning:str",
            "name": "IsAIHelperRunning",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "pfd",
            "name": "pfd",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "testpf",
            "name": "testpf",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFDone",
            "name": "SPFDone",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFFindAreas_Quant",
            "name": "SPFFindAreas_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFInitData",
            "name": "SPFInitData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFInitDirectionData",
            "name": "SPFInitDirectionData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFInitPointToAreaData",
            "name": "SPFInitPointToAreaData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFInitConnectData",
            "name": "SPFInitConnectData",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFCalcConnectHighRes_Quant",
            "name": "SPFCalcConnectHighRes_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFIncreaseConnect",
            "name": "SPFIncreaseConnect",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "SPFIncreaseConnect_Quant",
            "name": "SPFIncreaseConnect_Quant",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetInnState:str_str",
            "name": "GetInnState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SetInnState:str_str_int",
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
            "id": "GetInnState:Obj",
            "name": "GetInnState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "SetInnState:Obj_int",
            "name": "SetInnState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GenTransGame:str",
            "name": "GenTransGame",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "MousePtm",
            "name": "MousePtm",
            "returns": 6,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "point::GetGAIKA",
            "name": "GetGAIKA",
            "returns": 34,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Goto:int_int",
            "name": "Goto",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ToggleFD",
            "name": "ToggleFD",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Catch:Obj",
            "name": "Catch",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 11, "is_ptr": false}]
        }, {
            "id": "point::ClampToMap",
            "name": "ClampToMap",
            "returns": 6,
            "returns_ptr": false,
            "of": 6,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RemakeVis",
            "name": "RemakeVis",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "HeroStats",
            "name": "HeroStats",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "EqualHeroes",
            "name": "EqualHeroes",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_ui",
            "name": "_ui",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_di",
            "name": "_di",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_bi",
            "name": "_bi",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "_itools",
            "name": "_itools",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "StartPlayerScript:int_str",
            "name": "StartPlayerScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "StopPlayerScript:int_str",
            "name": "StopPlayerScript",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GetPlayerScriptsCount:int",
            "name": "GetPlayerScriptsCount",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GetPlayerScript:int_int",
            "name": "GetPlayerScript",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ShowAnnouncement:str_str",
            "name": "ShowAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "HideAnnouncement:str",
            "name": "HideAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "ShowAnnouncement:int_str_str",
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
            "id": "HideAnnouncement:int_str",
            "name": "HideAnnouncement",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SetPlayerStatus:int_int_str_bool",
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
            "id": "SetPlayerStatus:int_int_bool",
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
            "id": "ShowNotification:str_str_int_str_Obj",
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
            "id": "ShowHint:str_str_Obj",
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
            "id": "ShowTutorial:str_str_Obj",
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
            "id": "HideNotification:int",
            "name": "HideNotification",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "TutorialActive",
            "name": "TutorialActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "HintsActive",
            "name": "HintsActive",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "EnableHintsAndTutorials",
            "name": "EnableHintsAndTutorials",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "DisableHintsAndTutorials",
            "name": "DisableHintsAndTutorials",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "AreHintsAndTutorialsEnabled",
            "name": "AreHintsAndTutorialsEnabled",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::MistAction:int",
            "name": "MistAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Obj::MagicActionEnd",
            "name": "MagicActionEnd",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Obj::CoverOfMercyAction",
            "name": "CoverOfMercyAction",
            "returns": 0,
            "returns_ptr": false,
            "of": 11,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "Building::GetDefenderCls:int",
            "name": "GetDefenderCls",
            "returns": 5,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::GetDefendersMax:int",
            "name": "GetDefendersMax",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::GetDefendersOut:int",
            "name": "GetDefendersOut",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::GetStartLevel:int",
            "name": "GetStartLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::GetEndLevel:int",
            "name": "GetEndLevel",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Building::GetOutpostFood",
            "name": "GetOutpostFood",
            "returns": 1,
            "returns_ptr": false,
            "of": 14,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "PrintMsg:int_str",
            "name": "PrintMsg",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "_cr",
            "name": "_cr",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GetTerritoryState:str",
            "name": "GetTerritoryState",
            "returns": 1,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "SetTerritoryState:str_int",
            "name": "SetTerritoryState",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "ConquestBonus",
            "name": "ConquestBonus",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "FormDescription:str",
            "name": "FormDescription",
            "returns": 5,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 5, "is_ptr": false}]
        }, {
            "id": "GAIKA::SetControlFlag:int_bool",
            "name": "SetControlFlag",
            "returns": 0,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "GAIKA::GetControlFlag:int",
            "name": "GetControlFlag",
            "returns": 2,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "GAIKA::ControlledNeighbors:int",
            "name": "ControlledNeighbors",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Unit::SetFreedom:bool",
            "name": "SetFreedom",
            "returns": 0,
            "returns_ptr": false,
            "of": 13,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 2, "is_ptr": false}]
        }, {
            "id": "EndGame:int_bool_str",
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
            "id": "Hero::IsArmyOutside",
            "name": "IsArmyOutside",
            "returns": 2,
            "returns_ptr": false,
            "of": 15,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "RandomPathCast",
            "name": "RandomPathCast",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "DiplAreAllied:int_int",
            "name": "DiplAreAllied",
            "returns": 2,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Squad::GetLastAttacker",
            "name": "GetLastAttacker",
            "returns": 11,
            "returns_ptr": false,
            "of": 33,
            "of_ptr": false,
            "type": "method",
            "params": []
        }, {
            "id": "GAIKA::ApproachingSquads:int_int",
            "name": "ApproachingSquads",
            "returns": 1,
            "returns_ptr": false,
            "of": 34,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}, {"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "SetUseCount:int",
            "name": "SetUseCount",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "Item::SetUseCount:int",
            "name": "SetUseCount",
            "returns": 0,
            "returns_ptr": false,
            "of": 12,
            "of_ptr": false,
            "type": "method",
            "params": [{"name": "number", "type": 1, "is_ptr": false}]
        }, {
            "id": "WaitForMapChange",
            "name": "WaitForMapChange",
            "returns": 0,
            "returns_ptr": false,
            "of": null,
            "of_ptr": false,
            "type": "method",
            "params": []
        }]
    }
})();
