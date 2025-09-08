import { HomeRouteLoader } from "@/src/components/HomeRoute";
import { FullPageLoading } from "@/src/components/routes";
import ThemeProvider from "@/src/theme";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>🤑 Follow the Money 🤑</title>
      </Head>
      <ThemeProvider>
        <Suspense fallback={<FullPageLoading />}>
          <HomeRouteLoader />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
