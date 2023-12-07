const {Balance} = require('./modules');

const b = new Balance('COM3', {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    autoOpen: true,
});

async function t(){
    const port = b.comunicate();
    port.on("open", function () {
        port.on('data', function(data) {
            const dataString = data.toString();
            console.log(dataString)
        });
    });

    // Use port.getPrice() para pegar o preço;
}

t()