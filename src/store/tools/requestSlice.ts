import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
  name: "request",
  initialState: "",
  reducers: {
    setPassword(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { setPassword } = requestSlice.actions;
export default requestSlice.reducer;
