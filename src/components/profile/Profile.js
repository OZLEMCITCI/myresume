import { Typography } from '@material-ui/core'
import React from 'react'
import "./Profile.css"
import profileImg from "../../assets/images/displayImg.JPG"
import MyTimeLine, {CustomTimeLineSeparator } from "../timeline/TimeLine"
import resumeData from "../../utils/resumeData"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'

import CustomButton from "../button/MyButton"
import GetAppIcon from "@material-ui/icons/GetApp"

import myresume from "../../utils/Test.pdf"



const CustomTimeLineItem = ({ title, text, link }) => (

   
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      
      {link
      ? (<Typography className="timelineItem_text"><span>{title}:</span>{" "}<a href={link} target="_blank"  rel="noreferrer">{text}</a></Typography>)
      :(<Typography className="timelineItem_text"><span>{title}:</span>{text}</Typography>)}
    </TimelineContent>
  </TimelineItem>

);

const Profile = () => {
    

    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">
                  {resumeData.Name}  
                </Typography>
                <Typography className="title">
                  {resumeData.Title} 
                </Typography>
            </div>

            <figure className="profile_image">
             <img  src={profileImg} alt="resim"></img>
            </figure>

          <div className="profile_information">
          <MyTimeLine icon={<PersonOutlineOutlinedIcon />} >
          <CustomTimeLineItem title="Name" text={resumeData.Name} />
          <CustomTimeLineItem title="Title" text={resumeData.Title} />
            <CustomTimeLineItem title="Email" text={resumeData.Email} />
            
            {Object.keys(resumeData.socials).map(key => (
              <CustomTimeLineItem key={resumeData.socials[key].id} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
            ))}
          </MyTimeLine>
          <br/>
          <div className="button_container">
            <CustomButton text="Download CV" icon={<GetAppIcon />} href={myresume}/>

          </div>
          
            </div>
        </div>
    )
}

export default Profile
