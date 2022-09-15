import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 21,
}

const viewSlice = createSlice({
    name: "viewReducer",
    initialState,
    reducers: {
        addView(state, action) {
            state.count = state.count + action.payload;
        }
    }
})

export const viewActions = viewSlice.actions;
export default viewSlice.reducer;





