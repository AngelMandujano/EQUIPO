

var i=5;
while(i <=100){
    console.log(i);
    i=i+5;
}
var seleccion = prompt("escribe con letra un multiplo del 5 al 30");

var cinco ={
    "musica electronica":{
        "armin vanburen":["blah blah blah", "hold on", "this is what", "hoe het danstsirius", "tell me wy"],
        "tiesto":["the busines", "wow", "elements", " ritual", "lose you"],
        "iker azcue":["back to you", "let you go", "yes papi yes", "trouble kids", "una luz"],
        "steve aoki":["pursuit of happiness", "mic drop", "waste it on me", "just hold on","losing my religion"],
        "carl cox":["i whant you","we are one", "finder","inferno", "fuori"]

    },

}
var diez={
    "pop":{
        "dua lipa ":["Break My Heart", "Don't Start Now", "IDGAF","One Kiss","New Rules"],
        "billi elish":["BAD GUY", "LOVELY", "BURY A FRIEND", "ALL THE GOOD GIRLS GO TO HELL", "EVERYTHING I WANTED"],
        "beyonce":["Single Ladies", "Listen. Sí", " Run the World", "Formation", "Crazy in Love"],
        "michael jackson":["Thriller", " Billie Jean", "Don't stop til get enough", "Beat it", "Man in the mirror"],
        "harry styles":["Watermelon Sugar", "Adore You", "Falling", "Golden", "Sign of the Times"]

    },

}
var quince  ={
    "banda":{
        "banda el recodo":["Acabame de Matar", "Desde el Cielo", "Lo Mejor de Mi Vída", "Pena Tras Pena", "Como el Primer Día"],
        "banda ms":["El Color de tus ojos", "Tu postura", "Me vas a extrañar", "Hablame de ti", "El Patron"],
        "la arrolladora banda el limon":["SI TU AMOR NO VUELVE", " EL FINAL DE NUESTRA HISTORIA", "EL RUIDO DE TUS ZAPATOS", " LA LLAMADA DE MI EX", "bonita"],
        "calibre 50":["Aguaje Activado", "El Infiernito", "Ajustes Inzunza", "Renovar o Morir", "El Niño "],
        "gerardo ortiz":["Historia de Ayer", "Para Qué Lastimarme", "El Aroma de Tu Piel", "Por Qué Terminamos", "Eres Una Niña"]
    },

}
var Veinte   ={
    "mariachi":{
        "vicente fernandez":["Aca Entre Nos", "Hermoso Cariño", "Mujeres Divinas", "Un Millon De Primaveras", "Estos Celos"],
        "antonio aguilar":["Yo el Aventurero", "La Cama de Piedra", "El Chivo", "Alma de Acero", "Laguna de Pesares"],
        "javier solis":["Llorarás, Llorarás", "Cataclismo", "Contarás Conmigo", "Mujer", "Gema"],
        "jose alfredo jimenes":["Si nos dejan", "Te solté la rienda", "Serenata Huasteca", "La media vuelta", "Amanecí entre tus brazos"],
        "luis miguel":["México en la piel", "Sabes una cosa", "La Bikina", "La media vuelta", "Que seas feliz"]

    },

}
var Veinticinco  ={
    "reggaeton":{
        "anuel":["Hasta Que Dios Diga", "Por Mi Reggae Muero", "Keii", "Don Don", "La Jeepeta"],
        "nengo flow":["la profecia", "cuando me dira", "ocean drive", "que malo", "burberry"],
        "bad bunny":["si estuviecemos juntos", "si veo a tu mama", "safaera", "bichillal", "yo perreo sola"],
        "don omar":["Pobre Diabla", " Angelito", " Virtual Diva", " Conteo", "Dale Don Dale"],
        "wisin y yandel":["Rakata", " Mírala bien", " Pam Pam", "En la disco bailoteo", "Pegao"]

    },

}
var treinta ={
    "salsa":{
        "hector lavoe":["Hacha y machete", "Timbalero", "Calle Luna Calle Sol", "Todo tiene su final", "Songoro Cosongo"],
        "marc anthony":["Hasta ayer", "Y hubo alguien", "Te conozco bien", "Celos y Envidia", "No me conoces"],
        "willie colon":["Gitana", "El gran varón", "Idilio", "Talento de televisión", "La Murga"],
        "celia cruz ":["La negra tiene tumbao", "La vida es un carnaval", "Te busco ", "Que le den candela ", "Vasos vacíos"],
        "oscar d'leon":["La Vela", "Divina Niña", "Taboga", "Juancito Trucupey", "El frutero"]
    },

}





 switch(seleccion){
        case "cinco":
            console.log(cinco);
            break;
         case "diez":
            console.log(diez);
            break;
        case "quince":
             console.log(quince);
             break;
        case "beinte":
            console.log(beinte);
            break;
         case "beinticinco":
            console.log(beinticinco);
            break;
         case "treinta":
            console.log(treinta);
            break;
    }
