import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolioCategory",
  title: "Portfolio Categories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Category Description",
      type: "text",
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
    defineField({
      name: "categoryImages",
      title: "Category Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: "grid",
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
