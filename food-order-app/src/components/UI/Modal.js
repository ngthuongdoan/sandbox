import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close}></Backdrop>,
        document.getElementById('backdrop-container')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay close={props.close}>{props.children}</ModalOverlay>,
        document.getElementById('modal-container')
      )}
    </>
  );
};

export default Modal;
