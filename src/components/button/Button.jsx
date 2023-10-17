import "./button.css";

const Button = ({ content }) => {
  if (content) {
    return <button>{content}</button>;
  }
  return null;
};
export default Button;

// const Button = ({ content }) => {
//   return content && <button>{content}</button>;
// };
// export default Button;

// method-1

// const Button = () => {
//   const loginStatus = false;
//   return (
//     <button className={`${loginStatus ? "login" : "logout"}`}>
//       {loginStatus ? "logout" : "login"}
//     </button>
//   );
// };
// export default Button;
