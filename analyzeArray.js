function analyzeArray(arr) {
  let length = arr.length;
  let soma = 0;
  let max = arr[0];
  let min = arr[0];

  for (let item of arr) {
    soma += item;
    max = item > max ? item : max;
    min = item < min ? item : min;
  }

  return {
    average: soma / length,
    max,
    min,
    length,
  };
}

module.exports = analyzeArray;
