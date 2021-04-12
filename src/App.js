import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCatalogue, getGenres, getNowPlaying } from "redux/MovieReducer";
import Header from "components/Header";
import Featured from "components/Featured";
import Footer from "components/Footer";
import Catalogue from "components/Catalogue";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Movie from "components/Movie";
function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash !== "") {
      const element = document.getElementById(hash.replace("#", ""));
      if (element)
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    }
  }, [pathname, hash]);

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
      <Switch>
        <Route path="/home">
          <Featured />
          <Catalogue />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
