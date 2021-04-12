import { render, fireEvent, screen } from "@testing-library/react";
import MovieReducer, { movieReducerInitialState } from "redux/MovieReducer";
import { renderWithRedux } from "test-utils";
import Movie from "./Movie";

describe("Movie tests", () => {
  test("Render without crashing", () => {
    renderWithRedux(
      <Movie />,
      MovieReducer,
      "movies",
      movieReducerInitialState
    );
    expect(screen).toBeDefined();
  });
});
