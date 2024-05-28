import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hook",
      title: "Hook",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().assetRequired(),
    }),
  ],
  preview: {
    select: {
      title: "Homepage Content",
    },
  },
});
