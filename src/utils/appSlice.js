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
    },
});
export const {toggelMenue} = appSlice.actions;
export  default appSlice.reducer