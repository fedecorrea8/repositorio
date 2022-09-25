/* Constructor */
class Producto{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    mostrarInformacion(){
        return `Producto: ${this.nombre}, precio: ${this.precio}`;
    }

    getProducto(){
        return this.marca; 
    }

    getPrecio(){
        return `$ ${this.precio}`;
    }
}

/* creo array e incorporo objetos */

let catalogo = new Array();

catalogo.push(new Producto("Coca-cola", 320,"./img/logoCoca.png"));
catalogo.push(new Producto("Sprite", 320, "./img/logoSprite.png"));
catalogo.push(new Producto("Fanta", 320, "./img/logoFanta.png"));
catalogo.push(new Producto("Pepsi", 300, "./img/logoPepsi"));
catalogo.push (new Producto("Seven Up", 300, "./img/logoSevenup-png"));
catalogo.push (new Producto("Monster", 290, "./img/logoMonster.png"));

/* Dom - creación de cards */

let contenedor = document.getElementById("contenedor");
mostrarCards()

/* Función que recorre el arreglo */

function mostrarCards(){
    for(let i=0; i<= catalogo.length; i++){
        let objProducto =  catalogo[i];
        crearCaja(objProducto);
    }
}
        
  