import { configureStore } from "@reduxjs/toolkit";
import refReducer from './slices/imageSlice';

export default configureStore({
    reducer: {
        refToTalkWithMe: refReducer,
    },
})