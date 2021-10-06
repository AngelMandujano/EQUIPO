var posicion = prompt("ingresa la posicion de la clasificacion ejemplo (clasifiacion1)");
var clasificacion1 = ["1 Ana","2 Oswaldo", "3 Raul","4 Celia","5 Maria","6 Antonio"];
var clasificacion2= ["1 Marta","2 Ana","3 Roberto","4 Amaya","5 Oswaldo","6 Celia","7 Raul","8 Maria"];


switch(posicion){
    case "clasificacion1":
        console.log(clasificacion1);
        break;
    case "clasificacion2":
        console.log(clasificacion2);
        break;
}