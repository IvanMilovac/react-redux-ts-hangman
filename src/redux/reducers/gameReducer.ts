import { ActionType } from "../action-types";
import { Action } from "../actions";

interface IGameState {
  selectedLetters: string;
  rightLetters: string;
  phrase: PhraseType;
}

const initialState = {
  selectedLetters: "",
  rightLetters: "",
  phrase: {} as PhraseType,
};

const gameReducer = (
  state: IGameState = initialState,
  action: Action
): IGameState => {
  switch (action.type) {
    case ActionType.SAVE_SELECTED_LETTERS:
      return { ...state, selectedLetters: action.payload };
    case ActionType.SAVE_RIGHT_LETTERS:
      return { ...state, rightLetters: action.payload };
    case ActionType.SAVE_PHRASE:
      return { ...state, phrase: action.payload };
    case ActionType.RESET_APP_GAME:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
