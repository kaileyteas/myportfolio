import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function home(){
    return <div className="page">
        <div className="homeSection">
            <h1>Hi there, I'm Kailey.</h1>
            <h2>I'm a UX Designer based in Seattle, WA.</h2>
        </div>

        <div className="aboutSection">
            <h1>About</h1>
            <div className="aboutSectionDetails">
                <img src="https://image.flaticon.com/icons/svg/1067/1067993.svg" alt="Graduate Icon" width="200px" height="200px"/>
                <div className="aboutSectionDescription">
                    <p>I'm a Junior in Human-Centered Design & Engineering with a focus in Human-Computer Interaction at the University of Washington, Seattle.</p>
                </div>
                <div className="aboutSectionSocials">
                    <a href="https://linkedin.com/in/kaileytea"><img src="https://image.flaticon.com/icons/svg/145/145807.svg" alt="LinkedIn" width="50px" height="50px"/> </a>
                    <a href="https://www.instagram.com/braveiy/"><img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt="Instagram" width="50px" height="50px"/> </a>
                    <a href="mailto:kailet@uw.edu?Subject=Hello%20again"></a><img src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="Gmail" width="50px" height="50px"/> 
                </div>
            </div>
        </div>

        <div className="projectsSection">
            <h1>Projects</h1>
        </div>
    </div>
}

export default home