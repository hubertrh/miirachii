import Image from "next/image";
import Nav from "./Nav";
import LogoMinimal from "/public/logo-minimal.png";

export default function Header() {
  return (
    <header className="fixed top-0 grid w-full grid-cols-3 px-6">
      {/* TODO: opacity-100 on scroll down */}
      <Image
        className="opacity-0"
        src={LogoMinimal}
        alt="Miirachii Logo"
        width={128}
        height={128}
      />
      <Nav />
    </header>
  );
}
