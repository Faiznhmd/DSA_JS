function rangeOfNO(startNum, EndNum) {
  if (EndNum < startNum) {
    return [];
  } else {
    let numbers = rangeOfNO(startNum, EndNum - 1);
    numbers.push(EndNum);
    return numbers;
  }
}
console.log(rangeOfNO(0, 5));
