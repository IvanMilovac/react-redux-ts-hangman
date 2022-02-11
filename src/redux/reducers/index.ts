import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import statsReducer from "./statsReducer";
import userReducer from "./userReducer";

export const reducers = combineReducers({
  stats: statsReducer,
  user: userReducer,
  game: gameReducer
});

export type RootState = ReturnType<typeof reducers>;
