import { ActionType } from "../action-types";
import { Action } from "../actions";

interface IUserState {
  name: string;
}

const initialState = {
  name: "",
};

const statsReducer = (
  state: IUserState = initialState,
  action: Action
): IUserState => {
  switch (action.type) {
    case ActionType.SET_NAME:
      return { name: action.payload };
    default:
      return state;
  }
};

export default statsReducer;
