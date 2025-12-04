import SpotlightCard from "@/components/common/SpotlightCard";
import Layout from "@/components/wrapper/Layout";
import { helvetica } from "@/lib/fonts";
import { markets } from "@/lib/site";
import { Button, Input } from "@heroui/react";
import {
  ArrowRightIcon,
  CoinVerticalIcon,
  FlameIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function MarketsPage() {
  const tableHead = [
    "Token",
    "Price",
    "24h Change",
    "24h Volume",
    "market cap",
  ];

  return (
    <Layout>
      <section className="wrapper p-[72px_0_50px]">
        <div className="mx-auto grid w-full max-w-[485px] gap-6">
          <div className="grid gap-1 text-center">
            <h1 className="text-5xl leading-[100%] font-bold -tracking-wider text-white">
              Explore the ecosystem
            </h1>

            <p
              className={twMerge(
                "text-gray-primary max-w-[550px] text-lg leading-[160%] font-normal",
                helvetica.className,
              )}
            >
              Track every move in the crypto jungle.
            </p>
          </div>

          <Input
            type="text"
            size="lg"
            labelPlacement="outside"
            placeholder="Search coin or token..."
            startContent={
              <MagnifyingGlassIcon
                weight="duotone"
                size={22}
                className="text-green-tertiary"
              />
            }
            classNames={{
              input: `${helvetica.className} font-normal placeholder:text-green-tertiary`,
              inputWrapper: "rounded-[18px]",
            }}
            className="text-green-tertiary"
          />
        </div>
      </section>

      <section className="wrapper grid gap-6 py-[50px]">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2">
            <FlameIcon weight="duotone" size={32} className="text-red-500" />

            <h3 className="text-2xl font-bold -tracking-wider">Gainers coin</h3>
          </div>

          <Link
            href={"/"}
            className={twMerge(
              "group inline-flex items-center gap-2 font-normal text-white hover:underline",
              helvetica.className,
            )}
          >
            View more
            <ArrowRightIcon
              weight="bold"
              size={16}
              className="transition-all group-hover:translate-x-2"
            />
          </Link>
        </div>

        <div className="grid grid-cols-4 items-start gap-5">
          {markets.gainers.map((coin) => (
            <SpotlightCard
              key={coin.id}
              className="border-green-secondary/50 bg-green-primary/3 grid gap-6 rounded-[18px] border p-8 backdrop-blur-md hover:cursor-pointer"
            >
              <div className="inline-flex items-center gap-4">
                <Image
                  src={coin.image}
                  alt={`${coin.token} image`}
                  width={100}
                  height={100}
                  className="size-12"
                />

                <div className="grid">
                  <h4 className="text-xl leading-[100%] font-bold -tracking-wider">
                    {coin.token}
                  </h4>

                  <p
                    className={twMerge(
                      "text-gray-primary text-lg leading-[160%] font-normal",
                      helvetica.className,
                    )}
                  >
                    {coin.symbol}
                  </p>
                </div>
              </div>

              <div className={twMerge("font-normal", helvetica.className)}>
                <h4
                  className={`text-[22px] ${coin.change_24h > 0 ? "text-green-primary" : "text-red-500"}`}
                >
                  {coin.change_24h > 0
                    ? `+${coin.change_24h}`
                    : `-${coin.change_24h}`}
                </h4>

                <p className="font-medium text-white">{coin.price}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="wrapper grid gap-6 p-[50px_0_75px]">
        <div className="inline-flex items-center gap-2">
          <CoinVerticalIcon
            weight="duotone"
            size={32}
            className="text-green-primary"
          />

          <h3 className="text-2xl font-bold -tracking-wider">
            Markets overview
          </h3>
        </div>

        <div className="grid gap-2">
          <div className="border-green-secondary/50 grid grid-cols-[1fr_repeat(4,150px)] gap-5 border-b pb-6">
            {tableHead.map((data, index) => (
              <p
                key={index}
                className={twMerge(
                  `text-right text-lg font-normal text-white ${index === 0 && "text-left"}`,
                  helvetica.className,
                )}
              >
                {data}
              </p>
            ))}
          </div>

          <div className="grid gap-1.5">
            {markets.market_overview.map((coin) => (
              <SpotlightCard
                key={coin.id}
                className="grid grid-cols-[1fr_max-content] gap-5 rounded-[18px] p-[10px_12px] hover:cursor-pointer"
              >
                <div className="inline-flex items-center gap-4">
                  <Image
                    src={coin.image}
                    alt={`${coin.token} image`}
                    width={100}
                    height={100}
                    className="size-12 rounded-full"
                  />

                  <div className="grid">
                    <h4 className="text-xl leading-[100%] font-bold -tracking-wider">
                      {coin.token}
                    </h4>

                    <p
                      className={twMerge(
                        "text-gray-primary text-lg leading-[160%] font-normal",
                        helvetica.className,
                      )}
                    >
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                <div
                  className={twMerge(
                    "grid grid-cols-[repeat(4,150px)] items-center gap-5 text-right font-normal",
                    helvetica.className,
                  )}
                >
                  <p className="text-white">${coin.price}</p>

                  <p
                    className={
                      coin.change_24h > 0
                        ? "text-green-primary"
                        : "text-red-500"
                    }
                  >
                    {coin.change_24h > 0
                      ? `+${coin.change_24h}`
                      : `-${coin.change_24h}`}
                  </p>

                  <p className="text-white">{coin.volume_24h}</p>

                  <p className="text-white">{coin.market_cap}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          className="text-green-tertiary w-max justify-self-center rounded-[18px] bg-white px-16 text-sm font-bold -tracking-wider"
        >
          Load more
        </Button>
      </section>
    </Layout>
  );
}
