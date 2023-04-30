// **Strings and Logical Operators**

// Using different string declarations with same output

const first = 'Otshepeng';
console.log(first);
const second = "Otshepeng";
console.log(second);

// Use different string declarations for different string types/quotes
// Avoids need to escape quotes in strings

const firstQuote = 'Otshepeng said: "Hello world!"';
console.log(firstQuote)
const secondQuote = "Otshepeng's quote";
console.log(secondQuote)

// Escape when using both declarations in same string

const third = "Otshepeng's quote said: \"Hello world!\"";
console.log(third);


// Adds both of them as numbers

const num1 = 1;
const num2 = 2;
console.log(num1 + num2);

// Concatenation = when one variable is a string the other gets coerced automatically and the two are added as strings

const no1 = '1';
const no2 = 2;
console.log(no1 + no2);

// Interpolation = a format of logging variables as separate strings instead of adding the values

const nom1 = 1;
const nom2 = 2;
console.log(`${nom1} ${nom2}`);

// Template literals

const name = 'Niquah'
console.log(`Have you heard ${name}'s latest track?`);

// Evaluations + interpolation

console.log(`Is 150 x 10 - 2 = ${15 * 10 - 2} or ${15*(10 - 2)}?`);

// Negative evaluation

const active = false;
if(active !== true) {
    let user = null;
    console.log(user)
} else if (active !== false) {
    let user = 'logged in';
    console.log(user);
}

// Chain conditions with if else statements
// Error state for no match

const month = 'jun';

if (month === 'aug' || month === 'sep' || month === 'oct') {
    console.log("It's Spring! Smell the flowers.");
} else if (month === 'nov' || month === 'dec' || month === 'jan') {
    console.log("It's Summer, let's go to the beach!");
} else if (month === 'feb' || month === 'mar' || month === 'apr') {
    console.log("It's Autumn, rake those leaves!");
} else if (month === 'may' || month === 'jun' || month === 'jul') {
    console.log("It's Winter, make some hot chocolate and cuddle!");
} else {
    throw new Error('Invalid month!');
}

