import React, { useState, useEffect } from 'react'
import { Typography, Grid, Grow, AppBar, Container } from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux'

import memories from './assests/memories.png'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { getPosts } from './actions/Post'
import './index.css'

const App = () => {
    const [currentID, setCurrentID] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentID, dispatch])

    return (
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color='inherit'>
                    <Typography className={classes.heading} variant="h2" align='center'>
                        Memories
                    </Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={4}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentID={setCurrentID} />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Form setCurrentID={setCurrentID} currentID={currentID} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>

            </Container>
    )
}

export default App
