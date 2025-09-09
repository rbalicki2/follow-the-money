import { iso } from "@iso";
import { FragmentReader, useLazyReference } from "@isograph/react";
import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { FullPageLoading, CaseDetailRoute } from "./routes";

export function CaseDetailRouteLoader({ route }: { route: CaseDetailRoute }) {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Query.CaseDetailRoute`),
    { id: route.id },
    {}
  );

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<FullPageLoading />}>
        <FragmentReader
          fragmentReference={fragmentReference}
          networkRequestOptions={{ suspendIfInFlight: false }}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}
