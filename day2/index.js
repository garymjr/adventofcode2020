import fs from 'fs';

const checkValidRange = (password, policy) => {
  const [range, letter] = policy.split(' ');
  const [min, max] = range.split('-').map(Number);

  const filteredPassword = password.split('').filter(x => x === letter);
  return filteredPassword.length >= min && filteredPassword.length <= max;
};

export const part1 = input => {
  const validPasswords = input.filter(x => {
    const [policy, password] = x.split(': ');
    const isValid = checkValidRange(password, policy);
    return isValid;
  });
  return validPasswords.length;
};

const checkValidPlacement = (password, policy) => {
  const [indices, letter] = policy.split(' ');
  const [idx1, idx2] = indices.split('-').map(x => Number(x) - 1);

  return (password[idx1] === letter) !== (password[idx2] === letter);
};

export const part2 = input => {
  const validPasswords = input.filter(x => {
    const [policy, password] = x.split(': ');
    const isValid = checkValidPlacement(password, policy);
    return isValid;
  });
  return validPasswords.length;
};

const run = () => {
  try {
    const input = fs
      .readFileSync('./input.txt', { encoding: 'utf-8' })
      .split('\n')
      .slice(0, -1);

    console.log(part1(input));
    console.log(part2(input));
  } catch (e) {
    return null;
  }
};

run();
