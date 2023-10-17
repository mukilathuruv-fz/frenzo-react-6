import "./App.css";
import Button from "./components/button/Button";
function App() {
  return (
    <div className="App">
      <Button content="login" type="submit" />
      <Button content="logout" type="submit" />
      <Button content="submit" type="submit" />
    </div>
  );
}

export default App;
