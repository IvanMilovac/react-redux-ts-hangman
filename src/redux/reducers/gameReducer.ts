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

const statsReducer = (
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
    default:
      return state;
  }
};

export default statsReducer;
