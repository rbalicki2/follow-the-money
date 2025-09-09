import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__CaseDetailRoute__param } from './param_type';
import { CaseDetailRouteComponent as resolver } from '../../../Case/CaseDetailRoute';
import Case__DirtiestDodgerCard__resolver_reader from '../../Case/DirtiestDodgerCard/resolver_reader';
import Case__SuspectsCard__resolver_reader from '../../Case/SuspectsCard/resolver_reader';

const readerAst: ReaderAst<Query__CaseDetailRoute__param> = [
  {
    kind: "Linked",
    fieldName: "case",
    alias: "openCase",
    arguments: [
      [
        "caseId",
        { kind: "Variable", name: "id" },
      ],
    ],
    condition: null,
    isUpdatable: false,
    selections: [
      {
        kind: "Scalar",
        fieldName: "name",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Resolver",
        alias: "SuspectsCard",
        arguments: null,
        readerArtifact: Case__SuspectsCard__resolver_reader,
        usedRefetchQueries: [],
      },
      {
        kind: "Resolver",
        alias: "DirtiestDodgerCard",
        arguments: null,
        readerArtifact: Case__DirtiestDodgerCard__resolver_reader,
        usedRefetchQueries: [0, ],
      },
    ],
    refetchQueryIndex: null,
  },
];

const artifact: ComponentReaderArtifact<
  Query__CaseDetailRoute__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Query.CaseDetailRoute",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
