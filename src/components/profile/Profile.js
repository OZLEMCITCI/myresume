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



const CustomTimeLineItem=({ title, text, link }) => (
   
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      
      {link
      ? (<Typography className="timelineItem_text"><span>{title}:</span>{" "}<a href={link} target="_blank" >{text}</a></Typography>)
      :(<Typography className="timelineItem_text"><span>{title}:</span>{text}</Typography>)}
    </TimelineContent>
  </TimelineItem>

);

const Profile = () => {


    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">
                  {resumeData.name}  
                </Typography>
                <Typography className="title">
                  {resumeData.title} 
                </Typography>
            </div>

            <figure className="profile_image">
             <img  src={profileImg} alt="resim"></img>
            </figure>

          <div className="profile_information">
          <MyTimeLine icon={<PersonOutlineOutlinedIcon />} >
          <CustomTimeLineItem title="Name" text={resumeData.name} />
          <CustomTimeLineItem title="Title" text={resumeData.title} />
            <CustomTimeLineItem title="BirthDay" text={resumeData.birthday} />
            
            {Object.keys(resumeData.socials).map(key => (
              <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
            ))}
          </MyTimeLine>
          <br/>
          <div className="button_container">
            <CustomButton text="Download CV" icon={<GetAppIcon />} />

          </div>
          
            </div>
        </div>
    )
}

export default Profile
