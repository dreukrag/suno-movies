import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatalogue, getNowPlaying } from "redux/MovieReducer";
import Header from "components/Header";
import Featured from "components/Featured";
function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getNowPlaying()), [dispatch]);
  useEffect(() => dispatch(getCatalogue()), [dispatch]);
  return (
    <div>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
