export const getLetterCount = (str) => {
  const letterCount = {};
  const letters = str.split('');
  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  });
  return letterCount;
};
