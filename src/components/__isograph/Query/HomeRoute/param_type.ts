import { type Case__HomePageCaseDisplay__output_type } from '../../Case/HomePageCaseDisplay/output_type';

export type Query__HomeRoute__param = {
  readonly data: {
    readonly cases: ReadonlyArray<{
      readonly id: string,
      readonly HomePageCaseDisplay: Case__HomePageCaseDisplay__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
