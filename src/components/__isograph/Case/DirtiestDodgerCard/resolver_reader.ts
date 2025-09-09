import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Case__DirtiestDodgerCard__param } from './param_type';
import { BioCard as resolver } from '../../../Case/DirtiestDodgerCard';
import Case__dirtiestDodger__resolver_reader from '../../Case/dirtiestDodger/resolver_reader';
import Suspect__Avatar__resolver_reader from '../../Suspect/Avatar/resolver_reader';

const readerAst: ReaderAst<Case__DirtiestDodgerCard__param> = [
  {
    kind: "Linked",
    fieldName: "suspects",
    alias: null,
    arguments: null,
    condition: null,
    isUpdatable: false,
    selections: [
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
  {
    kind: "Linked",
    fieldName: "dirtiestDodger",
    alias: null,
    arguments: null,
    condition: Case__dirtiestDodger__resolver_reader,
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
        alias: "Avatar",
        arguments: null,
        readerArtifact: Suspect__Avatar__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
    refetchQueryIndex: 0,
  },
];

const artifact: ComponentReaderArtifact<
  Case__DirtiestDodgerCard__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Case.DirtiestDodgerCard",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
