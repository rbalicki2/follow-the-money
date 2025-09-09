import { iso } from "@iso";
import { Button, Card, CardContent, Stack } from "@mui/material";
import React from "react";
import {
  FragmentReader,
  useImperativeLoadableField,
  useIsographEnvironment,
} from "@isograph/react";

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
  console.log(fragmentReference);
  const env = useIsographEnvironment();
  console.log({ env });

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
          )}
        </Stack>
      </CardContent>
    </Card>
  );
});
