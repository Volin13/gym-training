import React from 'react';
import Modal from 'react-modal';
import Logo from '../Logo/Logo';
import css from './ModalEl.module.css';
import { ReactComponent as CloseIcon } from '../../../assets/images/MediaIcons/close-svgrepo-com.svg';

const ModalEl = ({ closeModal, modalIsOpen, children, label }) => {
  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      contentLabel={label}
      onRequestClose={closeModal}
      className={css.freeTrialModal_modal}
      overlayClassName={css.freeTrialModal__overlay}
    >
      <button
        type="button"
        onClick={closeModal}
        className={css.freeTrialModal_closeBtn}
      >
        <CloseIcon />
      </button>
      <Logo logoFormattingClass={css.freeTrialModal_logo} />
      {children}

      <div className={css.freeTrialModal_container}>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemFirst}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemSecond}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemThird}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemFourth}`}
        ></div>
        <div className={css.freeTrialModal__imageBackground}></div>
      </div>
    </Modal>
  );
};

export default ModalEl;
