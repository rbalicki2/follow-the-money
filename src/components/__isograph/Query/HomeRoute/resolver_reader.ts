import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__HomeRoute__param } from './param_type';
import { HomeRoute as resolver } from '../../../HomeRoute';
import Case__HomePageCaseDisplay__resolver_reader from '../../Case/HomePageCaseDisplay/resolver_reader';

const readerAst: ReaderAst<Query__HomeRoute__param> = [
  {
    kind: "Linked",
    fieldName: "cases",
    alias: null,
    arguments: null,
    condition: null,
    isUpdatable: false,
    selections: [
      {
        kind: "Scalar",
        fieldName: "id",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Resolver",
        alias: "HomePageCaseDisplay",
        arguments: null,
        readerArtifact: Case__HomePageCaseDisplay__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
    refetchQueryIndex: null,
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
