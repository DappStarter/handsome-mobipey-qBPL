require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember pupil give entire bone velvet'; 
let testAccounts = [
"0x29940bea3e3910b7c24ad1acaa08dd43e88814cbbb8b29e0eeaf5a028dbb2c85",
"0x3fac21efa65f7b9f8cc3411fda3140e5a8365c25948adc8900d02dd95a61a2e6",
"0xbc19546d02d7db7187cac20dc650d049b59dbd1e46e15e2015be202d7fa8c939",
"0xee07b16006e80d55483b45fcc84a370332f90ed6dd3f1388416329aeb496e64b",
"0xacdeb66b8731369629cf74cb54ad16758ac32e0af5e33eae31478d746f9adc70",
"0xe3584544bb33b02a555dda46e9488680a76fc1d6ef62751e51b213adced92573",
"0x14c7946622bce8257390b9135e7c41eaf39518e2cd7a4ff26a2e7fdacfd18126",
"0x81e0f88e16f2663593ff55b5e015174eeb49fd3814b2e2f315bdc4f08975c855",
"0x08daa8054b7cb2269dd7fd5a9431b4907ffbef6abc44a2c079d3fc9af1a8cc89",
"0xc3496740a7c2eb0290cf2ec1154008fe7e47040624db60ff253e19f33f148573"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

