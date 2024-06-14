import { createSlice } from "@reduxjs/toolkit";

const refContactSlice = createSlice({
    name: "contact",
    initialState: {
        refToContact: []
    },
    reducers: {
        goToRef: (state, action) => {
            state.refToContact = action.payload
        },
        clearRef: (state, action) => {
            state.refToContact = action.payload
        },
    },
});

export const { goToRef, clearRef} = refContactSlice.actions;

export default refContactSlice.reducer;