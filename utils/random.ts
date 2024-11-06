/**
 * Generates a random integer between `min` (inclusive) and `max` (inclusive).
 *
 * @param min The minimum value in the range.
 * @param max The maximum value in the range.
 * @returns A random integer between `min` and `max`.
 */
export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
