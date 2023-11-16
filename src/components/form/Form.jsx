import React, { useState } from "react";
import AppInput from "./AppInput";

const initialState = {
  reason: "",
  amount: 0,
  type: "",
  category: "",
};
const categories = ["food", "medical", "travel"];

const Form = ({ handleSubmit }) => {
  const [transaction, setTransaction] = useState(initialState);
  const handleChange = event => {
    const { name, value } = event.target;
    setTransaction({ ...transaction, [name]: value });
  };
  return (
    <section>
      <h1>Add Transaction</h1>
      <form onSubmit={event => handleSubmit(event, transaction)}>
        <AppInput
          name="reason"
          label={"Enter Reason"}
          value={transaction.reason}
          onChange={handleChange}
        />
        <AppInput
          name="amount"
          label={"Enter amount"}
          type="number"
          value={transaction.amount}
          onChange={handleChange}
        />
        <div style={{ display: "flex" }}>
          <AppInput
            name="type"
            label={"Income"}
            type="radio"
            value={"income"}
            onChange={handleChange}
          />
          <AppInput
            name="type"
            label={"Expence"}
            type="radio"
            value={"expence"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Choose Category</label>
          <select name="category" onChange={handleChange}>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="add Transaction" />
      </form>
    </section>
  );
};

export default Form;
