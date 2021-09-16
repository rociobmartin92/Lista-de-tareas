
var boton = document.getElementById("boton");
var caja = document.getElementById("caja");
var lista = document.getElementById("lista");


// FUNCIONES

     // Función agregar tarea:

var agregarTarea = function(){
    
    var texto = caja.value;
 
     if (texto === "") {
         caja.setAttribute("placeholder" , "Escriba una tarea por favor");
         caja.className = "ColorPlaceholder";
         return false;
     }
    var nuevoli = document.createElement("li");  // 
 var contenido = document.createTextNode(texto);  // 
 nuevoli.appendChild(contenido);   // 
 lista.appendChild(nuevoli);  // 
 nuevoli.className = "tareas";    

 
// Eliminar Tarea  : 
    nuevoli.addEventListener("click",eliminarTarea);

}


    // Comprobar caja vacía

var comprobarCaja = function(){
    texto = caja.value;
    if( texto === "") {       
    } else 
   this.value ="";  
   }
      // Función liminar tarea

var eliminarTarea = function(){

    this.parentNode.removeChild(this);

}

// EVENTOS

// Agregar Tarea

boton.addEventListener("click", agregarTarea);




// Comprobar Caja

caja.addEventListener("click", comprobarCaja);




