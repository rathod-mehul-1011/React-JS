import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  console.log("APP RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      {showParagraph && <p>This is a Paragraph!</p>}
    </div>
  );
};

export default App;
