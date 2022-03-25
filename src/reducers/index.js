import { ADD_TODO, DELETE_TODO, CLEAR_ALL } from '../actions/actions';

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: return [...state, { id: Math.round(Math.random() * 100), task: action.text }];
        case DELETE_TODO: return state.filter(e => e.id !== action.id);
        case CLEAR_ALL: return [];
        default: return state;
    }
};