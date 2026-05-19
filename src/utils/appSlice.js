import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
    name  : "app",
    initialState : {
        isMenue : true,
    },
    reducers : {
        toggelMenue: (state) => {
            state.isMenue = !state.isMenue;

        },
          closeMenu: (state) => {
      state.isMenue = false;},
    },
});
export const {toggelMenue , closeMenu} = appSlice.actions;
export  default appSlice.reducer