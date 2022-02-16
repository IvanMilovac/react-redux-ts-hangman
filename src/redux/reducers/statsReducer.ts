import { ActionType } from "../action-types";
import { Action } from "../actions";

interface IStatsState {
  attemps: number;
  reset: boolean;
  win: boolean;
  elapsedTime: number;
  intervalId: number;
  gameResult: IFinalResult;
}

const initialState = {
  attemps: 0,
  reset: false,
  win: false,
  elapsedTime: 0,
  intervalId: 0,
  gameResult: {} as IFinalResult,
};

const statsReducer = (
  state: IStatsState = initialState,
  action: Action
): IStatsState => {
  switch (action.type) {
    case ActionType.SET_ATTEMPS:
      return { ...state, attemps: action.payload };
    case ActionType.SET_RESET:
      return { ...state, reset: !state.reset };
    case ActionType.SET_WIN:
      return { ...state, win: action.payload };
    case ActionType.SET_ELAPSED_TIME:
      return { ...state, elapsedTime: action.payload };
    case ActionType.SET_INTERVAL_ID:
      return { ...state, intervalId: action.payload };
    case ActionType.SET_GAME_RESULT:
      return { ...state, gameResult: action.payload };
    case ActionType.RESET_APP_STAT:
      return initialState;
    default:
      return state;
  }
};

export default statsReducer;
