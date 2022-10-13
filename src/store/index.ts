import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../reducers/filtersReducer.ts";

export const store = configureStore({
  reducer: {
    counter: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
