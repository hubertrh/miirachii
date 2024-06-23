import { SchemaTypeDefinition } from "sanity";
import brandInfoSchema from "./brandInfoSchema";
import homepageSchema from "./homepageSchema";
import portfolioSchema from "./portfolioSchema";
import portfolioCategorySchema from "./portfolioCategorySchema";
import servicesSchema from "./servicesSchema";
import servicesCategorySchema from "./servicesCategorySchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [
    brandInfoSchema,
    homepageSchema,
    portfolioSchema,
    portfolioCategorySchema,
    servicesSchema,
    servicesCategorySchema,
  ],
};

export default schemas;
