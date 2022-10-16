import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./reducers/filtersReducer";
import loadingReducer from "./reducers/loadingReducer";
import moviesReducer from "./reducers/moviesReducer";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    movies: moviesReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
