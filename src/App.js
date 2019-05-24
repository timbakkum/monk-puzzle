import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Puzzle from "./Puzzle";
import PuzzleControls from "./PuzzleControls";
import configureStore from "./store/index";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>Monk Puzzle</p>
        </header>
        <main>
          <Puzzle />
          <PuzzleControls />
        </main>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    </Provider>
  );
}

export default App;
