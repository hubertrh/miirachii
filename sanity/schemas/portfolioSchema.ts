import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "hook",
      title: "Hook",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "portfolioCategories",
      title: "Portfolio Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "portfolioCategory" }] }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "Portfolio Content",
    },
  },
});
