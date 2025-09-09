import { type Suspect__Avatar__output_type } from '../../Suspect/Avatar/output_type';
import { type LoadableField, type ExtractParameters } from '@isograph/react';
import { type Case__dirtiestDodger__param } from '../../Case/dirtiestDodger/param_type';

export type Case__DirtiestDodgerCard__param = {
  readonly data: {
    readonly dirtiestDodger: LoadableField<Case__dirtiestDodger__param, {
      readonly name: string,
      readonly Avatar: Suspect__Avatar__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
