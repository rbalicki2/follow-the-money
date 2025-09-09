import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";

export const TitleCard = iso(`
  field Suspect.TitleCard @component {
    name
    jobTitle
    businessName
    customerComplaints
    Avatar
  }
`)(function TitleCardComponent({ data: suspect }) {
  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <Stack direction="row" spacing={4}>
          <suspect.Avatar size={200} />
          <Stack direction="column" spacing={4}>
            <div>
              <b>{suspect.name}</b> is a {suspect.jobTitle} at{" "}
              {suspect.businessName}
            </div>
            <div>
              <b>Top customer complaint:</b> {suspect.customerComplaints}
            </div>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
});
