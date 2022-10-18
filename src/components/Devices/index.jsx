import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../Button';
import Title from '../Title';

import defaultDevice from '../../assets/images/default-device.png';

import 'swiper/css';
import 'swiper/css/autoplay';

import './styles.scss';

const Devices = () => {
  return (
    <section className="devices">
      <Title text="Dispositivos" subtext="O que é usado?" />

      <div className="devices__container container">
        <div className="carousel">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={32}
            autoplay
            speed={500}
            draggable
            breakpoints={{
              1024: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              564: {
                slidesPerView: 1.5,
              },
            }}
          >
            <SwiperSlide>
              <img src={defaultDevice} />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={defaultDevice} />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={defaultDevice} />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={defaultDevice} />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={defaultDevice} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="content">
          <p>
            Os sensores são fornecidos pela Steck. Consulte se seu{' '}
            <a className="highlight" style={{ textDecoration: 'underline' }}>
              plano
            </a>{' '}
            inclui determinado dispositivo.
          </p>

          <a href="https://www.steck.com.br/" target="_blank">
            <Button
              text="Conhecer"
              isSolid
              hasIcon
              customStyle={{ marginTop: 40, fontSize: '2rem' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Devices;
