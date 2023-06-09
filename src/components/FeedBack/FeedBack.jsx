import React from 'react';
import Title from 'components/UI/Title/Title';
import StyledtWrapper from 'components/UI/StyledWrapper/StyledWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import avatar from '../../assets/images/FeedBack/avatar1.png';

import 'swiper/css';
import 'swiper/css/pagination';
import FeedBackItem from './FeedBackItem';
const FeedBack = () => {
  return (
    <StyledtWrapper>
      <div className="container">
        <Title text="Client’s Feedback" />
        <Swiper
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
    </StyledtWrapper>
  );
};

export default FeedBack;
