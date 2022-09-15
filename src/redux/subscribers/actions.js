import { subscriberActions } from './reducer';

export const addSubscriber = () => {
    return (dispatch) => {
        dispatch(subscriberActions.addSubscriber());
    }
}

export const removeSubscriber = () => {

    return (dispatch) => {
        dispatch(subscriberActions.removeSubscriber());
    }
}

