import Layout from "@/components/wrapper/Layout";
import { helvetica } from "@/lib/fonts";
import { features, supppotedCoin } from "@/lib/site";
import { Button } from "@heroui/react";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout>
      <section className="wrapper relative isolate flex items-start justify-between p-[64px_0_75px]">
        <div className="grid gap-10">
          <div className="grid gap-4">
            <h1 className="text-7xl leading-[100%] font-bold -tracking-wider text-white">
              <span className="bg-green-tertiary relative isolate rounded-[18px] px-3">
                Next-Gen
              </span>
              Crypto Swapping Starts Here
              <span className="text-green-primary">.</span>
            </h1>

            <p
              className={twMerge(
                "text-gray-primary max-w-[550px] text-lg leading-[160%] font-normal",
                helvetica.className,
              )}
            >
              Experience NanoSwap: secure transactions, ultra-low costs, and
              instant execution wrapped in one smooth interface. Future-proof
              your moves.
            </p>
          </div>

          <div className="inline-flex items-center gap-2">
            <Button
              size="lg"
              endContent={<SparkleIcon weight="duotone" size={16} />}
              onPress={() => router.push("/swap")}
              className="glass bg-green-secondary/50 rounded-[18px] px-8 text-sm font-bold -tracking-wider text-white"
            >
              Swap coin here
            </Button>

            <Button
              variant="bordered"
              size="lg"
              endContent={<ArrowRightIcon weight="bold" size={16} />}
              onPress={() => router.push("/markets")}
              className="border-green-secondary/50 rounded-[18px] px-8 text-sm font-bold -tracking-wider text-white"
            >
              See markets
            </Button>
          </div>
        </div>

        <Image
          src={"/assets/images/img-1.png"}
          alt="hero img"
          width={1000}
          height={1000}
          className="size-[520px]"
        />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative isolate flex size-[115px] items-center justify-center">
            <Image
              src={"/assets/circle-text.svg"}
              alt="scroll icon"
              width={200}
              height={200}
              className="text-spin"
            />

            <ArrowDownIcon
              weight="bold"
              size={24}
              className="absolute text-white"
            />
          </div>
        </div>
      </section>

      <section className="wrapper grid justify-items-center gap-6 py-[75px]">
        <h2 className="text-[32px] font-bold -tracking-wider">
          Supported coin<span className="text-green-primary">.</span>
        </h2>

        <div className="flex items-center gap-1">
          {supppotedCoin.slice(0, 6).map((coin) => (
            <div
              key={coin.id}
              className="inline-flex items-center gap-2 px-4 py-2"
            >
              <Image
                src={coin.image}
                alt={`coin ${coin.name} image`}
                width={100}
                height={100}
                className="size-8 rounded-full"
              />

              <span className="text-2xl font-bold -tracking-wider">
                {coin.name}
              </span>
            </div>
          ))}
        </div>

        <Link
          href={"/"}
          className={twMerge(
            "group inline-flex items-center gap-2 text-lg font-normal text-white hover:underline",
            helvetica.className,
          )}
        >
          And many more
          <ArrowRightIcon
            weight="bold"
            size={16}
            className="transition-all group-hover:translate-x-2"
          />
        </Link>
      </section>

      <section className="wrapper relative isolate grid gap-[72px] py-[75px]">
        <div className="grid justify-items-center gap-6">
          <div className="glass bg-green-secondary/50 inline-flex w-max items-center gap-2 rounded-full px-6 py-2 text-white uppercase">
            <span className="text-sm font-bold -tracking-wider">Feature</span>
            <SparkleIcon weight="duotone" size={16} />
          </div>

          <h2 className="text-center text-[68px] leading-[100%] font-bold -tracking-wider">
            Built for Speed
            <span className="text-green-primary">.</span>
            <br />
            Designed for Trust
            <span className="text-green-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 items-start gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid gap-8 rounded-[18px] p-8 ${index === 1 ? "glass bg-green-secondary/50" : "border-green-secondary/50 border"}`}
            >
              <feature.icon
                weight="duotone"
                size={74}
                className="text-green-primary"
              />

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl leading-[100%] font-bold -tracking-wider">
                  {feature.title}
                  <span className="text-green-primary">.</span>
                </h3>

                <p
                  className={twMerge(
                    "text-gray-primary font-normal",
                    helvetica.className,
                  )}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-secondary/50 absolute top-0 -right-1/2 -z-10 size-[500px] rounded-full blur-3xl" />
      </section>

      <section className="bg-green-primary/3 py-[75px]">
        <div className="wrapper grid grid-cols-[1fr_590px] items-center">
          <Image
            src={"/assets/images/img-2.png"}
            alt="discover img"
            width={1000}
            height={1000}
            className="size-[520px]"
          />

          <div className="grid gap-4">
            <div className="glass bg-green-secondary/50 inline-flex w-max items-center gap-2 rounded-full px-6 py-2 text-white uppercase">
              <span className="text-sm font-bold -tracking-wider">
                Discover
              </span>
              <RocketLaunchIcon weight="duotone" size={16} />
            </div>

            <h2 className="text-[68px] leading-[100%] font-bold -tracking-wider">
              NanoSwap<span className="text-green-primary">.</span> → Secure,
              Cheap, Fast<span className="text-green-primary">.</span>
            </h2>

            <p
              className={twMerge(
                "text-gray-primary max-w-[550px] text-lg leading-[160%] font-normal",
                helvetica.className,
              )}
            >
              NanoSwap offers everyone the opportunity to swap coins without the
              hassle, an experience that will serve as a reminder in the future
              that you've grown.
            </p>

            <Button
              size="lg"
              endContent={<SparkleIcon weight="duotone" size={16} />}
              onPress={() => router.push("/swap")}
              className="glass bg-green-secondary/50 mt-[26px] w-max rounded-[18px] px-8 text-sm font-bold -tracking-wider text-white"
            >
              Swap coin here
            </Button>
          </div>
        </div>
      </section>

      <section className="wrapper py-[75px]">
        <div className="relative isolate flex h-[420px] items-center justify-center overflow-hidden rounded-[18px]">
          <Image
            src={"/assets/images/cta-background.png"}
            alt="backgroud image"
            width={1920}
            height={1080}
            className="absolute top-0 left-0 h-full w-full object-cover object-left"
          />

          <div className="relative grid justify-items-center gap-1 text-center">
            <h2 className="text-5xl leading-[100%] font-bold -tracking-wider">
              Stay Ahead in the Market
            </h2>

            <p
              className={twMerge(
                "text-gray-primary text-lg leading-[160%] font-normal",
                helvetica.className,
              )}
            >
              Spot trends, track price action, and never miss a move in the
              crypto jungle.
            </p>

            <Button
              size="lg"
              endContent={<ArrowRightIcon weight="bold" size={16} />}
              onPress={() => router.push("/swap")}
              className="text-green-tertiary mt-7 w-max rounded-[18px] bg-white px-8 text-sm font-bold -tracking-wider"
            >
              Swap coin here
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
