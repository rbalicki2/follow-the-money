import { iso } from "@iso";
import { FragmentReader, useLazyReference } from "@isograph/react";
import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { FullPageLoading, SuspectDetailRoute } from "./routes";

export function SuspectDetailRouteLoader({
  route,
}: {
  route: SuspectDetailRoute;
}) {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Query.SuspectDetailRoute`),
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
