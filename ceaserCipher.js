function ceaserCipher(text, shift) {}

function novoIndex(alfabeto, letra, shift) {
  let index = alfabeto.indexOf(letra) + shift;
  if (index < 0) {
    return index + 26;
  } else if (index > 25) {
    return index - 26;
  }
  return index;
}

module.exports = ceaserCipher;
