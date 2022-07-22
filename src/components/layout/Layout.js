import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { ArgentBankLogo } from '../../img';
import { logOut } from '../../app/LogSlice';

const Layout = (props) => {
    const isLogged = useSelector((state) => state.log.logged);
    const dispatch = useDispatch();
    return(
        <div>
            <nav className='main-nav'>
                <Link to='/' className='main-nav-logo'>
                    <img src={ArgentBankLogo} alt='Argent Bank Logo' className='main-nav-logo-image'/>
                </Link>
                {isLogged 
                    ? <Link to='/' className='main-nav-item' onClick={() => dispatch(logOut())}>Log out</Link>
                    : <Link to='/login' className='main-nav-item'>Sign In</Link>
                }
                
            </nav>
            <Outlet/>
            <footer className='footer'>
                <p className='footer-text'>Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default Layout