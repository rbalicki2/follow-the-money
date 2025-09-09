import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import { useNavigateTo } from "../routes";
import React from "react";

export const SuspectsCard = iso(`
  field Case.SuspectsCard @component {
    suspects {
      id
      Avatar
      name
      jobTitle
      businessName
      shortBio
      ClearDebtsButton
    }
  }
`)(function SuspectsCard({ data }) {
  const navigateTo = useNavigateTo();
  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <Stack direction="column" spacing={4}>
          <h2>Suspects</h2>
          {data.suspects.map((suspect) => (
            <Stack direction="row" spacing={4} key={suspect.id}>
              <suspect.Avatar />
              <div>
                <p>
                  <b>{suspect.name}</b>: {suspect.jobTitle} at{" "}
                  {suspect.businessName}
                </p>
                <p>{suspect.shortBio}</p>
                <suspect.ClearDebtsButton />
              </div>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
});
