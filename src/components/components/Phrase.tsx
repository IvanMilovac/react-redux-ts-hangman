import { useEffect, useRef } from "react";
import { Typography } from "@mui/material";

import useStoreDispatch from "../hooks/useStoreDispatch";
import useStoreSelector from "../hooks/useStoreSelector";

interface IProps {
  phraseColor: string;
}

const Phrase = ({ phraseColor }: IProps) => {
  const {
    game: { phrase, selectedLetters },
  } = useStoreSelector();
  const { content } = phrase;
  const { fetchNewPhrase } = useStoreDispatch();

  const fetchNewPhraseRef = useRef(fetchNewPhrase);

  useEffect(() => {
    fetchNewPhraseRef.current = fetchNewPhrase;
  }, [fetchNewPhrase]);

  useEffect(() => {
    fetchNewPhraseRef.current();
  }, []);

  let regexp = new RegExp("(?![" + selectedLetters + "])[a-z]", "gi");

  return (
    <Typography
      sx={{
        letterSpacing: "2px",
        fontSize: "1.25rem",
        textAlign: "center",
        paddingBlock: "1.5rem",
        color: phraseColor,
      }}
    >
      {!content ? <span>Loading...</span> : content?.replace(regexp, "_")}
    </Typography>
  );
};

export default Phrase;
