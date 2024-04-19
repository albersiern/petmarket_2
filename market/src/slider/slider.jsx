import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NikeOne from '../assets/images/nike_1.png'

export const Slider = ({ slides }) => {
    return (
        <Swiper
            spaceBetween={50}
            modules={[Navigation]}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}

        >
            <SwiperSlide className='slide'>
                <div className='slider_side-left'>
                    <h1>
                        Nike
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse iure ex tempore,
                        veritatis voluptates provident laborum temporibus aperiam dolores corrupti ad earum quas
                        doloremque delectus, fuga incidunt magnam molestias cum officiis fugit?
                    </p>
                </div>
                <div className='slider_side-right'>
                    <div className="circles big">
                        <div className="circles med">
                            <div className="circle small"></div>
                        </div>
                    </div>
                    <img src={NikeOne} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <div className='slider_side-left'>
                    <h1>
                        Nike
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse iure ex tempore,
                        veritatis voluptates provident laborum temporibus aperiam dolores corrupti ad earum quas
                        doloremque delectus, fuga incidunt magnam molestias cum officiis fugit?
                    </p>
                </div>
                <div className='slider_side-right'>
                    <div className="circles big">
                        <div className="circles med">
                            <div className="circle small"></div>
                        </div>
                    </div>
                    <img src={NikeOne} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <div className='slider_side-left'>
                    <h1>
                        Nike
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse iure ex tempore,
                        veritatis voluptates provident laborum temporibus aperiam dolores corrupti ad earum quas
                        doloremque delectus, fuga incidunt magnam molestias cum officiis fugit?
                    </p>
                </div>
                <div className='slider_side-right'>
                    <div className="circles big">
                        <div className="circles med">
                            <div className="circle small"></div>
                        </div>
                    </div>
                    <img src={NikeOne} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <div className='slider_side-left'>
                    <h1>
                        Nike
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse iure ex tempore,
                        veritatis voluptates provident laborum temporibus aperiam dolores corrupti ad earum quas
                        doloremque delectus, fuga incidunt magnam molestias cum officiis fugit?
                    </p>
                </div>
                <div className='slider_side-right'>
                    <div className="circles big">
                        <div className="circles med">
                            <div className="circle small"></div>
                        </div>
                    </div>
                    <img src={NikeOne} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}