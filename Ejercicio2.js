// En el supermercado de la esquina colocan las latas de conservas apiladas
// triangularmente. Esto trae bastantes problemas a la hora de hacer los pedidos, ya que
// quieren un número de latas de manera que no sobre ni falte ninguna. Así, 6 latas se
// pueden apilar triangularmente de la siguiente manera.
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// Si tuvieran 7 latas, no podrían apilarse de forma triangular, ya que sobraría una.
// Escribir un programa C, que dado un número natural, compruebe si es adecuado para
// montar pilas triangulares.
let number = 11,
  account = 0,
  i = 0;
let string = ""; //Variable auxiliar para imprimir datos
let condition = false;
let matrix = [];
let rows = 0,
  cols = 0;
do {
  matrix[i] = new Array(i + 1);
  for (let j = 0; (j <= i) & !condition; j++) {
    matrix[i][j] = "*";
    account++;
    condition = account >= number;
  }
  i++;
} while (!condition);
for (i = 0; i < matrix.length; i++) {
  rows = matrix[matrix.length - 1][0] === "*" ? rows + 1 : rows;
  for (let k = matrix.length - i; k >= 0; k--) {
    string += " ";
  }
  for (let j = 0; j < matrix[i].length; j++) {
    string += matrix[i][j] !== undefined ? matrix[i][j] + " " : "= ";
    if (matrix.length - 1 === i) {
      cols = matrix[matrix.length - 1][j] === "*" ? cols + 1 : cols;
    }
  }
  string += "\n";
}
console.log(string);
if (rows === cols) {
  console.log("Latas apiladas");
} else {
  console.log("No se pueden apilar las latas");
}
// console.log(`${rows}, ${cols}`);
