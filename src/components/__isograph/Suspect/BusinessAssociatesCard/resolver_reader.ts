import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Suspect__BusinessAssociatesCard__param } from './param_type';
import { BusinessAssociates as resolver } from '../../../Suspect/BusinessAssociatesCard';
import Suspect__Avatar__resolver_reader from '../../Suspect/Avatar/resolver_reader';

const readerAst: ReaderAst<Suspect__BusinessAssociatesCard__param> = [
  {
    kind: "Linked",
    fieldName: "businessAssociates",
    alias: null,
    arguments: null,
    condition: null,
    isUpdatable: false,
    selections: [
      {
        kind: "Linked",
        fieldName: "with",
        alias: null,
        arguments: null,
        condition: null,
        isUpdatable: false,
        selections: [
          {
            kind: "Resolver",
            alias: "Avatar",
            arguments: null,
            readerArtifact: Suspect__Avatar__resolver_reader,
            usedRefetchQueries: [],
          },
          {
            kind: "Scalar",
            fieldName: "suspectName",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "shortBio",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
        ],
        refetchQueryIndex: null,
      },
      {
        kind: "Scalar",
        fieldName: "description",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
    ],
    refetchQueryIndex: null,
  },
];

const artifact: ComponentReaderArtifact<
  Suspect__BusinessAssociatesCard__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Suspect.BusinessAssociatesCard",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
