import React from 'react';
import ModalEl from '../ModalEl/ModalEl';
import css from './LearnMoreModal.module.css';
const LearnMoreModal = ({ modalIsOpen, closeModal }) => {
  return (
    <ModalEl
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      label="learn more about sport class"
    >
      <div className={css.freeTrialModal_modalContent}></div>
    </ModalEl>
  );
};

export default LearnMoreModal;
