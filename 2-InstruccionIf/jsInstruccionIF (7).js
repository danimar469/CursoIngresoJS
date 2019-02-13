function mostrar()
{
//tomo la edad  
var edad;
var eCivil;
var resultado;

    edad =document.getElementById("edad").value;
    eCivil =document.getElementById("estadoCivil").value;
    resultado="es muy pequeño para no ser soltero";

    if (edad <18 && eCivil != "soltero") {
        alert("es muy pequeño para NO ser soltero")
    }

	


}//FIN DE LA FUNCIÓN