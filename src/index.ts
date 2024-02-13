import * as fp from 'fp-ts/function';

const result = fp.pipe(
	1,
	increment,
	double,
	decrement
);

function increment(n: number): number {
	return n + 1;
}  

function double(n: number): number {
	return n * 2;
}

function decrement(n: number): number {
	return n - 1;
}

console.log('Hello Functional', result);
