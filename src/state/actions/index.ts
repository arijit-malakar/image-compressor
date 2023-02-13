import { ActionType } from "../action-types";

interface PreviewImageAction {
  type: ActionType.SHOW_IMAGE;
  payload: string;
}

interface CompressImageAction {
  type: ActionType.COMPRESS_IMAGE;
  payload: string;
}

interface SetLoadingAction {
  type: ActionType.SET_LOADING;
}

interface SetErrorAction {
  type: ActionType.SET_ERROR;
  payload: string;
}

export type Action =
  | PreviewImageAction
  | CompressImageAction
  | SetLoadingAction
  | SetErrorAction;
