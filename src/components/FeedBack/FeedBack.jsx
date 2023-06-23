import React, { useEffect, useState } from 'react';
import Title from 'components/UI/Title/Title';
import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import css from './FeedBack.module.css';

import FeedBackItem from './FeedBackItem';
import { getFeedBackList } from 'servises/API';
const FeedBack = ({ feedbackSectionRef }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    getFeedBackList().then(res => {
      setFeedbackList(res.records);
    });
  }, []);

  return (
    <StyledtWrapper>
      <div className="container">
        <Title text="Client’s Feedback" ref={feedbackSectionRef} />
        <div className={css.sliderWrapper}>
          <Swiper
            style={{
              '--swiper-pagination-color': '#FF4300',
              '--swiper-pagination-bullet-inactive-color':
                '#ff620180',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bottom': '8px',
              '--swiper-pagination-bullet-width': '12px',
              '--swiper-pagination-bullet-height': '8px',
              '--swiper-pagination-bullet-border-radius': 'none',
              '--swiper-pagination-bullet-horizontal-gap': '2px',
            }}
            modules={[Pagination, Autoplay]}
            autoplay
            mousewheel={true}
            spaceBetween={60}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {feedbackList.map(({ values }) => {
              const { starsCount, name, feedBackText, avatar } =
                values;
              return (
                <SwiperSlide>
                  <FeedBackItem
                    feedBackText={feedBackText}
                    starsCount={starsCount}
                    name={name}
                    avatar={avatar}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </StyledtWrapper>
  );
};

export default FeedBack;
