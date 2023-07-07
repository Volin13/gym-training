import React from 'react';
import css from './FreeTrialModal.module.css';
import FreeTrialForm from './FreeTrialForm';
import PropTypes from 'prop-types';
import ModalEl from '../ModalEl/ModalEl';

const FreeTrialModal = ({
  closeModal,
  modalIsOpen,
  clasesName = '',
  difficalty = '',
}) => {
  return (
    <ModalEl
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      label="start free trial"
    >
      <div className={css.freeTrialModal_modalContent}>
        <FreeTrialForm
          clasesName={clasesName}
          classDifficalty={difficalty}
        />
      </div>
    </ModalEl>
  );
};

FreeTrialModal.propTypes = {
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.bool,
};

export default FreeTrialModal;
