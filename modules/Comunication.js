const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

function iniciarComunicacao(path, d) {
    const data = {
        path: path,
        ...d
    }
    return new Promise((resolve, reject) => {
        const port = new SerialPort(data);
        const openPort = () => {
            port.open((err) => {
                if (err) {
                    reject(`Erro ao abrir a porta serial: ${err.message}`);
                }
            });
        };

        const closePort = () => {
            port.close((err) => {
                if (err) {
                    console.error('Erro ao fechar a porta serial:', err.message);
                }
            });
        };

        port.write(String.fromCharCode('5'), (err) => {
            if (err) {
                closePort();
                reject(err.message);
            }
        });

        port.once('data', (data) => {
            if (data && data.length > 0) {
                const dataString = data.toString();
                closePort();
                resolve(dataString);
            } else {
                closePort();
                resolve({ peso: '0.00' });
            }
        });

        port.on('error', (err) => {
            console.error('Erro na porta serial:', err.message);
            closePort();
            reject(err.message);
        });

        openPort();
    });
}

module.exports = iniciarComunicacao