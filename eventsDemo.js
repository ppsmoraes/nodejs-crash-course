import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Helo ' + name);
}

function goodbyeHandler(name) {
    console.log('Goodbye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
const name = 'Pablo'
myEmitter.emit('greet', name);
myEmitter.emit('goodbye', name);

// Error handling
myEmitter.on('error', (err) => {
    console.log('An error occured', err); 
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));
