import { iso } from "@iso";
import { FragmentRenderer, useLazyReference } from "@isograph/react";
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
        <FragmentRenderer
          fragmentReference={fragmentReference}
          networkRequestOptions={{ suspendIfInFlight: false }}
        />
      </React.Suspense>
    </ErrorBoundary>
  );
}
