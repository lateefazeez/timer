// const args = process.argv.splice(2);

// const timer1 = () => {
//   let interval = 2;
//   for (const time of args) {
//     setTimeout(() => {
//       for (let i = 0; i < time; i++) {
//         process.stdout.write('\x07') * i;
//       }
//     }, interval);
//     interval += 1;
    
//   }
// };
// timer1();

const args = process.argv.splice(2);

const timer1 = () => {
  if (args.length === 0) return;
  let interval = args[0];

  
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 1 || Number.isNaN(args[i])) return;
    interval = args[i];
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval * 1000);
   
  }
};
timer1();
