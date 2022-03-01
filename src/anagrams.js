import { getLetterCount } from './letter-count.js';

export const isAnagram = (str1, str2) => {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1.length !== str2.length) return false;

  const str1Count = getLetterCount(str1);
  const str2Count = getLetterCount(str2);

  for (let key in str1Count) {
    if (str1Count[key] !== str2Count[key]) return false;
  }
  return true;
};
