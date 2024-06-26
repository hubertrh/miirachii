import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  type: "document",
  title: "Brand Info",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Logos (Transparent)",
      type: "object",
      fields: [
        defineField({
          name: "logoMinimal",
          title: "Logo (Minimal)",
          type: "image",
          validation: (rule) => rule.required().assetRequired(),
        }),
        defineField({
          name: "logoFull",
          title: "Logo (Full)",
          type: "image",
          validation: (rule) => rule.required().assetRequired(),
        }),
      ],
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Hero Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required().assetRequired(),
        }),
        defineField({
          name: "opacity",
          title: "Hero Image Opacity (%)",
          type: "number",
          validation: (rule) => rule.required().min(0).max(100),
        }),
      ],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "Brand and Contact information",
    },
  },
});
