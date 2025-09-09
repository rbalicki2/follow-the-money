import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Suspect__TitleCard__param } from './param_type';
import { TitleCard as resolver } from '../../../Suspect/TitleCard';
import Suspect__Avatar__resolver_reader from '../../Suspect/Avatar/resolver_reader';

const readerAst: ReaderAst<Suspect__TitleCard__param> = [
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
    fieldName: "customerComplaints",
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
];

const artifact: ComponentReaderArtifact<
  Suspect__TitleCard__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Suspect.TitleCard",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
