import React from 'react';
import css from './FreeTrialModal.module.css';
import Modal from 'react-modal';

const FreeTrialModal = ({ closeModal, modalIsOpen }) => {
  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      //   //   onAfterOpen={afterOpenModal}
      //   style={{
      //     border: 'none',
      //     padding: 'none',
      //     width: '1000px',
      //     height: '600px',
      //   }}
      contentLabel="FreeTrialModal"
      onRequestClose={closeModal}
      className={css.freeTrialModal_modal}
      overlayClassName={css.freeTrialModal__overlay}
    >
      <div className={css.freeTrialModal_modalContent}>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
      <div className={css.freeTrialModal_container}>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemFirst}`}
        ></div>
        <div
          className={`${css.freeTrialModal__imageBackgroundItem} ${css.freeTrialModal__imageBackgroundItemSecond}`}
        ></div>
        <div className={css.freeTrialModal__imageBackground}></div>
      </div>
    </Modal>
  );
};

export default FreeTrialModal;
