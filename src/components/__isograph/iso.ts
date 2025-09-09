import type { IsographEntrypoint } from '@isograph/react';
import { type Case__DirtiestDodgerCard__param } from './Case/DirtiestDodgerCard/param_type';
import { type Case__HomePageCaseDisplay__param } from './Case/HomePageCaseDisplay/param_type';
import { type Case__SuspectsCard__param } from './Case/SuspectsCard/param_type';
import { type Case__dirtiestDodger__param } from './Case/dirtiestDodger/param_type';
import { type Query__CaseDetailRoute__param } from './Query/CaseDetailRoute/param_type';
import { type Query__HomeRoute__param } from './Query/HomeRoute/param_type';
import { type Query__SuspectDetailRoute__param } from './Query/SuspectDetailRoute/param_type';
import { type Suspect__Avatar__param } from './Suspect/Avatar/param_type';
import { type Suspect__BioCard__param } from './Suspect/BioCard/param_type';
import { type Suspect__ClearDebtsButton__param } from './Suspect/ClearDebtsButton/param_type';
import { type Suspect__IncomeStatementCard__param } from './Suspect/IncomeStatementCard/param_type';
import { type Suspect__TitleCard__param } from './Suspect/TitleCard/param_type';
import entrypoint_Query__CaseDetailRoute from '../__isograph/Query/CaseDetailRoute/entrypoint';
import entrypoint_Query__HomeRoute from '../__isograph/Query/HomeRoute/entrypoint';
import entrypoint_Query__SuspectDetailRoute from '../__isograph/Query/SuspectDetailRoute/entrypoint';

// This is the type given to regular client fields.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes one parameter
// of type TParam.
type IdentityWithParam<TParam extends object> = <TClientFieldReturn>(
  clientField: (param: TParam) => TClientFieldReturn
) => (param: TParam) => TClientFieldReturn;

// This is the type given it to client fields with @component.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes two parameters.
// The first has type TParam, and the second has type TComponentProps.
//
// TComponentProps becomes the types of the props you must pass
// whenever the @component field is rendered.
type IdentityWithParamComponent<TParam extends object> = <
  TClientFieldReturn,
  TComponentProps = Record<PropertyKey, never>,
>(
  clientComponentField: (data: TParam, componentProps: TComponentProps) => TClientFieldReturn
) => (data: TParam, componentProps: TComponentProps) => TClientFieldReturn;

type WhitespaceCharacter = ' ' | '\t' | '\n';
type Whitespace<In> = In extends `${WhitespaceCharacter}${infer In}`
  ? Whitespace<In>
  : In;

// This is a recursive TypeScript type that matches strings that
// start with whitespace, followed by TString. So e.g. if we have
// ```
// export function iso<T>(
//   isographLiteralText: T & MatchesWhitespaceAndString<'field Query.foo', T>
// ): Bar;
// ```
// then, when you call
// ```
// const x = iso(`
//   field Query.foo ...
// `);
// ```
// then the type of `x` will be `Bar`, both in VSCode and when running
// tsc. This is how we achieve type safety — you can only use fields
// that you have explicitly selected.
type MatchesWhitespaceAndString<
  TString extends string,
  T
> = Whitespace<T> extends `${TString}${string}` ? T : never;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Case.DirtiestDodgerCard', T>
): IdentityWithParamComponent<Case__DirtiestDodgerCard__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Case.HomePageCaseDisplay', T>
): IdentityWithParamComponent<Case__HomePageCaseDisplay__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Case.SuspectsCard', T>
): IdentityWithParamComponent<Case__SuspectsCard__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'pointer Case.dirtiestDodger', T>
): IdentityWithParam<Case__dirtiestDodger__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.CaseDetailRoute', T>
): IdentityWithParamComponent<Query__CaseDetailRoute__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.HomeRoute', T>
): IdentityWithParamComponent<Query__HomeRoute__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.SuspectDetailRoute', T>
): IdentityWithParamComponent<Query__SuspectDetailRoute__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Suspect.Avatar', T>
): IdentityWithParamComponent<Suspect__Avatar__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Suspect.BioCard', T>
): IdentityWithParamComponent<Suspect__BioCard__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Suspect.ClearDebtsButton', T>
): IdentityWithParamComponent<Suspect__ClearDebtsButton__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Suspect.IncomeStatementCard', T>
): IdentityWithParamComponent<Suspect__IncomeStatementCard__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Suspect.TitleCard', T>
): IdentityWithParamComponent<Suspect__TitleCard__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.CaseDetailRoute', T>
): typeof entrypoint_Query__CaseDetailRoute;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.HomeRoute', T>
): typeof entrypoint_Query__HomeRoute;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.SuspectDetailRoute', T>
): typeof entrypoint_Query__SuspectDetailRoute;

export function iso(_isographLiteralText: string):
  | IdentityWithParam<any>
  | IdentityWithParamComponent<any>
  | IsographEntrypoint<any, any, any>
{
  throw new Error('iso: Unexpected invocation at runtime. Either the Babel transform ' +
      'was not set up, or it failed to identify this call site. Make sure it ' +
      'is being used verbatim as `iso`. If you cannot use the babel transform, ' + 
      'set options.no_babel_transform to true in your Isograph config. ');
}