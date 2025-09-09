import { type Suspect__BioCard__output_type } from '../../Suspect/BioCard/output_type';
import { type Suspect__IncomeStatementCard__output_type } from '../../Suspect/IncomeStatementCard/output_type';
import { type Suspect__TitleCard__output_type } from '../../Suspect/TitleCard/output_type';
import type { Query__SuspectDetailRoute__parameters } from './parameters_type';

export type Query__SuspectDetailRoute__param = {
  readonly data: {
    readonly suspect: ({
      readonly name: string,
      readonly TitleCard: Suspect__TitleCard__output_type,
      readonly BioCard: Suspect__BioCard__output_type,
      readonly IncomeStatementCard: Suspect__IncomeStatementCard__output_type,
    } | null),
  },
  readonly parameters: Query__SuspectDetailRoute__parameters,
};
