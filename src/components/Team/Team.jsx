import React, { useState } from 'react';
import css from './Team.module.css';
import InstructorCard from './InstructorCard';
import Title from 'components/UI/Title/Title';
import MainBtn from 'components/UI/MainBtn/MainBtn';
const Team = ({ teamSectionRef, scrollFunc }) => {
  const [openSection, setOpenSection] = useState(false);
  const changeStyle = () => {
    setOpenSection(!openSection);
    if (openSection === true) scrollFunc(teamSectionRef);
  };
  return (
    <>
      <Title text="instructors" ref={teamSectionRef} />

      <div className={`${css.team__container} container`}>
        <ul
          className={`${css.teamList} ${
            openSection ? css.teamList_openned : css.teamList_closed
          }`}
        >
          <li>
            {' '}
            <InstructorCard
              name="jacob jones"
              position="Gym trainer"
              instructorAvatar={css.jacobJones}
              instructorLegend="Jacob Jones, a dedicated gym instructor, transformed lives through fitness. His passion for training ignited a fire within his clients, driving them to surpass their limits. With unwavering motivation, Cameron sculpted bodies and empowered minds, leaving an indelible mark on the fitness world."
            />
          </li>
          <li>
            <InstructorCard
              name="leslie alexander"
              position="Gym trainer"
              instructorAvatar={css.leslieAlexander}
              instructorLegend="Leslie Alexander, a powerhouse gym instructor and kickboxing trainer, ignited a fierce fire within her students. With her unwavering energy and expertise, she transformed ordinary individuals into warriors. Leslies unwavering dedication and motivation propelled her fighters to new heights, making her a force to be reckoned with in the fitness world."
            />
          </li>
          <li>
            <InstructorCard
              name="cameron williamson"
              position="Gym trainer"
              instructorAvatar={css.cameronWilliamson}
              instructorLegend="Cameron Williamson, the epitome of resilience and determination, was a formidable gym instructor and boxing trainer. His unwavering spirit and expert guidance pushed his clients beyond their limits, unlocking their true potential. With Cameron by their side, champions were made, both inside and outside the ring."
            />
          </li>
          <li>
            <InstructorCard
              name="jane cooper"
              position="Gym trainer"
              instructorAvatar={css.janeCooper}
              instructorLegend="Jane Cooper, a dynamic gym and yoga instructor, epitomized strength and serenity. Her captivating classes inspired a transformative journey for all who crossed her path. With unwavering passion, Jane empowered bodies and minds, leaving an indelible mark on the fitness world."
            />
          </li>
        </ul>

        <div className={css.team_hideBtn}>
          <MainBtn
            text={!openSection ? 'See all' : 'Hide'}
            onClickFnc={changeStyle}
          />
        </div>
      </div>
    </>
  );
};
export default Team;
