import { CaseDetailRouteLoader } from "@/src/components/CaseDetailRouteLoader";
import { FullPageLoading } from "@/src/components/routes";
import ThemeProvider from "@/src/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";

export default function PetDetail() {
  const router = useRouter();

  // During SSR, id will be nullish. So, we just render the shell.
  // This isn't ideal, and we should figure out how to fix that!
  const id = router.query.id;
  if (id == null || Array.isArray(id)) {
    return;
  }

  return (
    <>
      <Head>
        <title>🤑 Follow the Money 🤑</title>
      </Head>
      <ThemeProvider>
        <Suspense fallback={<FullPageLoading />}>
          <CaseDetailRouteLoader
            route={{
              kind: "CaseDetail",
              id,
            }}
          />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
