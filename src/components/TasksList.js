import React from 'react';
import { deleteTask } from '../actions';
import { useTasksContext } from '../contexts/TasksContext';

export const TasksList = () => {
    const { tasks, dispatch } = useTasksContext();
    return (
        <div className="list-container">
            {
                tasks.length > 0 ? tasks.map(task => {
                    return (
                        <div className="item">
                            <div className="actions">
                                <button onClick={() => dispatch(deleteTask(task.id))}>X</button>
                            </div>
                            <div className="text">
                                {task.task}
                            </div>
                        </div>
                    );
                }) : <div className="text empty">No hay tareas por hacer</div>
            }
        </div>
    )
};