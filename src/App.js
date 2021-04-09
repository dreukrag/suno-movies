import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatalogue, getNowPlaying } from "redux/MovieReducer";
import Header from "components/Header";
function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getNowPlaying()), [dispatch]);
  useEffect(() => dispatch(getCatalogue()), [dispatch]);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
