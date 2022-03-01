import { isAnagram } from './anagrams.js';
import { expect } from 'chai';

describe('isAnagram - basic functionality', () => {
  it('returns true if both strings are empty', () => {
    const expected = true;
    const actual = isAnagram('', '');
    expect(actual).to.equal(expected);
  });
  it('returns false if both strings are different lengths', () => {
    const expected = false;
    const actual = isAnagram('hi', 'bye');
    expect(actual).to.equal(expected);
  });
});
