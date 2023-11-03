import logo from './logo.svg';
import './App.css';
//import Navbar from "./navbar";
import Navbar from "./Navbar";
//import card from "./card";

function App() {
  return (
    <div className="App">

      <Navbar />

      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800328658</p>
      <p>Hi I am Garrett Butler</p>
      <h3>More info:</h3>

      <card />

    </div>
  );
}

export default App;
