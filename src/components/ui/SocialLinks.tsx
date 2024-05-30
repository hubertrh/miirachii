import Image from "next/image";
import instagramIcon from "/public/icons/instagram.svg";
import instagramAccentIcon from "/public/icons/instagram-accent.svg";
import linkedinIcon from "/public/icons/linkedin.svg";
import linkedinAccentIcon from "/public/icons/linkedin-accent.svg";
import Link from "next/link";

type SocialLinksProps = {
  variant?: "header" | "footer";
};

export default function SocialLinks({ variant = "header" }: SocialLinksProps) {
  return (
    <div className="fixed right-12 top-0 z-20 flex h-20 items-center justify-center">
      <div className="flex items-center justify-center gap-5">
        <Link
          href={"https://www.instagram.com/miirachiii"}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center rounded-full border border-primary bg-offwhite/30 backdrop-blur-lg transition-all duration-300 hover:scale-95 hover:border-accent ${variant === "header" ? "p-2.5" : "p-3.5"}`}
        >
          <div
            className={`relative ${variant === "header" ? "size-5" : "size-6"}`}
          >
            <Image src={instagramIcon} alt="Instagram" fill />
            <Image
              className="opacity-0 transition-all duration-300 group-hover:opacity-100"
              src={instagramAccentIcon}
              alt="Instagram"
              fill
            />
          </div>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/klaudiarogala/"}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center rounded-full border border-primary bg-offwhite/30 backdrop-blur-lg transition-all duration-300 hover:scale-95 hover:border-accent ${variant === "header" ? "p-2.5" : "p-3.5"}`}
        >
          <div
            className={`relative ${variant === "header" ? "size-5" : "size-6"}`}
          >
            <Image src={linkedinIcon} alt="Instagram" fill />
            <Image
              className="opacity-0 transition-all duration-300 group-hover:opacity-100"
              src={linkedinAccentIcon}
              alt="LinkedIn"
              fill
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
