import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import css from './Team.module.css';
import InstructorCard from './InstructorCard';
import Title from 'components/UI/Title/Title';
import MainBtn from 'components/UI/MainBtn/MainBtn';
import AnimatedBlocks from 'components/UI/AnimatedBlocks/AnimatedBlocks';
import { getTeamList } from 'servises/API';
const Team = ({ teamSectionRef, scrollFunc }) => {
  const [teamList, setTeamList] = useState([]);
  const [openSection, setOpenSection] = useState(false);
  const [ref, inView] = useInView({});

  const changeStyle = () => {
    setOpenSection(!openSection);
    if (openSection === true) scrollFunc(teamSectionRef);
  };

  useEffect(() => {
    getTeamList().then(res => {
      setTeamList(res.records);
    });
  }, []);
  return (
    <>
      <Title text="instructors" ref={teamSectionRef} />

      <div
        ref={ref}
        className={`${css.team__container} container
            ${inView && 'animate'}

      `}
      >
        <ul
          className={`${css.teamList} ${
            openSection ? css.teamList_openned : css.teamList_closed
          }`}
        >
          {teamList.map(({ values }) => {
            const { name, position, legend, photo, photo2x } = values;
            return (
              <li key={name}>
                <InstructorCard
                  name={name}
                  position={position}
                  legend={legend}
                  photo={photo}
                  photo2x={photo2x}
                />
              </li>
            );
          })}
        </ul>
        <div className={css.team_hideBtn}>
          <MainBtn
            text={!openSection ? 'See all' : 'Hide'}
            onClickFnc={changeStyle}
          />
        </div>
      </div>
      <AnimatedBlocks topPosition="3865" format="flex-start" />
    </>
  );
};
export default Team;
