import React, {Component} from 'react';
import {Box, Card, Grid, Typography} from '@material-ui/core';
import design from '../images/design.png';

class MainBottom extends Component {
    render() {
        return (
            <div>
                <Grid container direction="row">
                    <Grid item md={7} style={{padding: '20px'}}>
                        <Typography variant="h3"  component="div" style={{color: '#6F39E1'}}>
                        <Box fontWeight="fontWeightBold" textAlign="left">
                            <p>Lorem Ipsum Dolor Lorem,</p> 
                            <p>Ipsum Dolor Amet</p>
                        </Box>
                        </Typography>
                        <img src={design}/>
                    </Grid>
                    <Grid item md={5}>
                        <Card className="card" elevation={0}>
                        <div className="card-text">
                            <Typography variant="h5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </Typography>
                        </div>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}

export default MainBottom;