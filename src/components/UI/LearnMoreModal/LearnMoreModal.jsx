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
  let daySchedule = day.trim().split(' ');
  const timeShedule = time.trim().split(' ');
  console.log(timeShedule);
  return (
    <ModalEl
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      label="learn more about sport class"
    >
      <div className={css.modal_modalContent}>
        <h3 className={css.modal_title}>
          Start your {discipline} class - on {difficalty} lvl.
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
        <table className={css.learnMore__table} border="1">
          <thead>
            <tr>
              <th className={css.learnMore__Title} colSpan="4">
                Scledule
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={css.learnMore__subTitle}>Day</th>
              {daySchedule.map(item => {
                return <td key={item}>{item}</td>;
              })}
            </tr>
            <tr>
              <th className={css.learnMore__subTitle}>Time</th>
              {timeShedule.map(item => {
                return <td key={item}>{item}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </ModalEl>
  );
};

export default LearnMoreModal;
