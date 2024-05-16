import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
