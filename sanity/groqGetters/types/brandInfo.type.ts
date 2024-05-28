import { ImageAsset } from "sanity";

export type BrandInfo = {
  brandName: string;
  logos: {
    logoMinimal: {
      url: ImageAsset["url"];
      metadata: {
        lqip: ImageAsset["metadata"]["lqip"];
      };
    };
    logoFull: {
      url: ImageAsset["url"];
      metadata: {
        lqip: ImageAsset["metadata"]["lqip"];
      };
    };
  };
  email: string;
  socials: {
    instagram: string;
    linkedin: string;
  };
};
