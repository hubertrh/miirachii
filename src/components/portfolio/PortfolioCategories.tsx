"use client";

import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { PortfolioPage } from "../../../sanity/groqGetters/types/portfolioPage.type";

type PortfolioCategoriesProps = {
  portfolioCategories: PortfolioPage["portfolioCategories"];
};

export default function PortfolioCategories({
  portfolioCategories,
}: PortfolioCategoriesProps) {
  const [visibleImage, setVisibleImage] = useState("image-1");
  const categoryRefs = useRef<Array<RefObject<HTMLParagraphElement>>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImage(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    portfolioCategories.forEach((_, index) => {
      const imageElement = document.getElementById(`image-${index + 1}`);
      if (imageElement) observer.observe(imageElement);
    });

    return () => {
      portfolioCategories.forEach((_, index) => {
        const imageElement = document.getElementById(`image-${index + 1}`);
        if (imageElement) observer.unobserve(imageElement);
      });
    };
  }, [portfolioCategories]);

  return (
    <section
      id="portfolio-categories"
      className="relative grid grid-cols-3 items-center justify-center bg-background"
    >
      <div className="absolute bottom-[calc(50vh-16rem)] left-12 top-[50vh] border-0 border-red-300">
        <div className="sticky inset-y-1/2 right-0 w-fit -translate-y-1/2">
          {portfolioCategories.map((portfolioCategory, index) => (
            <p
              key={index}
              id={`paragraph-${index + 1}`}
              ref={categoryRefs.current[index]}
              className={`!leading-7 text-primary transition-all duration-500 ${visibleImage === `image-${index + 1}` ? "text-3xl font-medium" : ""}`}
            >
              {portfolioCategory.name}
            </p>
          ))}
        </div>
      </div>
      <div className="col-span-2 col-start-2 border-0 border-red-400">
        {portfolioCategories.map((portfolioCategory, index) => (
          <div
            key={index}
            id={`image-${index + 1}`}
            className="grid min-h-screen place-items-center"
          >
            <div className="relative size-96">
              <Image
                src={portfolioCategory.image.url}
                alt={`${portfolioCategory.name} Category Image`}
                fill
                placeholder="blur"
                blurDataURL={portfolioCategory.image.metadata.lqip}
                style={{
                  objectFit: "cover",
                  boxShadow: "-32px 32px 0px 0px #806B59",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
