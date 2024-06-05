import { SchemaTypeDefinition } from "sanity";
import brandInfoSchema from "./brandInfoSchema";
import homepageSchema from "./homepageSchema";
import categoriesSchema from "./categoriesSchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [brandInfoSchema, homepageSchema, categoriesSchema],
};

export default schemas;
