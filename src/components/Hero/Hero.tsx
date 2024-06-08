import Image from "next/image";
import { getBrandInfo } from "../../../sanity/groqGetters/getBrandInfo";
import Link from "next/link";

type HeroProps = {
  hook: string;
};

export default async function Hero({ hook }: HeroProps) {
  const brandInfo = await getBrandInfo();
  const hookParts = hook.split(" ");

  return (
    <section className="relative z-10 grid h-svh w-full place-items-center bg-background">
      <Image
        src={brandInfo.heroImage.image.url}
        alt="Hero Background"
        priority
        placeholder="blur"
        blurDataURL={brandInfo.heroImage.image.metadata.lqip}
        fill
        style={{
          objectFit: "cover",
          opacity: `0.${brandInfo.heroImage.opacity}`,
        }}
      />
      <div className="z-20 flex flex-col items-center gap-8">
        <Link
          href={"/"}
          className="relative size-64 transition-all duration-300 hover:scale-102"
        >
          <Image
            src={brandInfo.logos.logoFull.url}
            alt="Miirachii Logo"
            priority
            placeholder="blur"
            blurDataURL={brandInfo.logos.logoFull.metadata.lqip}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
        <div className="h-0.5 w-16 bg-primary" />
        <h1 className="select-none text-6xl text-primary">
          {hookParts.map((part) => (
            <span
              key={part}
              className="mx-2 inline-block transition-all duration-300 hover:text-accent"
            >
              {part}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
