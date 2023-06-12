import React, { forwardRef, useState } from 'react';
import css from './QA.module.css';
import { ReactComponent as PlusIcon } from '../../assets/images/MediaIcons/plusIcon.svg';

const QAListItem = forwardRef(function QAListItem(props, ref) {
  const { questionText, answerText } = props;
  const [styled, setStyled] = useState(false);
  const changeStyle = () => {
    if (!styled) {
      ref.current.style.height = '284px';
      setStyled(true);
      return;
    }
    ref.current.style.height = '52px';
    setStyled(false);
  };

  return (
    <>
      <div className={css.qaListItem__container} ref={ref}>
        <div className={css.qaListItem__textPosition}>
          <p>{questionText}</p>
          <button
            type="button"
            className={`${css.qaListItem__plusBtn} ${
              styled ? css.activeBtn : ''
            }`}
            onClick={changeStyle}
          >
            <PlusIcon />
          </button>
        </div>
        <hr />
        <div className={css.qaListItem__answerTextContainer}>
          <p>{answerText}</p>
        </div>
      </div>
    </>
  );
});
export default QAListItem;
