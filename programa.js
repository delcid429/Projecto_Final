// Variables ?tiles
// Precio base de la cotizaci?n, en quetzales, lo puede cambiar
var precio_base = 2000;

// Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

// Recargo
var recargo = 0;
var recargo_total = 0;

// Precio final
var precio_final = 0;

// Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("?Cuantos a?os tiene? Ingrese solamente n?meros ");

var casado = prompt("?Est? casado actualmente?");
// Comprobamos la edad del c?nyuge, solamente si se est? casado/a
var edad_conyuge;
if (casado.toUpperCase() === "SI") {
  edad_conyuge = prompt("?Qu? edad tiene su esposo/a?");
}
// Convirtiendo las edades ingresadas a n?meros
var edad_numero = parseInt(edad);
var edad_conyuge_numero = 0;
// Convirtiendo la edad del c?nyuge si se est? casado/a
if (casado.toUpperCase() === "SI") {
  edad_conyuge_numero = parseInt(edad_conyuge);
}

var hijos = prompt("?Tiene hijos o hijas?");
// Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos;
/**
 * 1. convierta la cantidad de hijos a n?mero
 */
if (hijos.toUpperCase() === "SI") {
  cantidad_hijos = prompt("?Cu?ntos hijos tiene?");
}

// Aqu? debe calcular el recargo total basado en las respuestas ingresadas

// Aqu? es donde debe calcular los recargos y el valor final
// Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado
if (edad_numero >= 18 && edad_numero < 25) {
  // Calculamos el recargo en base a la edad
  recargo = precio_base * edad_18;
  // Sumamos todos los recargos que hemos obtenido
  recargo_total += recargo;
} else if (edad_numero >= 25 && edad_numero < 50) {
  recargo = precio_base * edad_25;
  recargo_total += recargo;
} else if (edad_numero >= 50) {
  recargo = precio_base * edad_50;
  recargo_total += recargo;
}

/**
 * 2. Recargo por la edad del conyuge
 */
if (casado.toUpperCase() === "SI") {
  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo = precio_base * casado_18;
    recargo_total += recargo;
  } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    recargo = precio_base * casado_25;
    recargo_total += recargo;
  } else if (edad_conyuge_numero >= 50) {
    recargo = precio_base * casado_50;
    recargo_total += recargo;
  }
}

/**
 * 3. Recargo por la cantidad de hijos
 */
if (hijos.toUpperCase() === "SI") {
  recargo_total += precio_base * hijos_recargo * parseInt(cantidad_hijos);
}

precio_final = precio_base + recargo_total;

// Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total ser? de: " + recargo_total);
alert("El precio ser? de: " + precio_final);