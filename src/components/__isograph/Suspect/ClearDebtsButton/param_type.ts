import type { StartUpdate } from '@isograph/react';

export type Suspect__ClearDebtsButton__param = {
  readonly data: {
    readonly income: number,
    readonly delinquentTaxes: number,
  },
  readonly parameters: Record<PropertyKey, never>,
  readonly startUpdate: StartUpdate<{
    readonly income: number,
    delinquentTaxes: number,
  }>,
};
