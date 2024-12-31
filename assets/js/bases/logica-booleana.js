const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}


console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);


console.warn('And'); //? True sólo si TODOS los valores son verdaderos
console.log(true && true); //* True
console.log(true && false); //! False


console.log('=============');
console.log(regresaFalse() && regresaTrue()); //! False
console.log(regresaTrue() && regresaFalse()); //* True



console.warn('OR'); //? Por lo menos una condición tiene que ser true para que TODO nos de como resultado true
console.log(true || false); //* True
console.log(false || false); //! False
console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = true && 'Hola mundo cruel';
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuez' || true; //* -> 'Ya no soy falso de nuez'
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuez'; //* -> true


// console.log({ a1 });
// console.log({ a2 });
// console.log({ a3 });
// console.log({ a4 });
// console.log({ a5 });

console.log({ a1, a2, a3, a4, a5 });