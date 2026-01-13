// node program that interacts with CLI

// 1. displays welcom message
console.log('Welcome to Holberton School, what is your name?');

// 2. reads user inputted name (both typed and piped)
let name = '';
process.stdin.on('data', (chunk) => {
  name += chunk;
  // 3. if typed name - process here
  if (process.stdin.isTTY) {
    console.log(`Your name is: ${name}`);
  }
});

// 4. print exit message when program ends (user exits manually or pipe finishes)
process.stdin.on('end', () => {
  // if piped name - process here
  if (!process.stdin.isTTY) {
    console.log(`Your name is: ${name}`);
  }
  console.log('This important software is now closing');
});
