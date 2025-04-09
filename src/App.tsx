import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UseState from "./pages/UseState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
