import { ActionType } from "../action-types/index";

type StatsActions = {
  type: ActionType.INCREASE_ATTEMPS;
};

type UserActions = {
  type: ActionType.SET_NAME;
  payload: string;
};

type GameActions =
  | {
      type: ActionType.SAVE_SELECTED_LETTERS;
      payload: string;
    }
  | { type: ActionType.SAVE_RIGHT_LETTERS; payload: string }
  | { type: ActionType.SAVE_PHRASE; payload: PhraseType };

export type Action = StatsActions | UserActions | GameActions;
