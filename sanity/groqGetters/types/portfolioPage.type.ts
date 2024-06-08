import { ImageAsset } from "sanity";

export type PortfolioPage = {
  hook: string;
  portfolioCategories: {
    name: string;
    description: string;
    image: {
      url: ImageAsset["url"];
      metadata: {
        lqip: ImageAsset["metadata"]["lqip"];
      };
    };
  }[];
};
