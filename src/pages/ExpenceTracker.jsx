import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import History from "../components/history/History";

const ExpenceTracker = () => {
  const [availableBalance, setAvailableBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const totalIncome = transactions
      .filter(transaction => transaction.type === "income")
      .reduce((acc, cur) => acc + parseInt(cur.amount), 0);
    const totalExpence = transactions
      .filter(transaction => transaction.type === "expence")
      .reduce((acc, cur) => acc + parseInt(cur.amount), 0);
    setAvailableBalance(totalIncome - totalExpence);
  }, [transactions]);

  const handleSubmit = (event, newTransaction) => {
    event.preventDefault();
    newTransaction.date = new Date();

    if (newTransaction.reason.length && newTransaction.amount > 0) {
      setTransactions([...transactions, newTransaction]);
      setShowForm(false);
    } else {
      alert("failed to add transaction");
    }
  };

  return (
    <main>
      <Header amount={availableBalance} />
      <button onClick={() => setShowForm(true)}>Add transaction</button>

      {showForm ? (
        <Form handleSubmit={handleSubmit} />
      ) : (
        <History transactions={transactions} />
      )}
    </main>
  );
};

export default ExpenceTracker;
