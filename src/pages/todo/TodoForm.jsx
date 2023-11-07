import { useContext, useState } from "react";
import Input from "../../components/input/Input";
import { v4 as uuid } from "uuid";
import { todoContext } from "../../context/TodoAppContextProvider";
const initialValue = {
  title: "",
  completed: false,
};

const TodoForm = () => {
  const [todo, setTodo] = useState(initialValue);
  const { addTodo } = useContext(todoContext);
  const handleChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo({
      ...todo,
      id: uuid(),
    });
    alert("todo added successfully");
    setTodo(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          value={todo.title}
          onChange={handleChange}
          label={"enter title"}
          name={"title"}
          required
        />
        <input
          type="submit"
          value="Add Todo"
          disabled={todo.title.length === 0}
        />
      </form>
    </div>
  );
};

export default TodoForm;
