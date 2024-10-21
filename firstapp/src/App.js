import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./4seminar/Home";
import About from "./4seminar/About";
import { Provider, useDispatch } from "react-redux";
import { store } from "./5Seminar/store";
import Profile from "./5Seminar/Profile";
import Product from "./6Seminar/Product";
import ProductList from "./6Seminar/ProductList";
import { useEffect } from "react";
import MidleWarecomp from "./7Seminar/MidleWareComp";


function App() {

  return (
    // <BrowserRouter>
    //   <Link to="/">Home</Link >
    //   <Link to="/about">About</Link >
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>

    // </BrowserRouter>

    <Provider store={store}>
      <MidleWarecomp />
    </Provider>
  );
}

export default App;
