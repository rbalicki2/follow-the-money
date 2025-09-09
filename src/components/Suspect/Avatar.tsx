import { iso } from "@iso";
import { Avatar } from "@mui/material";
import { useNavigateTo } from "../routes";

export const SuspectAvatar = iso(`
  field Suspect.Avatar @component {
    imageUrl
    id
  }
`)(
  (
    { data: suspect },
    { onClick, size }: { onClick?: () => void; size?: number }
  ) => {
    const navigateTo = useNavigateTo();
    const actualOnClick =
      onClick ??
      (() =>
        navigateTo({
          kind: "SuspectDetail",
          id: suspect.id,
        }));

    return suspect.imageUrl != null ? (
      <Avatar
        sx={{ height: size ?? 100, width: size ?? 100, cursor: "pointer" }}
        src={suspect.imageUrl}
        onClick={actualOnClick}
      />
    ) : null;
  }
);
