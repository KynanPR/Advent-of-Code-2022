import * as fp from 'fp-ts/function';
import {log} from 'node:console';
import * as fs from 'node:fs';

console.log('Advent of Code!');

type Input = string[];
function readMultiline(filePath: string): Input {
  const asOneString: string = fs.readFileSync(filePath, {
    encoding: 'utf8',
    flag: 'r',
  });
  return asOneString.split('\n');
}


// Search for blanks
export function findBlankIndexes(toBeSearched: string[]): number[] {
  return findBlanksRecursive([])(toBeSearched);

  function findBlanksRecursive(foundIndexes: number[]) {
    // Curry the function
    return (searchSpace: string[]): number[] => {
      // Find blank in given array
      const foundBlankLocal: number = searchSpace.indexOf('');
      // Check if found a blank
      if (foundBlankLocal !== -1) {
        // If blank is found
        // Account for the fact that we're searching sub arrays, not the original array
        const lastFoundBlank: number = foundIndexes.at(-1) ?? -1; // Get the last global index. If this is the first found blank then -1 is needed to counteract that +1 in the next line
        const foundBlankGlobal: number = lastFoundBlank + foundBlankLocal + 1; // +1 accounts for skipping the blank
        const newFoundIndexes: number[] = foundIndexes.concat(foundBlankGlobal);
  
        const remainingSearchSpace: string[] = searchSpace.slice(
          foundBlankLocal + 1
        ); // Create new array of remaining elements to be searched
        return findBlanksRecursive(newFoundIndexes)(remainingSearchSpace); // Recursivly call function until all blanks have been found
      } else {
        // Blank not found so the last one was the final blank or there are none
        return foundIndexes; // Once all blanks have been found, final found indexes array will be returned all the way back up
      }
    };
  }
}


// Split array for each blank