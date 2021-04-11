import Axios from "axios";
import { API_KEY } from "constants.";

export const moviesStatus = {
  INACTIVE: "MOVIES_INACTIVE",
  START: "MOVIES_START",
  SUCCESSFULL: "MOVIES_SUCCESSFULL",
  INVALID: "MOVIES_INVALID",
  SERVERERROR: "MOVIES_SERVERERROR",
};

export const movieReducerInitialState = {
  nowPlaying: [],
  nowPlayingStatus: moviesStatus.INACTIVE,
  nowPlayingError: null,
  catalogue: [],
  catalogueStatus: moviesStatus.INACTIVE,
  catalogueError: null,
  genres: [],
  genresStatus: moviesStatus.INACTIVE,
  genresError: null,
  filter: {
    type: "popular",
  },
};

export const getList = (listName, requestUrl) => {
  return async (dispatch) => {
    dispatch({ type: moviesStatus.START, listName });
    try {
      const response = await Axios.get(requestUrl);

      if (
        Array.isArray(response.data.results) &&
        response.data.results.length > 0
      ) {
        dispatch({
          type: moviesStatus.SUCCESSFULL,
          listName,
          list: response.data.results,
        });
      } else {
        throw new Error("server error");
      }
      return response;
    } catch (err) {
      if (err.response) {
        dispatch({
          type: moviesStatus.SERVERERROR,
          listName,
          error: err,
        });
        return err;
      } else if (err.request) {
        dispatch({
          type: moviesStatus.SERVERERROR,
          listName,
          error: err,
        });
        return err;
      } else {
        dispatch({
          type: moviesStatus.SERVERERROR,
          listName,
          error: err,
        });
        return err;
      }
    }
  };
};

export const getNowPlaying = () =>
  getList(
    "nowPlaying",
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&region=BR`
  );
export const getCatalogue = () => {
  return async (dispatch, getState) => {
    const {
      movies: { filter },
    } = getState();
    if (filter.type === "popular")
      return dispatch(
        getList(
          "catalogue",
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&region=BR&page=${filter.page}`
        )
      );
    else if (filter.type === "top_rated")
      return dispatch(
        getList(
          "catalogue",
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&region=BR&page=${filter.page}`
        )
      );
    else if (filter.type === "upcoming")
      return dispatch(
        getList(
          "catalogue",
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&region=BR&page=${filter.page}`
        )
      );
    return getList(
      "catalogue",
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&region=BR&page=${filter.page}`
    );
  };
};

export const getGenres = (listName, requestUrl) => {
  listName = "genres";
  requestUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR&region=BR`;

  return async (dispatch) => {
    dispatch({ type: moviesStatus.START, listName });
    try {
      const response = await Axios.get(requestUrl);

      if (
        Array.isArray(response.data.genres) &&
        response.data.genres.length > 0
      ) {
        dispatch({
          type: moviesStatus.SUCCESSFULL,
          listName,
          list: response.data.genres,
        });
      } else {
        throw new Error("server error");
      }
      return response;
    } catch (err) {
      if (err.response) {
        dispatch({
          type: moviesStatus.SERVERERROR,
          listName,
          error: err,
        });
        return err;
      } else if (err.request) {
        dispatch({
          type: moviesStatus.SERVERERROR,
          listName,
          error: err,
        });
        return err;
      } else {
        dispatch({
          type: moviesStatus.SERVERERROR,
          listName,
          error: err,
        });
        return err;
      }
    }
  };
};

function MovieReducer(state = movieReducerInitialState, action) {
  switch (action.type) {
    case moviesStatus.START:
      return {
        ...state,
        [`${action.listName}Status`]: moviesStatus.START,
        [`${action.listName}Error`]: moviesStatus.START,
        [`${action.listName}`]: [],
      };
    case moviesStatus.SUCCESSFULL:
      return {
        ...state,
        [`${action.listName}Status`]: moviesStatus.SUCCESSFULL,
        [`${action.listName}Error`]: moviesStatus.SUCCESSFULL,
        [`${action.listName}`]: action.list,
      };
    case moviesStatus.SERVERERROR:
      return {
        ...state,
        [`${action.listName}Status`]: moviesStatus.SERVERERROR,
        [`${action.listName}Error`]: action.error,
        [`${action.listName}`]: [],
      };
    default:
      return state;
  }
}

export default MovieReducer;
