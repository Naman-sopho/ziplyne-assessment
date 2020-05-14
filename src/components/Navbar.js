import React, {Component} from 'react';
import {AppBar, Button, IconButton, Grid, Toolbar, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import '../App.css';
import logo from '../images/logo.png';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class Navbar extends Component {
    render() {
        return (
            <div justifyContent="center" alignItems="center">
                <AppBar position="static" color="transparent">
                    <Toolbar className="toolbar">
                        <Grid container direction="row" alignItems="flex-start">
                            <Grid item md={4} align="left" alignItems="center" justifyContent="center">
                                <img src={logo} className="App-logo"/>
                            </Grid>
                            <Grid item md={6}>
                                    <List>
                                    <Grid container direction="row" spacing={0.5}>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography style={{fontWeight: "bolder"}}>Product</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography style={{fontWeight: "bolder"}}>Solution</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography style={{fontWeight: "bolder"}}>Pricing</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography style={{fontWeight: "bolder"}}>Customer Stories</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography style={{fontWeight: "bolder"}}>Resources</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>

                                        </Grid>
                                    </List>
                            </Grid>
                            <Grid item md={2}>
                                <div className="navbar-buttons">
                                <Button variant="contained" color="primary"className="navbar-buttons">
                                    <Typography style={{color: '#FFFFFF'}}>Request a demo</Typography>
                                </Button>
                                <IconButton className="navbar-buttons">
                                    <ExitToApp/>
                                </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;