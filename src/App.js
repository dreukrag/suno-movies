import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCatalogue, getGenres, getNowPlaying } from "redux/MovieReducer";
import Header from "components/Header";
import Featured from "components/Featured";
import Footer from "components/Footer";
import Catalogue from "components/Catalogue";
function App() {
  const dispatch = useDispatch();
  const type = useSelector(
    ({
      movies: {
        filter: { type },
      },
    }) => type
  );

  useEffect(() => dispatch(getNowPlaying()), [dispatch]);
  useEffect(() => dispatch(getCatalogue()), [dispatch, type]);
  useEffect(() => dispatch(getGenres()), [dispatch]);
  return (
    <div>
      <Header />
      <Featured />
      <Catalogue />
      <Footer />
    </div>
  );
}

export default App;
