import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';
import { type LoadableField, type ExtractParameters } from '@isograph/react';
import { type Case__dirtiestDodger__param } from '../../Case/dirtiestDodger/param_type';

export type Case__Inner__param = {
  readonly data: {
    readonly suspects: ReadonlyArray<{
      readonly delinquentTaxes: number,
    }>,
    readonly dirtiestDodger: LoadableField<Case__dirtiestDodger__param, {
      readonly suspectName: string,
      readonly Avatar: Suspect__Avatar__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
