import { iso } from "@iso";
import { Card, CardContent, Stack } from "@mui/material";
import { useNavigateTo } from "../routes";

export const HomePageCaseDisplay = iso(`
  field Case.HomePageCaseDisplay @component {
    id
    name
  }
`)(({ data }) => {
  const navigateTo = useNavigateTo();
  return (
    <Card
      variant="outlined"
      sx={{
        width: 450,
        boxShadow: 3,
        backgroundColor: "#BBB",
        cursor: "pointer",
      }}
      onClick={() =>
        navigateTo({
          kind: "CaseDetail",
          id: data.id,
        })
      }
    >
      <CardContent>
        <Stack direction="row" spacing={4}>
          <h2>{data.name}</h2>
        </Stack>
      </CardContent>
    </Card>
  );
});
