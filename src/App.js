import { useState } from "react";
import UserList from "./useEffect/users/UserList";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <UserList />}
    </div>
  );
};

export default App;
