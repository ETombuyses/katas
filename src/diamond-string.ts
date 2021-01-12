/* -------------- V2 - string ---------- */
/* Write a function that displays a diamond given its width n, a non-nul, odd, natural integer. */

export const createDiamond = (n: number): string | boolean => {
  if (Math.round(n) !== n || !(n % 2 > 0)) return false;

  let diamond: string = "";
  const middle: number = (n + 1) / 2;

  for (let i = 1; i <= n; i++) {
    const starsCount: number = n - Math.abs(middle - i) * 2;
    const whiteCount: number = n - starsCount;

    diamond += generateNewRow(whiteCount, starsCount);
    if (i !== n) diamond += "\n";
  }
  console.log(diamond);
  return diamond;
};

const generateNewRow = (whiteCount: number, starsCount: number): string => {
  return generatePattern(whiteCount / 2, " ") + generatePattern(starsCount, "*") + generatePattern(whiteCount / 2, " ");
};

const generatePattern = (condition: number, string: string): string => {
  let stringfinal = "";
  for (let i = 0; i < condition; i++) stringfinal += string;
  return stringfinal;
};
