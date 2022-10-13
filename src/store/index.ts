import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./reducers/filtersReducer.ts";
import moviesReducer from "./reducers/moviesReducer.ts";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
