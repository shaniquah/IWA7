const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoOwed = (parseFloat(leoBalance).toFixed(2) * -1);
const sarahOwed = (parseFloat(sarahBalance).toFixed(2) * -1 - 0.01);
const leo = ` ${leoName} ${leoSurname} \t (Owed: R${leoOwed})`
const sarah = `${sarahName}${sarahSurname} \t (Owed: R${sarahOwed})`
const total = `Total amount owed: R${leoOwed + sarahOwed}`
const result = `${leo} \n ${sarah} \n ${divider} \n ${total} \n ${divider}`

console.log(result)

/*
 * BUG FIXES:
 * 
 * 'owed' returned NaN---removed undefined variable
 * Changed 'parseInt' to 'parseFloat' to keep decimals from original string
 * multiplied both parsed balances by -1 to return positive results
 * Added '.toFixed(1)' suffix to parsed 'sarahBalance'
 * Modified template literals to proper format
 * Added \n escapes to add new lines and \t escapes for tab
 * Removed extra divider from code
 * Required output had a main flaw: INCORRECT MATH OUTPUT as 'Total amount owed'
 * 'sarahName' has too many spaces in the string(outputs a 'tab' effect between first and last names)
 * CORRECT MATH OUTPUT WITH GIVEN INITIAL BALANCE VALUES: R13976.20
 * 
 */