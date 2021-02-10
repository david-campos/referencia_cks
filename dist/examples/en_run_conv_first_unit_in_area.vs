// Example: Conversation when entering an area
// Description: Execute a conversation whenever a unit of player 1 enters an area
// Lang: en
// Tags: Conversation, Area, Actor, Query
// Author: David Campos R.

// To test this example you will need:
//   - A conversation with the scripting name "C_MyConversation"
//     - One of the roles in the conversation must be "Foreigner"
//   - An area with name "A_Area"

// Variables we will use
Conversation conv; // to save the conversation and assign it the actor
Unit u;            // to save the unit which will play the "Foreigner" role

// We wait for a unit from player 1 to enter the area
WaitUnitsInArea(ClassPlayerObjs(cUnit, 1), "A_Area", -1);

// We save the first unit of the ones which entered into the variable "u"
u = ClassPlayerAreaObjs(cUnit, 1, "A_Area").GetObjList()[0].AsUnit();

// We initiate the conv variable, set the actor "Foreigner" and run the conversation
conv.Init("C_MyConversation");
conv.SetActor("Foreigner", u);
conv.Run();
