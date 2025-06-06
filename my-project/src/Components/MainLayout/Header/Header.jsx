import { Link, NavLink } from 'react-router-dom';
import charityLogo from '../../../assets/image/charity-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100 w-9/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         <NavLink to={'/'}><li><a>Home</a></li></NavLink>
                    <NavLink to={'/about'}><li><a>About</a></li></NavLink>
                    <NavLink to={'/event'}><li><a>Events</a></li></NavLink>
              
                        <li>
                            <details>
                                <summary>Blog</summary>
                                <ul className="p-2">
                                    <NavLink to={'/blog/submenu1'}><li><a>Submenu 1</a></li></NavLink>
                                    <NavLink to={'/blog/submenu2'}><li><a>Submenu 1</a></li></NavLink>
                                   
                                </ul>
                            </details>
                        </li>
                  
                   
                        <li>
                            <details>
                                <summary>Pages</summary>
                                <ul className="p-2">
                                    <NavLink to={'/page/submenu1'}><li><a>Submenu 1</a></li></NavLink>
                                     <NavLink to={'/page/submenu2'}><li><a>Submenu 2</a></li></NavLink>
                                    
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link to={'/'} className=" text-xl hidden md:block">
                    <img className='w-36 h-24 bg-white' src={charityLogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'/'}><li><a>Home</a></li></NavLink>
                    <NavLink to={'/about'}><li><a>About</a></li></NavLink>
                    <NavLink to={'/event'}><li><a>Events</a></li></NavLink>
              
                        <li>
                            <details>
                                <summary>Blog</summary>
                                <ul className="p-2">
                                    <NavLink to={'/blog/submenu1'}><li><a>Submenu 1</a></li></NavLink>
                                    <NavLink to={'/blog/submenu2'}><li><a>Submenu 1</a></li></NavLink>
                                   
                                </ul>
                            </details>
                        </li>
                  
                   
                        <li>
                            <details>
                                <summary>Pages</summary>
                                <ul className="p-2">
                                    <NavLink to={'/page/submenu1'}><li><a>Submenu 1</a></li></NavLink>
                                     <NavLink to={'/page/submenu2'}><li><a>Submenu 2</a></li></NavLink>
                                    
                                </ul>
                            </details>
                        </li>
                  

                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#00A9A5] text-white">DONATE</button>
            </div>
        </div>
    );
};

export default Header;