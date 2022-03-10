import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        Home
                    </Button>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        Universities
                    </Button>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        Postal lookup
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
