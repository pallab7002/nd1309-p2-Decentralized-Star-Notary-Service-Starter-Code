const Web3 = require("web3");
let web3 = new Web3(
  "https://goerli.infura.io/v3/9cc745465e89417b8949cd8e9b2b553c"
);
web3.eth.getChainId().then(function (chainId) {
  console.log(chainId);
});

