import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import routes from './routes';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const App = () => {
    return (
        <div>
            <BrowserRouter basename={!isLocal ? '/ts-js-functions/' : undefined}>
                <Navbar />

                <div className='flex'>
                    <div className='hidden sm:block'>
                        <Sidebar />
                    </div>

                    <main className='container mx-auto p-4 h-screen overflow-y-auto'>
                        <Routes>
                            <Route path='*' element={<NotFound />} />
                            <Route path='/' element={<Homepage />} />

                            {routes.map((route: any, key: number) => (
                                <Route path={route.path} element={route.element} key={key} />
                            ))}
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>

            <ToastContainer />
        </div>
    );
};

export default App;
