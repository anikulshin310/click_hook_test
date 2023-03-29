import React from "react";
import { Button, CircularProgress } from "@mui/material";

type TLoadingButton = {
  handleClick: () => void;
  isLoading: boolean;
};

export const LoadingButton = ({ handleClick, isLoading }: TLoadingButton) => {
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={isLoading}
      style={{ padding: "10px" }}
      fullWidth
    >
      {isLoading && <CircularProgress sx={{ position: "absolute" }} />}
      Кликнуть
    </Button>
  );
};
