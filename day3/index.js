import fs from 'fs';

export const part1 = (input, right, down) => {
  let trees = 0;
  let x = 0;
  let y = 0;

  while (input[y]) {
    if (input[y][x] === '#') {
      trees += 1;
    }

    x += right;
    if (x >= input[y].length) {
      x -= input[y].length;
    }
    y += down;
  }
  return trees;
};

export const part2 = (input, slopes = []) => {
  let trees;

  for (let i = 0; i < slopes.length; i++) {
    const [right, down] = slopes[i];
    const result = part1(input, right, down);
    trees = trees ? trees * result : result;
  }

  return trees;
};

const run = () => {
  try {
    const input = fs
      .readFileSync('./input.txt', { encoding: 'utf-8' })
      .split('\n')
      .slice(0, -1);

    console.log(part1(input, 3, 1));
    console.log(
      part2(input, [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
      ])
    );
  } catch (e) {
    return null;
  }
};

run();
