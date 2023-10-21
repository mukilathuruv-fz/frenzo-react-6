import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";

const initialState = {
  firstname: "",
  lastName: "",
  email: "",
  password: "",
};

function App() {
  const [user, setUser] = useState(initialState);
  const { firstname, email, lastName, password } = user;
  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(user, null, 2));
    setUser(initialState);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    // const value = e.target.value;
    // const name = e.target.name;

    setUser({ ...user, [name]: value });
  };
  return (
    <form className="App" onSubmit={handleSubmit}>
      <Input
        label="first name"
        required
        name="firstname"
        value={firstname}
        onChange={handleChange}
      />
      <Input
        label="last name"
        value={lastName}
        onChange={handleChange}
        name="lastName"
      />
      <Input
        label="email"
        required
        type="email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <Input
        label="password"
        required
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <Input type="submit" />
      <h1>{`firstname ${firstname}  lastname ${lastName} email ${email} password ${password}`}</h1>
    </form>
  );
}

export default App;
