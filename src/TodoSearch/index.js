import React from "react";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const { setOpenModal, newTodoUser} = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    newTodoUser(newTodoValue)
  };
  const onChange = (event) => {
    const newValue = event.target.value
    setNewTodoValue(newValue)
  }
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Crea tu primer TODO" onChange={onChange}></input>
      <button>Crear</button>
    </form>
  );
}

export { TodoSearch };
