import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Box, Typography, Button } from "@mui/material";

import { actionCreators } from "../redux";
import { RootState } from "../redux/reducers";

import Table from "./Table";

import { compareUserResult, calculateScore } from "../utils";

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
  const [resultData, setResultData] = useState([] as IRow[]);
  const navigate = useNavigate();
  const {
    stats: { gameResult },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { resetGame } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    const { quoteId, userName, errors, length, uniqueCharacters, duration } =
      gameResult;
    axios
      .get(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores"
      )
      .then(({ data }) => {
        let array: IRow[] = [];
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
