import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { add_post } from '../redux/actions';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreatePostModal() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = React.useState({
        title: '',
        body: '',
        userId: 0,
    });

    const {
        title,
        body,
        userId
    } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(add_post(title, body, userId));
        // console.log(formData)
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Add New Post</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            name="title"
                            value={title}
                            onChange={onChange}
                            required
                            placeholder="Post Title"
                        />
                        <Input
                            type="text"
                            name="body"
                            value={body}
                            onChange={onChange}
                            required
                            placeholder="Post Body"
                        />
                        <Input
                            type="number"
                            name="userId"
                            value={userId}
                            onChange={onChange}
                            required
                            placeholder="User Id"
                        />
                        <Button type="submit" variant="contained">Add Post</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

