import "./button.css";

const Button = ({ content }) => {
  if (content) {
    return <button>{content}</button>;
  }
  return null;
};
export default Button;
