import './navStyle/navigation.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faComment, faHouse,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Navigation = () => {
    return (
        <nav>
            <div>
                <a href="#">
                <FontAwesomeIcon icon={faHouse} className='icon'/>
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faComment} className='icon'/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faCartShopping} className='icon'/>
                </a>
            </div>
            <form action="">
                <input type="text" />
                <label htmlFor="">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
                </label>
            </form>
        </nav>
    )
}