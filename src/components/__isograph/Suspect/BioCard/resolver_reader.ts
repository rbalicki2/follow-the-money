import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Suspect__BioCard__param } from './param_type';
import { BioCard as resolver } from '../../../Suspect/BioCard';

const readerAst: ReaderAst<Suspect__BioCard__param> = [
  {
    kind: "Scalar",
    fieldName: "longBio",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
];

const artifact: ComponentReaderArtifact<
  Suspect__BioCard__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Suspect.BioCard",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
