import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__SuspectDetailRoute__param } from './param_type';
import { CaseDetailRouteComponent as resolver } from '../../../Suspect/SuspectDetailRoute';
import Suspect__BioCard__resolver_reader from '../../Suspect/BioCard/resolver_reader';
import Suspect__BusinessAssociatesCard__resolver_reader from '../../Suspect/BusinessAssociatesCard/resolver_reader';
import Suspect__IncomeStatementCard__resolver_reader from '../../Suspect/IncomeStatementCard/resolver_reader';
import Suspect__TitleCard__resolver_reader from '../../Suspect/TitleCard/resolver_reader';

const readerAst: ReaderAst<Query__SuspectDetailRoute__param> = [
  {
    kind: "Linked",
    fieldName: "suspect",
    alias: null,
    arguments: [
      [
        "suspectId",
        { kind: "Variable", name: "suspectId" },
      ],
    ],
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
        kind: "Scalar",
        fieldName: "suspectName",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Resolver",
        alias: "TitleCard",
        arguments: null,
        readerArtifact: Suspect__TitleCard__resolver_reader,
        usedRefetchQueries: [],
      },
      {
        kind: "Resolver",
        alias: "BioCard",
        arguments: null,
        readerArtifact: Suspect__BioCard__resolver_reader,
        usedRefetchQueries: [],
      },
      {
        kind: "Resolver",
        alias: "IncomeStatementCard",
        arguments: null,
        readerArtifact: Suspect__IncomeStatementCard__resolver_reader,
        usedRefetchQueries: [],
      },
      {
        kind: "Resolver",
        alias: "BusinessAssociatesCard",
        arguments: null,
        readerArtifact: Suspect__BusinessAssociatesCard__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
    refetchQueryIndex: null,
  },
];

const artifact: ComponentReaderArtifact<
  Query__SuspectDetailRoute__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Query.SuspectDetailRoute",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
