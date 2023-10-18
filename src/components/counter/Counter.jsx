import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(10);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
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
