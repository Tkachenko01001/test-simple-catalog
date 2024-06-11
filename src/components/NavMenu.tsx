import { AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';

const NavMenu = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link style={{color: 'white', textDecoration: 'none'}} href="/?page=1" passHref>
                    Головна
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu