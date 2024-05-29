"use client";

import { useState } from "react";
import ServicesTextMain from "./ServicesTextMain";
import ServicesImages from "./ServicesImages";

export default function Services() {
  const [elementHovered, setElementHovered] = useState<number>(0);

  return (
    <section className="flex h-[110vh] items-center justify-center gap-8">
      <ServicesTextMain />
      <ServicesImages
        elementHovered={elementHovered}
        setElementHovered={setElementHovered}
      />
    </section>
  );
}
