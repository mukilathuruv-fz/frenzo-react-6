import { useEffect, useState } from "react";

const UserList = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(20);

  const logName = () => {
    console.log("manfree");

    const cleanupCode = () => {
      console.log("memory cleared");
    };
    return cleanupCode;
  };

  useEffect(logName, [count, age]);

  useEffect(() => {
    console.log("sample effect");
    return () => {
      console.log("second memory cleared");
    };
  }, [age]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(pre => pre + 1)}>inc</button>
      <button onClick={() => setCount(pre => pre - 1)}>dec</button>
    </div>
  );
};

export default UserList;
