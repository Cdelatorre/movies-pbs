import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/misc/loader/index.tsx";
import NavBar from "./components/misc/navbar/index.tsx";
import { TIME_OUT } from "./constants";
import Home from "./screens/home/index.tsx";
import { setLoading } from "./store/reducers/loadingReducer.ts";

function App() {
  const loading = useSelector((s) => s.loading.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      let timeOutId = setTimeout(() => {
        dispatch(setLoading(false));
        clearTimeout(timeOutId);
      }, TIME_OUT);
    }
  }, [loading, dispatch]);

  return (
    <div className="App">
      {loading && <Loader />}
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
