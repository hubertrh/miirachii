import { SchemaTypeDefinition } from "sanity";
import contactInfoSchema from "./contactInfoSchema";

const schemas: { types: SchemaTypeDefinition[] } = {
  types: [contactInfoSchema],
};

export default schemas;
