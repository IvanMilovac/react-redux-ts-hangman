import { ActionType } from "../action-types";
import { Action } from "../actions";

interface IStatsState {
  attemps: number;
}

const initialState = {
  attemps: 0,
};

const statsReducer = (
  state: IStatsState = initialState,
  action: Action
): IStatsState => {
  switch (action.type) {
    case ActionType.SET_ATTEMPS:
      return { ...state, attemps: action.payload };
    default:
      return state;
  }
};

export default statsReducer;
