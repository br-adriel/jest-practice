function reverseString(texto) {
  aux = texto.split("");
  aux.reverse();
  return aux.join("");
}

module.exports = reverseString;
