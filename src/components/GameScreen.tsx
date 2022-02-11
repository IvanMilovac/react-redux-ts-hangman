import Hangman from "./Hangman";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Keyboard from "./Keyboard";

function findUnique(str: string) {
  let arrayOfLetters = str?.split("");

  let setUnique = new Set(arrayOfLetters);

  str = [...Array.from(setUnique)].join("");

  return str.replace(/[^a-z]/gi, "");
}

function checkEquality(str1: string, str2: string) {
  if (str2.length === 0) return false;
  let str1Array = findUnique(str1).split("");
  let str2Array = findUnique(str2).split("");
  if (str1Array?.length !== str2Array?.length) return false;
  for (let i = 0; i < str1Array.length; i++) {
    if (str2Array.indexOf(str1Array[i]) >= 0) {
      str2Array.splice(str2Array.indexOf(str1Array[i]), 1);
    }
  }
  return !str2Array?.length;
}

const GameScreen = () => {
  const [phraseColor, setPhraseColor] = useState("#000");
  const [win, setWin] = useState(false);
  const {
    stats: { attemps },
    game: { selectedLetters, rightLetters, phrase },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { savePhrase } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    try {
      axios
        .get("http://api.quotable.io/random")
        .then((data) => savePhrase(data.data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(
    "HINT: ",
    findUnique(phrase?.content?.toLowerCase()).split("").sort().join("")
  );

  useEffect(() => {
    if (attemps > 5) return setPhraseColor("#f00");
    const { content } = phrase;
    const isEqual = checkEquality(
      content?.toLowerCase(),
      rightLetters?.toLowerCase()
    );

    if (isEqual) {
      setWin(true);
      return setPhraseColor("#0a0");
    }
  }, [selectedLetters]);

  var regexp = new RegExp("(?![" + selectedLetters + "])[a-z]", "gi");

  return (
    <>
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
