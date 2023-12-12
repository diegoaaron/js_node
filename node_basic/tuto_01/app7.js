const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Se realizo una compra por  S/.${total}`);
    console.log(`Se compraron ${numProductos} productos`);
});

emisorProductos.emit('compra', 500, 10);
