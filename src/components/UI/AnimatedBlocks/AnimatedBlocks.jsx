import React, { useEffect, useState } from 'react';
import css from './AnimatedBlocks.module.css';

const debounce = (callback, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};

const AnimatedBlocks = ({ topPosition, format }) => {
  const windowWidth = window.innerWidth;
  const BREAKPOINT_SMALL = 768;
  const BREAKPOINT_LARGE = 1440;
  const MOBILE = windowWidth < BREAKPOINT_SMALL;
  let a = 250;
  let b = 330;
  let c = 700;
  if (MOBILE) {
    a = 80;
    b = 160;
    c = 100;
  }
  if (
    windowWidth < BREAKPOINT_LARGE &&
    windowWidth > BREAKPOINT_SMALL
  ) {
    a = 150;
    b = 310;
    c = 200;
  }
  const [heightFirstEl, setFirstElHeight] = useState(a);
  const [heightSecondEl, setSecondElHeight] = useState(b);
  useEffect(() => {
    const handleScroll = debounce(() => {
      const newHeightFirstEl = Math.floor(Math.random() * c) + a;
      const newHeightSecondEl = Math.floor(Math.random() * c) + b;
      setFirstElHeight(newHeightFirstEl);
      setSecondElHeight(newHeightSecondEl);
    }, 300);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [a, b, c]);
  let mobilePosition = Number(topPosition) - 810;
  return (
    <div
      className={css.animatedBlockSection}
      style={{
        top: MOBILE ? `${mobilePosition}px` : `${topPosition}px `,
        alignItems: format,
      }}
    >
      <div
        className={`${css.animatedBlock} ${css.animatedBlockFirst}`}
        style={{ width: `${heightFirstEl}px` }}
      >
        {' '}
      </div>
      <div
        className={`${css.animatedBlock} ${css.animatedBlockSecond}`}
        style={{ width: `${heightSecondEl}px` }}
      >
        {' '}
      </div>
    </div>
  );
};

export default AnimatedBlocks;
