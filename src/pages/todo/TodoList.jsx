import { useContext } from "react";
import { todoContext } from "../../context/TodoAppContextProvider";

const TodoList = () => {
  const { todos, removeTodo, finishTodo } = useContext(todoContext);
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {}}
            />
            <span>{todo.title}</span>
            <button onClick={() => finishTodo(todo.id)}>complete</button>
            <button onClick={() => removeTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
