import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import UpdatePostModal from './UpdatePost';
import DeletePost from './DeletePost';

export default function Post(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Link to={`/post/${props.postId}`}>
                    <Typography gutterBottom variant="h6" component="div">
                        ({props.id}) {props.title}
                    </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    {props.body}
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary">
                    User: ({props.userId})
                </Typography>
            </CardContent>
            <CardActions>
                <DeletePost id={props.id} />
                <UpdatePostModal id={props.id} />
            </CardActions>
        </Card>
    );
}
