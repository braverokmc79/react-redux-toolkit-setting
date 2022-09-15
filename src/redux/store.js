import { configureStore } from "@reduxjs/toolkit";
import subscriberReducer from './subscribers/reducer';
import viewReducer from './views/reducer';
import commentsReducer from './comments/reducer';

const store = configureStore({
    reducer: {
        subscribers: subscriberReducer,
        views: viewReducer,
        comments: commentsReducer
    }
})

export default store;