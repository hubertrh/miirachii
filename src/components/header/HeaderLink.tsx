import Link from "next/link";
import Image from "next/image";
import logoFull from "@/assets/images/logo-full.png";

export default function HeaderLink() {
  return (
    <Link
      href={"/"}
      className="fixed left-0 top-0 z-10 h-32 w-36 px-6 transition-all duration-300 ease-out hover:scale-95"
    >
      <div className="relative size-full">
        <Image
          src={logoFull}
          alt="Miirachii"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </Link>
  );
}
