import React from "react";
import "./App.css";

function App() {
  let email = "";
  let password = "";
  function changeInputs(event) {
    if (event.target.type == "text") {
      email = event.target.value.trim();
    } else {
      password = event.target.value.trim();
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Поля не должны быть пустыми");
    } else {
      event.target.reset();
      console.log({ email, password });
      email = "";
      password = "";
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeInputs} placeholder="Email" />
        <input type="password" onChange={changeInputs} placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default App;
