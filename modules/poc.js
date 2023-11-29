const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    autoOpen: true,
});

port.write(String.fromCharCode('5'), function (err) {
    if (err) {
        port.close();
        return console.error(err.message);
    }
});

port.once('error', function (err) {
    console.error(err.message);
    port.close();
});

port.once('data', function (data) {
    if (data != '') {
        console.log(data.toString())
        port.close();
    } else {
        port.close();
        res.json({ "peso":'0.00' });
    }
});

