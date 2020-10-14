let letsPlay = () => {

    const correctAnswer = 'Ada Lovelace';
    let trys = 4;
    let correct = false;
    let answer;
    
        while (trys > 0 && correct != true) {
            trys--;
            answer = prompt(" Sin mi, el mundo de la programación no sería lo mismo de hoy en día \n Ingrese la respuesta");
            if (answer === correctAnswer) {
                alert( `Felicidades, entraste al sorteo!`);
                correct = true;
            } else if (trys == 3) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: mi primer nombre empieza con A y termina con A`);
            } else if (trys == 2) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Soy una de las personas mas importantes en la historia de la informática \n Ingrese la nueva respuesta:`);
            } else if (trys == 1) {
                alert(`Incorrecto, te queda ${trys} intento, pista: Fuí la primera programadora en el mundo  \n Ingrese la nueva respuesta`);
            } else if (trys == 0) {
               alert(`Perdiste! JAJAJAJA te quedaste afuera del sorteo, la respuesta correcta era ${correctAnswer}`);
            }
        }        
    }