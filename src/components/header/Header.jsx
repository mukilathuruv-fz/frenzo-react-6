const Header = ({ amount = 0 }) => {
  return (
    <header>
      <h3>Available Balance</h3>
      <h1>₹{amount}</h1>
    </header>
  );
};

export default Header;
