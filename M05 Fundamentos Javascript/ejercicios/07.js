function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  if(valor === "string"){
    return "string"
  }else if(valor === "Number"){
    return "number";
  }else if(valor === "boolean"){
    return "boolean"
  }else {
    return "object";
  }
}

module.exports = esTipoDato;