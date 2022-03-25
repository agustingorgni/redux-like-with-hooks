import React from 'react';
import { useState } from 'react';
import { addTask } from '../actions';
import { useTasksContext } from '../contexts/TasksContext';

export const NewTask = () => {
    const [text, setText] = useState('');
    const { dispatch } = useTasksContext();
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => dispatch(addTask(text))}>
                Add
            </button>
        </>
    )
};