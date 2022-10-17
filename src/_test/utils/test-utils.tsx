import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "../../store";
import { BrowserRouter, Router } from "react-router-dom";
import { emptyStoreData } from "./mocks/mock";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = emptyStoreData,

    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
  route?: string
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    if (route) window.history.pushState({}, "Test routing", route);

    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>;
      </BrowserRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderWithRouter(ui: React.ReactElement, history?: any) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    if (history) {
      return (
        <Router location="/" navigator={history}>
          {children}
        </Router>
      );
    } else {
      return <BrowserRouter>{children}</BrowserRouter>;
    }
  }
  return { ...render(ui, { wrapper: Wrapper }) };
}
