// function saludar() {
//     console.log('Hola mundo');
// };

// saludar()

/*  
    En lo anterior hay un error importante, y es que, si solemos utilizar var para declarar variables, 
    (aunque no es una buena práctica), podemos declara algo como:
    * var saludar = 123
    Por lo que, para ahorrarnos el error que lo anterior 👆 genera, podemos hacer lo siguiente 
*/




//* Ésto es un argumento que 👇 le damos a la función, para poder utilizarlo dentro de su misma lógica:
const greetings = function (name) {
    console.log('Hello,', name);
}

greetings('Diego');



const sumar = (a, b) => {
    return a + b;
}

console.log(sumar(10, 2));

//* Lo anterior lo podemos resumir en una sóla línea de código: (Sólo vale si tenemos el return cómo única lógica de función)
const sumar2 = (a, b) => a + b;
console.log(sumar2(27, 23))


function getRandom() {
    return Math.random();
}
console.log(getRandom())


const getRandom2 = () => Math.random();
console.log(getRandom2())