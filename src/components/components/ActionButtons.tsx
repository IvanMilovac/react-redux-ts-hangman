import { Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import useStoreSelector from "../hooks/useStoreSelector";
import useStoreDispatch from "../hooks/useStoreDispatch";

interface IProps {
  phraseColor: string;
}

const ActionButtons = ({ phraseColor }: IProps) => {
  const {
    stats: { attemps, win, intervalId },
  } = useStoreSelector();

  const { resetUser, resetGame, setReset, fetchNewPhrase } = useStoreDispatch();

  const navigate = useNavigate();

  const handleUserChange = () => {
    clearInterval(intervalId);
    resetGame();
    resetUser();
  };

  const handleNewQuote = () => {
    resetGame();
    setReset();
    fetchNewPhrase();
  };

  const handleSeeResult = () => {
    clearInterval(intervalId);
    navigate("/results");
  };

  return (
    <Box
      sx={{
        top: "30%",
        right: "5%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: ".5rem",
        paddingBlock: "1rem",
      }}
    >
      <Button
        variant="outlined"
        tabIndex={1}
        sx={{
          color: phraseColor,
          borderColor: phraseColor,
        }}
        onClick={handleNewQuote}
      >
        {attemps <= 5 ? "New quote" : "Try again"}
      </Button>
      <Button
        variant="outlined"
        tabIndex={2}
        sx={{
          color: phraseColor,
          borderColor: phraseColor,
        }}
        onClick={handleUserChange}
      >
        Change user
      </Button>
      {win && (
        <Button variant="outlined" tabIndex={3} onClick={handleSeeResult}>
          See results
        </Button>
      )}
    </Box>
  );
};

export default ActionButtons;
