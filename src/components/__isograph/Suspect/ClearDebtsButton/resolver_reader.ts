import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Suspect__ClearDebtsButton__param } from './param_type';
import { ClearDebtsButton as resolver } from '../../../Suspect/ClearDebtsButton';

const readerAst: ReaderAst<Suspect__ClearDebtsButton__param> = [
  {
    kind: "Scalar",
    fieldName: "income",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "delinquentTaxes",
    alias: null,
    arguments: null,
    isUpdatable: true,
  },
];

const artifact: ComponentReaderArtifact<
  Suspect__ClearDebtsButton__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Suspect.ClearDebtsButton",
  resolver,
  readerAst,
  hasUpdatable: true,
};

export default artifact;
