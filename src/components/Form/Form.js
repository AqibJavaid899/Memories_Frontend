import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button, Paper } from '@material-ui/core'
import useStyles from './styles'
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux"
import { createPost, updatePost } from '../../actions/Post' 
import { useSelector } from 'react-redux'


const Form = ({ setCurrentID, currentID }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const post = useSelector((state) => currentID ? state.posts.find((post) => post._id === currentID) : null)
    const [postData, setPostData] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentID){
            dispatch(updatePost(currentID, postData))
        }
        else{
            dispatch(createPost(postData))
        }
        handleClear()
    }

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleClear = () => {
       setCurrentID(null)
       setPostData({creator: "", title: "", message: "", tags: "", selectedFile: ""})
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">{currentID ? 'Editing' : 'Creating'} a Memory</Typography>
                
                <TextField variant="outlined" label="Creator" name="creator" fullWidth value={postData.creator}
                 onChange={(e) => setPostData({...postData, creator: e.target.value})}/>

                 <TextField variant="outlined" label="Title" name="title" fullWidth value={postData.title}
                 onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                 
                 <TextField variant="outlined" label="Message" name="message" fullWidth value={postData.message}
                 onChange={(e) => setPostData({...postData, message: e.target.value})}/>

                <TextField variant="outlined" label="Tags" name="tags" fullWidth value={postData.tags}
                 onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}/>

                 <div className={classes.fileInput}>
                     <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({...postData, selectedFile: base64})} />
                 </div>

                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                 <Button  variant="contained" color="secondary" onClick={handleClear} size="small" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
