import { groq } from "next-sanity";
import { client } from "../lib/client";
import { PortfolioPage } from "./types/portfolioPage.type";

export async function getPortfolioPage(): Promise<PortfolioPage> {
  const query = groq`
    *[_type == "portfolio"][0] {
      hook,
      "portfolioCategories": portfolioCategories[]->{
        name,
        description,
        "image": image.asset->{
          url,
          metadata {
            lqip
          }
        }
      }
    }
  `;

  return client.fetch(query);
}
