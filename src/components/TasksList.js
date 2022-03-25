import React from 'react';
import { deleteTask, clearAll } from '../actions';
import { useTasksContext } from '../contexts/TasksContext';

export const TasksList = () => {
    const { tasks, dispatch } = useTasksContext();
    return (
        <>
            <ul>
            {
                tasks.map(task => {
                    return (
                        <li key={task.id}>{task.task}<button onClick={() => dispatch(deleteTask(task.id))}>X</button></li>
                    );
                })
            }
            </ul>
            <button onClick={() => dispatch(clearAll())}>Clear all</button>
        </>
    )
};