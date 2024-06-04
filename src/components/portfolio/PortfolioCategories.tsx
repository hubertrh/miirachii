import Image from "next/image";
import portfolioPortraitImage from "@/assets/images/portfolio-cat-portraits.webp";

export default function PortfolioCategories() {
  return (
    <section
      id="portfolio-categories"
      className="flex h-[105vh] items-center justify-center bg-background"
    >
      <div className="sticky inset-y-1/2 -translate-y-1/2">
        <p>— Category 1</p>
        <p className="text-3xl font-medium">— Category Long 2</p>
        <p>— Category 3</p>
        <p>— Category Longer 4</p>
      </div>
      <div className="relative size-96">
        <Image
          src={portfolioPortraitImage}
          alt="Portfolio Portrait Image"
          fill
          style={{
            objectFit: "cover",
            boxShadow: "-32px 32px 0px 0px #806B59",
          }}
        />
      </div>
    </section>
  );
}
