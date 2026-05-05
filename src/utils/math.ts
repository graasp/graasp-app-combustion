export const toSimplestFractionTuple = (n: number): [number, number] => {
  const numerator = Math.round(n * 100);
  const denominator = 100;

  const gcd = (a: number, b: number): number => {
    let x = a;
    let y = b;

    while (y !== 0) {
      [x, y] = [y, x % y];
    }

    return x;
  };

  const g = gcd(numerator, denominator);
  return [numerator / g, denominator / g];
};
