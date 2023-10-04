import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation } from 'react-router-dom';

function Default(): JSX.Element {
    const { pathname } = useLocation();
    const [value, setValue] = useState(pathname === '/' ? 'fav' : 'characters');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return <>
        <Tabs
            value={value}
            onChange={handleChange}
        >
            <Tab label="fav"
                component={Link} to="/"
                value="fav"
                sx={{color:'white'}}

            />
            <Tab label="Characters"
                component={Link} to="/characters"
                value="characters"
                sx={{color:'white'}}

            />
        </Tabs>
        <Outlet />
    </>
}

export default Default;
