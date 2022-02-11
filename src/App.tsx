import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/reducers";
import Landing from "./components/LandingScreen";
import Card from "@mui/material/Card";
import GameScreen from "./components/GameScreen";

function App() {
  const {
    user: { name },
  } = useSelector((state: RootState) => state);

  return (
    <div className="App">
      <Card
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "1rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        elevation={4}
      >
        {!name ? <Landing /> : <GameScreen />}
      </Card>
    </div>
  );
}

export default App;
