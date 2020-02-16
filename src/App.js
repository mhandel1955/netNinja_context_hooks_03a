import React from "react";
import "./styles.css";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider />
    </div>
  );
}

export default App;
