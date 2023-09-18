
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    arbitrum: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gasPrice: 0
    }
  },
  compilers: {
    solc: {
      version: "0.8.7",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};

