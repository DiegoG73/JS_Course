// function createPerson(name, surname) {
//     return {
//         // name: name,
//         // surname: surname,

//         //! Desde ECMAScript6 ya no es necesario añadir el nombre de la propiedad dos veces, con una sola basta:
//         name,
//         surname
//     }
// }


//* Lo anterior lo podemos crear como una función de flecha:
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Diego', 'Guzmán');
console.log(persona);





function printArguments() {
    console.log(arguments)
}

printArguments(10, true, false, 'Diego', 'Hola')


//? Los tres puntos (...), es un parámetro rest, que le indica a la función que cree un arreglo con los argumentos
const printArguments2 = (age, ...args) => { //! Después del parámetro rest, no puede ir otro argumento
    //console.log({ age, args })
    return args;
}

const [married, alife, name, greetings] = printArguments2(10, true, false, 'Diego', 'Hello');
console.log({ married, alife, name, greetings });


const { apellido: nuevoApellido } = crearPersona('Diego', 'Guzman');
console.log({ nuevoApellido });