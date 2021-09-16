"use strict";

var boton = document.getElementById("boton");
var caja = document.getElementById("caja");
var lista = document.getElementById("lista"); // FUNCIONES
// Función agregar tarea:

var agregarTarea = function () {
  var texto = caja.value;

  if (texto === "") {
    caja.setAttribute("placeholder", "Escriba una tarea por favor");
    caja.className = "ColorPlaceholder";
    return false;
  }

  var nuevoli = document.createElement("li"); // 

  var contenido = document.createTextNode(texto); // 

  nuevoli.appendChild(contenido); // 

  lista.appendChild(nuevoli); // 

  nuevoli.className = "tareas"; // Eliminar Tarea  : 

  nuevoli.addEventListener("click", eliminarTarea);
}; // Comprobar caja vacía
