---
title: generators in JavaScript
description: the weird single-use generators using `function*`
topic: coding
date: 10/10/21
heroImg: js_generators.png
published: true
---

# Generators in Javascript

Sometimes I end up going down an MDN rabbit hole. Often I learn some obscure feature of JavaScript that I may never have an opportunity to use or I find a great insight into how the language works.

On this occasion i think i found both!

Here are some things you might not have heard of before:

```js
function* createNumGenerator(start, end) {
	while (start <= end) {
		yield start;
		start++;
	}
}

console.log(createNumGenerator); // [GeneratorFunction: createNumGenerator]

const oneToFiveGenerator = createNumGenerator(1, 5);

console.log(oneToFiveGenerator); // Object [Generator] {}
```

Okay so first - notice how i'm using `function*` right at the start there? This is a `GerneratorFunction`. Calling this function returns a `Generator Object`!

This object can be _iterated over_ and will call the function on each iteration.

We can call the next value in the iteration manually by using the `.next()` method

```js
const firstResult = oneToFiveGenerator.next();

console.log(firstResult); // { value: 1, done: false }
```

The strange difference between the way this generator executes and the way normals functions run is that it will execute line-by-line **until it reaches a `yield` keyword**. At this point it will **pause** the execution and yield (give back) a results object to wherever it was called. When we iterate again the code will resume from the `yield` keyword and execute until it reaches the next one

```js
const secondResult = oneToFiveGenerator.next();

console.log(secondResult); // { value: 2, done: false }
```

Notice how the object has a `done` key with the value of `false`? Guess what happens when we reach the end! (done turns to `true`!)

```js
const thirdResult = oneToFiveGenerator.next();
const fourthResult = oneToFiveGenerator.next();
const fifthResult = oneToFiveGenerator.next();
console.log(fifthResult); // { value: 5, done: false }
const sixthResult = oneToFiveGenerator.next();
console.log(sixthResult); // { value: undefined, done: true }
```

Here's the weirdest thing (imo) about generators... they are single use! Any further calls to this generator will return undefined!

What a waste :(

We've been calling this generator manually. There are some in-built features of JavaScript that will iterate through this object for us!

for example: `for..of`:

```js
const oneToThreeGenerator = createNumGenerator(1, 3);

for (const num of oneToThreeGenerator) {
	console.log(num);
}
// 1
// 2
// 3

// when the for..of loop receives the 'done' signal - it stops!
```

and the spread operator `...`! :

```js
const oneToThreeGenerator = createNumGenerator(1, 3);

console.log(...oneToThreeGenerator);
// same as console.log( 1, 2, 3 );
// 1 2 3
```

---

So is any of this... useful at all?

Not massively. We can achieve the same results in more memory saving ways and I think if i put a generator function in a project it would cause far more confusion for my colleagues than it's worth.

So what's the lesson here?

Okay, let's go down the rabbit hole together ( only a short way (because i still don't understand it fully ))

## Iterable protocol

Generator functions adhere to the [Iterable Protocol (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). This
means that it returns something that conforms to the [Iterator Protocol (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) (more on that in a bit)

> MDN: Iterable Protocol

> In order to be iterable, an object must implement the `@@iterator` method, [...] which is available via constant `Symbol.iterator`:

> [ The `@@iterator` method is a ] zero-argument function that returns an object, conforming to the iterator protocol.

Other built in Objects that conform to this protocol are Arrays and Strings!

This means we can get a similar iterator object out of these from invoking the method on the `[Symbol.iterator]` key ( never used `Symbol` for anything useful before? me neither! )

```js
const tutor = 'doug';

const tutorIterator = tutor[Symbol.iterator](); // invoke it!

console.log(tutorIterator); // Object [String Iterator] {}
```

This can be used in the same way!

```js
console.log(tutorIterator.next()); // { value: 'd', done: false }
console.log(tutorIterator.next()); // { value: 'o', done: false }
console.log(tutorIterator.next()); // { value: 'u', done: false }
console.log(tutorIterator.next()); // { value: 'g', done: false }
console.log(tutorIterator.next()); // { value: undefined, done: true }
```

This gives us a bit of an insight into how JavaScript iterates over things!

Have you ever tried to iterate over an Objects keys and forgotten if it's `for..in` or `for..of`? Have you guessed wrong and got this error?

```js
const person = {
	name: 'doug'
};

// pretend we're trying to iterate over my name
for (const char of person) {
	console.log(char);
}
```

```
for (const char of person) {
                   ^
TypeError: person is not iterable
```

"person is not iterable" - or in other words "this does not conform to the iterator protocol"!

We can add our own implementation like this:

```js
const person = {
	name: 'doug',
	[Symbol.iterator]: function () {
		let index = 0;
		return {
			next: () => {
				if (index <= this.name.length) {
					const nextCharacter = { value: this.name[index], done: false };
					index++;
					return nextCharacter;
				} else {
					return { value: undefined, done: true };
				}
			}
		};
	}
};

for (const char of person) {
	console.log(char);
}

// d
// o
// u
// g
// undefined << i think i'm missing something here
```

or even better - lets use our new friend the JavaScript Generator function:

```js
const person = {
	name: 'doug',
	[Symbol.iterator]: function* () {
		let index = 0;
		while (this.name.length >= index) {
			yield this.name[index];
			index++;
		}
	}
};
```

And there we have it! There's more further down this rabbit hole but i've hope you've had fun going on this journey with me
