import { useState } from "react";
import { useUserContext } from "../../../context/UserContextProvider";
const initialState = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [user, setUser] = useState(initialState);
  const { login } = useUserContext();

  const handleSubmit = e => {
    e.preventDefault();
    login(user);
    setUser(initialState);
    alert("login successful");
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
