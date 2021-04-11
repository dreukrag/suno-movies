import { render, fireEvent, screen } from "@testing-library/react";
import MovieReducer, { movieReducerInitialState } from "redux/MovieReducer";
import { renderWithRedux } from "test-utils";
import Featured from "./Featured";

describe("Featured tests", () => {
  test("Render without crashing", () => {
    renderWithRedux(
      <Featured />,
      MovieReducer,
      "movies",
      movieReducerInitialState
    );
    expect(screen).toBeDefined();
  });
});
