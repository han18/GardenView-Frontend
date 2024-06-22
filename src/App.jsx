// import "./App.css";

import ListGroup from "./components /ListGroup";
import Navbar from "./components /Navbar";
import Profile from "./components /Profile";
import { Route, Routes } from "react-router-dom";
import CardPage from "./components /CardPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListGroup />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cardpage" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;
