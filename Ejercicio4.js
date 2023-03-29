// Dado un número natural N, se calcula la raíz digital de N sumando los dígitos que lo componen. El proceso se repite sobre el nuevo número hasta que el resultado obtenido tiene un sólo dígito. Este último número es la raíz digital del número N.
// Ejemplo: 347 Æ3 + 4 + 7 = 14 Æ 1 + 4 Æ 5 Æ Raíz digital (347) = 5.
// Escribir un programa C que calcule la raíz digital de un número
const raizDigit = (number) => {
  const copy = number;
  while (number >= 9) {
    number = divNumber(number);
    console.log(number);
  }
  console.log(`Raiz digital de ${copy} es: ${number}`);
};

const divNumber = (number) => {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
};

raizDigit(347);
