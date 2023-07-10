import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import Title from 'components/UI/Title/Title';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ClassItem from './ClassItem';
import css from './Classes.module.css';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import { getClassesList } from 'servises/API';
const Classes = ({ classesSectionRef, scrollFunc }) => {
  const [openSection, setOpenSection] = useState(false);
  const [classes, setClasses] = useState([]);
  const [ref, inView] = useInView({});

  const changeStyle = () => {
    setOpenSection(!openSection);
    if (openSection === true) scrollFunc(classesSectionRef);
  };
  useEffect(() => {
    getClassesList().then(res => {
      setClasses(res.records);
    });
  }, []);
  return (
    <StyledtWrapper>
      <Title text="Classes" ref={classesSectionRef} />
      <div
        ref={ref}
        className={`container ${css.classes__container}
      ${inView && 'animate'}
      `}
      >
        <ul
          className={`${css.classes__classesList} ${
            openSection
              ? css.classes__classesListClosed
              : css.classes__classesListOpenned
          }`}
        >
          {classes.map(({ values }) => {
            const {
              classImage,
              classImg2x,
              clasesName,
              studentsQnt,
              discipline,
              instructor,
              duration,
              difficalty,
              noOfClasses,
            } = values;
            return (
              <li key={noOfClasses}>
                <ClassItem
                  classImage={classImage}
                  classImg2x={classImg2x}
                  clasesName={clasesName}
                  studentsQnt={studentsQnt}
                  discipline={discipline}
                  instructor={instructor}
                  duration={duration}
                  difficalty={difficalty}
                  noOfClasses={noOfClasses}
                />
              </li>
            );
          })}
        </ul>
        <MainBtn
          text={!openSection ? 'See all' : 'Hide'}
          onClickFnc={changeStyle}
        />
      </div>
    </StyledtWrapper>
  );
};
export default Classes;
