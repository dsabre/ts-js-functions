import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import routes from './routes';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import svgTypescript from './assets/images/typescript.svg';
import svgJavascript from './assets/images/javascript.svg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import {Box, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Palette } from '@mui/icons-material';

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const drawerWidth = 240;

const App = () => {
    return (
        <div>
            <BrowserRouter basename={!isLocal ? '/ts-js-functions/' : undefined}>
                <Drawer
                    variant='persistent'
                    anchor='left'
                    open
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box'
                        }
                    }}
                >
                    <Box padding={2}>
                        <nav aria-label='functions'>
                            <List>
                                {routes
                                    .map((f) => f.path.split('/').join(''))
                                    .sort()
                                    .map((link: string, key: number) => (
                                        <ListItem disablePadding key={key}>
                                            <ListItemButton>
                                                <ListItemText
                                                    primary={
                                                        <NavLink
                                                            style={{textDecoration: 'none'}}
                                                            to={`/${link}`}
                                                            key={key}
                                                        >
                                                            {link}
                                                        </NavLink>
                                                    }
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                            </List>
                        </nav>
                    </Box>
                </Drawer>

                <Container maxWidth='xl'>b</Container>
            </BrowserRouter>

            <ToastContainer />
        </div>
    );
};
const App2 = () => {
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
