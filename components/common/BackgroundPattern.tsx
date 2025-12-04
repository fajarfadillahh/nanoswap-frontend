import Aurora from "@/components/common/Aurora";
import Image from "next/image";

export default function BackgroundPattern() {
  return (
    <>
      <Image
        src={"/assets/pattern.svg"}
        alt="pattern image"
        width={1920}
        height={1080}
        className="absolute top-0 left-0"
      />

      <Aurora
        colorStops={["#52B788", "#52B788", "#52B788"]}
        blend={0.5}
        amplitude={0.5}
        speed={2}
        className="absolute top-0 left-0 -z-10 h-[1200px] w-full"
      />
    </>
  );
}
