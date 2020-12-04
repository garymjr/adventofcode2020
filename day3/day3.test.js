import { part1, part2 } from '.';

const input = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#'
];

describe('Day 3', () => {
  describe('Part 1', () => {
    it('Should equal 7', () => {
      expect(part1(input, 3, 1)).toBe(7);
    });
  });

  describe('Part 2', () => {
    it('Should equal 336', () => {
      expect(
        part2(input, [
          [1, 1],
          [3, 1],
          [5, 1],
          [7, 1],
          [1, 2]
        ])
      ).toBe(336);
    });
  });
});
