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
} from "./types";


// Get All Post
export const get_posts = () => async dispatch => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: GET_POSTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAIL
        });
    }
};

// Add New Post
export const add_post = (title, body, userId) => async dispatch => {
    const postBody = JSON.stringify({
        title,
        body,
        userId
    });

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: postBody
        });

        if (res.status === 200) {
            dispatch({
                type: ADD_POST_SUCCESS
            });
        } else {
            dispatch({
                type: ADD_POST_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: ADD_POST_FAIL
        });
    }
}

// Search Post By ID
export const search_post = (id) => async dispatch => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: SEARCH_POST_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: SEARCH_POST_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: SEARCH_POST_FAIL
        });
    }
}

// Update Post
export const update_post = (id, title, body, userId) => async dispatch => {
    const postBody = JSON.stringify({
        id,
        title,
        body,
        userId
    });

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: postBody
        });

        if (res.status === 200) {
            dispatch({
                type: UPDATE_POST_SUCCESS,
            });
        } else {
            dispatch({
                type: UPDATE_POST_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: UPDATE_POST_FAIL
        });
    }
}

// Delete Post By ID
export const delete_post = (id) => async dispatch => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 200) {
            dispatch({
                type: DELETE_POST_SUCCESS,
            });
        } else {
            dispatch({
                type: DELETE_POST_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: DELETE_POST_FAIL
        });
    }
}

// Get All Universities
export const get_universities = () => async dispatch => {
    try {
        const res = await fetch('http://universities.hipolabs.com/search?country=Canada', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: GET_UNIVERSITIES_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: GET_UNIVERSITIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_UNIVERSITIES_FAIL
        });
    }
};

// Get Countries
export const get_countries = () => async dispatch => {
    try {
        const res = await fetch(process.env.COUNTRYLAYER_API, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: GET_COUNTRIES_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: GET_COUNTRIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_COUNTRIES_FAIL
        });
    }
};


// Postal LookUp
export const postal_lookup = (code) => async dispatch => {

    try {
        const res = await fetch(`https://api.zippopotam.us/us/${code}`);

        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: GET_POSTALLOOKUP_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: GET_POSTALLOOKUP_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_POSTALLOOKUP_FAIL
        });
    }
}
