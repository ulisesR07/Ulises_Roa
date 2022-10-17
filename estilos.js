let nomUsu = prompt("Ingresa tu nombre");
alert("Hola " + nomUsu);

///////////////////////////////
let respuestaComprar = "no";
let carrito = 0;
let total = 0;
let subtotal = 0;
let respuestaSeguirConsultando = "no";
let precioTotal=0;

function calcularIva(precio) {
  return precio * 0.21;
}

const marcas = ["a","b","c"];
console.log (marcas);

/*************************/


const modelo = [
{
        codigo:"1",
        nombre:"Samsung S8",
        marca:"Samsung",
        precio: 40000,
},
{
        codigo:"2",
        nombre:"Samsung S7 Edge",
        marca:"Samsung",
        precio: 30000,
},
{
        codigo:"3",
        nombre:"Samsung S22 Ultra",
        marca:"Samsung",
        precio: 80000,
},
{
        codigo:"1",
        nombre:"Motorola G60",
        marca:"Motorola",
        precio: 35000,
},
{
        codigo:"2",
        nombre:"Motorola G6 Play",
        marca:"Motorola",
        precio: 40000,
},
{
        codigo:"3",
        nombre:"Motorola G100",
        marca:"Motorola",
        precio: 60000,
},
{
        codigo:"1",
        nombre:"Iphone 7 Plus",
        marca:"iphone",
        precio: 60000,
},
{
        codigo:"2",
        nombre:"Iphone 13",
        marca:"iphone",
        precio: 65000,
},
{
        codigo:"3",
        nombre:"Iphone XR",
        marca:"iphone",
        precio: 70000,
},
]; 



/*************************/


//Este ciclo lo repetirá hasta que el usuario decida seguir comprando
do {
  let marcaCel = prompt(
    nomUsu +
      "¿Qué marca de celular está buscando?. Elija una letra: a) Samsung, B) Motorola, C) Iphone"
  );
/**************************** */

posicion = marcas.indexOf(marcaCel);

if(posicion!=-1){
    alert("El celular se encuentra");

/***************************************** */


let nombreCel = 5;
  if (marcaCel == "a") {
    nombreCel = prompt(
      "Celulares en Stock, elija un numero:  1)Samsung S8, 2)Samsung S7 Edge, 3)Samsung S22 Ultra, 4)Samsung S10."
    );

    /******************************/
    
    const encontrado = modelo.find((mode) => mode.codigo == nombreCel);

      if (encontrado){
        alert (encontrado.codigo)

        if (nombreCel == 1) {
          respuestaComprar = prompt(
            "su precio es: $40000. ¿Desea comprarlo? si o no"
          );
          subtotal = 40000;
        } else if (nombreCel == 2) {
          respuestaComprar = prompt(
            "su precio es: $30000. ¿Desea comprarlo? si o no"
          );
          subtotal = 30000;
        } else if (nombreCel == 3) {
          respuestaComprar = prompt(
            "su precio es: $80000. ¿Desea comprarlo? si o no"
          );
          subtotal = 80000;
        } else {
          nombreCel = 5;
          subtotal = 0;
        }
        if (respuestaComprar == "si") {
          total = total + subtotal;
        }
        respuestaSeguirConsultando = prompt("¿Desea seguir consultando? si/no");
        if (respuestaSeguirConsultando == "no") {
          precioTotal = calcularIva(total);

alert("Su precio total con el IVA incluido es: " + (total + precioTotal));
          break;
        }


      }else{
        alert("no se encontro el modelo encontrado")
        break;
      }

    
    
    /******************************/


    


  }
///Comienza b) = Motorola

if (marcaCel == "b") {
    nombreCel = prompt(
      "Celulares en Stock, elija un numero:  1)Motorola G60.  2)Motorola G6 Play.  3)Motorola G100"
    );

    const encontrado = modelo.find((mode) => mode.codigo == nombreCel);
      if (encontrado){

        if (nombreCel == 1) {
          respuestaComprar = prompt(
            "su precio es: $35000. ¿Desea comprarlo? si o no"
          );
          subtotal = 35000;
        } else if (nombreCel == 2) {
          respuestaComprar = prompt(
            "su precio es: $40000. ¿Desea comprarlo? si o no"
          );
          subtotal = 40000;
        } else if (nombreCel == 3) {
          respuestaComprar = prompt(
            "su precio es: $60000. ¿Desea comprarlo? si o no"
          );
          subtotal = 60000;
        } else {
          nombreCel = 5;
          subtotal = 0;
        }
        if (respuestaComprar == "si") {
          total = total + subtotal;
        }
        respuestaSeguirConsultando = prompt("¿Desea seguir consultando? si/no");
        if (respuestaSeguirConsultando == "no") {
          precioTotal = calcularIva(total);

          alert("Su precio total con el IVA incluido es: " + (total + precioTotal));
          break;
        }


      }else{
        alert("no se encontro el modelo encontrado")
        break;
      }


    


  }

///finaliza b)

///Comienza C) = Iphone

if (marcaCel == "c") {
    nombreCel = prompt(
      "Celulares en Stock, elija un numero:  1)Iphone 7 Plus.  2)Iphone 13.  3)Iphone XR"
    );

    const encontrado = modelo.find((mode) => mode.codigo == nombreCel);
      if (encontrado){

        if (nombreCel == 1) {
          respuestaComprar = prompt(
            "su precio es: $60000. ¿Desea comprarlo? si o no"
          );
          subtotal = 60000;
        } else if (nombreCel == 2) {
          respuestaComprar = prompt(
            "su precio es: $65000. ¿Desea comprarlo? si o no"
          );
          subtotal = 65000;
        } else if (nombreCel == 3) {
          respuestaComprar = prompt(
            "su precio es: $70000. ¿Desea comprarlo? si o no"
          );
          subtotal = 70000;
        } else {
          nombreCel = 5;
          subtotal = 0;
        }
        if (respuestaComprar == "si") {
          total = total + subtotal;
        }
        respuestaSeguirConsultando = prompt("¿Desea seguir consultando? si/no");
        if (respuestaSeguirConsultando == "no") {
          precioTotal = calcularIva(total);

          alert("Su precio total con el IVA incluido es: " + (total + precioTotal));
          break;
        }


      }else{
        alert("no se encontro el modelo encontrado")
        break;
      }


    


  }






/***************************************** */ 


}else {
    alert("El celular no se encuentra");
}



/******************************* */       
  

  ///Finaliza C) = Iphone
} while (respuestaComprar === "si");



////////////////////////////////


