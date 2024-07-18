import { useEffect } from "react";
import { Link } from "react-router-dom";

function ModalTemplate({
  buttonText,
  children,
  handleCloseModal,
  isOpen,
  link,
  name,
  title,
}) {
  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div
      className={`modal-template ${isOpen ? "modal-template__open" : ""}`}
      onClick={handleCloseOnOverlayClick}
    >
      <form className="modal-template__form" name={name}>
        <h2 className="modal-template__title">{title}</h2>
        {children}
        <Link to={link || "/"} style={{ textDecoration: "none" }}>
          <button
            className="modal-template__button"
            onClick={() => handleCloseModal()}
          >
            <p className="modal-template__button-text">
              {buttonText || "Submit"}
            </p>
          </button>
        </Link>
        <button
          className="modal-template__button-close"
          type="button"
          onClick={handleCloseModal}
        ></button>
      </form>
    </div>
  );
}

export default ModalTemplate;
