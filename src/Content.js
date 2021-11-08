import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Content = ({ task, setTask, taskList, setTaskList, editTask, setEditTask }) => {
    const onInputChange = (e) => {
        setTask(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!editTask) {
            setTaskList([...taskList, { id: uuidv4(), task, status: false }]);
            setTask('')
        } else {
            updateTask(task, editTask.id, editTask.status)
        }

    }
    const updateTask = (task, id, status) => {

        const newTaskList = taskList.map((item) =>
            item.id === id ? { id, task, status } : item
        );
        setTaskList(newTaskList);
        setEditTask('');
    }
    useEffect(() => {
        if (editTask) {
            setTask(editTask.task);
        } else {
            setTask("");
        }

    }, [setTask, editTask])
    return (
        <div className='content-body'>
            <form onSubmit={onSubmitForm}>
                <input
                    type='text'
                    placeholder='Enter new task..'
                    className='task-input'
                    value={task}
                    required
                    onChange={onInputChange}
                />
                <button className='add button' type='submit'>{editTask ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default Content
