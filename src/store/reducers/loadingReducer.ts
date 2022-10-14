import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  value: boolean;
}

const initialState: LoadingState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
