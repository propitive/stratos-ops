import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Main />
      </Switch>
    </>
  );
}

export default App;
