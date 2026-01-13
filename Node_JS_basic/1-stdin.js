// node program that interacts with CLI

// 1. displays welcom message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// 2. read piped or typed name and print
process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

// 3. if name  is piped display exit msg
if (!process.stdin.isTTY) {
  process.stdout.write('This important software is now closing\n');
};

// 4. force close to prevent hang
process.exit(0);
});
