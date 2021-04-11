import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatalogue, getGenres, getNowPlaying } from "redux/MovieReducer";
import Header from "components/Header";
import SubHeader from "components/SubHeader";
import Featured from "components/Featured";
import Footer from "components/Footer";
function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getNowPlaying()), [dispatch]);
  useEffect(() => dispatch(getCatalogue()), [dispatch]);
  useEffect(() => dispatch(getGenres()), [dispatch]);
  return (
    <div>
      <Header />
      <Featured />
      <SubHeader />
      <Footer />
    </div>
  );
}

export default App;
