import type { StartUpdate } from '@isograph/react';

export type Suspect__ClearDebtsButton__param = {
  readonly data: {
    /**
The amount of money they owe the government. The bigger the number, the more suspicious they are.
    */
    readonly delinquentTaxes: number,
    /**
Their unique ID, which is definitely not a witness protection number.
    */
    readonly id: string,
  },
  readonly parameters: Record<PropertyKey, never>,
  readonly startUpdate: StartUpdate<{
    /**
The amount of money they owe the government. The bigger the number, the more suspicious they are.
    */
    delinquentTaxes: number,
    /**
Their unique ID, which is definitely not a witness protection number.
    */
    readonly id: string,
  }>,
};
