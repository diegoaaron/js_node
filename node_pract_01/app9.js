const estatusPedido = () => {
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso! Su pizza esta en camino.');
        } else {
            reject('Pedido con error... Por favor intente nuevamente...');
        }
    },2000);
});

// funciones que manejaran el cumplimiento o rechazo de la promesa.

/*
const manejarPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
}

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}

miPedidoDePizza.then(manejarPedido,rechazarPedido);


otra forma

 miPedidoDePizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });
*/

miPedidoDePizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });
