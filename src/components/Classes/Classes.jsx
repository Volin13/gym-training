import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import Title from 'components/UI/Title/Title';
import React from 'react';
import ClassItem from './ClassItem';
import css from './Classes.module.css';
import MainBtn from 'components/UI/MainBtn/MainBtn';

const Classes = () => {
  return (
    <StyledtWrapper>
      <Title text="Classes" />
      <div className={`container ${css.classes__container}`}>
        <ClassItem
          classImage=""
          clasesName="Strength &#38; Sweat"
          studentsQnt={'29'}
          discipline={'yoga'}
          instructor={'Esther Howard'}
          duration={'2H'}
          difficalty={'beginner'}
          noOfClasses={'30'}
        />
        <MainBtn text="See all" />
      </div>
    </StyledtWrapper>
  );
};
export default Classes;
