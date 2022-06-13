function sumItems(array) {
  let sumTotal = 0;
  for (num of array) {
    if (Array.isArray(num)) {
      sumTotal += sumItems(num);
    } else {
      sumTotal += num;
    }
  }
  return sumTotal
}

module.exports = sumItems;

