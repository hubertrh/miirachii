import Link from "next/link";
import Image from "next/image";
import logoFull from "@/assets/images/logo-full.png";

export default function HeaderLink() {
  return (
    <Link
      href={"/"}
      className="fixed left-0 top-0 h-32 w-48 px-10 transition-all duration-300 ease-out"
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
