


var genero = prompt("ingresa el genero de la pelicula");
var pelicula = ["ciencia ficcion","romance", "terror", "animadas", "comedia", "documentales"];
//console.log (pelicula);
var ciencia  = ["alicia en el pais de las maravillas", "avegers", "harry potter","volver al futuro", "el senor de los anillos", "jurassic park"];
//console.log (ciencia );
var romance = ["stand de los besos","conoces a joe black", "la la land", "el diario de bridget jones","la boda de mi mejor amigo", "titanic"];

var terror = ["el conjuro", "el rito", "asi en la tierra como en el infierno","chuky","la noche del demonio"];

var animadas = ["coco","monster inc","sonic", "sotopia", "hotel transilvania"];

var comedia = [ "ese es mi hijo", "son como niños", "scary movie", "inactividad para normal","una loca pelicula de esparta", "donde estan las rubias"];

var documentales = ["la lista de schindler", "el nino de la pijama de rayas", "el baile de los 41", "jojo rabit", "el otro turismo"];

switch(genero){
    case "ciencia":
        console.log(ciencia);
        break;
    case "romance":
        console.log(romance);
        break;
    case "terror":
        console.log(terror);
        break;
    case "animadas":
        console.log(animadas);
        break;
    case "comedia":
        console.log(comedia);
        break;
    case "documentales":
         console.log(documentales);
         break;

}