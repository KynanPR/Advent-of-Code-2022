import * as fp from 'fp-ts/function';
import { log } from 'node:console';
import * as fs from 'node:fs';

console.log('Advent of Code!');

function readMultiline(filePath: string): string[] {
	const asOneString: string = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
	return asOneString.split('\n');
}

console.log(readMultiline('src/inputs/Day-1.txt'));