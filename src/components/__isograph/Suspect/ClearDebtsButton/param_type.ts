import type { StartUpdate } from '@isograph/react';

export type Suspect__ClearDebtsButton__param = {
  readonly data: {
    readonly delinquentTaxes: number,
    readonly id: string,
  },
  readonly parameters: Record<PropertyKey, never>,
  readonly startUpdate: StartUpdate<{
    delinquentTaxes: number,
    readonly id: string,
  }>,
};
