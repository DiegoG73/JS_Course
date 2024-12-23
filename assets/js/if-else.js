let a = 9

//* El "if" también es una función de JavaScript, y nos damos cuenta por los paréntesis que tiene "if()", y espera un valor booleano
if (a >= 10) {
    console.log('La variable A es mayor o igual a 10');
} else {
    console.log('A es menor a 10')
}

// console.log('Fin de programa');

const today = new Date();
console.log(today)

let day = today.getDay(); // 0: domingo, 1: lunes, 2: martes... 6: sábado

if (day === 0) {
    console.log('Domingo');
} else {
    console.log('No es domingo');
}