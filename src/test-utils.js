// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// Import your own reducer

function renderWithRedux(ui, reducer, name, initialState, renderOptions) {
  function Wrapper({ children }) {
    const store = createStore(reducer, { [name]: initialState });
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

function renderWithRouter(ui,  renderOptions) {
  function Wrapper({ children }) {
    return <BrowserRouter >{children}</BrowserRouter>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { renderWithRedux, renderWithRouter };
