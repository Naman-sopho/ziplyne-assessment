import React, {Component} from 'react'
import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import MainTop from './MainTop';
import MainBottom from './MainBottom';

class Main extends Component {
    render() {
        return(
            <Grid container direction="column">
                <Grid item md={12}><Navbar/></Grid>
                <Grid item md={12}><MainTop/></Grid>
                <Grid item md={12}><MainBottom/></Grid>
            </Grid>
        );
    }
}

export default Main;