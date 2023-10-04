import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
