const bip39 = require("bip39");

module.exports= () =>{
    const mnemonic = bip39.generateMnemonic().split(" ");
    return mnemonic ;
    

   }

