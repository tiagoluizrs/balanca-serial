import predefinedBalances from "./models";

class Balance{
    constructor(config){
        if(typeof config == 'object') {
            this.baudRate = config.baudRate || 9600;
            this.dataBits = config.dataBits || 8;
            this.parity = config.parity || null;
            this.handshake = config.handshake || false;
            this.stopBits = config.stopBits || null;
            this.lock = config.lock || true;
            this.autoOpen = config.autoOpen || true;
        }else{
            predefinedBalances(config, this);
        }
    }
}

export default Balance;