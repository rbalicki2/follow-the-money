import { type Case__Inner__output_type } from '../../Case/Inner/output_type';

export type Case__DirtiestDodgerCard__param = {
  readonly data: {
    readonly Inner: Case__Inner__output_type,
    /**
All the shady characters involved. Each one is probably hiding something, even if it's just a bad haircut.
    */
    readonly suspects: ReadonlyArray<{
      /**
The amount of money they owe the government. The bigger the number, the more suspicious they are.
      */
      readonly delinquentTaxes: number,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
