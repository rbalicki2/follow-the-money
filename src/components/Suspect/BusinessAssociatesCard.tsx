import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";

export const BusinessAssociates = iso(`
  field Suspect.BusinessAssociatesCard @component {
    businessAssociates {
      with {
        Avatar
        suspectName
        shortBio
      }
      description
    }
  }
`)(function BusinessAssociatesCard({ data: suspect }) {
  if (suspect.businessAssociates == null) {
    return null;
  }
  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <Stack direction="column" spacing={4}>
          {suspect.businessAssociates.map((associate) => {
            return (
              <Stack direction="row" spacing={4}>
                <associate.with.Avatar />
                <div>
                  <p>
                    <b>{associate.with.suspectName}:</b> {associate.description}
                  </p>
                  <p>{associate.with.shortBio}</p>
                </div>
              </Stack>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
});
