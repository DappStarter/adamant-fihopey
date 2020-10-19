require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth often code hunt lobster furnace gentle'; 
let testAccounts = [
"0x7f6a4cddc559fdebcf3fbf4d5241b1beb988d5f008d75d7adec1c99f62fbef11",
"0xf5ac04c654fb512247b998abef4a842040ef42fc8e4a2392b00f1f473394d086",
"0xa3f3ca709c9cc0220f0a3d1946b963cde2c11cfac1cebb5f586f8c5ac019f527",
"0x47b47d70b962f45b9b3001567ff63d8a01c5209002efa8c23fe4165f6efb0327",
"0xf50525c807387c344aabbc8df6d02a18ef5bdff37b4533f00343efb4e9c1e03f",
"0xaa1e773e61b9a42d98d675ffac1e614e2c325c3630b0e220e2639cd2a1a8d564",
"0xbe0d6c3fd329e82aaa7bee746dd58e6190cb65c78c9ac238902e2b80e87e0786",
"0xe1470cb0657a24b4d535cf69a3cdc220b1eb5fdce525aa0440cd7096f419b07a",
"0x69c4808092fed47a5bfbd23d81e949b370e6ffc463ba3e677e35015d8831a32a",
"0x528dc99234f840d917fe5c8e4c3f9509c0af835d4c83126b8d86b860aa9c8ee8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
