import { Routes, Route, Navigate } from "react-router-dom";
import Card from "@mui/material/Card";

import LandingScreen from "./layouts/LandingScreen";
import GameScreen from "./layouts/GameScreen";
import ResultScreen from "./layouts/ResultScreen";

import useStoreSelector from "./hooks/useStoreSelector";

import "./App.css";

function App() {
  const {
    user: { name },
  } = useStoreSelector();

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
          <Route path="/" element={<LandingScreen />} />
          {name && (
            <>
              <Route path="/game" element={<GameScreen />} />
              <Route path="/results" element={<ResultScreen />} />
            </>
          )}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Card>
    </div>
  );
}

export default App;
