import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__HomeRoute__param } from './param_type';
import { HomeRoute as resolver } from '../../../HomeRoute';

const readerAst: ReaderAst<Query__HomeRoute__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
];

const artifact: ComponentReaderArtifact<
  Query__HomeRoute__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Query.HomeRoute",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
