import { createContext, useContext, useReducer } from 'react';
import { ADD_TODO, DELETE_TODO, CLEAR_ALL } from '../actions/actions';

const TasksContext = createContext();

const initialTasks = [
{
    id: 1,
    task: 'do the laundry',
},
{
    id: 2,
    task: 'learn node',
},
{
    id: 3,
    task: 'Watch a movie',
},
];

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: return [...state, { id: Math.round(Math.random() * 100), task: action.text }];
        case DELETE_TODO: return state.filter(e => e.id !== action.id);
        case CLEAR_ALL: return [];
        default: return state;
    }
};

export const TasksProvider = props => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    const tasksData = { tasks, dispatch };

    return <TasksContext.Provider value={tasksData} {...props} />;
};

export const useTasksContext = () => {
    return useContext(TasksContext);
};
