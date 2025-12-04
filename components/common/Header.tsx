import { helvetica } from "@/lib/fonts";
import { Button } from "@heroui/react";
import { SquaresFourIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Header() {
  return (
    <header className="relative isolate z-50 mx-auto w-full max-w-[1200px] px-4 xl:px-0">
      <div className="flex h-24 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/assets/icon.svg"
            alt="icon"
            width={100}
            height={96}
            className="h-6 w-7"
          />

          <span className="text-xl font-bold -tracking-wider text-white">
            NanoSwap.
          </span>
        </Link>

        <ul
          className={twMerge(
            "absolute left-1/2 inline-flex -translate-x-1/2 items-center gap-8",
            helvetica.className,
          )}
        >
          {[
            ["Overview", "/"],
            ["Swap", "/swap"],
            ["Markets", "/markets"],
          ].map(([label, path], index) => (
            <li key={index}>
              <Link
                href={path}
                className="leading-[160%] font-normal text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="inline-flex items-center gap-2">
          <Button
            size="lg"
            className="glass bg-green-tertiary rounded-[18px] px-8 text-sm font-bold -tracking-wider text-white"
          >
            Connect wallet
          </Button>

          <Button
            isIconOnly
            size="lg"
            className="glass bg-green-secondary/50 rounded-[18px] text-white"
          >
            <SquaresFourIcon size={24} weight="duotone" />
          </Button>
        </div>
      </div>
    </header>
  );
}
