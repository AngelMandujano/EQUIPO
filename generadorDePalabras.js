//generar n palabras de n tamaño segun el usuario ingrese el numero
var numeroDePalabras = parseInt(prompt("Ingrese el numero de palabras que desea generar"));
var abece = ["a","b","m","c","m","d","e","f","g","h","i","j","k","l"];

palabras();
function palabras(){
    for(let i = 0; i<=numeroDePalabras; i++){
        let letras= "";
        for(let j= 0; j<= i; j++){
            let aletorio = Math.floor(Math.random() * abece.length);
            letras += abece[aletorio];
        }
        console.log(letras);

    }
}