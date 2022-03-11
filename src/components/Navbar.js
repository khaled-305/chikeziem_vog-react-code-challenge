import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                      <Link to="/"> Home </Link>
                    </Button>


                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Link to="/universities"> Universities </Link>
                    </Button>

                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Link to="/postallookup">  Postal lookup </Link>
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
