import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';

export type Suspect__BusinessAssociatesCard__param = {
  readonly data: {
    /**
A list of everyone they've ever done business with. It's a tangled web of questionable deals and even more questionable people.
    */
    readonly businessAssociates: (ReadonlyArray<{
      /**
The person they are entangled with in this glorious mess.
      */
      readonly with: {
        readonly Avatar: Suspect__Avatar__output_type,
        /**
Their official name, likely an alias like "Barnaby Buttercup."
        */
        readonly suspectName: string,
        /**
The quick-and-dirty version of their life story. Just the highlights, like "once won a hot dog eating contest."
        */
        readonly shortBio: string,
      },
      /**
The nature of their "relationship." It's either "best friends" or "mortal enemies." There is no in-between.
      */
      readonly description: string,
    }> | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
