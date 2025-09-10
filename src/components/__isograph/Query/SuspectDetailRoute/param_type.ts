import { type Suspect__BioCard__output_type } from '../../Suspect/BioCard/output_type';
import { type Suspect__BusinessAssociatesCard__output_type } from '../../Suspect/BusinessAssociatesCard/output_type';
import { type Suspect__IncomeStatementCard__output_type } from '../../Suspect/IncomeStatementCard/output_type';
import { type Suspect__TitleCard__output_type } from '../../Suspect/TitleCard/output_type';
import type { Query__SuspectDetailRoute__parameters } from './parameters_type';

export type Query__SuspectDetailRoute__param = {
  readonly data: {
    /**
Find a specific suspect. Are they guilty? Probably. Do they have a good alibi? Doubtful.
    */
    readonly suspect: ({
      /**
Their unique ID, which is definitely not a witness protection number.
      */
      readonly id: string,
      /**
Their official name, likely an alias like "Barnaby Buttercup."
      */
      readonly suspectName: string,
      readonly TitleCard: Suspect__TitleCard__output_type,
      readonly BioCard: Suspect__BioCard__output_type,
      readonly IncomeStatementCard: Suspect__IncomeStatementCard__output_type,
      readonly BusinessAssociatesCard: Suspect__BusinessAssociatesCard__output_type,
    } | null),
  },
  readonly parameters: Query__SuspectDetailRoute__parameters,
};
