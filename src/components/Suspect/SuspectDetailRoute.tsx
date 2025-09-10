import { iso } from "@iso";
import { Container, Stack } from "@mui/material";
import { useNavigateTo } from "../routes";
import React from "react";
import Misc from "../Misc";

export const CaseDetailRouteComponent = iso(`
  field Query.SuspectDetailRoute(
    $suspectId: ID !
  ) @component {
    suspect(
      suspectId: $suspectId
    ) {
      id
      suspectName
      TitleCard
      BioCard
      IncomeStatementCard
    }
  }
`)(function CaseDetailRouteComponent({ data, parameters }) {
  const navigateTo = useNavigateTo();
  const { suspect } = data;
  if (suspect == null) {
    return <h1>Case not found.</h1>;
  }
  return (
    <Container maxWidth="md">
      <h1>{suspect.suspectName}</h1>
      <h3 onClick={() => history.back()} style={{ cursor: "pointer" }}>
        ← Back
      </h3>
      <React.Suspense fallback={<h2>Loading suspect details...</h2>}>
        <Stack direction="row" spacing={4}>
          <Stack direction="column" spacing={4}>
            <suspect.TitleCard />
            <suspect.BioCard />
          </Stack>
          <Stack direction="column" spacing={4}>
            <suspect.IncomeStatementCard />
            {suspect.id === "suspect_5" && <Misc />}
          </Stack>
        </Stack>
      </React.Suspense>
    </Container>
  );
});
