import { part1, part2 } from '.';

describe('Day 1', () => {
  describe('Part 1', () => {
    it('Should match the given answer', () => {
      expect(part1([1721, 979, 366, 299, 675, 1456])).toBe(514579);
    });
  });

  describe('Part 2', () => {
    it('Should match the given answer', () => {
      expect(part2([1721, 979, 366, 299, 675, 1456])).toBe(241861950);
    });
  });
});
