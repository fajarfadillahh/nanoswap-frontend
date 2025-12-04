import {
  CoinVerticalIcon,
  LightningIcon,
  LockKeyIcon,
} from "@phosphor-icons/react";

export const supppotedCoin = [
  {
    id: crypto.randomUUID(),
    name: "Bitcoin",
    image: "/assets/coins/coin-1.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Ethereum",
    image: "/assets/coins/coin-2.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Tether USD",
    image: "/assets/coins/coin-3.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Ripple",
    image: "/assets/coins/coin-4.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Binance",
    image: "/assets/coins/coin-5.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Solana",
    image: "/assets/coins/coin-6.png",
  },
  {
    id: crypto.randomUUID(),
    name: "USD Coin",
    image: "/assets/coins/coin-7.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Tronix",
    image: "/assets/coins/coin-8.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Doge Coin",
    image: "/assets/coins/coin-9.png",
  },
  {
    id: crypto.randomUUID(),
    name: "Cardano",
    image: "/assets/coins/coin-10.png",
  },
];

export const features = [
  {
    id: crypto.randomUUID(),
    title: "Rock-Solid Security",
    description:
      "Every transaction is protected by end-to-end protection, secure smart routing, and a 24/7 system. You can swap without thinking, 'Is it safe?', because it is safe.",
    icon: LockKeyIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "Fee feels Make Sense",
    description:
      "Super low fees with no hidden BS. NanoSwap finds the most efficient route so you get the optimal swap without draining your wallet. Economical yet fast.",
    icon: CoinVerticalIcon,
  },
  {
    id: crypto.randomUUID(),
    title: "Lightning-Level Execution",
    description:
      "NanoSwap gets you to your destination without delay. The NanoSwap engine is designed for maximum speed—so you don't have to wait long.",
    icon: LightningIcon,
  },
];
