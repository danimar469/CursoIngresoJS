function mostrar()
{
//tomo la edad  
var mes
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño){
    
        case "Febrero": 
            alert("este mes no tiene mas d 28 dias ");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":  
        case "nobiembre":   
            alert("este mes tiene 30 o màs dìas");
            break;
        case "Enero":
        case "Marzo": 
        case "Mayo":  
        case "Julio":
        case "agosto":    
        case "Octubre":
        case "Diciembre":
            alert("este mes tiene 31 o màs dìas");
            break;    
            default:
    }
	
	



}//FIN DE LA FUNCIÓN