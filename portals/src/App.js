import React, { useState } from "react";
import Modal from "./modal/Modal";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Click to open Modal</h1>
      <button onClick={() => setShow((s) => !s)}>Open</button>
      <Modal show={show} closeModal={() => setShow(false)} />
    </div>
  );
};

export default App;
