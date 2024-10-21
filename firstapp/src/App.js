import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./4seminar/Home";
import About from "./4seminar/About";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./5Seminar/store";
import Profile from "./5Seminar/Profile";
import Product from "./6Seminar/Product";
import ProductList from "./6Seminar/ProductList";
import { useEffect } from "react";
import MidleWarecomp from "./7Seminar/Try/MidleWareComp";


function App() {

  const tasks = useSelector((state) => state.task.entities);
  const loading = useSelector((state) => state.tasks.loading);
  return (
    // <BrowserRouter>
    //   <Link to="/">Home</Link >
    //   <Link to="/about">About</Link >
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>

    // </BrowserRouter>

    <div>
      <h1>Список задач</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default App;
