import "./App.css";
import React from "react";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/*TinderCards*/}
      <TinderCards />
      {/*SwipeButtons*/}
    </div>
  );
}

export default App;
