import {combineReducers} from 'redux';
import {ADD_TODO} from '../actions/actions.js';

//The reducer is a function that takes two parameters (state and action) to calculate and return updated state.

// This function add new items to list
function todo(state, action){
    switch(action.type){
        case ADD_TODO:
            return{
                id: action.id,
                text: action.text
            }
        default:
            return state;
    }
}
// This function will push items to list which were created by first function
function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return[
                ...state,
                todo(undefined, action)
            ]
        default:
            return state;
    }
}
// At the end we are using combineReducers helper function where we can add any new reducers we might use in the future.
const todoApp = combineReducers({
    todos
});

export default todoApp;