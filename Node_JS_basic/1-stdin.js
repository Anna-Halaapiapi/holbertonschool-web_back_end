// node program that interacts with CLI

// 1. display welcome
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// 2. read available input from stdin (typed or piped)
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) process.stdout.write(`Your name is: ${name}`);
});

// 3. handle EOF or end of pipe
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
