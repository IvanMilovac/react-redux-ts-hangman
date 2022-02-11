import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Landing = () => {
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();
  const { setName } = bindActionCreators(actionCreators, dispatch);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(inputName);
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
          type="text"
          variant="outlined"
          placeholder="enter your name"
          required
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <Button variant="contained" type="submit" disabled={!inputName}>
          Start Game
        </Button>
      </form>
    </>
  );
};

export default Landing;
