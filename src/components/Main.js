import React, {Component} from 'react'
import { Button } from '@material-ui/core';
import Navbar from './Navbar';
import MainTop from './MainTop';

class Main extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <MainTop/>
            </div>
        );
    }
}

export default Main;