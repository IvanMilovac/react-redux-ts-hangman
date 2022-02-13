import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const setAttemps = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_ATTEMPS,
      payload: value,
    });
  };
};

export const setFinalResult = (final: IFinalResult) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_GAME_RESULT,
      payload: final,
    });
  };
};

export const setName = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_NAME,
      payload: name,
    });
  };
};

export const setSelectedLetters = (selectedLetters: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_SELECTED_LETTERS,
      payload: selectedLetters,
    });
  };
};

export const setRightLetters = (rightLetters: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_RIGHT_LETTERS,
      payload: rightLetters,
    });
  };
};

export const savePhrase = (phrase: PhraseType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_PHRASE,
      payload: phrase,
    });
  };
};

export const resetGame = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET_APP_GAME,
    });
    dispatch({
      type: ActionType.RESET_APP_STAT,
    });
  };
};

export const resetUser = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET_APP_USER,
    });
  };
};
