import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "../features/information/informationSlice";
export const store = configureStore({
  reducer: {
    information: informationReducer,
  },
});
