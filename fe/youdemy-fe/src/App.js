import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Details from "./components/Details";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
