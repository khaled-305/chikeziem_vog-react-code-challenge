import { useSelector, useDispatch } from 'react-redux';
import { delete_post } from '../redux/actions';
import { Button } from '@mui/material';

const DeletePost = (props) => {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(delete_post(props.id));
    }

    return (
        <>
         <Button color="error" onClick={handleDelete}>Delete Post</Button>
        </>
    )
}

export default DeletePost;