import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import { useNavigateTo } from "../routes";
import React from "react";

export const SuspectsCard = iso(`
  field Case.SuspectsCard @component {
    suspects {
      Avatar
      name
      jobTitle
      businessName
      shortBio
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
            <Stack direction="row" spacing={4}>
              <suspect.Avatar />
              <div>
                <p>
                  <b>{suspect.name}</b>: {suspect.jobTitle} at{" "}
                  {suspect.businessName}
                </p>
                <p>{suspect.shortBio}</p>
              </div>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
});
