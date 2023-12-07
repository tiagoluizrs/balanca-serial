const { SerialPort } = require('serialport');

function iniciarComunicacao(path, d) {
    const data = {
        path: path,
        ...d
    }
    var port = new SerialPort(data)
    port.write(String.fromCharCode('5'), (err) => {

    });

    port.on('error', (err) => {
        console.error('Erro na porta serial:', err.message);
    });

    return port;
}

module.exports = iniciarComunicacao