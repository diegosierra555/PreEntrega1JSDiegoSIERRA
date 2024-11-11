console.log("Entro al script de js") ;
// Aca comienza el codigo

let nombreVendedor = "";
let cantidadVendida = 0;
let ventasAcumulada = 0;
let cantidadVendedores = 0;

// Comienzo la entrada de datos pidiendo el primer registro
nombreVendedor = prompt("Ingrese el nombre del vendedor o FIN para terminar el calculo:");

// la comndicion de salida del bucle es que escriba FIN
while (nombreVendedor != "FIN")
{

    cantidadVendida = parseInt(prompt("Cantidad vendida por "+nombreVendedor+" :")) ;
    console.log(cantidadVendida);
    // controlo que sea una cantidad valida para sumar 
    if(cantidadVendida > 0)
    { 
        ventasAcumulada = ventasAcumulada + cantidadVendida;
        console.log(ventasAcumulada);
        cantidadVendedores++;
        }
    else
    {
        alert("Debe ser mayor a cero")
        }

    nombreVendedor = prompt("Ingrese el nombre del vendedor o FIN para terminar el calculo:");
    console.log(nombreVendedor);

}    

alert("La cantidad total fue " + ventasAcumulada + " entre " + cantidadVendedores + " vendedores." ) ;
     