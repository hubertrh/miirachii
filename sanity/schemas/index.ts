import { SchemaTypeDefinition } from "sanity";
import brandInfoSchema from "./brandInfoSchema";
import homepageSchema from "./homepageSchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [brandInfoSchema, homepageSchema],
};

export default schemas;
