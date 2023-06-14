import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import Title from 'components/UI/Title/Title';
import React, { forwardRef, useState } from 'react';
import ClassItem from './ClassItem';
import css from './Classes.module.css';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import classesList from './clasessList';
const Classes = forwardRef(function Classes(props, ref) {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  const [openSection, setOpenSection] = useState(false);
  const changeStyle = () => {
    setOpenSection(!openSection);
  };

  return (
    <StyledtWrapper>
      <Title text="Classes" ref={ref} />
      <div className={`container ${css.classes__container}`}>
        <ul
          className={`${css.classes__classesList} ${
            openSection
              ? css.classes__classesListClosed
              : css.classes__classesListOpenned
          }`}
        >
          {classesList.map(
            ({
              classImage,
              clasesName,
              studentsQnt,
              discipline,
              instructor,
              duration,
              difficalty,
              noOfClasses,
            }) => (
              <ClassItem
                key={getRandomInt()}
                classImage={classImage}
                clasesName={clasesName}
                studentsQnt={studentsQnt}
                discipline={discipline}
                instructor={instructor}
                duration={duration}
                difficalty={difficalty}
                noOfClasses={noOfClasses}
              />
            )
          )}
        </ul>
        {/* <ClassItem
          classImage=""
          clasesName="Strength &#38; Sweat"
          studentsQnt={'29'}
          discipline={'yoga'}
          instructor={'Esther Howard'}
          duration={'2H'}
          difficalty={'beginner'}
          noOfClasses={'30'}
        /> */}
        <MainBtn text="See all" onClickFnc={changeStyle} />
      </div>
    </StyledtWrapper>
  );
});
export default Classes;
