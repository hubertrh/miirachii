import { StructureBuilder } from "sanity/structure";

const singletonDocuments = {
  contactInfo: {
    title: "Contact Info",
    documentId: "e084abdf-e7a9-448c-a0df-973941522014",
    schemaType: "contactInfo",
    description: "Contact and Brand information",
  },
};

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      ...Object.values(singletonDocuments).map((doc) =>
        S.listItem()
          .title(doc.title)
          .child(
            S.document()
              .documentId(doc.documentId)
              .schemaType(doc.schemaType)
              .title(doc.description),
          ),
      ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !Object.values(singletonDocuments).some(
            (doc) => doc.schemaType === listItem.getId(),
          ),
      ),
    ]);
