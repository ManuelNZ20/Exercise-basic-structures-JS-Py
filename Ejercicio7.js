// Construir un algoritmo que permita multiplicar dos números enteros positivos empleando el método denominado MULTIPLICACIÓN RUSA.
// Este método permite calcular el producto de M*N de la siguiente manera:
// En pasos sucesivos se divide M por 2 (división entera) y se multiplica N por 2. Este proceso se repite hasta que M es 0. El resultado de la multiplicación deseada se obtiene acumulando aquellos valores sucesivos de N para los cuales el valor de M es impar
const multRuss = (n, m) => {
  let total = 0;
  while (m > 0) {
    total = m % 2 != 0 ? total + n : total;
    console.log(m);
    m = Math.floor(m / 2);
    n *= 2;
  }
  return total;
};
console.log(multRuss(31, 27));
