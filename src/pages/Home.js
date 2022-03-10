import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { get_posts } from '../redux/actions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CreatePostModal from '../components/CreatePostModal';
import SearchPost from '../components/SearchPost';

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(get_posts());
    }, [])

    return (
        <>
            {console.log(posts)}
            <Navbar />

            <CreatePostModal />

            <SearchPost />

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {posts?.posts?.map((post) => (
                    <Grid item xs={2} sm={4} md={4} key={post.id}>
                        <Post
                            title={post?.title}
                            body={post?.body}
                            id={post?.id}
                            userId={post?.userId}
                            postId={post?.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Home;