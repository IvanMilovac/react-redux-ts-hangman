import { ActionType } from "../action-types";
import { Action } from "../actions";

interface IStatsState {
  attemps: number;
  gameResult: IFinalResult;
}

const initialState = {
  attemps: 0,
  gameResult: {} as IFinalResult,
};

const statsReducer = (
  state: IStatsState = initialState,
  action: Action
): IStatsState => {
  switch (action.type) {
    case ActionType.SET_ATTEMPS:
      return { ...state, attemps: action.payload };
    case ActionType.SET_GAME_RESULT:
      return { ...state, gameResult: action.payload };
    case ActionType.RESET_APP_STAT:
      return initialState;
    default:
      return state;
  }
};

export default statsReducer;
