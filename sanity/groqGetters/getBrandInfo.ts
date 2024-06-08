import { groq } from "next-sanity";
import { client } from "../lib/client";
import { BrandInfo } from "./types/brandInfo.type";

export async function getBrandInfo(): Promise<BrandInfo> {
  const query = groq`
    *[_type == "contactInfo"][0] {
      brandName,
      "logos": {
        "logoMinimal": logos.logoMinimal.asset->{
          url,
          metadata {
            lqip
          }
        },
        "logoFull": logos.logoFull.asset->{
          url,
          metadata {
            lqip
          }
        }
      },
      "heroImage": {
        "image": heroImage.image.asset->{
          url,
          metadata {
            lqip
          }
        },
        "opacity": heroImage.opacity,
      },
      email,
      socials
    }
  `;

  return client.fetch(query);
}
