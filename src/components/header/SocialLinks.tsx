import Image from "next/image";
import instagramIcon from "/public/icons/instagram.svg";
import instagramAccentIcon from "/public/icons/instagram-accent.svg";
import linkedinIcon from "/public/icons/linkedin.svg";
import linkedinAccentIcon from "/public/icons/linkedin-accent.svg";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-5">
      <Link
        href={"https://www.instagram.com/miirachiii"}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex size-10 items-center justify-center rounded-full border border-primary bg-offwhite/30 backdrop-blur-lg transition-all duration-300 hover:scale-95 hover:border-accent"
      >
        <div className="relative size-5">
          <Image src={instagramIcon} alt="Instagram" fill />
          <Image
            className="opacity-0 transition-all duration-300 group-hover:opacity-100"
            src={instagramAccentIcon}
            alt="Instagram"
            fill
          />
          <ExternalLink className="absolute right-1/2 top-1/2 size-3 -translate-y-1/2 translate-x-1/2 text-accent opacity-0 transition-all duration-300 ease-out group-hover:-right-1/2 group-hover:-top-1/2 group-hover:opacity-100" />
        </div>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/klaudiarogala/"}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex size-10 items-center justify-center rounded-full border border-primary bg-offwhite/30 backdrop-blur-lg transition-all duration-300 hover:scale-95 hover:border-accent"
      >
        <div className="relative size-5">
          <Image src={linkedinIcon} alt="Instagram" fill />
          <Image
            className="opacity-0 transition-all duration-300 group-hover:opacity-100"
            src={linkedinAccentIcon}
            alt="LinkedIn"
            fill
          />
          <ExternalLink className="absolute right-1/2 top-1/2 size-3 -translate-y-1/2 translate-x-1/2 text-accent opacity-0 transition-all duration-300 ease-out group-hover:-right-1/2 group-hover:-top-1/2 group-hover:opacity-100" />
        </div>
      </Link>
    </div>
  );
}
