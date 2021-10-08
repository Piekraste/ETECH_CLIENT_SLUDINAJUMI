import { configureStore } from "@reduxjs/toolkit";
import handleOpenReducer from "../features/handleOpen/handleOpenSlice";
import { combineReducers } from "redux";

import posts from "../reducers/posts";

export const reducers = combineReducers({ posts });
export default configureStore({
  reducer: {
    handleOpen: handleOpenReducer,
  },
});
