const redux = require('redux');
const reuxLogger = require('redux-logger');
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reuxLogger.createLogger();
const combineReducers = redux.combineReducers;

//action
//action-type
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';

const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}

const addViewCount = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}


//reducers
const subscribeState = {
    subscribers: 356
}
const subscriberReducer = (state = subscribeState, action) => {
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
        default:
            return state;
    }
}



const viewState = {
    viewCount: 100
}

const viewReducer = (state = viewState, action) => {
    switch (action.type) {
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount: state.viewCount + 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subscriberReducer,
})



//store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("store 정보 :", store);

//subscribe -view - dispatch
// console.log("1.store : ", store.getState());
// store.dispatch(addSubscriber());
// console.log("2.store : ", store.getState());


// store.subscribe(() => {
//     console.log('subscribe ===>>', store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());










