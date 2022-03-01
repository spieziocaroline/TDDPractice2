import { getLetterCount } from './letter-count.js';
import { expect } from 'chai';

//use describe to group similar functions together
//first arg = description, second arg = actual assertions
describe('getLetterCount - basic functionality', () => {
  //"it" denotes smaller test chunks
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });
  it('returns the correct object for word with only one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });
  it('should return the correct letter count for words with more than one of certain letters', () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount('mississippi');
    expect(actual).to.deep.equal(expected);
  });
});
