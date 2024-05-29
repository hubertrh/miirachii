import Image from "next/image";
import photographyImage from "/public/photography.jpg";
import socialMediaImage from "/public/social-media.jpg";

type ServicesImagesProps = {
  elementHovered: number | null;
  setElementHovered: (value: number | null) => void;
};

export default function ServicesImages({
  elementHovered,
  setElementHovered,
}: ServicesImagesProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`relative h-48 w-128 transition-all duration-300 hover:scale-102 ${
          elementHovered === 1 || elementHovered === null ? "" : "blur-md"
        }`}
        onMouseEnter={() => setElementHovered(1)}
        onMouseLeave={() => setElementHovered(null)}
      >
        <Image
          src={photographyImage}
          alt="Photography Image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={`relative h-48 w-128 transition-all duration-300 hover:scale-102 ${
          elementHovered === 2 || elementHovered === null ? "" : "blur-md"
        }`}
        onMouseEnter={() => setElementHovered(2)}
        onMouseLeave={() => setElementHovered(null)}
      >
        <Image
          src={socialMediaImage}
          alt="Social Media Image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
