import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';

export type Case__SuspectsCard__param = {
  readonly data: {
    readonly suspects: ReadonlyArray<{
      readonly Avatar: Suspect__Avatar__output_type,
      readonly name: string,
      readonly jobTitle: string,
      readonly businessName: string,
      readonly shortBio: string,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
