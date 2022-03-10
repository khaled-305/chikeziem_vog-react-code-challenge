import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostId = () => {
    const { postId } = useParams();
    const posts = useSelector(state => state.posts);

    return (
        <>
            {postId}
        </>
    )
}

export default PostId;