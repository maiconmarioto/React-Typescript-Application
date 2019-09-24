import React from "react";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";

import store from "./store";
import Router from "./Router";
import { GlobalStyle } from "./components/shared/styles/GlobalStyle";

const App: React.FC = () => (
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <Router />
  </Provider>
);

export default App;
