import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Suspect__IncomeStatementCard__param } from './param_type';
import { IncomeStatement as resolver } from '../../../Suspect/IncomeStatementCard';

const readerAst: ReaderAst<Suspect__IncomeStatementCard__param> = [
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
    isUpdatable: false,
  },
];

const artifact: ComponentReaderArtifact<
  Suspect__IncomeStatementCard__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Suspect.IncomeStatementCard",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
