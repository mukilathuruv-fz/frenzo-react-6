import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(10);

  const handleIncrement = () => {
    setCount(count + 1);

    // console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>inc</button>
    </div>
  );
};

export default Counter;

//
//
//
//
//
//
//
//
//
//
// const Counter = () => {
//   let count = 10;

//   const handleIncrement = () => {
//     count++;
//     console.log(count);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>inc</button>
//     </div>
//   );
// };

// export default Counter;
