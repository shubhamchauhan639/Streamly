import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from './searchSlice'
import chatSlice from "./chatSlice"
import likedVideosReducer from "./likedVideoSlice";
import subscribedChannelsReducer from "./subscribedChannelsSlice";

const store = configureStore({
    reducer : {
        app  : appSlice,
        search  : searchSlice,
        chat  :chatSlice,

    likedVideos: likedVideosReducer,
    subscriptions: subscribedChannelsReducer,

    },
});
export default store