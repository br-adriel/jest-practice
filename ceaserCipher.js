function ceaserCipher(text, shift) {
  const alfabetoMin = "abcdefghijklmnopqrstuvwxyz".split("");
  const alfabetoMai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let texto = text.split("");
  texto = texto.map((letra) => {
    if (alfabetoMin.indexOf(letra) !== -1) {
      index = novoIndex(alfabetoMin, letra, shift);
      return alfabetoMin[index];
    } else if (alfabetoMai.indexOf(letra) !== -1) {
      index = novoIndex(alfabetoMai, letra, shift);
      return alfabetoMai[index];
    } else {
      return letra;
    }
  });
  return texto.join("");
}

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
