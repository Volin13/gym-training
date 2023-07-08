import AnimatedBlocks from 'components/UI/AnimatedBlocks/AnimatedBlocks';
import Title from 'components/UI/Title/Title';
import React, { useRef } from 'react';
import css from './QA.module.css';
import QAListItem from './QAListItem';

const QuestionsAndAnswers = ({ qASectionRef }) => {
  const firstElementRef = useRef(null);
  const secondElementRef = useRef(null);
  const thirdElementRef = useRef(null);
  const fourthElementRef = useRef(null);
  return (
    <>
      <AnimatedBlocks topPosition="6200" format="flex-end" />

      <div className={`${css.qa__container} container`}>
        <Title text="Frequently Asked Question" ref={qASectionRef} />
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
              questionText="What keys of havig succsess in working out are?"
              answerText="Discover the key elements to excel in your workout 
            routine. Commitment: Stay dedicated and consistent, making fitness
             a priority. Goal Setting: Define clear objectives to stay motivated and track progress. 
             Variety: Keep workouts dynamic and exciting to prevent plateaus. 
             Proper Form: Focus on technique to maximize results and prevent 
             injuries. Rest and Recovery: Allow your body time to heal and rejuvenate. Fuel Your Body: Nourish with a 
             balanced diet for optimal performance. Embrace these keys and unlock your path to fitness triumph!"
            />
          </li>
          <li>
            <QAListItem
              ref={thirdElementRef}
              questionText="What reasons to choose working out with a professional trainer?"
              answerText="Reach your fitness goals faster with 
            a professional trainer by your side! Experience 
            personalized workouts, expert guidance, and motivation tailored 
            specifically to you. Maximize your time and effort with customized exercise plans and proper form correction. Gain valuable knowledge about nutrition and injury prevention. Don't settle for average results when you can achieve greatness with a professional trainer. Elevate your fitness journey and unlock your full potential today!"
            />
          </li>
          <li>
            <QAListItem
              ref={fourthElementRef}
              questionText="What new will bring working out to your life?"
              answerText="Embrace the transformative effects of 
            working out and unlock a world of possibilities. 
            Boosted Energy: Experience newfound vitality and endurance 
            for your daily endeavors. Enhanced Confidence: Watch your 
            self-assurance soar as you achieve new fitness milestones. 
            Stress Relief: Discover the ultimate stress buster, leaving 
            you refreshed and revitalized. Improved Health: Strengthen 
            your body and immune system, promoting longevity and well-being. Elevated Happiness: Embrace a 
            positive mindset and enjoy a happier, more fulfilling life. Embrace 
            the new chapter that awaits through the magic of exercise!"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default QuestionsAndAnswers;
