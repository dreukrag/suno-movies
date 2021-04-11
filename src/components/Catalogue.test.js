import { render, fireEvent, screen } from "@testing-library/react";
import MovieReducer, { movieReducerInitialState } from "redux/MovieReducer";
import { renderWithRedux } from "test-utils";
import Catalogue from "./Catalogue";

describe("Catalogue tests", () => {
  test("Render without crashing", () => {
    renderWithRedux(
      <Catalogue />,
      MovieReducer,
      "movies",
      movieReducerInitialState
    );
    expect(screen).toBeDefined();
  });
});
