const generateKeys = require("./generateKeys");
const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

module.exports=(mnemonic)=>{
    let walletsRaw = localStorage.getItem("wallets");
    let wallets;
  try {
    wallets = walletsRaw ? JSON.parse(walletsRaw) : [];
    
  } catch (e) {
    console.log(e)
    wallets = [];
  }
  
  
  const keys = generateKeys(mnemonic,wallets.length);


  const wallet = { wallet_id: wallets.length, keys };
  wallets.push(wallet);
  localStorage.setItem("wallets", JSON.stringify(wallets));
}