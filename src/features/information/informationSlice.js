import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
export const selectInformation = (state) => state.information;
export const { add, remove } = informationSlice.actions;
export default informationSlice.reducer;
