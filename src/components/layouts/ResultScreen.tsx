import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Box, Typography, Button } from "@mui/material";

import useStoreSelector from "../hooks/useStoreSelector";
import useStoreDispatch from "../hooks/useStoreDispatch";

import Table from "../components/Table";

import { compareUserResult, calculateScore } from "../../utils";

interface IApiScore {
  _id: number;
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
}

const ResultScreen = () => {
  const [resultData, setResultData] = useState([] as IData[]);
  const navigate = useNavigate();
  const {
    stats: { gameResult },
  } = useStoreSelector();
  const { resetGame } = useStoreDispatch();
  useEffect(() => {
    const { quoteId, userName, errors, length, uniqueCharacters, duration } =
      gameResult;
    axios
      .get(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores"
      )
      .then(({ data }) => {
        let array: IData[] = [];
        data.map((item: IApiScore) =>
          array.push({
            quoteId: item.quoteId,
            userName: item.userName,
            length: item.length,
            uniqueCharacters: item.uniqueCharacters,
            errors: item.errors,
            duration: item.duration,
          })
        );
        array.push({
          quoteId: quoteId,
          userName: userName,
          length: length,
          uniqueCharacters: uniqueCharacters,
          errors: errors,
          duration: duration,
        });
        array = array.map((item) => ({
          ...item,
          score: calculateScore(item, array),
        }));
        setResultData(array);
      });
  }, [gameResult]);

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
        <Table
          columns={["User", "Score"]}
          rows={resultData.sort(compareUserResult)}
        />
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
