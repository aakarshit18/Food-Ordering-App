import { Fragment } from "react";
import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onHide}/>
    );
}
const Overlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}



const Modal = (props) => {
    return(
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>, document.getElementById('overlay'))}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
    </Fragment>);
}
export default Modal;