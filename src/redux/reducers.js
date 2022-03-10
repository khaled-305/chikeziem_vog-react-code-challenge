import { combineReducers } from 'redux';
import { 
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    SEARCH_POST_SUCCESS,
    SEARCH_POST_FAIL,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAIL,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
} from './types';

const initialState = {
    posts: []
};

const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: payload
            }
        case GET_POSTS_FAIL:
            return {
                ...state,
                posts: []
            }
        case ADD_POST_SUCCESS:
        case ADD_POST_FAIL:
            return {
                ...state,
            }
        case SEARCH_POST_SUCCESS:
        case SEARCH_POST_FAIL:
            return {
                ...state,
            }
        case UPDATE_POST_SUCCESS:
        case UPDATE_POST_FAIL:
            return {
                ...state,
            }
        case DELETE_POST_SUCCESS:
        case DELETE_POST_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}

// COMBINED REDUCERS
const reducers = {
    posts: postsReducer,
}

export default combineReducers(reducers);