import React  from "react";

export default function DeleteTask({ onClick }) {
  return <button className="delete-button" onClick={onClick}>🗑️</button>;
}