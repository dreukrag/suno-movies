import MovieReducer, { moviesStatus } from "./MovieReducer";

describe("MovieReducer should update state with the correct variables given the listname", () => {
  test("Start", () => {
    const end = MovieReducer(null, {
      type: moviesStatus.START,
      listName: "test",
    });

    expect(end.testStatus).toBeTruthy();
    expect(end.testError).toBeTruthy();
    expect(end.test).toBeTruthy();
  });

  test("Succesfull", () => {
    const end = MovieReducer(null, {
      type: moviesStatus.SUCCESSFULL,
      listName: "test",
      list: [],
    });

    expect(end.testStatus).toBeTruthy();
    expect(end.testError).toBeTruthy();
    expect(end.test).toBeTruthy();
  });

  test("Error", () => {
    const end = MovieReducer(null, {
      type: moviesStatus.SERVERERROR,
      listName: "test",
      error: "teste",
    });

    expect(end.testStatus).toBeTruthy();
    expect(end.testError).toBe("teste");
    expect(end.test).toBeTruthy();
  });
});
