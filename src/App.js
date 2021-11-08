import React, { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import TaskList from './TaskList';

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState(null);
  return (
    <div className='container'>
      <Header />
      <Content
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        setEditTask={setEditTask}
      />
    </div>
  );
}

export default App;
