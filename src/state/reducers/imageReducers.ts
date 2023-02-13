import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ImageState {
  uploadedImage: string | null;
  compressedImage: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  uploadedImage: null,
  compressedImage: null,
  loading: false,
  error: null,
};

const reducer = (
  state: ImageState = initialState,
  action: Action
): ImageState => {
  switch (action.type) {
    case ActionType.SHOW_IMAGE:
      return {
        uploadedImage: action.payload,
        compressedImage: null,
        loading: false,
        error: null,
      };
    case ActionType.COMPRESS_IMAGE:
      return {
        uploadedImage: null,
        compressedImage: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.SET_LOADING:
      return {
        uploadedImage: null,
        compressedImage: null,
        loading: true,
        error: null,
      };
    case ActionType.SET_ERROR:
      return {
        uploadedImage: null,
        compressedImage: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
