import Hangman from "./Hangman";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Keyboard from "./Keyboard";
import { findUnique, checkEquality, msToMS } from "../utils";

let startTime: number, endTime: number;
let intervalId: ReturnType<typeof setInterval>;

const GameScreen = () => {
  const [elapsedTime, setElapsedTime] = useState("00:00");
  const [phraseColor, setPhraseColor] = useState("#000");
  const [win, setWin] = useState(false);
  const [reset, setReset] = useState(false);
  const {
    stats: { attemps },
    user: { name },
    game: { selectedLetters, rightLetters, phrase },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { savePhrase, setSelectedLetters, setRightLetters, setAttemps } =
    bindActionCreators(actionCreators, dispatch);

  const handleNewQuote = () => {
    setWin(false);
    setSelectedLetters("");
    setRightLetters("");
    setReset(!reset);
    setPhraseColor("#000");
    setAttemps(0);
  };

  useEffect(() => {
    setElapsedTime("00:00");
    try {
      axios
        .get("http://api.quotable.io/random")
        .then((data) => savePhrase(data.data));
      startTime = new Date().getTime();
      intervalId = setInterval(() => {
        endTime = new Date().getTime();
        setElapsedTime(msToMS(endTime - startTime));
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }, [reset]);

  useEffect(() => {
    if (attemps > 5) {
      clearInterval(intervalId);
      return setPhraseColor("#f00");
    }
    const { content } = phrase;
    const isEqual = checkEquality(
      content?.toLowerCase(),
      rightLetters?.toLowerCase()
    );

    if (isEqual) {
      setWin(true);
      clearInterval(intervalId);
      const body = {
        quoteId: phrase._id,
        length: phrase.length,
        uniqueCharacters: findUnique(content.toLowerCase()).length,
        userName: name,
        errors: selectedLetters.length - rightLetters.length,
        duration: endTime - startTime,
      };
      axios
        .post(
          "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores",
          body,
          {
            headers: {
              contentType: "application/json",
            },
          }
        )
        .then((data) => console.log(data));
      return setPhraseColor("#0a0");
    }
  }, [selectedLetters]);

  var regexp = new RegExp("(?![" + selectedLetters + "])[a-z]", "gi");

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          top: "30%",
          right: "5%",
          color: phraseColor,
          borderColor: phraseColor,
        }}
        onClick={handleNewQuote}
      >
        {attemps <= 5 ? "New quote" : "Try again"}
      </Button>
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "15%",
          right: "5%",
          paddingInline: "1rem",
          border: "1px solid",
          borderColor: phraseColor,
          color: phraseColor,
          borderRadius: "5px",
        }}
      >
        Time:
        <br />
        {elapsedTime}
      </Typography>
      <Typography variant="h6" gutterBottom>
        The Hangman Game
      </Typography>
      <Hangman attemps={attemps} win={win} />
      <Typography
        sx={{
          letterSpacing: "2px",
          fontSize: "1.25rem",
          textAlign: "center",
          paddingBlock: "1.5rem",
          color: phraseColor,
        }}
      >
        {phrase?.content?.replace(regexp, "_")}
      </Typography>
      <Keyboard win={win} />
    </>
  );
};

export default GameScreen;
