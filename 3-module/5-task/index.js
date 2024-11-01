function getMinMax(str) {
  const arr = str
    .split(' ')
    .filter(value => isFinite(value))
    .map(value => Number(value))
    .sort((a, b) => a - b);

  return {
    min: arr[0],
    max: arr.at(-1),
  }
}
