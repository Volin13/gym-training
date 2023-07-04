import React from 'react';
import css from './FreeTrialModal.module.css';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../../assets/images/MediaIcons/close-svgrepo-com.svg';
import Logo from '../Logo/Logo';
import FreeTrialForm from './FreeTrialForm';
import PropTypes from 'prop-types';

const FreeTrialModal = ({
  closeModal,
  modalIsOpen,
  clasesName = '',
  difficalty = '',
}) => {
  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      contentLabel="Start Free Trial"
      onRequestClose={closeModal}
      className={css.freeTrialModal_modal}
      overlayClassName={css.freeTrialModal__overlay}
    >
      <div className={css.freeTrialModal_modalContent}>
        <button
          type="button"
          onClick={closeModal}
          className={css.freeTrialModal_closeBtn}
        >
          <CloseIcon />
        </button>
        <Logo logoFormattingClass={css.freeTrialModal_logo} />
        <FreeTrialForm
          clasesName={clasesName}
          classDifficalty={difficalty}
        />
      </div>
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

FreeTrialModal.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

export default FreeTrialModal;
