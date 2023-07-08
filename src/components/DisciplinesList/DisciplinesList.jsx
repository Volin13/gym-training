import Title from 'components/UI/Title/Title';
import React, { useEffect, useState } from 'react';
import css from './DisciplinesList.module.css';
import DisciplinesListItem from './DisciplinesListItem';
import { getDisciplinesList } from 'servises/API';
import MotivanionalSection from 'components/MotivanionalSection/MotivanionalSection';
import AnimatedBlocks from 'components/UI/AnimatedBlocks/AnimatedBlocks';

const DisciplinesList = () => {
  const [disciplines, setDisciplines] = useState([]);
  const [activeItemId, setActiveItemId] = useState(null);

  const handleMouseEnter = itemId => {
    setActiveItemId(itemId);
  };

  useEffect(() => {
    getDisciplinesList().then(res => {
      setDisciplines(res.records);
    });
  }, []);

  useEffect(() => {
    const firstItemId = 'Gym';
    setActiveItemId(firstItemId);
  }, []);

  return (
    <>
      <AnimatedBlocks topPosition="1770" format="flex-end" />

      <div className={`container ${css.disciplinesList_container}`}>
        <Title text="Find what moves you" />
        <ul className={css.disciplinesList_list}>
          {disciplines.map(({ values }) => {
            const {
              titleText,
              description,
              imageDesktop,
              imageTablet,
              imageMobile,
            } = values;
            return (
              <li key={titleText}>
                <DisciplinesListItem
                  itemId={titleText}
                  activeItemId={activeItemId}
                  titleText={titleText}
                  description={description}
                  imageDesktop={imageDesktop}
                  imageTablet={imageTablet}
                  imageMobile={imageMobile}
                  onMouseEnter={handleMouseEnter}
                />
              </li>
            );
          })}
        </ul>
        <ul>
          {disciplines.map(({ values }) => {
            const {
              titleText,
              motivationText,
              motivationImgDesktop,
              motivationImgTablet,
              motivationImgMobile,
            } = values;
            return (
              <li key={titleText}>
                <MotivanionalSection
                  itemId={titleText}
                  activeItemId={activeItemId}
                  motivationText={motivationText}
                  imageDesktop={motivationImgDesktop}
                  imageTablet={motivationImgTablet}
                  imageMobile={motivationImgMobile}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DisciplinesList;
