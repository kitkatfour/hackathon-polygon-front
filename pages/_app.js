import "@rainbow-me/rainbowkit/styles.css";

import "../styles/globals.css";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { createClient, WagmiProvider } from "wagmi";

const mumbaiTestnet = {
  id: 80001,
  name: "Mumbai Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://rpc-mumbai.maticvigil.com",
  },
  blockExplorers: {
    default: {
      name: "Mumbai Explorer",
      url: "https://mumbai.polygonscan.com/",
    },
  },
  testnet: true,
};

const polygon = {
  id: 137,
  name: "Polygon",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://polygon-rpc.com",
  },
  blockExplorers: {
    default: {
      name: "Polygon Explorer",
      url: "https://polygonscan.com/",
    },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [mumbaiTestnet, polygon],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "Wooy",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider showRecentTransactions={true} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}

export default MyApp;
