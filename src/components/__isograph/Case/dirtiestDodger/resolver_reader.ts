import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Case__dirtiestDodger__param } from './param_type';
import { Case__dirtiestDodger__output_type } from './output_type';
import { SuspectsCard as resolver } from '../../../Case/dirtiestDodger';

const readerAst: ReaderAst<Case__dirtiestDodger__param> = [
  {
    kind: "Linked",
    fieldName: "suspects",
    alias: null,
    arguments: null,
    condition: null,
    isUpdatable: false,
    selections: [
      {
        kind: "Link",
        alias: "link",
      },
      {
        kind: "Scalar",
        fieldName: "delinquentTaxes",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
    ],
    refetchQueryIndex: null,
  },
];

const artifact: EagerReaderArtifact<
  Case__dirtiestDodger__param,
  Case__dirtiestDodger__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Case.dirtiestDodger",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
