/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero1;
    var numero2;
    var resultado;

    numero1 = parseInt(document.getElementById("sueldo").value);
    numero2 = parseInt(document.getElementById("resultado").value);
    
    resultado = numero1 * 1.1;
    alert ("el importe con el aumento del 10% es: " + resultado);
	
}
