/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: {
    compilers:[
      {version:"0.8.19"},
      {version:"0.8.20"}
    ]
    },
    paths:{
      artifacts: "./src/backend/artifacts",
      sources: "./src/backend/contracts",
      tests: "./src/backend/tests",
      cache: "./src/backend/cache"
    }
};
