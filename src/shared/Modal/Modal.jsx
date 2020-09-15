import React from 'react';
import ReactModal from 'react-modal';

import { ReactComponent as Close } from '../../icons/close.svg';

import s from './Modal.module.sass';

const Modal = ({ children, isOpen, onClose }) => {
    return (
        <ReactModal 
            isOpen={isOpen} 
            onRequestClose={onClose}
            bodyOpenClassName={s['modal__body']}
            className={s['modal__content']}
            overlayClassName={s['modal__overlay']}
        >
            <button className={s['modal_close']} onClick={onClose}><Close /></button>
            {children}
        </ReactModal>
    )
};

export default Modal;