// index.js

//  import the crypto module
const crypto = require('crypto');
console.log(crypto)


//  get a commands using process.argv
const args = process.argv.slice(2);
console.log(args)
// complete the  function
if (args.length < 1) {
  console.log('Please provide an operation.');
  process.exit();
}

// get the operation
const operation = args[0];

console.log(operation)

// import the built-in crypto module

// get the arguments from the command line


// check if there are enough arguments


// check which operation to perform
switch(operation) {
  case 'add':
    // addition
    if (args.length < 3) {
      console.log('Please provide two numbers to add.');
      process.exit();
    }
    const sum = Number(args[1]) + Number(args[2]);
    console.log(sum);
    break;
    
  case 'sub':
    // subtraction
    if (args.length < 3) {
      console.log('Please provide two numbers to subtract.');
      process.exit();
    }
    const diff = Number(args[1]) - Number(args[2]);
    console.log(diff);
    break;
    
  case 'mult':
    // multiplication
    if (args.length < 3) {
      console.log('Please provide two numbers to multiply.');
      process.exit();
    }
    const product = Number(args[1]) * Number(args[2]);
    console.log(product);
    break;
    
  case 'divide':
    // division
    if (args.length < 3) {
      console.log('Please provide two numbers to divide.');
      process.exit();
    }
    const quotient = Number(args[1]) / Number(args[2]);
    console.log(quotient);
    break;
    
  case 'sin':
    // sine
    if (args.length < 2) {
      console.log('Please provide a number for sine calculation.');
      process.exit();
    }
    const sine = Math.sin(Number(args[1]));
    console.log(sine);
    break;
    
  case 'cos':
    // cosine
    if (args.length < 2) {
      console.log('Please provide a number for cosine calculation.');
      process.exit();
    }
    const cosine = Math.cos(Number(args[1]));
    console.log(cosine);
    break;
    
  case 'tan':
    // tangent
    if (args.length < 2) {
      console.log('Please provide a number for tangent calculation.');
      process.exit();
    }
    const tangent = Math.tan(Number(args[1]));
    console.log(tangent);
    break;
    
  case 'random':
    // random number generation
    if (args.length < 2) {
      console.log('Provide length for random number generation.');
      process.exit();
    }
    const length = Number(args[1]);
    const randomBytes = crypto.randomBytes(length);
    console.log(randomBytes.toString("binary"));
    break;
    
  default:
    console.log('Invalid operation.');
}
