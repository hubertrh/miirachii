import Image from "next/image";
import { getBrandInfo } from "../../../sanity/groqGetters/getBrandInfo";
import SocialLinks from "../ui/SocialLinks";
import NavDesktop from "./NavDesktop";

export default async function Header() {
  const brandInfo = await getBrandInfo();

  return (
    // FIXME: Change it for the Logo from layout to be fully clickable
    <>
      <header className="absolute">
        <NavDesktop />
        <SocialLinks />
      </header>
    </>
  );
}
