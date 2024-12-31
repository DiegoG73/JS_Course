//* CICLOS
const cars = ['Mazda', 'Toyota', 'Chevrolet', 'Ford', 'Nissan'];
let i = 0;

while(i < cars.length){
    console.log(cars[i]);
    i++;
}

//! Éstos valores provocarán que el ciclo no se ejecute nunca:
//! Undefined
//! Null 
//! False

while(cars[i]){
    if(i === 1){
        break;
    }
    console.log(cars[i]);
    i++;
};


//* DO WHILE: Se ejecuta al menos una vez, y después evalúa la condición
console.warn('DO WHILE');
let j = 0

do{
    console.log(cars[j]);
    j++;
} while(cars[j]);