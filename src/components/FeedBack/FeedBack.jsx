import React from 'react';
import Title from 'components/UI/Title/Title';
import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import avatar from '../../assets/images/FeedBack/avatar1.png';
import 'swiper/css';
import 'swiper/css/pagination';
import css from './FeedBack.module.css';

import FeedBackItem from './FeedBackItem';
const FeedBack = () => {
  return (
    <StyledtWrapper>
      <div className="container">
        <Title text="Client’s Feedback" />
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
            modules={[Pagination]}
            spaceBetween={60}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <FeedBackItem
                feedBackText="This a great 
        historic site to visit. I rented
         a little cart and the driver was a 
         really good friendl"
                starsCount={5}
                name="Brooklyn Simmons"
                avatar={avatar}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeedBackItem
                feedBackText="This a great 
        historic site to visit. I rented
         a little cart and the driver was a 
         really good friendl"
                starsCount={5}
                name="Brooklyn Simmons"
                avatar={avatar}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeedBackItem
                feedBackText="This a great 
        historic site to visit. I rented
         a little cart and the driver was a 
         really good friendl"
                starsCount={5}
                name="Brooklyn Simmons"
                avatar={avatar}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeedBackItem
                feedBackText="This a great 
        historic site to visit. I rented
         a little cart and the driver was a 
         really good friendl"
                starsCount={5}
                name="Brooklyn Simmons"
                avatar={avatar}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </StyledtWrapper>
  );
};

export default FeedBack;
