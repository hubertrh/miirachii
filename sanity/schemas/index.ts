import { SchemaTypeDefinition } from "sanity";
import brandInfoSchema from "./brandInfoSchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [brandInfoSchema],
};

export default schemas;
