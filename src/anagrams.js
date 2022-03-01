import { getLetterCount } from './letter-count.js';

export const isAnagram = (str1, str2) => {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1.length !== str2.length) return false;
};
