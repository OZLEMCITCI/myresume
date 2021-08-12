import React from 'react'
import "./Footer.css"
import { Typography } from "@material-ui/core"
import resumeData from "../../utils/resumeData"

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer_left">
          <Typography className="foofter_name">{resumeData.name}</Typography>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyright">
            Designed  and Developed by <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Ozlem Citci </a><br />
            Clone Idea from <a href="https://themeforest.net/user/tavonline" target="_blank" rel="noreferrer" >Travonline</a>
          </Typography>
        </div> 
        </div>
    )
}

export default Footer
