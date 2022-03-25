import React from 'react';
import { useState } from 'react';
import { addTask, clearAll } from '../actions';
import { useTasksContext } from '../contexts/TasksContext';

export const NewTask = () => {
    const [text, setText] = useState('');
    const { dispatch } = useTasksContext();
    return (
        <>
            <div className="input-container">
                <input value={text} onChange={e => setText(e.target.value)} />
                <button onClick={() => dispatch(addTask(text))}>
                    Add
                </button>
            </div>
            <button className="danger-button" style={{ marginTop: '10px' }} onClick={() => dispatch(clearAll())}>Clear all</button>
        </>
    )
};