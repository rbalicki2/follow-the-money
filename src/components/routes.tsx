import { useRouter } from "next/router";

export type CaseId = string;

export type Route = HomeRoute | CaseDetailRoute | SuspectDetailRoute;

export type HomeRoute = {
  kind: "Home";
};

export type CaseDetailRoute = {
  kind: "CaseDetail";
  id: CaseId;
};

export type SuspectDetailRoute = {
  kind: "SuspectDetail";
  id: CaseId;
};

export function useNavigateTo() {
  const router = useRouter();
  return (route: Route) => router.push(toRouteUrl(route));
}

function toRouteUrl(route: Route): string {
  switch (route.kind) {
    case "Home": {
      return "/";
    }
    case "CaseDetail": {
      return `/case/${route.id}`;
    }
    case "SuspectDetail": {
      return `/suspect/${route.id}`;
    }
    default: {
      let _: never = route;
      throw new Error("Unhandled route");
    }
  }
}

export function FullPageLoading() {
  return <h1 className="mt-5">Loading...</h1>;
}
