import React from 'react';
import ModalEl from '../ModalEl/ModalEl';
import legendTextSwitcher from './classLegend';
import css from './LearnMoreModal.module.css';
const LearnMoreModal = ({
  modalIsOpen,
  closeModal,
  classImage,
  classImg2x,
  discipline,
  difficalty,
  day,
  time,
}) => {
  // console.log(day);
  // console.log(time);

  // const hendleScheduleInfo = () => {
  //   let a = day.split(',');
  // };

  return (
    <ModalEl
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      label="learn more about sport class"
    >
      <div className={css.modal_modalContent}>
        <h3 className={css.modal_title}>
          Start your {discipline} class - with {difficalty} lvl.
        </h3>
        <div className={css.learnMore_format}>
          <picture>
            <source
              media="(min-width: 0px)"
              srcSet={`
        ${classImage} 1x,
        ${classImg2x} 2x`}
              type="image/png"
            />
            <img
              className={css.learnMore__picture}
              src={classImg2x}
              alt="gym class"
            />
          </picture>
          <p className={css.learnMore__legend}>
            {legendTextSwitcher(discipline)}
          </p>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th colspan="2">Scledule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Day</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>Апельсин</td>
              <td>Гарбуз</td>
            </tr>
            <tr>
              <td>Груша</td>
              <td>Капуста</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModalEl>
  );
};

export default LearnMoreModal;
