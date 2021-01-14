import '../assets/styles.css';
import Grid from '@material-ui/core/Grid';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import Flare from '@material-ui/icons/Flare';
import Instagram from '@material-ui/icons/Instagram';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Universe from '../universe/Universe';
var React = require('react');

function Footer() {
    return (
        <Router>
        <div>
            <Grid container spacing={1}>
                <Grid item xs={1} align="center">
                    <Link to="/universe">sf</Link>
                </Grid>

                <Grid item xs={2} align="center">
                    <a href="" className="footer-link">
                        <Link to="/universe">
                            <Flare/>
                        </Link>
                        
                        <Switch>
                            <Route path='/universe'>
                                <Universe/>
                            </Route>
                        </Switch>
                    </a>                    
                </Grid>
                <Grid item xs={3} align="center">
                    <a href="https://github.com/16kp" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <Github/>
                    </a>
                </Grid>
                <Grid item xs={3} align="center">
                    <a href="https://www.linkedin.com/in/purohitkrishnar/" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <LinkedIn/> 
                    </a>
                </Grid>
                <Grid item xs={3} align="center">
                    <a href="https://www.instagram.com/whykrishna/" calssName="footer-link" target="_blank" rel="noopener noreferrer">
                        <Instagram/>
                    </a>
                </Grid>
            </Grid>
        </div>
        </Router>
    );
}

export default Footer;