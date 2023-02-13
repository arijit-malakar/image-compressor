import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const previewImage = (file: File) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_LOADING,
    });

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (reader) {
        reader.onload = () => {
          const imagePreview = reader.result as string;
          dispatch({
            type: ActionType.SHOW_IMAGE,
            payload: imagePreview,
          });
        };
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SET_ERROR,
          payload: error.message,
        });
      }
    }
  };
};
