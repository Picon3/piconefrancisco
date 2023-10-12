    //TODO EL CODIGO SE VISUALIZA EN LA CONSOLA


    
    //constructor de motos - marca /cilindradas/ precio
 
    const Moto = function(marca, cilindradas, kilometraje, precio){
        this.Marca = marca
        this.Cilindradas = cilindradas
        this.kilometraje = kilometraje
        this.Precio = precio
    }

    //crear productos           Marca-  CC  -   KM  -  PRECIO

    let moto1 = new Moto ("Yamaha Smash", 200, 1000, 2000)
    let moto2 = new Moto ("Kymco Scooter", 125, 2500, 1000)
    let moto3 = new Moto ("Kawasaky R1", 1000, 0, 11000)
    let moto4 = new Moto ("Gilera Scooter", 150, 500, 1500)
    let moto5 = new Moto ("Honda Flash", 150, 2000, 2500)
    let moto6 = new Moto ("Rouser TNT", 500, 500, 5500)

    // los ingreso en un array

    let array = [moto1,moto2,moto3,moto4,moto5,moto6]

    // creo funcion para buscar moto dentro del array, dentro de cada moto.. filtrer busca entre cada producto
     
    function buscarMoto(){
        
        let cliente = prompt("ingrese la moto que busca").toUpperCase()
        let resultado = array.filter((Moto)=> Moto.Marca.toUpperCase().includes(cliente))    //creo funcion flecha especificando que quiere buscar el cliente, moto, a traves de la marca.
        
    // verifico que el usuario haya ingresado bien la busqueda
        if(resultado.length > 0){
            console.table(resultado)    //salida del resultado console.tabla 
        }else{                          //si ingresa mal la busqueda se vuelve a ejecutar funcion buscarmoto
            alert("no se encontro " + cliente + " profavor volve a ingresar otra moto")
            buscarMoto()
            return;
        }
    }
    buscarMoto()


    
/*   
function calcularTotal() {  
}
    // Verificar que los valores sean válidos
    if(abono === efectivo) {
      resultado = motoPrecio  - (motoPrecio*10/100)
      alert(" el monto a pagar es: " + resultado)
      return;         
    }else if(abono === tarjeta && cuotas > 0){
        resultado =  motoPrecio/cuotas;          
        alert(" el monto a pagar es: " + motoPrecio + " en " + cuotas + " cuotas de " + resultado)
        if(cuotas <= 0){
            alert("porfavor ingrese en cuantas cuotas");
            return;
        }
    }    


//calcularTotal()*/