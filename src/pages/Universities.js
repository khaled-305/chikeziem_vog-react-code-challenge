import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import { useDispatch, useSelector } from 'react-redux';
import { get_countries, get_universities } from '../redux/actions';
import Navbar from '../components/Navbar';

/**
 * Had issues with the countries api, and did'nt have enough time to resolve it.
 * because i had a short time to submit back the coding challenge. So when i make a 
 * get request to 'https://restcountries.eu/' which was specified on the challenge, it 
 * redirects me to 'https://countrylayer.com/' ,and even when i went ahead to register and 
 * get and API Key on Countrylayer, i still had issues with the get calls
 */

const Universities = () => {
    const dispatch = useDispatch();
    const universities = useSelector(state => state.universities);
    const countries = useSelector(state => state.countries);

    React.useEffect(() => {
        dispatch(get_universities());
        dispatch(get_countries());
    }, []);

    return (
        <>
            {console.log(universities)}
            {console.log(countries)}

            <Navbar />

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {universities?.universities?.map((uni, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {uni?.alpha_two_code}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {uni?.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {uni?.country}
                                </Typography>

                                {uni?.domains?.map((domain) => (
                                    <Typography variant="body2">
                                        {domain}
                                    </Typography>
                                ))}

                                 <Divider />

                                {uni?.web_pages?.map((web_page) => (
                                    <Typography variant="body2">
                                        {web_page}
                                    </Typography>
                                ))}

                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Universities;
