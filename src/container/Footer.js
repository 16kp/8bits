import '../assets/styles.css';
import Grid from '@material-ui/core/Grid';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import Flare from '@material-ui/icons/Flare';
import Instagram from '@material-ui/icons/Instagram';
var React = require('react');

export default function Footer() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={3} align="center">
                    <a href="/universe" className="footer-link">
                        <Flare/>
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
                    <a href="https://www.instagram.com/whykrishna/" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <Instagram/>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}
