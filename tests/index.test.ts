import { findBlankIndexes } from '../src/index.ts';

// Test findBlankIndexes
/* Possible cases - expected result
Entirely wrong type - Exception
Array with wrong types - Exception
Empty Array - []
Array with single blank - [0]
Array with x number of blanks - [0,1,.., x-1]
Array with blank then string(s) - [0]
Array with strings then blank - [x]
*/
describe('testing index file', () => {
    // Test findBlankIndexes
    test('Wrong Type', () => {
      expect(findBlankIndexes(12345)).toThrow('');
    });
  });