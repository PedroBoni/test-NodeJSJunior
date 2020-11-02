import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./pages/Form/";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
