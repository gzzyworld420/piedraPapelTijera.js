/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */

// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


// // // creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
// const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien. SI
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates. SI 
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.

function iniciarJuego(){
    // declaramos la variable
    let nombre; 
    // saludo y soliicito el nombre
    alert ("Bienvenido al piedra papel o tijera de Frontend II."); // saludo

    // bucle do while
    do { 
        nombre = prompt ("Escriba su nombre de usuario"); // Pedimos el nombre al user
    } while (nombre === null || nombre.length < 3); // Validamos que el nombre no sea nulo y que tenga mas de 3 caracteres
        
// convierte el nombre a mayusculas y lo guarda en una variable con el objetivo de mostrarlo por consola
let nombreMayusculas = nombre.toUpperCase(); // Pasamos el nombre a mayusculas

//guardamos en una variable el nombre del jugador
alert(`Bienvenido ${nombreMayusculas}!, vamos a comenzar!`); // saludamos al jugador

// mostramos los datos por consola
console.log(`El nombre del jugador es: ${nombreMayusculas}`); // mostramos el nombre del jugador por consola

return nombreMayusculas; // retornamos el nombre del jugador para poder usarlo en el resto del programa

}

iniciarJuego();


const RESULTADOS_POSIBLES = [
    "¡Genial, Ganaste!",
    "Esto fue un empate",
    "¡Una lástima😪 Perdiste!",
    ];

    // 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
    let puntajes = {
    usuario: 0,
    computadora: 0,
    empates: 0, // 👈 agregamos esta propiedad con el fin de contar los empates (Mesa de trabajo)


    }; // mientras ninguno haya llegado a 2 puntos seguimos jugando

    function jugadaRandom (min, max) {
    let numero = parseInt(Math.random() * (max - min) + min);

    return numero;
    }

    function pedirJugada () {
    let eleccionUsuario = 0;

    do {
        eleccionUsuario = parseInt(
        prompt(`Ingrese una jugada:  
            1 - Piedra 🪨
            2 - Papel 📄
            3 - Tijera ✂️`)
        );

    } while (
        isNaN(eleccionUsuario) ||
        eleccionUsuario < 1 ||
        eleccionUsuario > 3

    );

    return eleccionUsuario;

    }

    function compararJugadas (jugador, maquina) {
    let resultado = 0;

    // cuando empata
    if (jugador === maquina) {
        resultado = 1;

    //  cuando pierdo y gana la máquina
    } else if (
        (jugador === 1 && maquina === 2) ||
        (jugador === 2 && maquina === 3) ||
        (jugador === 3 && maquina === 1)
    ) {
        resultado = 2;
    } 

    return resultado;
    }

    function calcularPuntaje (){

        let contador = 0;

        while (puntajes.usuario < 2 && puntajes.computadora < 2) {
            const maquina = jugadaRandom(1, 3);
            const jugador = pedirJugada();

            const resultadoDePartida = compararJugadas(jugador, maquina);

            //   alert(resultadoDePartida);

            //   console.log(resultadoDePartida);

            if (resultadoDePartida === 0) {
            puntajes.usuario++;
            } else if (resultadoDePartida === 2) {
            puntajes.computadora++;
            }
            else {
                puntajes.empates++;
            }

            contador++;

            console.clear();
            console.table(puntajes);
            alert(`Resultado de la partida: ${RESULTADOS_POSIBLES[resultadoDePartida]}`);}

            alert(`Partidas jugadas: ${contador}
            Partidas ganadas: ${puntajes.usuario}
            Partidas perdidas: ${puntajes.computadora}
            Partidas empatadas: ${puntajes.empates}
            Ganador: ${puntajes.usuario > puntajes.computadora ?  "Usuario" : "Computadora"}`);

            document.write(`Partidas jugadas: ${contador} <br>
            Partidas ganadas: ${puntajes.usuario} <br>
            Partidas perdidas: ${puntajes.computadora} <br>
            Partidas empatadas: ${puntajes.empates} <br>
            Ganador: ${puntajes.usuario > puntajes.computadora ?  "Usuario" : "Computadora"}
            `);
            
    }

calcularPuntaje();










