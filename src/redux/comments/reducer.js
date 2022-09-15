import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    err: null
}

const commentsSlice = createSlice({
    name: "commentsReducer",
    initialState,
    reducers: {

        fetchCommentsRequest(state, action) {
            state.location = true
        },
        fetchCommentsSuccess(state, action) {
            state.items = action.payload;
            state.location = false;
        },
        fetchCommentsFailure(state, action) {
            state.err = action.payload;
            state.location = false;
        }
    }
});


export const commentsActions = commentsSlice.actions;
export default commentsSlice.reducer;