import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  console.log(`Los usuarios buscan TODOS de ${searchValue}`);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const todoList = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  /* console.log(todoList); */

  const todoCheck = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const todoDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const newTodoUser = (text) => {
    const newTodos = [...todos]
    newTodos.push({text: text,completed: false})
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        todoList,
        todoCheck,
        todoDelete,
        openModal,
        setOpenModal,
        newTodoUser
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
