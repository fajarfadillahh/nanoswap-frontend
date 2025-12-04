import BackgroundPattern from "@/components/base/BackgroundPattern";
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
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

      <div className={twMerge("h-full min-h-screen font-normal", className)}>
        {children}
      </div>

      <Footer />
    </>
  );
}
