function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
     // Verificamos que el argumento sea un solo carácter y que sea una vocal.
  if (letra.length === 1 && "aeiouAEIOU".includes(letra)) {
      return "Es vocal";
  } else {
      return "Dato incorrecto";
  }

}


module.exports = esVocal;
