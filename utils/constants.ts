import { CHAIN_ID, BSC_CHAIN_ID } from "config";
import { AddEthereumChainParameter } from "@3rdweb/hooks"

// Chains & Icons -> https://github.com/ethereum-lists/chains/tree/master/_data

interface t {
  [key: number]: AddEthereumChainParameter;
}

export const addNetowrkMetadata: t = {
  [BSC_CHAIN_ID]: {
    chainId: `0x${BSC_CHAIN_ID.toString(16)}`,
    chainName: "Binance Smart Chain",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com/"],
    iconUrls: [""], // Add actual icon URLs for BSC
  }
}

export const networkMetadata = {}
