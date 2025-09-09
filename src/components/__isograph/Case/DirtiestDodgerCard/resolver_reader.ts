import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Case__DirtiestDodgerCard__param } from './param_type';
import { BioCard as resolver } from '../../../Case/DirtiestDodgerCard';
import Case__Inner__resolver_reader from '../../Case/Inner/resolver_reader';

const readerAst: ReaderAst<Case__DirtiestDodgerCard__param> = [
  {
    kind: "Resolver",
    alias: "Inner",
    arguments: null,
    readerArtifact: Case__Inner__resolver_reader,
    usedRefetchQueries: [0, ],
  },
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
