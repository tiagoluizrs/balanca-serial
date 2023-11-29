const predefinedBalances = (type, instance) => {
    switch(type){
        case 'ALFA':
            instance.baudRate = 9600;
            instance.dataBits = 8;
            instance.parity = 'none';
            instance.stopBits = 'none';
            instance.handshake = false;
            instance.lock = true;
            instance.autoOpen = true;
            break;
        case 'FILIZOLA':
            instance.baudRate = 9600;
            instance.dataBits = 8;
            instance.parity = 'none';
            instance.stopBits = 'none';
            instance.handshake = false;
            instance.lock = true;
            instance.autoOpen = true;
            break;
        case 'TOLEDO':
            instance.baudRate = 2400;
            instance.dataBits = 8;
            instance.parity = 'none';
            instance.stopBits = 'none';
            instance.handshake = false;
            instance.lock = true;
            instance.autoOpen = true;
            break;
        case 'URANO 31/2 POP S':
            instance.baudRate = 9600;
            instance.dataBits = 8;
            instance.parity = 'none';
            instance.stopBits = 1;
            instance.handshake = false;
            instance.lock = true;
            instance.autoOpen = true;
            break;
        default:
            throw new Error('Invalid Scale Type. Select an existent scale or pass a config object. {baudRate: Number, dataSize: Number, parity: Number, handshake: Boolean}');
    }
}

export default predefinedBalances;