import Image from "next/image";

export default function BackgroundPattern() {
  return (
    <>
      <div className="bg-green-primary/50 absolute top-0 left-1/2 min-h-[500px] w-full -translate-x-1/2 blur-3xl" />

      <Image
        src={"/assets/pattern.svg"}
        alt="pattern image"
        width={1920}
        height={1080}
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />
    </>
  );
}
