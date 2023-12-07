const predefinedBalances = require('./models');
const iniciarComunicacao = require('./Comunication');

class Balance{
    constructor(port, config){
        this.port = port || null;
        if(typeof config == 'object') {
            this.baudRate = config.baudRate || 9600;
            this.dataBits = config.dataBits || 8;
            this.parity = config.parity || null;
            this.handshake = config.handshake || false;
            this.stopBits = config.stopBits || null;
            this.autoOpen = config.autoOpen || true;
        }else{
            predefinedBalances(config, this);
        }
    }

    comunicate(){
        const data = {
            baudRate: this.baudRate,
            dataBits: this.dataBits,
            stopBits: 1,
            parity: this.parity,
            handshake: this.handshake,
            autoOpen: this.autoOpen,
        };

        if(this.stopBits){
            data.stopBits = this.stopBits;
        }

        return iniciarComunicacao(this.port, data);
    }
}

module.exports = Balance;