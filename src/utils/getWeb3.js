import Web3 from 'web3'

let getWeb3 = new Promise(function (resolve, reject) {
	// Wait for loading completion before loading web3, to be sure it's
	// already injected
	window.addEventListener('load', function () {
		var results
		var web3 = window.ethereum
		// Checking if Web3 has been injected by the browser MetaMask
		if (typeof web3 !== 'undefined') {
			// Use MetaMask's provider.
			console.log("web3.currentProvider", web3)
			web3 = new Web3(web3)

			results = {
				web3: web3
			}
			console.log('Injected web3 detected.', results);
			resolve(results)
		} else {
			alert("ok")
			// If no web3 is detected, then the local web3 provider is loaded.
			// var provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
			// web3 = new Web3(provider)
			// results = {
			// 	web3: web3
			// }
			// console.log('No web3 instance injected, using Local web3.');
			// resolve(results)
		}
	})
})

export default getWeb3
