
let num = [1, 5, 6, 9, 7, 2, 5, 4]

// CAMBIAMOS POSICION DE 4 A 9
num[4] = 9;

// FILTRAMOS NUMEROS MAYORES A 6
let numero = num.filter((numero) => {
    return numero > 6;
});

console.log(num);