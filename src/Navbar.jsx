import { useState } from 'react'
import Dvmlogo from './assets/Dvmlogo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'

function Navbar(){

    const [click, setClick] = useState(false)
    const clicking = () => setClick(!click)

    return(
        <div className="navbar">
            <div className="headPart">
                <div className="headLogo">
                    <img className="dvmLogo" src={Dvmlogo} alt="Logo of DVM" />
                </div>
                <div className="headTitle">
                    <h1>
                        BOOK
                    </h1>
                    <h2>
                        HIVE
                    </h2>
                </div>
            </div>
            <ul className={ click ? 'navbarOps-active' : "navbarOps" }>
                <li className='ops'><a href="#">HOME</a></li>
                <li className='ops'><a href="#">MYFAVS</a></li>
                <li className='ops'><a href="#">GENRE</a></li>
            </ul>
            <div className={ click ? 'icon-active' : 'icon'}>
                <a href="#"><FontAwesomeIcon icon={faBell} /></a>
                <a href="#"><FontAwesomeIcon icon={faUser} /></a>
            </div>
            <div className='menu' onClick={clicking} >
                    {click ? (<FontAwesomeIcon icon={faXmark}  style={{ color: 'rgb(255, 255, 255)' }} />) : (<FontAwesomeIcon icon={faBars} style={{ color: 'rgb(255, 255, 255)' }} /> )}
            </div>

        </div>
    );
}

export default Navbar