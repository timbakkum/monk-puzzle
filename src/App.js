import React from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import Puzzle from "./Puzzle";
import configureStore from "./store/index";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Puzzle draft</p>
        </header>
        <main>
          <Puzzle />
        </main>
      </div>
    </Provider>
  );
}

export default App;
