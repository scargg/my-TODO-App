import './index.css'
import { TodoContext } from '../TodoContext';
import React from 'react';
function CreateTodo() {
  const {setOpenModal} = React.useContext(TodoContext)
  return (
    <button className="Btn" onClick={() => setOpenModal(state => !state)}>
      <div className="sign">+</div>
      <div className="text">Create</div>
    </button>
  );
}
export {CreateTodo}