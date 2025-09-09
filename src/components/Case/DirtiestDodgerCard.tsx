import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";
import { FragmentReader, useClientSideDefer } from "@isograph/react";

export const BioCard = iso(`
  field Case.DirtiestDodgerCard @component {
    suspects {
      delinquentTaxes
    }
    dirtiestDodger {
      name
      Avatar
    }
  }
`)(function DirtiestDodgerCard({ data }) {
  console.log("dodger card re-rendered tho", data);
  // const { fragmentReference, loadField } = useImperativeLoadableField(
  //   data.dirtiestDodger
  // );
  const { fragmentReference } = useClientSideDefer(data.dirtiestDodger);

  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <h2>Who is the Dirtiest Dodger...</h2>
        <Stack direction="column" spacing={4}>
          <React.Suspense fallback="Loading dirtiest dodger...">
            <FragmentReader fragmentReference={fragmentReference}>
              {(data) => (
                <>
                  <Stack direction="row" spacing={4}>
                    <data.Avatar />
                    <h3>
                      Is revealed to be <b>{data.name}</b>
                    </h3>
                  </Stack>
                </>
              )}
            </FragmentReader>
          </React.Suspense>
        </Stack>
      </CardContent>
    </Card>
  );
});
