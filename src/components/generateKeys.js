const nacl = require("tweetnacl");
const bip39 = require("bip39");
const derivePath = require("ed25519-hd-key").derivePath;
const { Keypair } = require("@solana/web3.js");
const bs58 = require("bs58");


module.exports = (mnemonic,wallet_no) => {
  const path = `m/44'/501'/${wallet_no}'/0'`; 
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  
  const secret = Buffer.from(derivedSeed);
  const keypair = Keypair.fromSeed(secret);

  const secretKey = bs58.encode(keypair.secretKey);
  const publicKey = keypair.publicKey.toBase58();

  return {secretKey:secretKey,
     publicKey:publicKey};
};
