import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/misc/navbar/index.tsx";
import Home from "./screens/home/index.tsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
      TODO
    </div>
  );
}

export default App;
