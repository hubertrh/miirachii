"use client";

import { useState } from "react";
import ServicesTextMain from "./ServicesTextMain";
import ServicesImages from "./ServicesImages";

export default function Services() {
  const [elementHovered, setElementHovered] = useState<number>(0);

  return (
    <section className="flex h-[110vh] items-center justify-center gap-8">
      <div className="w-128 overflow-hidden">
        <div
          className="flex items-center transition-all duration-500"
          style={{ transform: `translateX(-${elementHovered * 100}%)` }}
        >
          <ServicesTextMain />
          <ServicesTextMain />
          <ServicesTextMain />
        </div>
      </div>
      <ServicesImages
        elementHovered={elementHovered}
        setElementHovered={setElementHovered}
      />
    </section>
  );
}
