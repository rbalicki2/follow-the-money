import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';
import { type Suspect__ClearDebtsButton__output_type } from '../../Suspect/ClearDebtsButton/output_type';

export type Case__SuspectsCard__param = {
  readonly data: {
    /**
All the shady characters involved. Each one is probably hiding something, even if it's just a bad haircut.
    */
    readonly suspects: ReadonlyArray<{
      /**
Their unique ID, which is definitely not a witness protection number.
      */
      readonly id: string,
      readonly Avatar: Suspect__Avatar__output_type,
      /**
Their official name, likely an alias like "Barnaby Buttercup."
      */
      readonly suspectName: string,
      /**
What they do for a living. Could be a professional napper or an artisanal cheese smuggler.
      */
      readonly jobTitle: string,
      /**
The name of their business. "Totally Legitimate Enterprises, Inc." is a common one.
      */
      readonly businessName: string,
      /**
The quick-and-dirty version of their life story. Just the highlights, like "once won a hot dog eating contest."
      */
      readonly shortBio: string,
      readonly ClearDebtsButton: Suspect__ClearDebtsButton__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
