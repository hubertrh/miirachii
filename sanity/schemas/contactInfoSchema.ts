import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  type: "document",
  title: "Contact Info",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Logos",
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
});
