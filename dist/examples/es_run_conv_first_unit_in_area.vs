// Example: Conversación al entrar en un área
// Description: Ejecutar una conversación cuándo una unidad del jugador 1 entra en un área
// Lang: es
// Tags: Conversación, Área, Actor, Query
// Author: David Campos R.

// Para probar este ejemplo necesitarás:
//   - Una conversación con nombre de scripts "C_MiConversacion"
//     - Uno de los roles en la conversación debe ser "RecienLlegado"
//   - Un área de nombre "A_Area"

// Variables que utilizaremos
Conversation conv; // para guardar la conversación y poder asignarle el actor
Unit u;            // para guardar la unidad que tomará el papel de "RecienLlegado"

// Esperamos a que entre alguna unidad del jugador 1 en el área
WaitUnitsInArea(ClassPlayerObjs(cUnit, 1), "A_Area", -1);

// Guardamos la primera unidad que ha entrado en la variable u
u = ClassPlayerAreaObjs(cUnit, 1, "A_Area").GetObjList()[0].AsUnit();

// Iniciamos la conversación, asignamos u como actor y lanzamos la conversación
conv.Init("C_MiConversacion");
conv.SetActor("RecienLlegado", u);
conv.Run();
