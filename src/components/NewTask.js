import React from 'react';
import { useState, useEffect } from 'react';
import { clearAll } from '../actions';
import { useTasksContext } from '../contexts/TasksContext';
import { useSaveTask } from '../hooks';

export const NewTask = () => {
    const [text, setText] = useState('');
    const { dispatch } = useTasksContext();
    const [wasDispatched, saveTask] = useSaveTask();

    const handleAction = e => {
        saveTask(text, e);
    };

    useEffect(() => {
        if (wasDispatched) setText('')
    }, [wasDispatched])

    return (
        <>
            <div className="input-container">
                <input value={text} onChange={e => setText(e.target.value)} />
                <button onClick={handleAction} onKeyDown={handleAction}>
                    Add
                </button>
            </div>
            <button className="danger-button" style={{ marginTop: '10px' }} onClick={() => dispatch(clearAll())}>Clear all</button>
        </>
    )
};