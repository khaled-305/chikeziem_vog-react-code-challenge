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
    GET_UNIVERSITIES_SUCCESS,
    GET_UNIVERSITIES_FAIL,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAIL,
    GET_POSTALLOOKUP_SUCCESS,
    GET_POSTALLOOKUP_FAIL
} from './types';

const initialState = {
    posts: [],
    universities: [],
    countries: [],
    postal: {}
};

const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
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

const universitiesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_UNIVERSITIES_SUCCESS:
            return {
                ...state,
                universities: payload
            }
        case GET_UNIVERSITIES_FAIL:
            return {
                ...state,
                universities: []
            }
        default:
            return state;
    }
}


const countryReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: payload
            }
        case GET_COUNTRIES_FAIL:
            return {
                ...state,
                countries: []
            }
        default:
            return state;
    }
}

const postalReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTALLOOKUP_SUCCESS:
            return {
                ...state,
                postal: payload
            }
        case GET_POSTALLOOKUP_FAIL:
            return {
                ...state,
                postal: {}
            }
        default:
            return state;
    }
}

// COMBINED REDUCERS
const reducers = {
    posts: postsReducer,
    universities: universitiesReducer,
    countries: countryReducer,
    postal: postalReducer
}

export default combineReducers(reducers);