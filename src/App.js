import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Bio from "./components/bio/Bio";
import classes from "./assets/styles/app.module.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;
