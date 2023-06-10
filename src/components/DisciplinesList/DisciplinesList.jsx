import Title from 'components/UI/Title/Title';
import React, { useRef, useState } from 'react';
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
  const [scaledFirstEl, scaleUpFirstEl] = useState(true);
  // const [scaledSecondEl, scaleUpSecondEl] = useState(false);
  // const [scaledThirdEl, scaleUpThirdEl] = useState(false);
  // const [scaledFourth, scaleUpFourthEl] = useState(false);
  return (
    <div className={`container ${css.disciplinesList_container}`}>
      <Title text="Find what moves you" />
      <ul className={css.disciplinesList_list}>
        <li>
          <DisciplinesListItem
            scaleUpFirstEl={scaleUpFirstEl}
            scaledFirstEl={scaledFirstEl}
            ref={firstElRef}
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
