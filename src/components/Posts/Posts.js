import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'
import useStyles from './styles'

const Posts = ({ setCurrentID }) => {

   const posts = useSelector(state => state.posts)
   const classes = useStyles()

   console.log('The Return Data is : ',posts)

    return (
            !posts.length ? <CircularProgress /> : (
                <Grid container className={classes.container} alignItems='stretch' spacing={3}>
                    {posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentID={setCurrentID} />
                    </Grid>
            ))}
        </Grid>
    )
)}

export default Posts
