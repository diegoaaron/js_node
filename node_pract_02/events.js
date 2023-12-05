const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data,secondData) => {
    console.log('recibido');
    console.log(data);
    console.log(secondData);
});

// emitiendo 

customEmitter.emit('response','hello word',[1,2,35]);
