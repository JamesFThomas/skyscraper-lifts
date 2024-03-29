import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { setupTestStore } from "../state/store";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupTestStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
