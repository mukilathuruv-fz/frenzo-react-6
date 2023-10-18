import { useState } from "react";

const Toggle = () => {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>{status ? "on" : "off"}</h1>
      <button onClick={() => setStatus(!status)}>
        {!status ? "on" : "off"}
      </button>
    </div>
  );
};

export default Toggle;
