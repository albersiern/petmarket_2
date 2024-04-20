import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NikeOne from '../assets/images/nike_1.png'
import './sliderStyles/slider.scss'

export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            className='swiper'
        >
            <SwiperSlide className='slide'>
                <img src={NikeOne} className='slideImage' alt="nike" width={520} />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={NikeOne} className='slideImage' alt="nike" width={520} />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={NikeOne} className='slideImage' alt="nike" width={520} />
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <img src={NikeOne} className='slideImage' alt="nike" width={520} />
            </SwiperSlide>
        </Swiper>
    )
}