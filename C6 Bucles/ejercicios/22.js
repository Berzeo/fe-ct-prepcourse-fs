function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let incremento = 1;
  do{
    num += 5;
    incremento += 1;
  }while(incremento <= 8)
  return num;
}

module.exports = doWhile;