import {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import svgTypescript from '../../assets/images/typescript.svg';
import svgJavascript from '../../assets/images/javascript.svg';
import Sidebar from '../Sidebar';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const [drawerToggleChecked, setDrawerToggleChecked] = useState<boolean>(false);

    return (
        <div className='sticky top-0 left-0 right-0 bg-white'>
            <header className='sm:hidden text-gray-600 body-font border-b flex justify-between p-4 items-center'>
                <Link to='/' className='flex gap-1 title-font font-medium items-center text-gray-900'>
                    <img className='w-auto h-6 sm:h-7' src={svgTypescript} alt='' />
                    <img className='w-auto h-6 sm:h-7' src={svgJavascript} alt='' />
                    <span className='text-x'>Functions</span>
                </Link>

                <input
                    type='checkbox'
                    className='hidden peer/drawer-toggle'
                    checked={drawerToggleChecked}
                    onChange={() => {}}
                ></input>

                <span
                    className='cursor-pointer transition-all duration-500 inline-block text-sm text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-200'
                    onClick={() => setDrawerToggleChecked(!drawerToggleChecked)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-7 h-7'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                </span>
                <div className='fixed top-0 left-0 z-20 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked/drawer-toggle:translate-x-0'>
                    <Sidebar onLinkClick={() => setDrawerToggleChecked(false)} />
                </div>
            </header>
        </div>
    );
};

export default Navbar;
