import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Sessions from "./screens/Sessions";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Sessions} />
    </BrowserRouter>
  );
}
