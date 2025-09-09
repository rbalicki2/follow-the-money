import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
  IsographOperation,
  type Link,
  type StoreRecord,
} from "@isograph/react";
import type { AppProps } from "next/app";
import { useMemo } from "react";

function wait(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function makeNetworkRequest<T>(
  operation: IsographOperation,
  variables: unknown
): Promise<T> {
  const promise = fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: operation.text, variables }),
  }).then(async (response) => {
    if (operation.text.includes("Query__dirtiestDodger")) {
      await wait(5000);
    }

    const json = await response.json();

    if (response.ok) {
      /**
       * Enforce that the network response follows the specification:: {@link https://spec.graphql.org/draft/#sec-Errors}.
       */
      if (Object.hasOwn(json, "errors")) {
        if (!Array.isArray(json.errors) || json.errors.length === 0) {
          throw new Error("GraphQLSpecificationViolationError", {
            cause: json,
          });
        }
        throw new Error("GraphQLError", {
          cause: json.errors,
        });
      }
      return json;
    }
    throw new Error("NetworkError", {
      cause: json,
    });
  });
  return promise;
}
const missingFieldHandler = (
  storeRecord: StoreRecord,
  root: Link,
  fieldName: string,
  arguments_: { [index: string]: any } | null,
  variables: { [index: string]: any } | null
): Link | undefined => {
  if (
    fieldName === "case" &&
    variables?.caseId != null &&
    root.__link === "__ROOT"
  ) {
    return { __link: variables.caseId, __typename: "Case" };
  }
  if (
    fieldName === "suspect" &&
    variables?.suspectId != null &&
    root.__link === "__ROOT"
  ) {
    return { __link: variables.suspectId, __typename: "Suspect" };
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const environment = useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        // @ts-expect-error network function and environment should be generated
        makeNetworkRequest,
        missingFieldHandler,
        typeof window != "undefined" ? console.log : null
      ),
    []
  );
  return (
    <IsographEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </IsographEnvironmentProvider>
  );
}
