import { useContext } from "react";
import { themeContext } from "../../context/ThemeContextProvider";
import "./button.css";

const Button = ({ content }) => {
  const value = useContext(themeContext);
  console.log({ value });
  if (content) {
    return <button>{content}</button>;
  }
  return null;
};
export default Button;
