import { useNavigate } from "react-router-dom";

import useInput from "../hooks/useInput";
import useStoreDispatch from "../hooks/useStoreDispatch";

import { Typography, TextField, Button } from "@mui/material";

const LandingScreen = () => {
  const [inputName, resetInputName, bindInputName] = useInput("");
  const { setName } = useStoreDispatch();

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(inputName);
    resetInputName();
    navigate("/game");
  };

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Welcome, <br />
        <Typography
          sx={{
            fontWeight: "600",
            marginBlock: "1rem",
            minHeight: "2rem",
            fontSize: "1.25rem",
          }}
        >
          {inputName}
        </Typography>
      </Typography>
      <form onSubmit={onSubmit} className="name-form">
        <TextField
          autoFocus
          type="text"
          variant="outlined"
          placeholder="enter your name"
          required
          {...bindInputName}
        />
        <Button variant="contained" type="submit" disabled={!inputName}>
          Start Game
        </Button>
      </form>
    </>
  );
};

export default LandingScreen;
