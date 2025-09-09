import { iso } from "@iso";
import { FragmentRenderer, useLazyReference } from "@isograph/react";
import { Container, Stack } from "@mui/material";
import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { FullPageLoading } from "./routes";

export const HomeRoute = iso(`
  field Query.HomeRoute @component {
    cases {
      id
      HomePageCaseDisplay
    }
  }
`)(function HomeRouteComponent({ data }) {
  return (
    <Container maxWidth="md">
      <h1>Open Cases</h1>
      <Stack direction="column" spacing={4}>
        {data.cases.map((openCase) => (
          <openCase.HomePageCaseDisplay key={openCase.id} />
        ))}
      </Stack>
    </Container>
  );
});

export function HomeRouteLoader() {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Query.HomeRoute`),
    {}
  );

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<FullPageLoading />}>
        <FragmentRenderer
          fragmentReference={fragmentReference}
          networkRequestOptions={{ suspendIfInFlight: false }}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}
