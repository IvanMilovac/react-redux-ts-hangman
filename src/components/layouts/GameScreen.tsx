import useSelectLetter from "../hooks/useSelectLetter";
import { Typography } from "@mui/material";
import { useState } from "react";

import ActionButtons from "../components/ActionButtons";
import Hangman from "../components/Hangman";
import Keyboard from "../components/Keyboard";
import Phrase from "../components/Phrase";
import Timer from "../components/Timer";

const GameScreen = () => {
  const [phraseColor, setPhraseColor] = useState("#000");
  useSelectLetter(setPhraseColor);
  return (
    <>
      <Typography variant="h5">The hangman</Typography>
      <Timer phraseColor={phraseColor} />
      <Hangman />
      <ActionButtons phraseColor={phraseColor} />
      <Phrase phraseColor={phraseColor} />
      <Keyboard />
    </>
  );
};
export default GameScreen;
