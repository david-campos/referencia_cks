// Example: Efecto de hoguera
// Description: Crea un efecto de iluminación "realista" de una hoguera
// Lang: es
// Tags: Área, Efecto
// Author: David Campos R.

// Nota: Este script es bastante intenso computacionalmente,
//   está pensado más como un efecto curioso que para usar
//   directamente en un mapa (aunque puede ser adaptado).

// Para usar este ejemplo necesitarás colocar una hoguera sin llamas,
// y un área circular que cubra únicamente el interior de la hoguera
// (se colocarán las llamas en esta área).

ObjList ol;
IntArray r, target; // r = radio actual para cada llama, target = radio objetivo para cada llama
int i, total_llamas, llamas_actualizadas, radio, variacion;
str area;

/////////////////////////////////////////////////
/* Parámetros del script                       */
/* cambiar aquí para ajustar el comportamiento */
area = "fire";
total_llamas = 10;
llamas_actualizadas = 3;
radio = 300;
variacion = 50;
/////////////////////////////////////////////////

Sleep(500);

if (total_llamas <= 0 || llamas_actualizadas <= 0 || radio < 100) {
    pr("ERROR: Número de llamas inválido o radio demasiado pequeño.");
    return;
}

// Añade las llamas en la hoguera
for (i = 0; i < total_llamas; i += 1) {
    ol.Add(Place(cFlame, GetRandomPointInArea(area), 1));
}

// Las llamas actualizadas pertenecerán al jugador 1 y tendrán un radio de visión
for (i = 0; i < llamas_actualizadas; i += 1) {
    ol[i].SetPlayer(1);
    r[i] = radio;       // El radio actual es radio
    target[i] = r[i];   // El radio objetivo es el actual
    ol[i].SetSight(r[i]);
}

// Bucle infinito, podría ejecutarse solo hasta que se dé cierta condición
while(1) {
    // 60 = 16 actualizaciones por segundo
    // Aumentar este valor mejora la eficiencia
    Sleep(60);
    for (i = 0; i < llamas_actualizadas; i += 1) {
        // Si el radio actual es el radio objetivo o por causas aleatorias,
        // cambiar radio objetivo
        if ( r[i] == target[i] || rand(100) < 10)
            target[i] = rand(variacion) - (variacion / 2) + radio;

        if (target[i] > r[i]) r[i] += 1;          // Si el radio objetivo es mayor que el actual, aumentar en 1 el radio,
        else r[i] -= MIN(2, r[i] - target[i]);    // en caso contrario, reducirlo en 2 puntos, o 1 ó 0 si sólo falta 1 ó 0

        // Actualizar el radio de visión según el valor de r[i]
        ol[i].SetSight(r[i]);
    }
}
