import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Case__SuspectsCard__param } from './param_type';
import { SuspectsCard as resolver } from '../../../Case/SuspectsCard';
import Suspect__Avatar__resolver_reader from '../../Suspect/Avatar/resolver_reader';

const readerAst: ReaderAst<Case__SuspectsCard__param> = [
  {
    kind: "Linked",
    fieldName: "suspects",
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
        fieldName: "name",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Scalar",
        fieldName: "jobTitle",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Scalar",
        fieldName: "businessName",
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
];

const artifact: ComponentReaderArtifact<
  Case__SuspectsCard__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Case.SuspectsCard",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
