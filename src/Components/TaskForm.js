import React, { useState } from 'react';
import '../Style/TaskForm.css'

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
