import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Thirsty', () => {
  console.log('drink water');
  setTimeout(()=>{
    console.log("Please drink water fast");
  },2000);
});

console.log("Calling event thirsty");
myEmitter.emit('Thirsty');
console.log("after Calling event thirsty");
