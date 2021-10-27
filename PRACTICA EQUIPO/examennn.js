var alumnos = [];
var inicio = prompt("CANTIDAD DE ALUMNOS A INGRESAR");
for (var i = 1; i <=inicio; i++){
    datos(i);
}

function datos(i){
    let nombre = prompt("INGRESA EL NOMBRE DEL ALUMNO");
    let matricula = prompt("INGRESA LA MATRICULA DEL ALUMNO");
    let grupo =prompt("INGRESA EL GRUPO DEL ALUMNO");
    let sexo =prompt("INGRESA EL SEXO DEL ALUMNO: (M) (F)");
    let calificacion =prompt("INGRESA LA CALIFICACION");
    var alumno = {
        nombre:nombre,
        matricula:matricula,
        grupo:grupo,
        sexo:sexo,
        calificacion:calificacion
    }
    alumnos.push(alumno); //  Insertar alumno a alumnos
}
var op = prompt("Ingresa la operación que quieres realizar");
switch(op){
    case "1":
        sumaralumnos(alumnos);
    break;
    case "2":
        sumarGeneros(alumnos);
    break;
    case "3":
    mediaCalificaciones(alumnos);
    break;
    case "4":
    let matricula = prompt("Ingrese la matricula del alumno");
                    for(let i = 0; i < alumnos.length; i++){
                        if(alumnos[i].matricula == matricula){
                            alert("Nombre: "+alumnos[i].nombre+"\nMatricula: "+alumnos[i].matricula+"\nCalificacion: "+alumnos[i].calificacion+"\nSexo: "+alumnos[i].sexo+"\nGrupo: "+alumnos[i].grupo);
                        }
                    }
    break;
    case "5":
                    let conjunto = [];
                    let nAlumnos = prompt("Ingrese la cantidad de alumnos");
                    for(let i = 0; i < nAlumnos; i++){
                        let matricula = prompt("Ingrese la matricula del alumno");
                        for(let j = 0; j < alumnos.length; j++){
                            if(alumnos[j].matricula == matricula){
                                conjunto.push(alumnos[j]);
                            }
                        }
                    }   
                    sumaralumnos(conjunto);
                    sumarGeneros(conjunto);
                    mediaCalificaciones(conjunto);
                break;
                case "6":
                mostrarGrupo(alumnos);
                break;
}

function sumaralumnos(elementos){    
    console.log(elementos.length);
}

function sumarGeneros(elementos){
    let sumaHombres = 0;
    let sumaMujeres = 0;

    for(let i = 0; i < elementos.length; i++){        
        if(elementos[i].sexo == "M"){
            sumaHombres = sumaHombres +1;
        }else{
            sumaMujeres = sumaMujeres +1;
        }
    }

    alert("Hombres: "+sumaHombres+" Mujeres: "+sumaMujeres);

}
function mediaCalificaciones(elementos){
          let suma = 0;
          for(let i = 0; i < elementos.length; i++){
              suma += parseInt(elementos[i].calificacion);
          }
          alert("Media de calificaciones: "+suma/elementos.length);
        }
        

        function ni(){            
            // let alumno = {
            //     "nombre" : $("#nombre").val(),
            //     "matricula" : $("#matricula").val(),
            //     "calificacion" : $("#calificacion").val(),
            //     "sexo" : $("#sexo").val(),
            //     "grupo" : $("#grupo").val()
            // }; 

            let existe = false;
            for(let i = 0; i < grupos.length; i++){
                if(grupos[i] == $("#grupo").val()){
                    existe = true;
                }
            }
            if(existe == false){
                grupos.push($("#grupo").val());
            }

            function mostrarGrupo(elementos){          
          let gruposActuales = "";
          for(let i = 0; i < grupos.length; i++){
            gruposActuales += grupos[i]+"\n";
          }
          alert("Grupos actuales: \n"+gruposActuales);
          var eleccion = prompt("Ingrese el grupo que desea mostrar");
          let grupo = [];
          for(let i = 0; i < elementos.length; i++){
            if(elementos[i].grupo == eleccion){
              grupo.push(elementos[i]);
            }
          }
          for(let i = 0; i < grupo.length; i++){
            alert("Nombre: "+grupo[i].nombre+"\nMatricula: "+grupo[i].matricula+"\nCalificacion: "+grupo[i].calificacion+"\nSexo: "+grupo[i].sexo+"\nGrupo: "+grupo[i].grupo);
          }
        }
    };

