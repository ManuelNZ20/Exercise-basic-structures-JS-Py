// Escribir un programa que lea un número natural de 4 cifras, no todos iguales.
// Implementa la función Mayor(N), que calcula el mayor número que se puede formar con las cifras de N, y la función Menor(N) que calcula el menor número que se puede formar con las cifras de N.
let number = 1988;
const detNumber = (number) => {
  let list = [];
  while (number > 0) {
    list.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = list.length - 1; j > i; j--) {
      if (list[i] === list[j]) {
        console.log(`${i}:${list[i]} == ${j}:${list[j]}`);
        return;
      }
    }
  }
  console.log(`Número mayor ${Math.max(...list)}`);
  console.log(`Número menor ${Math.min(...list)}`);
};
const promiseNumber = new Promise((resolve, reject) => {
  if (number >= 1000) {
    resolve(detNumber(number));
  } else {
    reject(`El número ${number} es menor a 4 cifras`);
  }
});
