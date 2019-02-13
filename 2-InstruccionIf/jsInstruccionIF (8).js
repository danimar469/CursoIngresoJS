function mostrar()
{
//tomo la edad  
var edad;
var eCivil;
var resultado;

    edad =document.getElementById("edad").value;
    eCivil =document.getElementById("estadoCivil").value;
    resultado="es soltero y no es menor de edad";

    if (eCivil =="soltero" && edad <=18) {
        alert("es soltero y nos menor de edad")
    }

	


}//FIN DE LA FUNCIÓN