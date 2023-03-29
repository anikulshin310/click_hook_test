import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { useDebounce } from "./hooks/useDebounce";
import useFetchClick from "./hooks/useFetchClick";

import { Counter } from "./components/ServerCounter";
import { LoadingButton } from "./components/LoadingButton";

function App() {
  const [clickCount, setClickCount] = useState<number>(0);
  const [serverCount, setServerCount] = useState<number>(0);
  const count = useDebounce<number>(clickCount, 1000);
  const { response, isLoading, isError } = useFetchClick(
    "https://lk.zont-online.ru/api/button_count",
    count
  );

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    if (response?.count) {
      setClickCount(0);
      setServerCount(response.count);
    }
  }, [response]);

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
        }}
      >
        <LoadingButton handleClick={handleClick} isLoading={isLoading} />
        <Counter count={clickCount} type="client" />
        <Counter count={serverCount} isError={isError} type="server" />
      </Box>
    </div>
  );
}

export default App;
