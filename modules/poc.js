const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    autoOpen: false,
})

// Função para abrir a porta serial
function openPort() {
    port.open((err) => {
        if (err) {
            console.error('Erro ao abrir a porta serial:', err.message);
        } else {
            console.log(`Conexão estabelecida com COM3`);
        }
    });
}

function closePort() {
    port.close((err) => {
        if (err) {
            console.error('Erro ao fechar a porta serial:', err.message);
        } else {
            console.log('Porta serial fechada');
        }
    });
}

port.write(String.fromCharCode('5'), function (err) {
    if (err) {
        closePort();
        return console.error(err.message);
    }
});

port.once('data', (data) => {
    if (data != '') {
        console.log(data.toString())
        closePort();
    } else {
        console.log({ "peso":'0.00' });
        closePort();
    }
});

port.on('error', (err) => {
    console.error('Erro na porta serial:', err.message);
    closePort();
});

openPort();
