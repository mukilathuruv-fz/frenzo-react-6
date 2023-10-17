import "./App.css";
import Button from "./components/button/Button";
function App() {
  return (
    <div className="App">
      <Button content="login" type="reset" handleClick={() => alert("first")} />
      <Button content="logout" />
      <Button content="submit" />
      <Button />
    </div>
  );
}

export default App;
