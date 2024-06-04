import Image from "next/image";
import heroBackground from "/public/hero-bg.jpg";
import { getBrandInfo } from "../../../sanity/groqGetters/getBrandInfo";

type HeroProps = {
  variant?: "home" | "about" | "services" | "portfolio" | "contact";
};

export default async function Hero({ variant = "home" }: HeroProps) {
  const brandInfo = await getBrandInfo();

  let hook = "";

  if (variant === "home") {
    hook = "Your Story, Beautifully Told";
  } else if (variant === "about") {
    hook = "Get to Know Me";
  } else if (variant === "services") {
    hook = "What I Can Do for You";
  } else if (variant === "portfolio") {
    hook = "My Work, Beautifully Done";
  } else if (variant === "contact") {
    hook = "Let's Connect";
  }

  // const hook = "Your Story, Beautifully Told";
  const hookParts = hook.split(" ");

  return (
    <section className="relative z-10 grid h-svh w-full place-items-center bg-background">
      <Image
        className="opacity-40"
        src={heroBackground}
        alt="Hero Background"
        priority
        placeholder="blur"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="z-20 flex flex-col items-center gap-8">
        <div className="relative size-64 transition-all duration-300 hover:scale-102">
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
        </div>
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
