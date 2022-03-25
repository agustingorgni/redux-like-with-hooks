import { useState } from 'react';
import { useTasksContext } from '../contexts/TasksContext';
import { addTask } from '../actions';

export const useSaveTask = () => {
    const { dispatch } = useTasksContext();
    const [wasDispatched, setWasDispatched] = useState(false);

    const saveTask = (task, event) => {
        if (event.type === 'keydown') {
            if (event.keycode === 13) {
                dispatch(addTask(task));
                setWasDispatched(true);
            }
        } else {
            if (task !== '') {
                dispatch(addTask(task));
                setWasDispatched(true);
            }
        }
    };

    return [wasDispatched, saveTask];
};
