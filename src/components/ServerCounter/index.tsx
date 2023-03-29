import React from "react";
import { Box } from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type TCounter = { count: number; isError?: boolean; type: "server" | "client" };

export const Counter = ({ count, isError, type }: TCounter) => {
  const styles = {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    backgroundColor: type === "client" ? "#E5F6FD" : "#FEFBEA",
    color: type === "client" ? "#828796" : "#998E6E",
    gap: "15px",
    height: "50px",
    width: "100%",
  };
  if (type === "client")
    return (
      <Box sx={styles}>
        <InfoOutlinedIcon sx={{ color: "#1993D6" }} fontSize="small" />
        Вы кликнули {count}
      </Box>
    );
  return (
    <Box sx={styles}>
      <WarningAmberOutlinedIcon sx={{ color: "#FBC641" }} fontSize="small" />
      По версии сервера {!isError ? count : "произошла ошибка"}
    </Box>
  );
};
