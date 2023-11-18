import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css'

/* const TodoListDefault = [
  {text: 'Cortar cebolla' , completed : true},
  {text: 'Limpiar el cuarto' , completed : false},
  {text: 'Bañar al perro' , completed : false},
  {text: 'Bañar al gato' , completed : true},
  {text: 'Cantar una canción' , completed : false}
]
localStorage.setItem('TODOS_V1',JSON.stringify(TodoListDefault)) */



/********************** APP **********************/
function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App;
