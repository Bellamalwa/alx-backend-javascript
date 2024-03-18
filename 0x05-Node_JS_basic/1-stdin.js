// Gets input from user and writes it to stdout
process.stdin.setEncoding('utf-8'); // set encoding to utf-8

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read(); // read input from stdin
  if (name) process.stdout.write(`Your name is: ${name}`);
});
/**
 * If stdout process in stream comes from the terminal, end the process
 * with a message
 */
process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
