import "./App.css";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
