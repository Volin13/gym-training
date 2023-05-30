import React from 'react';
import css from './Team.module.css';
import InstructorCard from './InstructorCard';

const Team = () => {
  return (
    <div className={`${css.team__container} container`}>
      <InstructorCard
        name="jacob jones"
        position="gym trainer"
        instructorAvatar={css.jacobJones}
      />
      <InstructorCard
        name="leslie alexander"
        position="gym trainer"
        instructorAvatar={css.leslieAlexander}
      />
      <InstructorCard
        name="cameron williamson"
        position="gym trainer"
        instructorAvatar={css.cameronWilliamson}
      />
      <InstructorCard
        name="jane cooper"
        position="gym trainer"
        instructorAvatar={css.janeCooper}
      />
    </div>
  );
};
export default Team;
