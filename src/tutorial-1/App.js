import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
