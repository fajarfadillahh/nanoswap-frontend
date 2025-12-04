import BackgroundPattern from "@/components/common/BackgroundPattern";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LayoutProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <Header />
      <BackgroundPattern />

      <div
        className={twMerge(
          "relative h-full min-h-screen font-normal",
          className,
        )}
      >
        {children}
      </div>

      <Footer />
    </>
  );
}
