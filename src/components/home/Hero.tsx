import Image from "next/image";
import HeroBackground from "/public/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative grid h-screen w-full place-items-center">
      <Image
        className="opacity-40"
        src={HeroBackground}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="z-10">
        <h1 className="text-4xl">Miirachii</h1>
      </div>
    </section>
  );
}
