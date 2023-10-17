import "./button.css";

const Button = ({ content = "manfree", type = "submit", handleClick }) => {
  return (
    <button type={type} onClick={handleClick}>
      {content}
    </button>
  );
};
export default Button;

// const Button = props => {
//   return <button>{props?.content??"manfree"}</button>;
// };
// export default Button;
