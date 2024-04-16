import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            pagination={{ clickable: true }}

        >
            <SwiperSlide className='bg-lime-700'>Slide 1</SwiperSlide>
            <SwiperSlide className='bg-lime-100'>Slide 2</SwiperSlide>
            <SwiperSlide className='bg-lime-500'>Slide 3</SwiperSlide>
            <SwiperSlide className='bg-lime-900'>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default MainSlider