const sodium = require('libsodium-wrappers');
const { createInterface } = require('node:readline/promises');

console.log('closed1 ', process.stdin.closed);
const rl = createInterface({ input: process.stdin, output: process.stdout });
console.log('closed2 ', process.stdin.closed);


async function ready() {
   console.log('closed3 ', process.stdin.closed);
   await sodium.ready;
   console.log('closed4 ', process.stdin.closed);
}

ready().then( () => {
   console.log('closed5 ', process.stdin.closed);
   console.log('bye');
});
