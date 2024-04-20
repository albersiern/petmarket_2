import { Slider } from "./slider"
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './sliderStyles/slider.scss'

const MainSlider = () => {
    return (
        <div className="main">
            <div className='slider_side-left'>
                <h1>
                    Nike
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse iure ex tempore,
                    veritatis voluptates provident laborum temporibus aperiam dolores corrupti ad earum quas
                    doloremque delectus, fuga incidunt magnam molestias cum officiis fugit?
                </p>
                <button>more <FontAwesomeIcon className='text-white	' icon={faArrowRight} /></button>
            </div>
            <div className='slider_side-right'>
                <div className="circles meg">
                    <div className="circles big">
                        <div className="circles med">
                            <div className="circles small"></div>
                        </div>
                    </div>
                </div>

            </div>
            <Slider className='slide_cross'></Slider>
        </div>
    )
}

export default MainSlider