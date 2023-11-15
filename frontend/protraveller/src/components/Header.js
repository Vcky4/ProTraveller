import React, { useState } from 'react';
import logo from '../images/logo.png';
import { FaTimes } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

const isHome = location.pathname === '/home' || location.pathname === '/profile';

    return (
        <section className='flex flex-col xl:flex-row items-start xl:items-center justify-between px-8 md:px-16 py-5 backdrop-blur navbar flex-wrap sticky top-0 z-30 max-w-screen-2xl mx-auto'>

            <Link to="/" smooth>
                <div className=''>
                    <img src={logo} alt="" className='h-10 pointer-events-none' />
                </div>
            </Link>

            <nav>
                {isHome ? (
                    <div className='hidden xl:flex items-center justify-center gap-8 font-semibold'>
                     
                        <div>
                        <Link to="/profile" smooth>
                            <img
                                src={`https://source.unsplash.com/50x50/?profile`}
                                alt="Profile"
                                className="rounded-full h-10 w-10 object-cover"
                            />
                        </Link>
                        </div>
                    </div>
                ) : (
                    <div className='hidden xl:flex items-center justify-center gap-8 font-semibold'>
                        <div>
                            <ul className='flex items-center justify-center choc-brown gap-4'>
                                <li><Link to="/#about" smooth>About Us</Link></li>
                                {/* <li><Link to="/#FAQ" smooth>FAQs</Link></li> */}
                            </ul>
                        </div>

                        <div className='flex items-center justify-center gap-4 text-sm'>
                            <button className='border px-8 py-1 rounded choc-brown border-color'><Link to="/login" smooth>Login</Link></button>
                            <button className='button-background text-white px-10 py-1 rounded'><Link to="/signup" smooth>Get Started</Link></button>
                        </div>
                    </div>
                )}
                <div className='xl:hidden absolute top-7 right-8 md:right-16'>
                    <button onClick={toggleNavbar}>{isOpen ? <FaTimes className='text-2xl md:text-4xl choc-brown' /> : <FaBarsStaggered className='text-2xl md:text-4xl choc-brown' />}</button>
                </div>
            </nav>

            {isOpen &&
                <div className='flex flex-col gap-4 xl:gap-8 font-semibold'>
                    <div>
                        <ul className='flex flex-col choc-brown gap-4 mt-5'>
                            <li><Link to="/#about" onClick={toggleNavbar} smooth>About Us</Link></li>
                            {/* <li><Link to="/#FAQ" onClick={toggleNavbar} smooth>FAQs</Link></li> */}
                        </ul>
                    </div>

                    <div className='flex flex-col  justify-center gap-4 text-sm'>
                        <button className='border px-2 md:px-8 py-1 rounded choc-brown border-color'><Link to="/login" smooth onClick={toggleNavbar}>Login</Link></button>
                        <button className='button-background text-white px-2 py-1 rounded w-full'><Link to="/signup" smooth onClick={toggleNavbar}>Get Started</Link></button>
                    </div>
                </div>
            }
        </section>
    );
};
