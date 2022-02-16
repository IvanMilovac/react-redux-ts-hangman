import { useEffect, useRef } from "react";
import useStoreDispatch from "./useStoreDispatch";
import useStoreSelector from "./useStoreSelector";
import { findUnique, checkEquality } from "../../utils";
import axios from "axios";

const useSelectLetter = (setPhraseColor: Function) => {
  const {
    user: { name },
    stats: { attemps, intervalId, elapsedTime },
    game: { rightLetters, selectedLetters, phrase },
  } = useStoreSelector();

  const { setFinalResult, setWin } = useStoreDispatch();

  const setPhraseColorRef = useRef(setPhraseColor);
  const setWinRef = useRef(setWin);
  const setFinalResultRef = useRef(setFinalResult);

  useEffect(() => {
    setPhraseColorRef.current = setPhraseColor;
    setWinRef.current = setWin;
    setFinalResultRef.current = setFinalResult;
  }, [setPhraseColor, setWin, setFinalResult]);

  useEffect(() => {
    setPhraseColorRef.current("#000");
    if (attemps > 5) {
      clearInterval(intervalId);
      return setPhraseColorRef.current("#f00");
    }
    const { content } = phrase;
    const isEqual = checkEquality(
      content?.toLowerCase(),
      rightLetters?.toLowerCase()
    );
    if (isEqual) {
      clearInterval(intervalId);
      setWinRef.current(true);
      const body = {
        quoteId: phrase._id,
        length: phrase.length,
        uniqueCharacters: findUnique(content.toLowerCase()).length,
        userName: name,
        errors: selectedLetters.length - rightLetters.length,
        duration: elapsedTime,
      };
      setFinalResultRef.current(body);
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
        .catch((err) => console.error(err));
      return setPhraseColorRef.current("#0a0");
    }
  }, [
    attemps,
    elapsedTime,
    intervalId,
    name,
    phrase,
    rightLetters,
    selectedLetters.length,
  ]);
};

export default useSelectLetter;
