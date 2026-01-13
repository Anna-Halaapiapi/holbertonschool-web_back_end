// node program that interacts with CLI
// 1. displays welcom message
console.log('Welcome to Holberton School, what is your name?');

let name = '';
let printedFlag = false;

// 2. reads user inputted name (both typed and piped)
process.stdin.on('data', (chunk) => {
  name += chunk;
  // 3. print name regardless of EOF or end of pipe reached to prevent hanging in test
  if (!printedFlag && name.includes('\n')) {
    console.log(`Your name is: ${name.trim()}`);
    printedFlag = true;
  }
});

// 4. handle EOF or end of pipe reached
process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    // if name was piped - print name here with exit message
    console.log('This important software is now closing');
  }
});
