const History = ({ transactions }) => {
  return (
    <div>
      {transactions.length ? (
        <>
          <h2>Transaction History</h2>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                {transaction.reason} for ₹{transaction.amount}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No Transactions Found</h2>
      )}
    </div>
  );
};

export default History;
