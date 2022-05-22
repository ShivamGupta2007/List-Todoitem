import React from 'react';  
import './TodoItem.css';  
function TodoItem({ title, id, status, handleDelete}) {
  const handleDeleteFn = () => {
    handleDelete(id);
  };
  return (
    <div class="style">
      <h3> {title} </h3>
      <button class="button "onClick={handleDeleteFn}>Delete</button>
    </div>
  );
};

export { TodoItem };