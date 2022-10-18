import { Swiper, SwiperSlide } from 'swiper/react';

import alura from '../../assets/images/partners/alura.svg';
import azure from '../../assets/images/partners/azure.svg';
import beehive from '../../assets/images/partners/beehive.svg';
import fiap from '../../assets/images/partners/fiap.svg';
import schneider from '../../assets/images/partners/schneider.svg';
import steck from '../../assets/images/partners/steck.svg';

import 'swiper/css';
import 'swiper/css/autoplay';

import './styles.scss';

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container container">
        <Swiper
          slidesPerView={3}
          spaceBetween="-20%"
          draggable
          autoplay
          loop
          speed={500}
          breakpoints={{
            1024: {
              spaceBetween: '-10%',
              slidesPerView: 4,
            },
            768: {
              spaceBetween: '-20%',
              slidesPerView: 4,
            },
            414: {
              spaceBetween: '-20%',
              slidesPerView: 1.8,
            },

            0: {
              spaceBetween: '-20%',
              slidesPerView: 1.8,
            },
          }}
        >
          <SwiperSlide className="partner">
            <img src={fiap} />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src={alura} />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src={steck} />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src={schneider} />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src={beehive} />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src={azure} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
