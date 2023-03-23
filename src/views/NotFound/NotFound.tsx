import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../typography/Button';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
    const navigate = useNavigate();

    return (
        <section className='bg-white dark:bg-gray-900 '>
            <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
                <div>
                    <p className='text-sm font-medium text-typescript dark:text-blue-400'>404 error</p>
                    <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
                        We can’t find that page
                    </h1>
                    <p className='mt-4 text-gray-500 dark:text-gray-400'>
                        Sorry, the page you are looking for doesn't exist or has been moved.
                    </p>

                    <div className='flex items-center mt-6 gap-x-3'>
                        <Button
                            label='Go back'
                            onClick={() => navigate('/')}
                            variant='secondary'
                            icon={
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    className='w-5 h-5 rtl:rotate-180'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                                    />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
