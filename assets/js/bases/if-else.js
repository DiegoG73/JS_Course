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




// Sin utilizar sentencias If, Else o Switch (con sólo objetos), imprimir en consola el día de la semana

let myDay = 5

let weekDays = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wedneday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
};

console.log(weekDays[myDay]);