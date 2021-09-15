import "./App.css";
import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={() => {
          alert("anonymous function click");
        }}
      >
        Button
      </button>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>
          Navbar <span>0</span>
        </h1>
        <button>Reset</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Navbar />
      <Button />
    </div>
  );
}

export default App;
