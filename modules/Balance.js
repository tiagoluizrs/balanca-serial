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

    async comunicate(){
        const data = {
            baudRate: this.baudRate,
            dataBits: this.dataBits,
            stopBits: 1,
            parity: this.parity,
            handshake: this.handshake,
            autoOpen: false,
        };

        if(this.stopBits){
            data.stopBits = this.stopBits;
        }

        try {
            const d = await iniciarComunicacao(this.port, data);
            return d;
        } catch (error) {
            console.error('Erro:', error);
            return 0;
        }
    }
}

module.exports = Balance;