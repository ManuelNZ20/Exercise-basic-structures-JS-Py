// Escribe un programa C que, dado un número entero positivo y lo devuelva al revés.
// Por ejemplo, si el número de entrada es 1234, la rutina debería devolver 4321.
const revesNumber = (number) => {
  let stringNumber = "";
  while (number > 0) {
    stringNumber += number % 10;
    number = Math.floor(number / 10);
  }
  return parseInt(stringNumber);
};

console.log(revesNumber(10203));
