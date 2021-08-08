import React from 'react'
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  Linkedin,
  GitHup,
  Telegram
} from "@material-ui/icons"

import MyButton from '../button/MyButton';
import { withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"




import {Nav, Navbar} from "react-bootstrap"

const Header = (props) => {
    const pathName=props?.location?.pathName

    return (
      <Navbar expand="lg" sticky="top" className="header">

{/*Home Link */}
        <Nav.Link href="/" className="header_navlink" >
          <Navbar.Brand className="hearder_home">
            <HomeRounded/>
          </Navbar.Brand>
        </Nav.Link>
        
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            {/*ResumeLink */}
            <Nav.Link href="/" className={pathName=="/" ? "header_link_active":"header_link"}>
             RESUME
            </Nav.Link>

            {/*Portfolio Link */}
            <Nav.Link href="/portfolio" className={pathName=="/portfolio" ? "header_link_active":"header_link"}>
             PORTFOLIO
            </Nav.Link>
          </Nav>

          <div className="header_right">
            {Object.keys(resumeData.socials).map(key => (
              <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].Icon }</a>
            ))}
            
            <MyButton text={"Hire Me"} icon={<Telegram/> }/>
          </div>

        
        </Navbar.Collapse>

      </Navbar>
        
      
    )
}

export default withRouter(Header);
