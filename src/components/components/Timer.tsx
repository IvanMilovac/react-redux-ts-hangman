import { Typography } from "@mui/material";

import useStoreSelector from "../hooks/useStoreSelector";

import { msToMS } from "../../utils";
import useTimer from "../hooks/useTimer";

interface IProps {
  phraseColor: string;
}

const Timer = ({ phraseColor }: IProps) => {
  useTimer(1000);

  const {
    stats: { elapsedTime },
  } = useStoreSelector();

  return (
    <Typography
      variant="h6"
      sx={{
        position: "absolute",
        top: "10%",
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
      {msToMS(elapsedTime)}
    </Typography>
  );
};

export default Timer;
