import type {NormalizationAst} from '@isograph/react';
const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "suspect",
      arguments: [
        [
          "suspectId",
          { kind: "Variable", name: "suspectId" },
        ],
      ],
      concreteType: "Suspect",
      selections: [
        {
          kind: "Scalar",
          fieldName: "id",
          arguments: null,
        },
        {
          kind: "Linked",
          fieldName: "businessAssociates",
          arguments: null,
          concreteType: "Relationship",
          selections: [
            {
              kind: "Scalar",
              fieldName: "description",
              arguments: null,
            },
            {
              kind: "Linked",
              fieldName: "with",
              arguments: null,
              concreteType: "Suspect",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "id",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "imageUrl",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "shortBio",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "suspectName",
                  arguments: null,
                },
              ],
            },
          ],
        },
        {
          kind: "Scalar",
          fieldName: "businessName",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "customerComplaints",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "delinquentTaxes",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "imageUrl",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "income",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "jobTitle",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "longBio",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "suspectName",
          arguments: null,
        },
      ],
    },
  ],
};
export default normalizationAst;
