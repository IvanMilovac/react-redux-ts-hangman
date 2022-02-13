import { ActionType } from "../action-types";
import { Action } from "../actions";

interface IUserState {
  name: string;
}

const initialState = {
  name: "",
};

const userReducer = (
  state: IUserState = initialState,
  action: Action
): IUserState => {
  switch (action.type) {
    case ActionType.SET_NAME:
      return { name: action.payload };
    case ActionType.RESET_APP_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
