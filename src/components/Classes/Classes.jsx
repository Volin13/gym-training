import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import Title from 'components/UI/Title/Title';
import React from 'react';
import ClassItem from './ClassItem';
import css from './Classes.module.css';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import classesList from './clasessList';

const Classes = () => {
  console.log(classesList);
  return (
    <StyledtWrapper>
      <Title text="Classes" />
      <div className={`container ${css.classes__container}`}>
        <ul className={css.classes__classesList}>
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
                key={clasesName}
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
        <MainBtn text="See all" />
      </div>
    </StyledtWrapper>
  );
};
export default Classes;
