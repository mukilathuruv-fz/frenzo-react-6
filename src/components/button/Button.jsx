import "./button.css";

const Button = props => {
  console.log(props);
  return <button>{props.content}</button>;
};
export default Button;
