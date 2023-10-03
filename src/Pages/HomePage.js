import React , { useState, useEffect  } from 'react'
import TaskForm from '../Components/TaskForm';
import TaskTable from '../Components/TaskTable';
import { saveToLocalStorage, getFromLocalStorage } from '../Components/LocalStorage.js';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedTasks = getFromLocalStorage();
    setTasks(savedTasks);
  }, []);

  const addTask = (taskText) => {
    const newTask = { text: taskText, done: false };
    setTasks([...tasks, newTask]);
    saveToLocalStorage([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const markTaskAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  return (
    <div className="App">
      <TaskForm onAddTask={addTask} />
      <TaskTable
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onMarkDone={markTaskAsDone}
      />
    </div>
  );
}



export default HomePage
