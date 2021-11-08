import React from 'react'

const TaskList = ({ taskList, setTaskList, setEditTask }) => {

    const handleEditTask = id => {
        const editTask = taskList.find((item) => item.id === id);
        setEditTask(editTask);
    }
    const handleCompleteTask = id => {
        setTaskList(taskList.map((item) => {
            if (item.id === id) return { ...item, status: !item.status }

            return item;
        }));
    }
    const handleDeleteTask = id => {
        setTaskList(taskList.filter((item) => item.id !== id));
    }
    return (
        <div>
            <ul>
                {taskList.map((item) => (
                    <li key={item.id}>
                        <label className="check-container">
                            <input type="checkbox" onChange={() => handleCompleteTask(item.id)} />
                            <span className="checkmark"></span>
                        </label>
                        <input
                            disabled
                            type='text'
                            className={`task-input list ${item.status ? 'done-item' : ""}`}
                            value={item.task}
                            onChange={(e) => e.preventDefault()}
                        />
                        <button
                            onClick={() => handleEditTask(item.id)}
                            disabled={item.status ? 'disabled' : ''}
                            className={`button edit ${item.status ? 'disabled' : ""}`}
                        ><i className='fas fa-pen'></i></button>
                        <button
                            className='button delete'
                            onClick={() => handleDeleteTask(item.id)}
                        ><i className='fas fa-trash'></i></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
