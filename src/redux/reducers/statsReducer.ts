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
    case ActionType.INCREASE_ATTEMPS:
      return { ...state, attemps: state.attemps + 1 };
    default:
      return state;
  }
};

export default statsReducer;
