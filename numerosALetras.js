var palabra =prompt("ingresa un numero o un numero escrito. ejemplo: 1");
var nueva =verificarPalabra(palabra);

function verificarPalabra(palabras){
    let nuevaPalabra = "";
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    let letrass =  ["CERO","UNO","DOS","TRES","CUATRO","CINCO","SEIS","CIETE","OCHO","NUEVE"];

   for(let i = 0; i < palabras.length; i++){
       for(let j = 0; j < letrass.length; j++){
           if ( palabras[i] == numeros[j]){
               nuevaPalabra += letrass[j];
           }
          
           if (palabras[i] == letrass[j]){
               nuevaPalabra += numeros[j];
            //    console.log(nuevaPalabra);
         }
       }
   }
   return nuevaPalabra;
}

console.log(nueva);

//letras
var letrasa = prompt("escribe un numero: EJEMPLO (UNO)");
if (letrasa == "CERO"){
   console.log("0");

}
if (letrasa == "UNO"){
   console.log("1");

}
if (letrasa == "DOS"){
   console.log("2");

}
if (letrasa == "TRES"){
   console.log("3");

}
if (letrasa == "CUATRO"){
   console.log("4");

}
if (letrasa == "CINCO"){
   console.log("5");

}
if (letrasa == "SEIS"){
   console.log("6");

}
if (letrasa == "SIETE"){
   console.log("0");

}
if (letrasa == "OCHO"){
   console.log("8");

}
if (letrasa == "NUEVE"){
   console.log("9");

}