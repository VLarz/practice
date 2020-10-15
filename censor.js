cardNumber = '5244 5005 3701 9993';

const censor = (cardNumber) => {
    const trim = cardNumber.replace(/\s/g, '');
    if(!isNaN(trim) && trim !== "") {
        return cardNumber.replace(/\d(?=.{4})/g, 'x');
    }
    return null;
}

console.log(censor(cardNumber));

// console.log(censor(" "));
// console.log(censor('5244 5005 3701 9993'));
// console.log(censor('67619600 000ww0551045'));

//READLINE
// var readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// var response = rl.question('Whats your name : ', answer)
// rl.close (); 
// function answer(response) {
//     console.log(response)
// }