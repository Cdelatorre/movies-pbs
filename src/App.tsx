import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { TIME_OUT } from "./constants";
import Loader from "./components/misc/loader";
import NavBar from "./components/misc/navbar";
import Detail from "./screens/detail";
import Home from "./screens/home";
import { setLoading } from "./store/reducers/loadingReducer";
import { RootState } from "./store";
import "./App.css";

function App() {
  const loading = useSelector((s: RootState) => s.loading.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      let id = setTimeout(() => {
        dispatch(setLoading(false));
        clearTimeout(id);
      }, TIME_OUT);
    }
  }, [loading, dispatch]);

  return (
    <div className="App">
      {loading && <Loader />}
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
