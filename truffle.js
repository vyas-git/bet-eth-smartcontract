var WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
var goerliPrivateKey = new Buffer("dee237f41369adae7cbf4cbff3b26a0759b307eafcaa431ce79e9913e80bb2dd", "hex");
var goerliWallet = Wallet.fromPrivateKey(goerliPrivateKey);
var goerliProvider = new WalletProvider(goerliWallet, "https://goerli.infura.io/v3/eb89e20105b44988becedc298bc4c70e");

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	networks: {

		goerli: {
			provider: goerliProvider,
			network_id: 5
		}
	}, compilers: {
		solc: {
			version: "^0.8.0"
		}
	}
};
