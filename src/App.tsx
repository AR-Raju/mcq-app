import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exam from "./pages/Exam";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div data-testid="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result" component={Result} />
          <Route path="/exam" component={Exam} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
