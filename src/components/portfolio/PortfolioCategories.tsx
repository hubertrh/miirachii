"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import portfolioPortraitImage from "@/assets/images/portfolio-cat-portraits.webp";

export default function PortfolioCategories() {
  const [visibleImage, setVisibleImage] = useState<string>("image1");
  const category1Ref = useRef(null);
  const category2Ref = useRef(null);

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

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    if (image1) observer.observe(image1);
    if (image2) observer.observe(image2);

    return () => {
      if (image1) observer.unobserve(image1);
      if (image2) observer.unobserve(image2);
    };
  }, []);

  return (
    <section
      id="portfolio-categories"
      className="relative grid grid-cols-3 items-center justify-center bg-background"
    >
      <div className="absolute bottom-[calc(50vh-22rem)] left-12 top-[50vh] border-0 border-red-300">
        <div className="sticky inset-y-1/2 right-0 w-fit -translate-y-1/2">
          <p
            ref={category1Ref}
            className={`!leading-7 transition-all duration-500 ${visibleImage === "image1" ? "text-3xl font-medium" : ""}`}
          >
            — Portrait Photography
          </p>
          <p
            ref={category2Ref}
            className={`!leading-7 transition-all duration-500 ${visibleImage === "image2" ? "text-3xl font-medium" : ""}`}
          >
            — Event Photography
          </p>
        </div>
      </div>
      <div className="col-span-2 col-start-2 border-0 border-red-400">
        <div className="grid min-h-screen place-items-center" id="image1">
          <div className="relative size-96 -translate-y-8 translate-x-8">
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
        </div>
        <div className="grid min-h-screen place-items-center" id="image2">
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
        </div>
      </div>
    </section>
  );
}
