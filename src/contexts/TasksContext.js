import { createContext, useContext, useReducer } from 'react';
import { taskReducer } from '../reducers';

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

export const TasksProvider = props => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    const tasksData = { tasks, dispatch };

    return <TasksContext.Provider value={tasksData} {...props} />;
};

export const useTasksContext = () => {
    return useContext(TasksContext);
};
