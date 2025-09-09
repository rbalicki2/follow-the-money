import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Case__HomePageCaseDisplay__param } from './param_type';
import { HomePageCaseDisplay as resolver } from '../../../Case/HomePageCaseDisplay';

const readerAst: ReaderAst<Case__HomePageCaseDisplay__param> = [
  {
    kind: "Scalar",
    fieldName: "id",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "name",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
];

const artifact: ComponentReaderArtifact<
  Case__HomePageCaseDisplay__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Case.HomePageCaseDisplay",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
