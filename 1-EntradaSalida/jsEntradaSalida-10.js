/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numero1;
    var resultado;
    numero1=parseInt(document.getElementById("importe").value);
    resultado = numero1*0,25;
    alert ("el resultado es: " - resultado);
}
