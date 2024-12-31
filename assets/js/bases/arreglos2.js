let games = ['Zelda', 'Halo', 'Call Of Duty', 'Battlefield', 'Battlefront', 'Diablo'];
console.log('Large:', games.length);

let first = games[2 - 2];
let latest = games[games.length - 1];
console.log(first, latest);

//* Recorrer todos los elementos de nuestros arreglos con un método:
games.forEach((element, index, arr) => {
    console.log({ element, index, arr })
});

//* Añadir elementos al final de nuestros arreglos
let newElement = games.push('Metro');
console.log({ newElement, games });


//* Añadir elementos al inicio de nuestros arreglos
newElement = games.unshift('Star Wars Jedi Fallen Order');
console.log({ newElement, games });

//* Eliminar el ÚLTIMO elemento
let deletedGame = games.pop();
console.log({ deletedGame, games });

//* Eliminar un ELEMENTO ESPECÍFICO:
let position = 3;

console.log(games)

let deletedGames = games.splice(position, 2);
console.log({ deletedGames, games })

//! JavaScript es Key Sensitive, por lo que si nombramos el elemento con todos los caracteres en minúsculas, así lo debemos escribir después
let battlefrontIndex = games.indexOf('Battlefront'); // --> Key sensitive
console.log({ battlefrontIndex })

//? Cuando hacemos un indexOf y regresa como valor: -1. Significa que no encontró el elemento