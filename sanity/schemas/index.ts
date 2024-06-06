import { SchemaTypeDefinition } from "sanity";
import brandInfoSchema from "./brandInfoSchema";
import homepageSchema from "./homepageSchema";
import portfolioSchema from "./portfolioSchema";
import portfolioCategorySchema from "./portfolioCategorySchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [
    brandInfoSchema,
    homepageSchema,
    portfolioSchema,
    portfolioCategorySchema,
  ],
};

export default schemas;
