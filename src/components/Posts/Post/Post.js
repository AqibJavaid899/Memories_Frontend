import React from 'react'
import { Card, CardMedia, CardActions, CardContent, Typography, Button } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, updateLikeCount } from '../../../actions/Post'

import useStyles from './styles'

const Post = ({ post, setCurrentID }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            <CardMedia image={post.selectedFile} className={classes.media} title={post.title} />
            
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => setCurrentID(post._id)} >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

                <Typography variant="h5" className={classes.title} gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color='textSecondary' component='p'>{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button color='primary' size='small' onClick={() => dispatch(updateLikeCount(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button color='primary' size='small' onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>



        </Card>
    )
}

export default Post
