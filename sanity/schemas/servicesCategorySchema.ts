import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicesCategory",
  title: "Services Categories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().assetRequired(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
