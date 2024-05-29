import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutText() {
  return (
    <div className="z-10 -ml-16 flex max-w-lg flex-col items-end justify-center gap-3">
      <h1 className="text-6xl text-primary transition-all duration-300 hover:text-accent">
        About Me
      </h1>
      <div className="mb-2 text-justify">
        <p>
          Welcome to miirachii, where I capture and convey stories with clarity
          and style. I&apos;m Klaudia, dedicated to bringing out the natural
          beauty and unique qualities of your brand through expert photography
          and strategic social media content.
        </p>
        <p>
          I am capturing the natural beauty and convey messages that help brands
          grow with a calm and inviting presence.
        </p>
      </div>
      <Link
        href="/about"
        className="group flex items-center text-lg capitalize tracking-widest underline decoration-transparent underline-offset-4 transition-all duration-300 ease-out hover:text-accent hover:decoration-accent"
      >
        <ChevronRight className="mr-2 size-5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent" />
        Discover my story
      </Link>
    </div>
  );
}
