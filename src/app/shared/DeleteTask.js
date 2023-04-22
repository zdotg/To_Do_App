import React from "react";

function DeleteTask({ id, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return <button onClick={handleDeleteClick}>Delete</button>;
}

export default DeleteTask;
