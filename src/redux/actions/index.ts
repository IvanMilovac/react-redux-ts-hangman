import { ActionType } from "../action-types/index";

type StatsActions =
  | {
      type: ActionType.SET_ATTEMPS;
      payload: number;
    }
  | {
      type: ActionType.SET_GAME_RESULT;
      payload: IFinalResult;
    }
  | {
      type: ActionType.SET_ELAPSED_TIME;
      payload: number;
    }
  | {
      type: ActionType.SET_INTERVAL_ID;
      payload: number;
    }
  | {
      type: ActionType.RESET_APP_STAT;
    }
  | {
      type: ActionType.SET_WIN;
      payload: boolean;
    }
  | {
      type: ActionType.SET_RESET;
    };

type UserActions =
  | {
      type: ActionType.SET_NAME;
      payload: string;
    }
  | {
      type: ActionType.RESET_APP_USER;
    };

type GameActions =
  | {
      type: ActionType.SAVE_SELECTED_LETTERS;
      payload: string;
    }
  | {
      type: ActionType.SAVE_PHRASE;
      payload: PhraseType;
    }
  | { type: ActionType.SAVE_RIGHT_LETTERS; payload: string }
  | {
      type: ActionType.RESET_APP_GAME;
    };

export type Action = StatsActions | UserActions | GameActions;
