
export type Suspect__IncomeStatementCard__param = {
  readonly data: {
    /**
Their official income. Often suspiciously low for someone with a solid gold toilet.
    */
    readonly income: number,
    /**
The amount of money they owe the government. The bigger the number, the more suspicious they are.
    */
    readonly delinquentTaxes: number,
  },
  readonly parameters: Record<PropertyKey, never>,
};
