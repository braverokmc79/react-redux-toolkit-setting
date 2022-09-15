import { viewActions } from './reducer';

export const addView = (number) => {

    return (dispatch) => {
        dispatch(viewActions.addView(Number(number)));
    }
}

