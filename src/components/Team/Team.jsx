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
        instructorLegend="Jacob Jones, a dedicated gym instructor, transformed lives through fitness. His passion for training ignited a fire within his clients, driving them to surpass their limits. With unwavering motivation, Cameron sculpted bodies and empowered minds, leaving an indelible mark on the fitness world."
      />
      <InstructorCard
        name="leslie alexander"
        position="gym trainer"
        instructorAvatar={css.leslieAlexander}
        instructorLegend="Leslie Alexander, a powerhouse gym instructor and kickboxing trainer, ignited a fierce fire within her students. With her unwavering energy and expertise, she transformed ordinary individuals into warriors. Leslies unwavering dedication and motivation propelled her fighters to new heights, making her a force to be reckoned with in the fitness world."
      />
      <InstructorCard
        name="cameron williamson"
        position="gym trainer"
        instructorAvatar={css.cameronWilliamson}
        instructorLegend="Cameron Williamson, the epitome of resilience and determination, was a formidable gym instructor and boxing trainer. His unwavering spirit and expert guidance pushed his clients beyond their limits, unlocking their true potential. With Cameron by their side, champions were made, both inside and outside the ring."
      />
      <InstructorCard
        name="jane cooper"
        position="gym trainer"
        instructorAvatar={css.janeCooper}
        instructorLegend="Jane Cooper, a dynamic gym and yoga instructor, epitomized strength and serenity. Her captivating classes inspired a transformative journey for all who crossed her path. With unwavering passion, Jane empowered bodies and minds, leaving an indelible mark on the fitness world."
      />
    </div>
  );
};
export default Team;
