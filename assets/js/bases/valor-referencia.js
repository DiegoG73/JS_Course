let a = 10;
let b = a;

a = 30

console.log({ a, b })


//! TODOS LOS PRIMITIVOS SE PASAN POR VALOR 👆


//? TODOS LOS OBJETOS SE PASAN POR REFERENCIA 👇





//*  Pasando valores por referencia:
let gwen = { name: 'Gwen' };

//! Aquí vemos👇 el operador "SPREAD", que rompe las referencias con JavaScript y separa los elementos (distinto al operador rest, que ese SÓLAMENTE se puede usar en las funciones)
let ana = { ...gwen };

ana.name = 'Ana'

console.log(gwen, ana) //* 👉 Con el código anterior, le asignará el mismo nombre a Gwen que a Ana, porque se pasan por referencia en todos los objetos de JavaScript








//! Aquí podemos ver que👇 el operador "SPREAD" opera dentro de una función, ésto es debido que al colocar los "{}", convertimos el argumento en un OBJETO
const changeName = ({ ...person }) => {
    person.name = 'Tony';
    return person;
}
let peter = { name: 'Peter' };
let tony = changeName(peter);

// console.log({ peter, tony }) //* El valor que imprime será: Peter = Tony y Tony = Tony



//* Arrays
const fruits = ['Apple', 'Pear', 'Pineapple'];
// const anotherFruits = [...fruits];//! Aquí lo que hacemos es romper la relación entre el array fruits y anotherFruits, por lo que, el nuevo push, no afectará al antigüo
console.time('Slice');
const anotherFruits = fruits.slice(); //* Slice: Método que viene de los arrays que cortan el arreglo y regresa los elementos que especificamos
console.timeEnd('Slice');

console.time('Spread');
const anotherFruits2 = [...fruits];
console.timeEnd('Spread');

anotherFruits.push('Mango');
console.table({ fruits, anotherFruits });


//* El operador Spread suele ser más rápido que Slice, por lo que, de nosotros es responsabilidad evaluar la situación para cada uno


