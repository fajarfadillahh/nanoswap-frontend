import { space } from "@/lib/fonts";
import { Head, Html, Main, NextScript } from "next/document";
import { twMerge } from "tailwind-merge";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={twMerge(
          `bg-green-tertiary relative isolate overflow-x-hidden text-white antialiased`,
          space.className,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
