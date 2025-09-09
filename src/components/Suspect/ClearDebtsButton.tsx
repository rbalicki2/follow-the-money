import { iso } from "@iso";
import { Button } from "@mui/material";
import React from "react";

export const ClearDebtsButton = iso(`
  field Suspect.ClearDebtsButton @component {
    income
    delinquentTaxes @updatable
  }
`)(function ClearDebtsButton({ data: suspect, startUpdate }) {
  return (
    <Button
      variant="contained"
      onClick={() => {
        startUpdate((updatableData) => {
          updatableData.delinquentTaxes = 0;
        });
      }}
    >
      Clear debts (${suspect.delinquentTaxes})
    </Button>
  );
});
