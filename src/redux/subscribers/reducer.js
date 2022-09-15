import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 370
}

const subscriberSlice = createSlice({
    name: "subscriberReducer",
    initialState,
    reducers: {

        addSubscriber(state, action) {
            state.count = state.count + 1
        },

        removeSubscriber(state, action) {
            state.count = state.count - 1
        },

    }
})

export const subscriberActions = subscriberSlice.actions;
export default subscriberSlice.reducer;



