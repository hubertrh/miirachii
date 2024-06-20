import Image from "next/image";
import { Fragment } from "react";

export default function ServicesCategories() {
  const pageContent = {
    categories: [
      { imageSource: "/photography.jpg", categoryName: "Instagram" },
      { imageSource: "/photography.jpg", categoryName: "Social Media" },
      { imageSource: "/photography.jpg", categoryName: "Photography" },
      { imageSource: "/photography.jpg", categoryName: "Videography" },
    ],
  };

  return (
    <section
      id="services-categories"
      className="grid min-h-screen place-items-center bg-background p-32"
    >
      <div className="flex max-w-4xl flex-wrap content-center justify-center gap-16">
        {pageContent.categories.map((image, index) => (
          <Fragment key={index}>
            {index % 2 === 0 && (
              <div className="flex items-center gap-12">
                {/*  */}

                <div className="group relative aspect-[2/1] w-96">
                  <Image
                    src={image.imageSource}
                    alt={image.categoryName}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-out group-hover:bg-primary/50" />
                  <h2 className="absolute right-0 top-full p-0 text-sm transition-all duration-300 ease-out group-hover:translate-y-[-125%] group-hover:text-4xl group-hover:text-white">
                    {image.categoryName}
                  </h2>
                </div>

                {/*  */}
                {index !== pageContent.categories.length - 1 && (
                  <div className="group relative aspect-[2/1] w-96">
                    <Image
                      src={pageContent.categories[index + 1].imageSource}
                      alt={pageContent.categories[index + 1].categoryName}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute inset-0 bg-transparent transition-all duration-300 ease-out group-hover:bg-primary/50" />
                    <h2 className="absolute right-0 top-full p-0 text-sm transition-all duration-300 ease-out group-hover:translate-y-[-125%] group-hover:text-4xl group-hover:text-white">
                      {pageContent.categories[index + 1].categoryName}
                    </h2>
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
