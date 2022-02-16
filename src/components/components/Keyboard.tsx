import Button from "@mui/material/Button";
import React, { KeyboardEvent } from "react";
import { keyboardLetters } from "../../data";
import useStoreDispatch from "../hooks/useStoreDispatch";
import useStoreSelector from "../hooks/useStoreSelector";

const Keyboard = () => {
  const {
    game: { phrase, selectedLetters, rightLetters },
    stats: { attemps, win },
  } = useStoreSelector();

  const { setAttemps, setSelectedLetters, setRightLetters } =
    useStoreDispatch();

  const handleClick = (e: React.MouseEvent) => {
    let element = e.target as HTMLButtonElement;
    let { name, innerText } = element;
    const { content } = phrase;
    if (name === "key" && !selectedLetters.includes(innerText)) {
      setSelectedLetters(selectedLetters + innerText);
      if (content?.toUpperCase()?.indexOf(innerText) === -1)
        setAttemps(attemps + 1);
    }
    if (content?.toUpperCase()?.includes(innerText))
      setRightLetters(rightLetters + innerText);
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (selectedLetters.includes(e.key.toUpperCase())) return;
    const { content } = phrase;
    if (keyboardLetters.includes(e.key.toUpperCase())) {
      setSelectedLetters(selectedLetters + e.key.toUpperCase());
      if (content?.toUpperCase()?.indexOf(e.key.toUpperCase()) === -1)
        setAttemps(attemps + 1);
    }
    if (content?.toUpperCase()?.includes(e.key.toUpperCase()))
      setRightLetters(rightLetters + e.key.toUpperCase());
  };

  return (
    <div className="keyboard" onClick={handleClick} onKeyDown={handleKey}>
      {keyboardLetters.map((item) => (
        <Button
          variant="contained"
          color="warning"
          name="key"
          disabled={attemps > 5 || selectedLetters?.indexOf(item) !== -1 || win}
          key={item}
          sx={{ flex: "1 0 auto" }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Keyboard;
