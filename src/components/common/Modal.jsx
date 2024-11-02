import React from 'react';
import parseImg from 'utils/images';

const Modal = ({title, onClose, children}) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-top">
          <div>{title || ''}</div>
          <button className="btn-close" onClick={onClose}>
            <img src={parseImg('ic_modal_close.svg')} alt="닫기" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
