import { iso } from "@iso";
import { Container, Stack } from "@mui/material";
import { useNavigateTo } from "../routes";
import React from "react";

export const CaseDetailRouteComponent = iso(`
  field Query.CaseDetailRoute(
    $id: ID !
  ) @component {
    openCase: case(
      caseId: $id
    ) {
      name
      SuspectsCard
      DirtiestDodgerCard
    }
  }
`)(function CaseDetailRouteComponent({ data }) {
  const navigateTo = useNavigateTo();
  const { openCase } = data;
  if (openCase == null) {
    return <h1>Case not found.</h1>;
  }
  return (
    <Container maxWidth="md">
      <h1>{openCase.name}</h1>
      <h3
        onClick={() => navigateTo({ kind: "Home" })}
        style={{ cursor: "pointer" }}
      >
        ← Home
      </h3>
      <React.Suspense fallback={<h2>Loading case details...</h2>}>
        <Stack direction="row" spacing={4}>
          <openCase.SuspectsCard />
          <openCase.DirtiestDodgerCard />
        </Stack>
      </React.Suspense>
    </Container>
  );
});
