import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onCloseCart }) => {
  return <div className={classes.backdrop} onClick={onCloseCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onCloseCart }) => {
  const portal = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={onCloseCart} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </>
  );
};

export default Modal;
