import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { search_post } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux';

const SearchPost = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        id: 0
    });

    const {
        id
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(search_post(id));
        console.log(formData)
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            onSubmit={onSubmit}
            autoComplete="off"
        >
            <TextField
                label="Search..."
                name="id"
                variant="outlined"
                value={id}
                onChange={onChange}
            />
        </Box>
    )
}

export default SearchPost;