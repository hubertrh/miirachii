import Image from "next/image";
import heroBackground from "/public/hero-bg.jpg";
import { getBrandInfo } from "../../../sanity/groqGetters/getBrandInfo";

export default async function Hero() {
  const brandInfo = await getBrandInfo();

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
            src={brandInfo.logos.logoFull.url}
            alt="Miirachii Logo"
            placeholder="blur"
            blurDataURL={brandInfo.logos.logoFull.metadata.lqip}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="h-0.5 w-16 bg-primary" />
        <h1 className="text-6xl text-primary">Your Story, Beautifully Told</h1>
      </div>
    </section>
  );
}
