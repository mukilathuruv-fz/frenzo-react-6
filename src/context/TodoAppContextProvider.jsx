import { useState, createContext, useEffect } from "react";

export const todoContext = createContext(null);

const initialTodos = [
  {
    id: 1,
    title: "go to temple",
    completed: false,
  },
];

const TodoAppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };
  const removeTodo = id => {
    const udpatedTodos = todos.filter(todo => todo.id !== id);
    setTodos([...udpatedTodos]);
  };

  const finishTodo = id => {
    const updatedTodo = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos([...updatedTodo]);
  };

  return (
    <todoContext.Provider
      value={{
        addTodo,
        removeTodo,
        finishTodo,
        todos,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoAppContextProvider;
