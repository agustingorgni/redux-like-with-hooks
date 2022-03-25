import { ADD_TODO, DELETE_TODO, CLEAR_ALL } from './actions';

export const addTask = text => {
    return { type: ADD_TODO, text };
};

export const deleteTask = id => {
    return { type: DELETE_TODO, id };
};

export const clearAll = () => {
    return { type: CLEAR_ALL };
};