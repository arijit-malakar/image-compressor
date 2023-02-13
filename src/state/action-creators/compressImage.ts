import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const compressImage = (imageString: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_LOADING,
    });

    try {
      const image = new Image();
      image.src = imageString;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(image, 0, 0, image.width, image.height);
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.2);

          dispatch({
            type: ActionType.COMPRESS_IMAGE,
            payload: compressedDataUrl,
          });
        }
      };
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
