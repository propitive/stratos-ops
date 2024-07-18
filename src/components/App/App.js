import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalGetAQuote from "../ModalGetAQuote/ModalGetAQuote";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ServiceBackup from "../ServiceBackup/ServiceBackup";
import ServiceSecurity from "../ServiceSecurity/ServiceSecurity";
import About from "../About/About";
import ServiceCloud from "../ServiceCloud/ServiceCloud";
import ServiceCicd from "../ServiceCicd/ServiceCicd";
import ModalContactForm from "../ModalContactForm/ModalContactForm";

function App() {
  const [isActiveModal, setIsActiveModal] = useState("");

  const handleCloseModal = () => {
    setIsActiveModal("");
  };

  const handleOpenGetAQuote = () => {
    setIsActiveModal("quote");
  };

  const handleOpenSubmit = () => {
    setIsActiveModal("submit");
  };

  return (
    <>
      <ScrollToTop />
      <Header handleOpenGetAQuote={handleOpenGetAQuote} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services/backupAndRecovery">
          <ServiceBackup handleOpenGetAQuote={handleOpenGetAQuote} />
        </Route>
        <Route path="/services/cloudMigration">
          <ServiceCloud handleOpenGetAQuote={handleOpenGetAQuote} />
        </Route>
        <Route path="/services/securityConsulting">
          <ServiceSecurity handleOpenGetAQuote={handleOpenGetAQuote} />
        </Route>
        <Route path="/services/ciCd">
          <ServiceCicd handleOpenGetAQuote={handleOpenGetAQuote} />
        </Route>
        <Route path="/">
          <Main handleOpenGetAQuote={handleOpenGetAQuote} />
        </Route>
      </Switch>
      <Footer />
      {isActiveModal === "quote" && (
        <ModalGetAQuote
          handleCloseModal={handleCloseModal}
          handleOpenSubmit={handleOpenSubmit}
          isOpen={isActiveModal === "quote" ? true : false}
        />
      )}
      {isActiveModal === "submit" && (
        <ModalContactForm
          handleCloseModal={handleCloseModal}
          isOpen={isActiveModal === "submit" ? true : false}
        />
      )}
    </>
  );
}

export default App;
