import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Suspect__Avatar__param } from './param_type';
import { SuspectAvatar as resolver } from '../../../Suspect/Avatar';

const readerAst: ReaderAst<Suspect__Avatar__param> = [
  {
    kind: "Scalar",
    fieldName: "imageUrl",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "id",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
];

const artifact: ComponentReaderArtifact<
  Suspect__Avatar__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Suspect.Avatar",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
