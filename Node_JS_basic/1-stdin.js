// node program that interacts with CLI
// 1. displays welcom message
console.log('Welcome to Holberton School, what is your name?');

// 2. reads user inputted name (both typed and piped)
let name = '';
process.stdin.on('data', (chunk) => {
  name += chunk;
  // if name was typed in interactive mode - print name
  if (process.stdin.isTTY) {
    console.log(`Your name is: ${name.trim()}`)
  }
});

// 3. handle EOF or end of pipe reached
process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    // if name was piped - print name here with exit message
    console.log(`Your name is: ${name.trim()}`)
    console.log('This important software is now closing');
  }
});
