import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";

import useStoreDispatch from "../hooks/useStoreDispatch";

import Table from "../components/Table";

import { compareUserResult } from "../../utils";
import useFetchAllResults from "../hooks/useFetchAllResults";

const ResultScreen = () => {
  const [resultData, setResultData] = useState([] as IData[]);
  const navigate = useNavigate();
  const { resetGame } = useStoreDispatch();

  useFetchAllResults(setResultData);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "column",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Score table
        </Typography>
        {resultData.length === 0 ? (
          <p>Loading results...</p>
        ) : (
          <Table
            columns={["User", "Score"]}
            rows={resultData.sort(compareUserResult)}
          />
        )}
        <Button
          variant="outlined"
          onClick={() => {
            resetGame();
            navigate("/game");
          }}
        >
          Back to game
        </Button>
      </Box>
    </>
  );
};

export default ResultScreen;
