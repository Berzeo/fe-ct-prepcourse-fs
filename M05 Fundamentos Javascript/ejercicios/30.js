function retornarPerimetro(lado) {
  // La función recibe como argumento la medida de un lado de un cuadrado.
  // Debes retornar su perímetro.
  // Tu código:
  let perimetro = lado + lado + lado + lado;
  return perimetro;
}

module.exports = retornarPerimetro;