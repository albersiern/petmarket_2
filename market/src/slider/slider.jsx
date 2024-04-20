import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NikeOne from '../assets/images/nike_1.png'
import './sliderStyles/slider.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
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
                    <button>more <FontAwesomeIcon className='fill-white' icon={faArrowRight} /></button>
                </div>
                <div className='slider_side-right'>
                    <div className="circles meg">
                        <div className="circles big">
                            <div className="circles med">
                                <div className="circles small"></div>
                            </div>
                        </div>
                    </div>

                    <img src={NikeOne} className='slideImage' alt="nike" width={600} />
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
                    <button>more <FontAwesomeIcon className='fill-white' icon={faArrowRight} /></button>
                </div>
                <div className='slider_side-right'>
                    <div className="circles meg">
                        <div className="circles big">
                            <div className="circles med">
                                <div className="circles small"></div>
                            </div>
                        </div>
                    </div>

                    <img src={NikeOne} className='slideImage' alt="nike" width={600} />
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
                    <button>more <FontAwesomeIcon className='fill-white' icon={faArrowRight} /></button>
                </div>
                <div className='slider_side-right'>
                    <div className="circles meg">
                        <div className="circles big">
                            <div className="circles med">
                                <div className="circles small"></div>
                            </div>
                        </div>
                    </div>

                    <img src={NikeOne} className='slideImage' alt="nike" width={600} />
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
                    <button>more <FontAwesomeIcon className='fill-white' icon={faArrowRight} /></button>
                </div>
                <div className='slider_side-right'>
                    <div className="circles meg">
                        <div className="circles big">
                            <div className="circles med">
                                <div className="circles small"></div>
                            </div>
                        </div>
                    </div>

                    <img src={NikeOne} className='slideImage' alt="nike" width={600} />
                </div>
            </SwiperSlide>
        </Swiper>
        )
}