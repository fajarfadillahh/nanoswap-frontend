import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1200px] overflow-hidden px-4 pt-[75px] xl:px-0">
      <div className="grid">
        <Image
          src="/assets/text-footer.svg"
          alt="logo text image"
          width={1200}
          height={225}
          className="h-auto w-full"
        />

        <p className="border-green-secondary/50 text-gray-primary flex h-24 items-center justify-center border-t font-medium -tracking-wider">
          © Copyrights 2025 - NanoSwap.
        </p>
      </div>
    </footer>
  );
}
