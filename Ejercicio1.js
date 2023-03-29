// Escribe un programa que lea un número e imprime un triángulo de números de la
// forma siguiente. Si el número leído es 4, imprimirá:
let number = 10;
let stringNumber = "";
for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    stringNumber += i;
  }
  stringNumber += "\n";
}
console.log(stringNumber)
