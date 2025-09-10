import { type Case__HomePageCaseDisplay__output_type } from '../../Case/HomePageCaseDisplay/output_type';

export type Query__HomeRoute__param = {
  readonly data: {
    /**
All the cases. A veritable mountain of paperwork and unsolved mysteries.
    */
    readonly cases: ReadonlyArray<{
      /**
The unique identifier for this particular can of worms.
      */
      readonly id: string,
      readonly HomePageCaseDisplay: Case__HomePageCaseDisplay__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
