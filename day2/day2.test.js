import { part1, part2 } from '.';

describe('Day 2', () => {
  describe('Part 1', () => {
    it('Should have 2 valid passwords', () => {
      expect(part1(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toBe(
        2
      );
    });
  });

  describe('Part 2', () => {
    it('Should have 1 valid password', () => {
      expect(part2(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toBe(
        1
      );
    });
  });
});
