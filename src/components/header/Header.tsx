import Image from "next/image";
import Nav from "./Nav";
import logoMinimal from "/public/logo-minimal.png";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 grid w-full grid-cols-3 px-6">
      {/* TODO: opacity-100 and size-32 on scroll down */}
      <div className="relative size-20 opacity-0">
        <Image
          src={logoMinimal}
          alt="Miirachii Logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <Nav />
    </header>
  );
}
