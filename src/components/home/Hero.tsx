import Image from "next/image";
import heroBackground from "/public/hero-bg.jpg";
import logoFull from "/public/logo-full.png";

export default function Hero() {
  return (
    <section className="relative grid h-svh w-full place-items-center">
      <Image
        className="opacity-40"
        src={heroBackground}
        alt="Hero Background"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="z-10 flex flex-col items-center gap-8">
        <div className="relative size-64">
          <Image
            src={logoFull}
            alt="Miirachii Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="h-0.5 w-20 bg-primary" />
        <h1 className="text-6xl text-primary">Your Story, Beautifully Told</h1>
      </div>
    </section>
  );
}
