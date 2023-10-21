import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
function App() {
  const [firstname, setFirstname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    alert("form submission");
  };
  return (
    <form className="App" onSubmit={handleSubmit}>
      <Input
        label="first name"
        required
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
      />
      <Input
        label="last name"
        value={lastName}
        onChange={e => setlastName(e.target.value)}
      />
      <Input
        label="email"
        required
        type="email"
        value={email}
        onChange={e => setemail(e.target.value)}
      />
      <Input
        label="password"
        required
        type="password"
        value={password}
        onChange={e => setpassword(e.target.value)}
      />
      <Input type="submit" />
      <h1>{`firstname ${firstname}  lastname ${lastName} email ${email} password ${password}`}</h1>
    </form>
  );
}

export default App;
