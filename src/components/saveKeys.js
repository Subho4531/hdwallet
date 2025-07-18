const generateKeys = require("./generateKeys");

module.exports=(mnemonic,req,res)=>{
    let walletsRaw = req.cookies.wallets;
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
  res.cookie("wallets", JSON.stringify(wallets), { maxAge:999999999999999});
}