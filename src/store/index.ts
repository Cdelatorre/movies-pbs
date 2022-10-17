import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
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

const rootReducer = combineReducers({
  filters: filtersReducer,
  movies: moviesReducer,
  loading: loadingReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
