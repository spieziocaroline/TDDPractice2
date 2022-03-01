import { getLetterCount } from './letter-count.js';

export const isAnagram = (str1, str2) => {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1.length !== str2.length) return false;

  let loweredStr1 = '';
  let loweredStr2 = '';

  str1.split('').forEach((letter) => (loweredStr1 += letter.toLowerCase()));
  str2.split('').forEach((letter) => (loweredStr2 += letter.toLowerCase()));
  const str1Count = getLetterCount(loweredStr1);
  const str2Count = getLetterCount(loweredStr2);

  for (let key in str1Count) {
    if (str1Count[key] !== str2Count[key]) return false;
  }
  return true;
};
