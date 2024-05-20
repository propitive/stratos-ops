import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import About from "../About/About";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
