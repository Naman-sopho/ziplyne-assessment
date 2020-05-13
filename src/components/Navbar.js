import React, {Component} from 'react'
import {AppBar, Button, IconButton, Grid, Toolbar, List, ListItem, ListItemText, Typography} from '@material-ui/core'
import ExitToApp from '@material-ui/icons/ExitToApp'
import '../App.css';
import logo from '../images/logo.png'

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
                                                    <ListItemText><Typography>Product</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography>Solution</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography>Pricing</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography>Customer Stories</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>
                                        <Grid item>
                                        <ListItem>
                                            
                                                <ListItemLink href="#">
                                                    <ListItemText><Typography>Resources</Typography></ListItemText>
                                                </ListItemLink>

                                        </ListItem>
                                        </Grid>

                                        </Grid>
                                    </List>
                            </Grid>
                            <Grid item md={2}>
                                <Button variant="contained" className="navbar-buttons">
                                    <Typography>Request a demo</Typography>
                                </Button>
                                <IconButton className="navbar-buttons">
                                    <ExitToApp/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;