import './notfound.css';
import Error from '../../assets/404.gif'

    const NotFound = () =>{
        return(
            <div className='data-container container-flex'>
                <img src={Error} alt="" />
            </div>
        )
    }

export default NotFound;