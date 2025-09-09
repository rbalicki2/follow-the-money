import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";

export const BioCard = iso(`
  field Suspect.BioCard @component {
    longBio
  }
`)(function BioCardComponent({ data: suspect }) {
  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <Stack direction="column" spacing={4}>
          <h2>Biography</h2>
          <p>{suspect.longBio ?? "Unknown"}</p>
        </Stack>
      </CardContent>
    </Card>
  );
});
