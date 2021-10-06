import { createSlice } from "@reduxjs/toolkit";
export const handleOpenSlice = createSlice({
  name: "handleOpen",
  initialState: { value: false },
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});
// Action creators are generated for each case reducer function

export const { open, close } = handleOpenSlice.actions;
export default handleOpenSlice.reducer;
