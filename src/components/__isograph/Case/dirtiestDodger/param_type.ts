import { type Suspect__link__output_type } from '../../Suspect/link/output_type';

export type Case__dirtiestDodger__param = {
  readonly data: {
    /**
All the shady characters involved. Each one is probably hiding something, even if it's just a bad haircut.
    */
    readonly suspects: ReadonlyArray<{
      /**
A store Link for the Suspect type.
      */
      readonly link: Suspect__link__output_type,
      /**
The amount of money they owe the government. The bigger the number, the more suspicious they are.
      */
      readonly delinquentTaxes: number,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
