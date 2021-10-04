import * as ActionTypes from '../actionTypes'

export const initialState = {
    loading: false,
    posts: [],
    error: null
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case ActionTypes.FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}