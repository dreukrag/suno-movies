import {
  render,
  fireEvent,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import App from "./App";
import React from "react";

// it("Should render entire APP without crashing", async () => {
//   render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
//   expect(screen).toBeDefined();
// });

it("Should change routes without crashing", async () => {
  window.HTMLElement.prototype.scrollIntoView = () => null;
  await act(async () => {
    render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    );

    const loader = await screen.findByText("carregando", { exact: false });
    await waitForElementToBeRemoved(loader);
    const buttons = screen.getAllByRole("button", {
      name: /selecionar filme/i,
      exact: false,
    });
    buttons[0].click();
    const button = screen.getByRole("button", { name: "Catálogo" });
    button.click();
  });
});
