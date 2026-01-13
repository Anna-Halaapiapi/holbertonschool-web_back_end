// node program that interacts with CLI

// 1. displays welcom message
console.log('Welcome to Holberton School, what is your name?');

// 2. reads user inputted name (both typed and piped)
let name = '';
process.stdin.on('data', (chunk) => {
  name += chunk;
});

// 3. print name upon user manually exiting program of end of pipe reached
process.stdin.on('end', () => {
  console.log(`Your name is: ${name}`)
  // 4. if piped name - also print the exit msg
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
