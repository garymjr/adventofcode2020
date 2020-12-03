import fs from 'fs';

const getPairs = numbers =>
  numbers.reduce(
    (pairs, number, index) =>
      pairs.concat(numbers.slice(index + 1).map(num => [number, num])),
    []
  );

export const part1 = input => {
  const pairs = getPairs(input);
  const [pair] = pairs.filter(p => p[0] + p[1] === 2020);
  return pair[0] * pair[1];
};

export const part2 = input => {
  const pairs = getPairs(input);
  const [pair] = pairs.filter(p => {
    const third = 2020 - (p[0] + p[1]);
    return input.includes(third);
  });

  return pair[0] * pair[1] * (2020 - (pair[0] + pair[1]));
};

const run = () => {
  try {
    const input = fs
      .readFileSync('./input.txt', { encoding: 'utf-8' })
      .split('\n')
      .slice(0, -1)
      .map(Number);

    console.log(part1(input));
    console.log(part2(input));
  } catch (e) {
    return null;
  }
};

run();
