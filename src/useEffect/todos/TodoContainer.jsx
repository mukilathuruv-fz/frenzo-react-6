import { useEffect, useState } from "react";
import { create, getAll, remove } from "./api";

const TodoContainer = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    getAll().then(data => setTodos([...data]));
  }, []);
  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoContainer;

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos?.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={async () => await remove(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    await create({
      title,
      done: false,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Enter title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="add Todo" />
      </div>
    </form>
  );
};
