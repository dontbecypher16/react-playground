import React  from "react";

export default function DeleteTask({ onDelete }) {
  return <button className="delete-button" onClick={onDelete}>🗑️</button>;
}