import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import Card from "./card";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/card" element={<Card />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
