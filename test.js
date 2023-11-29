const {Balance} = require('./modules');

const b = new Balance('COM3', {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    autoOpen: false,
});

async function t(){
    const d = await b.comunicate();
    console.log(d);
}

t()