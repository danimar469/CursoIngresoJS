function mostrar()
{
//tomo la edad  
var mes;
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    
        case "Enero": 
        case "Febrero":   
        case "Marzo": 
        case "Abril":
        case "Mayo":     
        case "Junio":
            alert ("falta para el invierno: ");
            break;
        case "Julio":
        case "agosto": 
            alert ("abrigate que hace frio: ");
            break;
        case "Septiembre":   
        case "Octubre":
        case "nobiembre":    
        case "Diciembre":
            alert ("ya pasamos el frio, ahora calor: ");
            break;
        }



}//FIN DE LA FUNCIÓN