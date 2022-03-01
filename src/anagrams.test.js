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
  it('returns false if one word has one character that is different from the other word', () => {
    const expected = false;
    const actual = isAnagram('taco', 'cati');
    expect(actual).to.equal(expected);
  });
  it('returns false if one word has multiple letters different from the other word', () => {
    const expected = false;
    const actual = isAnagram('tacorita', 'catimeca');
    expect(actual).to.equal(expected);
  });
  it('returns true if both words have the same number of the same character and just one of each character', () => {
    const expected = true;
    const actual = isAnagram('tac', 'cat');
    expect(actual).to.equal(expected);
  });
  it('returns true if both words have the same number of the same character and multiple of each character', () => {
    const expected = true;
    const actual = isAnagram('aracecare', 'eracecara');
    expect(actual).to.equal(expected);
  });
  it('returns false if two words have the same letter but in different quantities', () => {
    const expected = false;
    const actual = isAnagram('aa', 'a');
    expect(actual).to.equal(expected);
  });
  it('ignores case when considering characters', () => {
    const expected = true;
    const actual = isAnagram('CAfE', 'FacE');
    expect(actual).to.equal(expected);
  });
});
