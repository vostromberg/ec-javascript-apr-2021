import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter/Counter";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
