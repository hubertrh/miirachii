import { StructureBuilder } from "sanity/structure";
import { SquareUserRound, Home, BriefcaseBusiness } from "lucide-react";

const singletonDocuments = {
  contactInfo: {
    title: "Brand Info",
    documentId: "e084abdf-e7a9-448c-a0df-973941522014",
    schemaType: "contactInfo",
    description: "Brand and Contact Information",
    icon: SquareUserRound,
  },
  homepageContent: {
    title: "Homepage",
    documentId: "8abd1bb7-0b2e-41fe-95b4-09055d1a7291",
    schemaType: "homepage",
    description: "Homepage Content",
    icon: Home,
  },
  portfolioPageContent: {
    title: "Portfolio Page",
    documentId: "04b6b644-ecfb-4a41-b5a1-497eea4b37c0",
    schemaType: "portfolio",
    description: "Portfolio Page Content",
    icon: BriefcaseBusiness,
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
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !Object.values(singletonDocuments).some(
            (doc) => doc.schemaType === listItem.getId(),
          ),
      ),
    ]);
