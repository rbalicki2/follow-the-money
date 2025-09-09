import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import React from "react";

export const IncomeStatement = iso(`
  field Suspect.IncomeStatementCard @component {
    income
    delinquentTaxes
  }
`)(function IncomeStatementCard({ data: suspect }) {
  return (
    <Card
      variant="outlined"
      sx={{ width: 450, boxShadow: 3, backgroundColor: "#BBB" }}
    >
      <CardContent>
        <Stack direction="column" spacing={4}>
          <h2>Income Statement</h2>
          <p>
            <b>Income:</b> ${suspect.income}
          </p>
          <p>
            <b>Delinquent Taxes:</b> ${suspect.delinquentTaxes}
          </p>
        </Stack>
      </CardContent>
    </Card>
  );
});
