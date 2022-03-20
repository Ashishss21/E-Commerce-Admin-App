import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./containers/Home";
import SingIn from "./containers/SingIn";
import SingUp from "./containers/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/signin" element={SingIn} />
          <Route path="/signup" element={SingUp} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
