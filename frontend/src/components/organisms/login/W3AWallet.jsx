import React from "react";
import { Web3Auth } from "@web3auth/modal";

const W3AWallet = () => {
  // Initialize within useEffect()
  const web3auth = new Web3Auth({
    clientId:
      "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ", // Get your Client ID from the Web3Auth Dashboard
    web3AuthNetwork: "sapphire_mainnet", // Web3Auth Network
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x1",
      rpcTarget: "https://rpc.ankr.com/eth",
      displayName: "Ethereum Mainnet",
      blockExplorer: "https://goerli.etherscan.io",
      ticker: "ETH",
      tickerName: "Ethereum",
    },
  });

  return <div></div>;
};

export default W3AWallet;
