const nickname = "Timmy";
const firstName = "Timothy";

if (nickname || firstName) {
    console.log(`Good morning, ${nickname || firstName}!`);
} else {
    console.log("Good morning!");
}

/*
 * BUG FIXES:
 * 
 * 'firstname' was not in camelCase---corrected it to 'firstName'
 * 'console.log' function returned entire message as a string(Good morning, ${nickname} || {firstname}!)
 * Made use of template literals in the 'console.log'(``)
 * Joined both variables in the same template literal with the OR operator(||)
 * Left both variables as truthy code for the console to automatically prefer the first truthy variable over the other
 * Nested code in 'if...else' statement with truthy conditions
 * If either condition is truthy('nickname' given first preference) the first condition runs(Good morning, Timmy!/Good morning, Timothy!)
 * If both conditions are falsy(null/undefined/false/etc.) code runs second condition(Good morning!)
 * 
 */