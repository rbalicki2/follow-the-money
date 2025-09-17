import { iso } from "@iso";
import { Button, Card, CardContent, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FragmentReader, useImperativeLoadableField } from "@isograph/react";

export const BioCard = iso(`
  field Case.DirtiestDodgerCard @component {
    Inner
    suspects {
      delinquentTaxes
    }
  }
`)(({ data }) => {
  const [state, setState] = useState(0);
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setState(state + 1);
  }, [data.suspects]);

  return (
    <div key={state}>
      {!showChild ? (
        <Button variant="contained" onClick={() => setShowChild(true)}>
          Reveal dirtiest dodger
        </Button>
      ) : (
        <data.Inner />
      )}
    </div>
  );
});

export const DirtiestCardInner = iso(`
  field Case.Inner @component {
    suspects {
      delinquentTaxes
    }
    dirtiestDodger {
      suspectName
      Avatar
    }
  }
`)(function DirtiestDodgerCard({ data }) {
  const { fragmentReference, loadField } = useImperativeLoadableField(
    data.dirtiestDodger
  );
  useEffect(() => {
    loadField();
  }, [data.suspects]);

  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <h2>Who is the Dirtiest Dodger...</h2>
        <Stack direction="column" spacing={4}>
          <React.Suspense fallback="Loading dirtiest dodger...">
            {fragmentReference != null && (
              <FragmentReader fragmentReference={fragmentReference}>
                {(data) =>
                  data && (
                    <>
                      <Stack direction="row" spacing={4}>
                        <data.Avatar />
                        <h3>
                          Is revealed to be <b>{data.suspectName}</b>
                        </h3>
                      </Stack>
                    </>
                  )
                }
              </FragmentReader>
            )}
          </React.Suspense>
        </Stack>
      </CardContent>
    </Card>
  );
});
