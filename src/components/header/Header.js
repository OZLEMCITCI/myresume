import React from 'react'
import {
  HomeRounded,
  Telegram
} from "@material-ui/icons"

import MyButton from '../button/MyButton';
import { withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"




import {Nav, Navbar} from "react-bootstrap"

const Header = (props) => {

  function showContactUs() {
    const element = document.getElementById("contactUs");

    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      alert("Please Go to Resume Page and Click Me Again")
      
    }
  }


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
            
            <Nav.Link href="/" className={pathName==="/" ? "header_link_active":"header_link"}>
             RESUME
            </Nav.Link>
           
            {/*Portfolio Link */}
            <Nav.Link href="/portfolio" className={pathName==="/portfolio" ? "header_link_active":"header_link"}>
             PORTFOLIO
            </Nav.Link>
          </Nav>

          <div className="header_right">
            {Object.keys(resumeData.socials).map(key => (
              <a key={resumeData.socials[key].id} href={resumeData.socials[key].link} target="_blank" rel="noreferrer">{resumeData.socials[key].Icon }</a>
            ))}
            
            <MyButton text={"Contact me"} icon={<Telegram />} onClickMe={showContactUs} />
          </div>

        
        </Navbar.Collapse>

      </Navbar>
        
      
    )
}

export default withRouter(Header);
