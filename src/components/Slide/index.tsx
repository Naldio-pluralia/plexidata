import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

import styles from './slide.module.scss'



export function Slide() {

  return (
    <div className={styles.slideContainer} id="slide">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        className={styles.swiperSlide}
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        touchRatio={1.5}
        effect={"slide"}
      >
        <SwiperSlide>
          <div className={styles.wrapperContainer}>
            <div className={styles.slideContent}>
              <h2>
                Plexidata
              </h2>
              <p>Os seus dados em segurança</p>
            </div>
            <div className={styles.slide1}>
              <img src="/assets/maintenance.svg" alt="Video Plexidata" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.wrapperContainer}>
            <div className={styles.slideContent}>
              <h2>
                Ciber Segurança
              </h2>
              <p>Na implementação de sistemas capazes de minimizar ataques sem precedentes</p>
            </div>
            <div className={styles.slide1}>
              <img src="/assets/maintenance.svg" alt="Slide 2" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.wrapperContainer}>
            <div className={styles.slideContent}>
              <h2>
                Proteção de Dados
              </h2>
              <p>Melhorar o conhecimento, a formação e as práticas institucionais em matérias de transparência, integridade e privacidade</p>
            </div>
            <div className={styles.slide1}>
              <img src="/assets/print.svg" alt="Slide 3" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.wrapperContainer}>
            <div className={styles.slideContent}>
              <h2>
                Compliance
              </h2>
              <p>Na redução de dependência de terceiros na parametrização da infra-estrutura tecnológica</p>
            </div>
            <div className={styles.slide1}>
              <img src="/assets/maintenance.svg" alt="Slide 4" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}