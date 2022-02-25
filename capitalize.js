function capitalize(texto) {
  let aux = texto.split("");
  aux[0] = aux[0].toUpperCase();
  return aux.join("");
}
module.exports = capitalize;
