


function resumen()

{
    let nombre =document.getElementById("nombre");
    let apellido =document.getElementById("apellido");
    let correo =document.getElementById("correo");

    
    let ticket=200 
    let totalPagar=(cantidadEntradas.value)*ticket    

cantidadtickets=document.getElementById("cantidadEntradas").value;


var select =document.getElementById("categorias");
var valorSeleccionado =select.options[select.selectedIndex].value;

resultado=0;

switch (valorSeleccionado=parseInt(valorSeleccionado))

{
    case 1:
        resultado=totalPagar=totalPagar
        break;
    case 2:
        resultado=totalPagar-(totalPagar*80)/100
        break;
    case 3:
        resultado=totalPagar-(totalPagar*50)/100 
        break;
    case 4:
        resultado=totalPagar-(totalPagar*15)/100
        break;
}

document.getElementById("totalPagar").value=resultado;



}

function borrar()
{
     

}

borrar.addEventListener("click", reset);




    