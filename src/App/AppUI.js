import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoBtn } from "../CreateTodoBtn";
import { TodoContainer } from "../TodoContainer";
import { TodoLeft } from "../TodoLeft";
import { TodoRight } from "../TodoRight";
import { TodoLeftImg } from "../TodoLeftImg";
import { TodoSeachWork } from "../TodoSeachWork";
import { TodoListImg } from "../TodoListImg";
import { TopRight } from "../TopRight";
import { TopLeft } from "../TopLeft";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { Modal } from "../Modal";
import { CreateTodo } from "../CreateTodo";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import { CancelCreateTodoBtn } from "../CancelCreateTodoBtn";

function AppUI() {
  const {
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
  } = useContext(TodoContext);

  return (
    <>
      <TodoContainer>
        <TodoRight>
          <TopRight>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSeachWork
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoListImg />
          </TopRight>

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && todoList.length == 0 && <TodosEmpty />}
            {todoList.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => todoCheck(todo.text)}
                onDelete={() => todoDelete(todo.text)}
              />
            ))}
          </TodoList>
        </TodoRight>

        {openModal && (
          <Modal>
            <TodoLeft>
              <h1>Create New Task</h1>
              <TopLeft>
                <TodoSearch />
              </TopLeft>
              <TodoLeftImg />
              <CancelCreateTodoBtn/>
            </TodoLeft>
          </Modal>
        )}

        <CreateTodo/>
      </TodoContainer>
    </>
  );
}
export { AppUI };
