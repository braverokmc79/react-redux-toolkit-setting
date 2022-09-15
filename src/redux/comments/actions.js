import { commentsActions } from './reducer';

export const fetchComments = () => {
    return (dispatch) => {

        dispatch(commentsActions.fetchCommentsRequest());

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(comments =>
                dispatch(commentsActions.fetchCommentsSuccess(comments))
            )
            .catch(error => (
                dispatch(commentsActions.fetchCommentsFailure(error))
            ));
    }
}


