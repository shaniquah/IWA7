const value = 3;
console.log(value + 4 + value);

/* 
 * Original code bugs:
 * 
 * value '3' was saved to memory as a string
 * 'console.log' function resulted in concatenation
 * '4' accidentally coerced to a string type input
 * 
 */