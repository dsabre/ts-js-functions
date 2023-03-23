import React, {FC, useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../routes';
import Title from '../../typography/Title';
import Download from '../Download';
import svgTypescript from '../../assets/images/typescript.svg';
import svgJavascript from '../../assets/images/javascript.svg';

interface SidebarProps {
    onLinkClick?(): void;
}

const Sidebar: FC<SidebarProps> = ({onLinkClick}) => {
    const [search, setSearch] = useState<string>('');

    return (
        <aside className='space-y-4 flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
            <Link to='/' className='flex gap-1 items-center' onClick={() => (onLinkClick ? onLinkClick() : {})}>
                <img className='w-auto h-6 sm:h-7' src={svgTypescript} alt='' />
                <img className='w-auto h-6 sm:h-7' src={svgJavascript} alt='' />
                <Title title='Functions' />
            </Link>

            <div className='flex flex-col justify-between flex-1 gap-4'>
                <div>
                    <input
                        type='search'
                        placeholder='Search function'
                        className='border rounded p-2 w-full outline-none'
                        value={search}
                        onChange={(event: any) => setSearch(event.target.value)}
                    />
                </div>

                <nav className='space-y-2'>
                    {routes
                        .map((f) => f.path.split('/').join(''))
                        .filter((link: string) => (search ? link.toLowerCase().includes(search.toLowerCase()) : true))
                        .sort()
                        .map((link: string, key: number) => (
                            <NavLink
                                className={({isActive, isPending}) =>
                                    `block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200${
                                        isActive ? ' bg-gray-100' : ''
                                    }`
                                }
                                to={`/${link}`}
                                key={key}
                                onClick={() => (onLinkClick ? onLinkClick() : {})}
                            >
                                <span className='font-medium text-xs'>{link}</span>
                            </NavLink>
                        ))}

                    <hr className='border-gray-200 dark:border-gray-600' />
                </nav>

                <a href='https://github.com/dsabre' target='_blank' className='flex items-center px-4 -mx-2'>
                    <img
                        className='object-cover mx-2 rounded-full h-9 w-9'
                        src='https://github.com/dsabre.png'
                        alt='avatar'
                    />
                    <span className='mx-2 font-medium text-gray-800 dark:text-gray-200'>Daniele Sabre</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
