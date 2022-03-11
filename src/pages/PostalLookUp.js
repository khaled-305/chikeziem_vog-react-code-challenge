import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postal_lookup } from '../redux/actions';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const PostalLookUp = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        code: 0
    });

    const {
        code
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(postal_lookup(code));
        console.log(formData)
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <TextField
                    name="code"
                    label="Postal LookUp.."
                    variant="outlined"
                    value={code}
                    onChange={onChange}
                />
            </Box>
        </>
    )
}

export default PostalLookUp;
