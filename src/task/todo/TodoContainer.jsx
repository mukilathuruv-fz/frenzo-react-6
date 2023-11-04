import { useState } from "react";

const initialTodos = [
  { id: 1, title: "go for walk", done: true },
  { id: 2, title: "go for temple", done: true },
  { id: 3, title: "go for office", done: false },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(initialTodos);
  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleAdd = newTodo => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };
  return (
    <div>
      <TodoForm handleAdd={handleAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoContainer;

const TodoForm = ({ handleAdd }) => {
  const [title, setTitle] = useState("");
  return (
    <form>
      <label htmlFor="title">Enter title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        type="button"
        disabled={title.length === 0}
        onClick={() =>
          handleAdd({
            id: 5,
            title,
            done: false,
          })
        }
      >
        Add
      </button>
    </form>
  );
};

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            height: "70px",
          }}
        >
          <h3>{todo.title}</h3>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
