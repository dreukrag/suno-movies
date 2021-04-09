import { getList } from "./MovieReducer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("MovieReducer actions should call the desired API", () => {
  test("GetList calls desired API", async () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore();

    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    const listName = "fakeList";
    const url = "fake_url";
    const error = await store.dispatch(getList(listName, url));

    console.log(error)

    expect(error.config.url).toBe(url);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
