import React, {Component} from 'react';
import {Grid, Typography} from '@material-ui/core';

class MainTop extends Component {
    render() {
        return(
            <div className="main">
                <Grid container direction="row" className="main-top">
                    <Grid item>
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path fill="#9A60F2" fill-opacity="0.9" d="M0,128L80,138.7C160,149,320,171,480,170.7C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        </svg>
                    </Grid>
                </Grid>
                    <br/>
                <Grid container class="main-top">
                    <Grid item>
                        <Typography variant="h3" style={{paddingLeft: "5%", paddingTop: "0%", marginBottom: "5%"}}><p>Lorem Ipsum Dolor,<br/>Lorem Ipsum Dolor Amet</p></Typography>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default MainTop;