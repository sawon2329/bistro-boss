import { Link, NavLink } from 'react-router-dom';
import './header.css'

import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { userContext } from '../../App';

const Header = () =>{
    const [globalUser,setGlobalUser] = useContext(userContext);


    
    return(
        <div className='nav-container'>
            <div className='header-logo'>
                <NavLink to={'/home'}><img src={logo} alt="" /></NavLink>
            </div>
            <div className='item-container'>
                <div className="nav-item"><Link to={'/home'}>Home</Link></div>
                <div className="nav-item"><Link to={'/ourmenu'}>Our Menu</Link></div>
                <div className='nav-item'><Link to={'/ourshop'}>Our Shop</Link></div>
                <div className='nav-item'><Link to={'/contact'}>Contact</Link></div>
                <div className='nav-item container-flex'><Link className='cart-header-div' to={'/cart'}><FontAwesomeIcon icon={faCartShopping}/></Link></div>
                <div className='nav-item'><Link to={'/dashboard'}>{globalUser.popupGoogle ?(<div className='header-userPhoto'><img src={globalUser.photoURL} alt="" /></div>): 
                (<div className='header-userPhoto'>
                    {
                        globalUser.photoURL ? <img src={globalUser.photoURL} alt="" />:<FontAwesomeIcon icon={faUser}/>
                    }
                </div>
                    
                )}
            </Link></div>
            </div>
        </div>
    )
}

export default Header;