const sodium = require('libsodium-wrappers');
const { createInterface } = require('node:readline/promises');

async function ready(arg) {
   if(arg === 'before') {
      console.log('closed_before1 ', process.stdin.closed);
      const rl = createInterface({ input: process.stdin, output: process.stdout });
      console.log('closed_before2 ', process.stdin.closed);
   }

   console.log('closed_ready1 ', process.stdin.closed);
   await sodium.ready;
   console.log('closed_ready2 ', process.stdin.closed);

   if(arg === 'after') {
      console.log('closed_after1 ', process.stdin.closed);
      const rl = createInterface({ input: process.stdin, output: process.stdout });
      console.log('closed_after2 ', process.stdin.closed);
   }
}
 
const arg = process.argv[2] ?? 'before';
ready(arg).then( () => {
   console.log('bye ', process.stdin.closed);
});
