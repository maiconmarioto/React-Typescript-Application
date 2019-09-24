import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Normalize } from "styled-normalize";

import store from "./store";
import Sessions from "./screens/Sessions";
import { GlobalStyle } from "./components/shared/styles/GlobalStyle";

const App: React.FC = () => (
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact component={Sessions} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
