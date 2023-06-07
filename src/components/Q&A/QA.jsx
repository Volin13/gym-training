import Title from 'components/UI/Title/Title';
import React, { useRef } from 'react';
import css from './QA.module.css';
import QAListItem from './QAListItem';

const QuestionsAndAnswers = () => {
  const firstElementRef = useRef(null);
  const secondElementRef = useRef(null);
  const thirdElementRef = useRef(null);
  const fourthElementRef = useRef(null);
  return (
    <div className={`${css.qa__container} container`}>
      <Title text="Frequently Asked Question" />
      <ul className={css.qa__list}>
        <li>
          <QAListItem
            ref={firstElementRef}
            questionText="Why it is so important to work out in any age?"
            answerText="Unlock your full potential! 
        Embrace the transformative power of exercise at any age. 
        Regular physical activity boosts energy, strengthens muscles, 
        and improves heart health. Say goodbye to stress and hello to a 
        revitalized you. Whether it's a brisk walk, a dance class, or 
        weightlifting, exercise enhances mental clarity and promotes 
        longevity. Embrace a healthier lifestyle and enjoy the incredible 
        benefits of staying active. Start your journey today!"
          />
        </li>
        <li>
          <QAListItem
            ref={secondElementRef}
            questionText="Why it is so important to work out in any age?"
            answerText="Unlock your full potential! 
        Embrace the transformative power of exercise at any age. 
        Regular physical activity boosts energy, strengthens muscles, 
        and improves heart health. Say goodbye to stress and hello to a 
        revitalized you. Whether it's a brisk walk, a dance class, or 
        weightlifting, exercise enhances mental clarity and promotes 
        longevity. Embrace a healthier lifestyle and enjoy the incredible 
        benefits of staying active. Start your journey today!"
          />
        </li>
        <li>
          <QAListItem
            ref={thirdElementRef}
            questionText="Why it is so important to work out in any age?"
            answerText="Unlock your full potential! 
        Embrace the transformative power of exercise at any age. 
        Regular physical activity boosts energy, strengthens muscles, 
        and improves heart health. Say goodbye to stress and hello to a 
        revitalized you. Whether it's a brisk walk, a dance class, or 
        weightlifting, exercise enhances mental clarity and promotes 
        longevity. Embrace a healthier lifestyle and enjoy the incredible 
        benefits of staying active. Start your journey today!"
          />
        </li>
        <li>
          <QAListItem
            ref={fourthElementRef}
            questionText="Why it is so important to work out in any age?"
            answerText="Unlock your full potential! 
        Embrace the transformative power of exercise at any age. 
        Regular physical activity boosts energy, strengthens muscles, 
        and improves heart health. Say goodbye to stress and hello to a 
        revitalized you. Whether it's a brisk walk, a dance class, or 
        weightlifting, exercise enhances mental clarity and promotes 
        longevity. Embrace a healthier lifestyle and enjoy the incredible 
        benefits of staying active. Start your journey today!"
          />
        </li>
      </ul>
    </div>
  );
};

export default QuestionsAndAnswers;
