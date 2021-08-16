import React, { useState, useEffect } from "react";
import MainApp from './components/mainApp/MainApp';
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="App-header">
        <h1>Parent Helper</h1>
      </div>
      <MainApp />
    </div>
  );
}

export default App;
