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
          { kind: "Variable", name: "caseId" },
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
          fieldName: "caseName",
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
              fieldName: "jobTitle",
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
  ],
};
export default normalizationAst;
