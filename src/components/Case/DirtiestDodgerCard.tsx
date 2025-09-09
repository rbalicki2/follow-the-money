import { iso } from "@iso";
import { Button, Card, CardContent, Stack } from "@mui/material";
import React from "react";
import { useImperativeLoadableField } from "@isograph/react";

export const BioCard = iso(`
  field Case.DirtiestDodgerCard @component {
    dirtiestDodger {
      name
      Avatar
    }
  }
`)(function BioCardComponent({ data }) {
  const { fragmentReference, loadField } = useImperativeLoadableField(
    data.dirtiestDodger
  );

  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <h2>Who is the Dirtiest Dodger...</h2>
        <Stack direction="column" spacing={4}>
          {fragmentReference == null ? (
            <Button variant="contained" onClick={() => loadField({})}>
              Load
            </Button>
          ) : (
            <React.Suspense fallback="Loading dirtiest dodger...">
              null
            </React.Suspense>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
});
