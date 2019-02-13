function mostrar()
{
//tomo la edad 
var mes; 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño){
    
        case "Febrero": 
            alert("este mes no tiene mas d 29 dias ");
            break;
        case "Enero":
        case "Marzo": 
        case "Abril":
        case "Mayo":     
        case "Junio":
        case "Julio":
        case "agosto":   
        case "Septiembre":   
        case "Octubre":
        case "nobiembre":    
        case "Diciembre":
            alert("este mes tiene 30 o màs dìas");
            break;    
            default:
    }

}//FIN DE LA FUNCIÓN