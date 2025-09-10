import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';
import { type LoadableField, type ExtractParameters } from '@isograph/react';
import { type Case__dirtiestDodger__param } from '../../Case/dirtiestDodger/param_type';

export type Case__Inner__param = {
  readonly data: {
    /**
All the shady characters involved. Each one is probably hiding something, even if it's just a bad haircut.
    */
    readonly suspects: ReadonlyArray<{
      /**
The amount of money they owe the government. The bigger the number, the more suspicious they are.
      */
      readonly delinquentTaxes: number,
    }>,
    readonly dirtiestDodger: LoadableField<Case__dirtiestDodger__param, {
      /**
Their official name, likely an alias like "Barnaby Buttercup."
      */
      readonly suspectName: string,
      readonly Avatar: Suspect__Avatar__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
