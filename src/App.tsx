import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/reducers";
import Landing from "./components/LandingScreen";
import Card from "@mui/material/Card";
import GameScreen from "./components/GameScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import ResultScreen from "./components/ResultScreen";

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
          position: "relative",
        }}
        elevation={4}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          {name && (
            <>
              <Route path="/game" element={<GameScreen />} />
              <Route path="/results" element={<ResultScreen />} />
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={"/"} />}
          />
        </Routes>
      </Card>
    </div>
  );
}

export default App;
