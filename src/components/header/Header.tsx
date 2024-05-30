import Image from "next/image";
import { getBrandInfo } from "../../../sanity/groqGetters/getBrandInfo";
import SocialLinks from "../ui/SocialLinks";
import NavDesktop from "./NavDesktop";

export default async function Header() {
  const brandInfo = await getBrandInfo();

  return (
    <header className="fixed top-0 z-20 grid w-full grid-cols-5 px-6">
      {/* TODO: opacity-100 and size-32 on scroll down */}
      <div className="relative size-20 opacity-0">
        <Image
          src={brandInfo.logos.logoMinimal.url}
          alt="Miirachii Logo"
          priority
          placeholder="blur"
          blurDataURL={brandInfo.logos.logoMinimal.metadata.lqip}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <NavDesktop />
      <SocialLinks />
    </header>
  );
}
