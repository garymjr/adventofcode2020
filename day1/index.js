const fs = require('fs');

const input = fs
  .readFileSync('./input.txt', { encoding: 'utf-8' })
  .split('\n')
  .slice(0, -1)
  .map(Number);

const createPairs = numbers => (pairs, number, index) => {
  numbers.slice(index + 1).forEach(num => {
    pairs.push([number, num]);
  });
  return pairs;
};

const filterByThree = numbers => pair => {
  const diff = 2020 - (pair[0] + pair[1]);
  return numbers.includes(diff);
};

const getPart2Result = numbers => {
  const pairs = numbers.reduce(createPairs(numbers), []);
  const [result] = pairs.filter(filterByThree(numbers));
  return [...result, 2020 - (result[0] + result[1])];
};

const getResult = numbers => {
  const pairs = numbers.reduce(createPairs(numbers), []);
  const [result] = pairs.filter(pair => pair[0] + pair[1] === 2020);
  return result;
};

const solution = () => {
  const result = getResult(input);
  const result2 = getPart2Result(input);
  console.log(result[0] * result[1]);
  console.log(result2[0] * result2[1] * result2[2]);
};

solution();
