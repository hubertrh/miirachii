import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "hook",
      title: "Hook",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "servicesCategories",
      title: "Services Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "servicesCategory" }] }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "Services Page Content",
    },
  },
});
