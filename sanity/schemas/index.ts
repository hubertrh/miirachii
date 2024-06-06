import { SchemaTypeDefinition } from "sanity";
import brandInfoSchema from "./brandInfoSchema";
import homepageSchema from "./homepageSchema";
import portfolioCategoriesSchema from "./portfolioCategoriesSchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [brandInfoSchema, homepageSchema, portfolioCategoriesSchema],
};

export default schemas;
