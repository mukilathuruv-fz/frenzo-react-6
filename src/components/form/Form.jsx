import Input from "./Input";
import "./form.css";
const Form = () => {
  return (
    <div>
      <form className="grid place-content-center h-screen">
        <h1>kids giveaway registration form</h1>
        <div className="grid grid-col-2 gap-2">
          <Input label={"kid's name"} placeHolder="first" rounded />
          <Input placeHolder="last" bg="blue" rounded />
        </div>
        <Input label={"kid's age"} bg="blue" rounded />
        <Input label={"parent's email"} bg="blue" rounded />
      </form>
    </div>
  );
};

export default Form;
