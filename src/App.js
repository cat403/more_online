import "./App.css";
import React from "react";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons.js";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/*TinderCards*/}
      <TinderCards />
      {/*SwipeButtons*/}
      <SwipeButtons />
    </div>
  );
}

export default App;
