import axios from "axios";
import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

//STATS - action creators

export const setAttemps = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_ATTEMPS,
      payload: value,
    });
  };
};

export const setElapsedTime = (elapsedTime: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_ELAPSED_TIME,
      payload: elapsedTime,
    });
  };
};

export const setIntervalId = (intervalId: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_INTERVAL_ID,
      payload: intervalId,
    });
  };
};

export const setFinalResult = (final: IData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_GAME_RESULT,
      payload: final,
    });
  };
};

export const setReset = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_RESET,
    });
  };
};

export const setWin = (win: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_WIN,
      payload: win,
    });
  };
};

//GAME - action creators

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

export const fetchNewPhrase = () => {
  return (dispatch: Dispatch<Action>) => {
    axios.get("https://api.quotable.io/random").then(({ data }) => {
      dispatch({ type: ActionType.SAVE_PHRASE, payload: data });
    });
  };
};

// USER - action creators

export const setName = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_NAME,
      payload: name,
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
