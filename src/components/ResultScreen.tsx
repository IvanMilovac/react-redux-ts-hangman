import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Table from "./Table";
import { RootState } from "../redux/reducers";
import { compareUserResult } from "../utils";

interface IApiScore {
  _id: number;
  quoteId: string;
  length: number;
  uniqueCharacters: number;
  userName: string;
  errors: number;
  duration: number;
}

const calculateScore = (user: IRow, allResult: IRow[]) => {
  let maxUC = 0,
    maxL = 0,
    minD = 1000000000;
  let { errors, length, uniqueCharacters, duration } = user;
  allResult.map((item) => {
    let { uniqueCharacters, length, duration } = item;
    if (uniqueCharacters > maxUC) maxUC = uniqueCharacters;
    if (length > maxL) maxL = length;
    if (duration < minD) minD = duration;
  });
  const score =
    100 *
    (1 / (1 + errors)) *
    (uniqueCharacters / maxUC) *
    (length / maxL) *
    (minD / duration);
  return parseFloat(score.toFixed(2));
};

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
        <Typography variant="h4" sx={{textAlign: "center"}}>Score table</Typography>
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
