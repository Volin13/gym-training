import Title from 'components/UI/Title/Title';
import React, { useRef } from 'react';
import css from './DisciplinesList.module.css';
import DisciplinesListItem from './DisciplinesListItem';
import gymImage from '../../assets/images/Desciplines/gymImageDesktop2x-min.jpg';
// import zumbaImage from '../../assets/images/downloadApp/desktopAppAdvertising2x-min.png';
// import yogaImage from '../../assets/images/downloadApp/desktopAppAdvertising2x-min.png';
// import martialArtsImage from '../../assets/images/downloadApp/desktopAppAdvertising2x-min.png';

const DisciplinesList = () => {
  const firstElRef = useRef(null);
  const secondElRef = useRef(null);
  const thirdElRef = useRef(null);
  const fourthElRef = useRef(null);

  return (
    <div className={`container ${css.disciplinesList_container}`}>
      <Title text="Find what moves you" />
      <ul className={css.disciplinesList_list}>
        <li>
          <DisciplinesListItem
            ref={firstElRef}
            firstElRef={firstElRef}
            image={gymImage}
            titleText="gym"
            description="Expect a heart-pumping workout that will 
            leave you feeling energized and accomplished. 
            Our supportive community of like-minded individuals."
          />
        </li>
        <li>
          <DisciplinesListItem
            ref={secondElRef}
            secondElRef={secondElRef}
            image={gymImage}
            titleText="gym"
            description="Expect a heart-pumping workout that will 
            leave you feeling energized and accomplished. 
            Our supportive community of like-minded individuals."
          />
        </li>
        <li>
          <DisciplinesListItem
            ref={thirdElRef}
            thirdElRef={thirdElRef}
            image={gymImage}
            titleText="gym"
            description="Expect a heart-pumping workout that will 
            leave you feeling energized and accomplished. 
            Our supportive community of like-minded individuals."
          />
        </li>
        <li>
          <DisciplinesListItem
            ref={fourthElRef}
            fourthElRef={fourthElRef}
            image={gymImage}
            titleText="gym"
            description="Expect a heart-pumping workout that will 
            leave you feeling energized and accomplished. 
            Our supportive community of like-minded individuals."
          />
        </li>
      </ul>
    </div>
  );
};

export default DisciplinesList;
