// const arr = new Array(10);

const arr = [];
console.log(arr);

let videogames = ['Halo 3', 'Diablo IV', 'Battlefield 4'];
console.log({ videogames })


// Así accedemos a los elementos de nuestro arreglo:
console.log(videogames[0]);

// Arreglos con elementos cuyos tipos de dato son distintos entre si:
let thingsArray = [
    true,
    123,
    'Halo 2',
    1 + 2, //!No es necesario terminar el arreglo con coma, pero a veces es una buena práctica hacerlo

    //* También podemos añadir funciones en los arreglos:
    function () { },
    () => { },

    //* Igual, podemos agregar objetos literales:
    { a: 1 },

    //? Podemos agregar arreglos dentro de arreglos, generando así, una matriz
    ['Jhon 117', 'Lilith', 'Senua', 'Alice'],
];

// console.log({ thingsArray })


//* Así accedemos a un array dentro de otro array
console.log(thingsArray[7][3]);