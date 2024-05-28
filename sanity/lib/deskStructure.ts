import { StructureBuilder } from "sanity/structure";
import { SquareUserRound } from "lucide-react";

const singletonDocuments = {
  contactInfo: {
    title: "Brand Info",
    documentId: "e084abdf-e7a9-448c-a0df-973941522014",
    schemaType: "contactInfo",
    description: "Brand and Contact Information",
    icon: SquareUserRound,
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
          )
          .icon(doc.icon),
      ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !Object.values(singletonDocuments).some(
            (doc) => doc.schemaType === listItem.getId(),
          ),
      ),
    ]);
