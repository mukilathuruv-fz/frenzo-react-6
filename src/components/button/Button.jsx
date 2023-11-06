import { useContext } from "react";
import "./button.css";
import { themeContext } from "../../context/ThemeContextProvider";

const Button = ({ content }) => {
  const value = useContext(themeContext);
  console.log({ value });
  if (content) {
    return <button>{content}</button>;
  }
  return null;
};
export default Button;
