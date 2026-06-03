import { createSlice } from "@reduxjs/toolkit";

const subscribedChannelsSlice = createSlice({
  name: "subscriptions",
  initialState: [],
  reducers: {
    addSubscription: (state, action) => {
      const exists = state.find(
        (channel) =>
          channel.channelTitle === action.payload.channelTitle
      );

      if (!exists) {
        state.push(action.payload);
      }
    },

    removeSubscription: (state, action) => {
      return state.filter(
        (channel) =>
          channel.channelTitle !== action.payload
      );
    },
  },
});

export const {
  addSubscription,
  removeSubscription,
} = subscribedChannelsSlice.actions;

export default subscribedChannelsSlice.reducer;