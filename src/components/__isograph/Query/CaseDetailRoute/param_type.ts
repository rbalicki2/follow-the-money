import { type Case__DirtiestDodgerCard__output_type } from '../../Case/DirtiestDodgerCard/output_type';
import { type Case__SuspectsCard__output_type } from '../../Case/SuspectsCard/output_type';
import type { Query__CaseDetailRoute__parameters } from './parameters_type';

export type Query__CaseDetailRoute__param = {
  readonly data: {
    readonly openCase: ({
      readonly name: string,
      readonly SuspectsCard: Case__SuspectsCard__output_type,
      readonly DirtiestDodgerCard: Case__DirtiestDodgerCard__output_type,
    } | null),
  },
  readonly parameters: Query__CaseDetailRoute__parameters,
};
