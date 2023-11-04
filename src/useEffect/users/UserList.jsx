import React, { useEffect, useState } from "react";
import { getUsers } from "./api";
const UserList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  console.log(users);
  return (
    <div>
      {users?.map(user => (
        <li>{user.username}</li>
      ))}
    </div>
  );
};

export default UserList;
