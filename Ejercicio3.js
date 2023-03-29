// En el mismo supermercado quieren montar también pilas del mismo número de
// latas de alto que de ancho.
// * * *
// * * *
// * * *
// Ahora bien no todas las cantidades de latas que pueden apilarse triangularmente pueden ponerse en estructuras cuadradas. Diseñas un programa C que indique si un número natural es válido para realizar los dos tipos de estructuras. (Un ejemplo válido es el número 36)
let number = 36;
let account = 0,
  i = 0,
  matrix = [];
let condition = false;
const detWidth = (number) => {
  let divPrime = [];
  let index = 0;
  for (let i = 2; number > i; i++) {
    while (number % i == 0) {
      divPrime[index++] = i;
      number /= i;
    }
  }
  return divPrime;
};
const printMatrix = (matrix) => {
  let string = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      string += " ";
    }
    for (let j = 0; j < matrix[i].length; j++) {
      string += matrix[i][j] + " ";
    }
    string += "\n";
  }
  return string;
};
const max = (list) => Math.max.apply(null, list);
const value = max(detWidth(number));
const promiseNumber = new Promise((resolve, reject) => {
  if (value !== -Infinity && value !== number) {
    resolve("Latas apiladas correctamente");
  } else {
    reject("No se pueden apilar las latas");
  }
});
promiseNumber
  .then((result) => {
    do {
      matrix[i] = new Array(value);
      for (let j = 0; j <= value - 1 && !condition; j++) {
        account++;
        matrix[i][j] = "=";
        condition = account >= number;
      }
      i++;
    } while (!condition);
    console.log(result);
    console.log(printMatrix(matrix));
  })
  .catch((error) => {
    console.log(error);
  });
