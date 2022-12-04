var WalletProvider = require("@truffle/hdwallet-provider");
var goerliProvider = new WalletProvider({ privateKeys: ["YOUR_PRIVATE_KEY"], providerOrUrl: `wss://goerli.infura.io/ws/v3/${YOUR - INFURA - API - KEY}` });

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
