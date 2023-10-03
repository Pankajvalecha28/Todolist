import React, { useState } from 'react';
import '../Style/TaskTable.css';

function TaskTable({ tasks, onDelete, onEdit, onMarkDone }) {
  const [editableIndex, setEditableIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const handleEditClick = (index, taskText) => {
    setEditableIndex(index);
    setEditedText(taskText);
  };

  const handleSaveClick = (index) => {
    onEdit(index, editedText);
    setEditableIndex(-1);
  };

  const handleCancelClick = () => {
    setEditableIndex(-1);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>
                {editableIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </div>
                ) : (
                  <span className={task.done ? 'done' : ''}>{task.text}</span>
                )}
              </td>
              <td>
                {editableIndex !== index && (
                  <div>
                    <button onClick={() => handleEditClick(index, task.text)}>Edit</button>
                    <button onClick={() => onDelete(index)}>Delete</button>
                    <button onClick={() => onMarkDone(index)}>
                      {task.done ? 'Undone' : 'Done'}
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
