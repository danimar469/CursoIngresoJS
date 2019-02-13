function mostrar()
{
//tomo la edad  
    var edad;

    edad =document.getElementById("edad").value;
    resultado= "es mayor de edad"; 
    
    if(edad > 18) {
        alert("mayor de edad: " );
    } 
    else
        if(edad >=13 && edad <=17 ) {
            alert("adolescente" ); 
        }
        else
            if(edad <13)   {
                alert ("niño")
            }
        
    

}//FIN DE LA FUNCIÓN