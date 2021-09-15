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
          Total <span>0</span>
        </h1>
        <button>Reset</button>
      </div>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <div>
        <button>0</button>
        <button>+</button>
        <button>-</button>
        <button>Delete</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Navbar />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default App;
