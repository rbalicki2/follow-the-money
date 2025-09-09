import type {NormalizationAst} from '@isograph/react';
const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "case",
      arguments: [
        [
          "caseId",
          { kind: "Variable", name: "id" },
        ],
      ],
      concreteType: "Case",
      selections: [
        {
          kind: "Scalar",
          fieldName: "id",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "name",
          arguments: null,
        },
        {
          kind: "Linked",
          fieldName: "suspects",
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
              fieldName: "businessName",
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
              fieldName: "name",
              arguments: null,
            },
            {
              kind: "Scalar",
              fieldName: "shortBio",
              arguments: null,
            },
          ],
        },
      ],
    },
  ],
};
export default normalizationAst;
