function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if(letra === "a" || letra === "A" ){
    return "Es vocal";
  }else if(letra === "e" || letra === "E"){
      return "Es vocal";
  }else if(letra === "i" || letra === "I"){
      return "Es vocal";
  }else if(letra === "o" || letra === "O"){
      return "Es vocal";
  }else if(letra === "u" || letra === "U"){
      return "Es vocal";
  }
  else{
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
