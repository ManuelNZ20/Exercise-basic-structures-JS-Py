// En el supermercado de la esquina colocan las latas de conservas apiladas
// triangularmente. Esto trae bastantes problemas a la hora de hacer los pedidos, ya que
// quieren un número de latas de manera que no sobre ni falte ninguna. Así, 6 latas se
// pueden apilar triangularmente de la siguiente manera.
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// Si tuvieran 7 latas, no podrían apilarse de forma triangular, ya que sobraría una.
// Escribir un programa C, que dado un número natural, compruebe si es adecuado para
// montar pilas triangulares.

const printMatrix = (matrix) => {
  let printString = "";
  for (let i = 0; i < matrix.length; i++) {
    for (let k = matrix.length - i; k >= 0; k--) {
      printString += " ";
    }
    for (let j = 0; j < matrix[i].length; j++) {
      printString += matrix[i][j] !== undefined ? matrix[i][j] + " " : "* ";
    }
    printString += "\n";
  }
  return printString;
};
let number = 14;
let matrix = [];
let i = 0,
  account = 0;
let condition = false;
let width = 0,
  height = 0;

do {
  matrix[i] = new Array(i + 1);
  for (let j = 0; (j <= i) & !condition; j++) {
    account++;
    matrix[i][j] = "=";
    condition = account >= number;
  }
  i++;
} while (!condition);

// console.log(matrix);
for (i = 0; i < matrix.length; i++) {
  width = matrix[i][0] === "*" ? width + 1 : width;
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === matrix.length - 1) {
      height = matrix[matrix.length - 1][j] === "*" ? height + 1 : height;
    }
  }
}
console.log(printMatrix(matrix));
if (width === height) {
  console.log(`Latas apiladas correctamente con ${number} latas`);
} else {
  console.log(`No se logra montar una pila triangular con ${number} latas`);
}
