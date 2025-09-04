import { iso } from "@iso";
import { Avatar } from "@mui/material";
import React from "react";

export const PetAvatar = iso(`
  field Pet.Avatar @component {
    picture
  }
`)(function PetAvatar({ data }, { onClick }: { onClick: () => void }) {
  return (
    <Avatar
      sx={{ height: 100, width: 100, cursor: "pointer" }}
      src={data.picture}
      onClick={onClick}
    />
  );
});
