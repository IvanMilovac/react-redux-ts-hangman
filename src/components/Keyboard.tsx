import Button from "@mui/material/Button";
import React, { KeyboardEvent } from "react";
import { keyboardLetters } from "../data";
import { actionCreators } from "../redux/";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

interface IProps {
  win: boolean;
}

const Keyboard = ({ win }: IProps) => {
  const {
    game: { phrase, selectedLetters, rightLetters },
    stats: { attemps },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();
  const { setAttemps, setSelectedLetters, setRightLetters } =
    bindActionCreators(actionCreators, dispatch);

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
    <div
      className="keyboard"
      onClick={handleClick}
      onKeyDown={handleKey}
      tabIndex={0}
    >
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
