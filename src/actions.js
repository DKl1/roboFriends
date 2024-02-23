import {
    CHANGE_SEARCH_FIELD,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: FETCH_PRODUCTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(data => dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: FETCH_PRODUCTS_ERROR, payload: error}))
}