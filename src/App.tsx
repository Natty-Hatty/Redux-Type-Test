import React, { useState } from "react";
import "./App.css";
import GitTestFile from "./counter/GitTestFile";
import Info from "./information/Info";

function App() {
  const [name, setName] = useState("Aditya");
  return (
    <div className="App">
      <header className="App-header">
        <GitTestFile name={name} />
      </header>
      <section className="one_two_ka_four">
        <Info />
      </section>
    </div>
  );
}

export default App;
