import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';
import { type Suspect__ClearDebtsButton__output_type } from '../../Suspect/ClearDebtsButton/output_type';

export type Case__SuspectsCard__param = {
  readonly data: {
    readonly suspects: ReadonlyArray<{
      readonly id: string,
      readonly Avatar: Suspect__Avatar__output_type,
      readonly suspectName: string,
      readonly jobTitle: string,
      readonly businessName: string,
      readonly shortBio: string,
      readonly ClearDebtsButton: Suspect__ClearDebtsButton__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
